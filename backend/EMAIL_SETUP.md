# Admin Email Notification Setup

To receive email notifications when a user submits the contact form, you need to configure the backend email settings. We use **Nodemailer** with Gmail in this project.

## 1. Prerequisites (Gmail)

Since Google no longer supports "Less Secure Apps," you **must** use an **App Password** if you use Gmail.

1.  Go to your [Google Account Settings](https://myaccount.google.com/).
2.  Select **Security** on the left.
3.  Under "Signing in to Google," turn on **2-Step Verification** (if not already on).
4.  Once 2-Step Verification is on, go back to the Security page and search for **App passwords** (or go to `https://myaccount.google.com/apppasswords`).
5.  Select "Mail" and "Windows Computer" (or custom name like "Digigitz Backend").
6.  Click **Generate**.
7.  Copy the 16-character password (e.g., `abcd efgh ijkl mnop`).

## 2. Update Backend Configuration

Open the `backend/.env` file and update the settings:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com      # Your actual Gmail address
EMAIL_PASS=abcd efgh ijkl mnop       # The App Password you generated (remove spaces if needed)
EMAIL_FROM=your-email@gmail.com      # Same as EMAIL_USER
ADMIN_EMAIL=admin-email@gmail.com    # Where you want to receive notifications
```

## 3. Restart the Backend

After saving the `.env` file, restart your backend server:

```bash
cd backend
npm run dev
# or restart the terminal running the backend
```

## 4. Verification

The server logs will confirm if the email connection is successful on startup. Look for:
`✅ Email service configured and ready`

If it fails, check the error message in the console.
