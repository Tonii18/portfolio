'use server';

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'ajsanrosal@gmail.com',
            subject: subject,
            text: message,
            replyTo: email
        });

        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        console.error("Failed to send email:", error);
        return { success: false, message: 'Email sent failed' }
    }
}