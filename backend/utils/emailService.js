import nodemailer from 'nodemailer';

// Create email transporter
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
};

// Send contact form notification email
const sendContactEmail = async (contact) => {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.log('⚠️  Email credentials not configured - skipping email');
        return;
    }

    const transporter = createTransporter();

    // Email to admin
    const adminMailOptions = {
        from: `"Digigitz Contact Form" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
        subject: `New Contact Form Submission - ${contact.name}`,
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: #000; color: #fff; padding: 30px; text-align: center; }
                    .header h1 { margin: 0; font-size: 28px; text-transform: lowercase; }
                    .content { background: #f9f9f9; padding: 30px; }
                    .field { margin-bottom: 20px; }
                    .field-label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
                    .field-value { margin-top: 5px; font-size: 16px; }
                    .services { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 5px; }
                    .service-tag { background: #000; color: #fff; padding: 6px 12px; border-radius: 20px; font-size: 12px; }
                    .footer { text-align: center; padding: 20px; color: #999; font-size: 12px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>digigitz</h1>
                        <p style="margin: 10px 0 0 0;">New Contact Form Submission</p>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="field-label">Name</div>
                            <div class="field-value">${contact.name}</div>
                        </div>
                        
                        <div class="field">
                            <div class="field-label">Email</div>
                            <div class="field-value"><a href="mailto:${contact.email}">${contact.email}</a></div>
                        </div>
                        
                        ${contact.companyName ? `
                        <div class="field">
                            <div class="field-label">Company</div>
                            <div class="field-value">${contact.companyName}</div>
                        </div>
                        ` : ''}
                        
                        ${contact.designation ? `
                        <div class="field">
                            <div class="field-label">Designation</div>
                            <div class="field-value">${contact.designation}</div>
                        </div>
                        ` : ''}
                        
                        ${contact.phone ? `
                        <div class="field">
                            <div class="field-label">Phone</div>
                            <div class="field-value"><a href="tel:${contact.phone}">${contact.phone}</a></div>
                        </div>
                        ` : ''}
                        
                        ${contact.services && contact.services.length > 0 ? `
                        <div class="field">
                            <div class="field-label">Services Interested In</div>
                            <div class="services">
                                ${contact.services.map(service => `<span class="service-tag">${service}</span>`).join('')}
                            </div>
                        </div>
                        ` : ''}
                        
                        ${contact.budget ? `
                        <div class="field">
                            <div class="field-label">Budget</div>
                            <div class="field-value">${contact.budget}</div>
                        </div>
                        ` : ''}
                        
                        ${contact.hearAboutUs ? `
                        <div class="field">
                            <div class="field-label">How They Heard About Us</div>
                            <div class="field-value">${contact.hearAboutUs}</div>
                        </div>
                        ` : ''}
                        
                        <div class="field">
                            <div class="field-label">Message</div>
                            <div class="field-value">${contact.message}</div>
                        </div>
                        
                        <div class="field">
                            <div class="field-label">Submitted On</div>
                            <div class="field-value">${new Date(contact.createdAt).toLocaleString()}</div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>This email was sent from the Digigitz contact form.</p>
                        <p>&copy; ${new Date().getFullYear()} Digigitz. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
        `
    };

    // Email to customer (auto-reply)
    const customerMailOptions = {
        from: `"Digigitz" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
        to: contact.email,
        subject: 'Thank you for contacting Digigitz!',
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: #000; color: #fff; padding: 40px; text-align: center; }
                    .header h1 { margin: 0; font-size: 36px; text-transform: lowercase; }
                    .content { padding: 40px 30px; }
                    .footer { text-align: center; padding: 20px; color: #999; font-size: 12px; border-top: 1px solid #eee; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>digigitz</h1>
                    </div>
                    <div class="content">
                        <h2 style="color: #000; margin-top: 0;">Thank you for reaching out!</h2>
                        <p>Hi ${contact.name},</p>
                        <p>We've received your message and our team will get back to you within 24-48 hours.</p>
                        <p>In the meantime, feel free to explore our portfolio and learn more about our services at <a href="${process.env.FRONTEND_URL || 'https://digigitz.com'}" style="color: #ff5500;">digigitz.com</a></p>
                        <p style="margin-top: 30px;">Best regards,<br><strong>The Digigitz Team</strong></p>
                    </div>
                    <div class="footer">
                        <p>&copy; ${new Date().getFullYear()} Digigitz. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
        `
    };

    // Send both emails
    await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(customerMailOptions)
    ]);

    console.log('✅ Emails sent successfully');
};

// Verify email configuration on startup
const verifyEmailConfig = async () => {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.warn('⚠️  Email credentials missing in .env. Email notifications will NOT be sent.');
        return false;
    }

    try {
        const transporter = createTransporter();
        await transporter.verify();
        console.log('✅ Email service configured and ready');
        return true;
    } catch (error) {
        console.error('❌ Email configuration failed:', error.message);

        if (error.responseCode === 535) {
            console.error('👉 CAUSE: Incorrect Login Details. You are likely using your main Gmail password.');
            console.error('👉 SOLUTION: You MUST generate and use a Google App Password.');
            console.error('   1. Go to https://myaccount.google.com/apppasswords');
            console.error('   2. Generate a new password for "Mail" on "Windows Computer"');
            console.error('   3. Paste that 16-character password into your backend/.env file as EMAIL_PASS');
        } else {
            console.warn('   Please check backend/EMAIL_SETUP.md for instructions.');
        }
        return false;
    }
};

export { sendContactEmail, verifyEmailConfig };
