import { NextResponse } from "next/server";
import { Resend } from "resend";
import { clean, cleanEmail, escapeHtml, isValidEmail, numberFromForm } from "@/lib/form";
import { prisma } from "@/lib/prisma";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const employeeName = clean(body.employeeName);
    const email = cleanEmail(body.email);
    const venue = clean(body.venue);
    const weekEnding = clean(body.weekEnding);
    const notes = clean(body.notes);

    const mondayHours = numberFromForm(body.mondayHours);
    const tuesdayHours = numberFromForm(body.tuesdayHours);
    const wednesdayHours = numberFromForm(body.wednesdayHours);
    const thursdayHours = numberFromForm(body.thursdayHours);
    const fridayHours = numberFromForm(body.fridayHours);
    const saturdayHours = numberFromForm(body.saturdayHours);
    const sundayHours = numberFromForm(body.sundayHours);
    const totalHours =
      mondayHours +
      tuesdayHours +
      wednesdayHours +
      thursdayHours +
      fridayHours +
      saturdayHours +
      sundayHours;

    if (!employeeName || !email || !venue || !weekEnding) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address" },
        { status: 400 },
      );
    }

    if (totalHours <= 0) {
      return NextResponse.json(
        { success: false, error: "Please enter at least one shift" },
        { status: 400 },
      );
    }

    const timesheet = await prisma.staffTimesheet.create({
      data: {
        employeeName,
        email,
        venue,
        weekEnding,
        mondayHours,
        tuesdayHours,
        wednesdayHours,
        thursdayHours,
        fridayHours,
        saturdayHours,
        sundayHours,
        totalHours,
        notes,
        xeroSyncStatus: "not_configured",
        xeroSyncMessage: "Xero Payroll timesheet export is not connected yet.",
      },
    });

    if (resend) {
      await resend.emails.send({
        from: process.env.ENQUIRY_EMAIL_FROM || "Alma <onboarding@resend.dev>",
        to: [process.env.STAFF_EMAIL_TO || process.env.ENQUIRY_EMAIL_TO || "enquiries@almagroup.com.au"],
        subject: `New timesheet - ${employeeName} - week ending ${weekEnding}`,
        replyTo: email,
        html: `
          <h2>New Staff Timesheet</h2>
          <p><strong>Name:</strong> ${escapeHtml(employeeName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Venue:</strong> ${escapeHtml(venue)}</p>
          <p><strong>Week ending:</strong> ${escapeHtml(weekEnding)}</p>
          <p><strong>Total hours:</strong> ${totalHours.toFixed(2)}</p>
          <ul>
            <li>Monday: ${mondayHours.toFixed(2)}</li>
            <li>Tuesday: ${tuesdayHours.toFixed(2)}</li>
            <li>Wednesday: ${wednesdayHours.toFixed(2)}</li>
            <li>Thursday: ${thursdayHours.toFixed(2)}</li>
            <li>Friday: ${fridayHours.toFixed(2)}</li>
            <li>Saturday: ${saturdayHours.toFixed(2)}</li>
            <li>Sunday: ${sundayHours.toFixed(2)}</li>
          </ul>
          <p><strong>Notes:</strong><br />${escapeHtml(notes || "None").replace(/\n/g, "<br />")}</p>
          <p><strong>Xero status:</strong> Xero Payroll export not connected yet</p>
          <p><strong>Timesheet ID:</strong> ${escapeHtml(timesheet.id)}</p>
        `,
      });
    }

    return NextResponse.json({ success: true, timesheetId: timesheet.id });
  } catch (error) {
    console.error("Staff timesheet error:", error);

    return NextResponse.json(
      { success: false, error: "Unable to submit timesheet" },
      { status: 500 },
    );
  }
}
