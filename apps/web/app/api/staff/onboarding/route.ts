import { NextResponse } from "next/server";
import { Resend } from "resend";
import { clean, cleanEmail, escapeHtml, isValidEmail } from "@/lib/form";
import { prisma } from "@/lib/prisma";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const firstName = clean(body.firstName);
    const lastName = clean(body.lastName);
    const preferredName = clean(body.preferredName);
    const email = cleanEmail(body.email);
    const phone = clean(body.phone);
    const venue = clean(body.venue);
    const role = clean(body.role);
    const employmentType = clean(body.employmentType);
    const startDate = clean(body.startDate);
    const dateOfBirth = clean(body.dateOfBirth);
    const address = clean(body.address);
    const emergencyName = clean(body.emergencyName);
    const emergencyPhone = clean(body.emergencyPhone);
    const emergencyRelation = clean(body.emergencyRelation);
    const rsaExpiry = clean(body.rsaExpiry);
    const notes = clean(body.notes);

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !venue ||
      !role ||
      !employmentType ||
      !address ||
      !emergencyName ||
      !emergencyPhone
    ) {
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

    const staff = await prisma.staffOnboarding.create({
      data: {
        firstName,
        lastName,
        preferredName,
        email,
        phone,
        venue,
        role,
        employmentType,
        startDate,
        dateOfBirth,
        address,
        emergencyName,
        emergencyPhone,
        emergencyRelation,
        rsaExpiry,
        notes,
        xeroSyncStatus: "pending_connection",
        xeroSyncMessage: "Waiting for Xero Payroll OAuth connection.",
      },
    });

    if (resend) {
      await resend.emails.send({
        from: process.env.ENQUIRY_EMAIL_FROM || "Alma <onboarding@resend.dev>",
        to: [process.env.STAFF_EMAIL_TO || process.env.ENQUIRY_EMAIL_TO || "enquiries@almagroup.com.au"],
        subject: `New staff onboarding - ${firstName} ${lastName}`,
        replyTo: email,
        html: `
          <h2>New Staff Onboarding</h2>
          <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
          <p><strong>Preferred name:</strong> ${escapeHtml(preferredName || "Not provided")}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Venue:</strong> ${escapeHtml(venue)}</p>
          <p><strong>Role:</strong> ${escapeHtml(role)}</p>
          <p><strong>Employment type:</strong> ${escapeHtml(employmentType)}</p>
          <p><strong>Start date:</strong> ${escapeHtml(startDate || "Not provided")}</p>
          <p><strong>Date of birth:</strong> ${escapeHtml(dateOfBirth || "Not provided")}</p>
          <p><strong>Address:</strong><br />${escapeHtml(address).replace(/\n/g, "<br />")}</p>
          <p><strong>Emergency contact:</strong> ${escapeHtml(emergencyName)} · ${escapeHtml(emergencyPhone)} · ${escapeHtml(emergencyRelation || "Relationship not provided")}</p>
          <p><strong>RSA expiry:</strong> ${escapeHtml(rsaExpiry || "Not provided")}</p>
          <p><strong>Notes:</strong><br />${escapeHtml(notes || "None").replace(/\n/g, "<br />")}</p>
          <p><strong>Xero status:</strong> Pending Xero Payroll connection</p>
          <p><strong>Staff ID:</strong> ${escapeHtml(staff.id)}</p>
        `,
      });
    }

    return NextResponse.json({ success: true, staffId: staff.id });
  } catch (error) {
    console.error("Staff onboarding error:", error);

    return NextResponse.json(
      { success: false, error: "Unable to submit onboarding" },
      { status: 500 },
    );
  }
}
