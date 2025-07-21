import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email, message } = await req.json();


    // Configure your SMTP server
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },  
    });

    try {
        await transporter.sendMail({
            from: `"Website Inquiry" <${process.env.SMTP_EMAIL}>`,
            to: process.env.RECIPIENT_EMAIL,
            subject: `New Inquiry from ${name}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #b0984b; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Inquiry from Filheim Website</h1>
        </div>
        
        <div style="padding: 24px; background-color: #fff; border: 1px solid #e1e1e1; border-top: none; border-radius: 0 0 8px 8px;">
            <div style="margin-bottom: 20px;">
                <div style="display: flex; margin-bottom: 12px;">
                    <div style="width: 80px; font-weight: bold; color: #b0984b;">Name:</div>
                    <div>${name}</div>
                </div>
                <div style="display: flex; margin-bottom: 12px;">
                    <div style="width: 80px; font-weight: bold; color: #b0984b;">Email:</div>
                    <div><a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a></div>
                </div>
            </div>
            
            <div style="margin-bottom: 8px; font-weight: bold; color: #b0984b;">Message:</div>
            <div style="background-color: #f8f8f8; padding: 16px; border-radius: 6px; border-left: 4px solid #b0984b; line-height: 1.5;">
                ${message.replace(/\n/g, '<br/>')}
            </div>
            
            <div style="margin-top: 24px; text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #b0984b; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">Reply to ${name.split(' ')[0]}</a>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 16px; color: #888; font-size: 12px;">
            <p>This message was sent from the Filheim website contact form.</p>
            <p style="margin-top: 8px;">© ${new Date().getFullYear()} Filheim. All rights reserved.</p>
        </div>
    </div>
    `,
        });
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}