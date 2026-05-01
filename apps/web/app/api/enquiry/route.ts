import { Resend } from "resend";
import { clean, cleanEmail, escapeHtml, isValidEmail } from "@/lib/form";
import { prisma } from "@/lib/prisma";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = clean(body.name);
    const email = cleanEmail(body.email);
    const phone = clean(body.phone);
    const message = clean(body.message);
    const venue = clean(body.venue, "Website");
    const enquiryType = clean(body.enquiryType, "general");

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Name, email and message are required" },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { success: false, error: "Please enter a valid email address" },
        { status: 400 },
      );
    }

    const enquiry = await prisma.enquiry.create({
      data: {
        name,
        email,
        phone,
        venue,
        enquiryType,
        message,
        source: "website",
      },
    });

    if (resend) {
      await resend.emails.send({
        from: process.env.ENQUIRY_EMAIL_FROM || "Alma Group <noreply@almagroup.com.au>",
        to: [process.env.ENQUIRY_EMAIL_TO || "enquiries@almagroup.com.au"],
        subject: `New Enquiry - ${venue}`,
        replyTo: email,
        html: `
          <h2>New Website Enquiry</h2>

          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "N/A")}</p>
          <p><strong>Venue:</strong> ${escapeHtml(venue)}</p>
          <p><strong>Type:</strong> ${escapeHtml(enquiryType)}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
          <p><strong>Lead ID:</strong> ${escapeHtml(enquiry.id)}</p>
        `,
      });
    }

    return Response.json({ success: true, enquiryId: enquiry.id });
  } catch (error) {
    console.error("Enquiry submission error:", error);

    return Response.json(
      { success: false, error: "Unable to submit enquiry" },
      { status: 500 },
    );
  }
}
