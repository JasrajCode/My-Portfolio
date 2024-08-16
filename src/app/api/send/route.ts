import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

type ContactForm = {
    email: string;
    subject: string;
    message: string;
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { email, subject, message }: ContactForm = await req.json();
    // console.log(email, subject, message);

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: fromEmail,
      subject: subject,
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #555;">${subject}</h1>
        <p style="font-size: 16px; margin-bottom: 20px;">${message}</p>
        <hr style="border: 0; height: 1px; background: #ddd; margin: 20px 0;">
        <p style="font-size: 14px; color: #777;">Message submitted by: <strong>${email}</strong></p>
      </div>
      `,    
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
