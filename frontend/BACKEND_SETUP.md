# Digigitz Website - Backend Setup Guide

## 🎯 Overview

Your Digigitz website now has a fully functional backend API! This guide will help you set it up and start using it.

## 📁 Project Structure

```
website/
├── backend/                 # Backend API
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions (email service)
│   ├── server.js           # Main server file
│   ├── .env                # Environment variables (configure this!)
│   └── package.json        # Backend dependencies
├── src/                    # Frontend React app
│   ├── services/
│   │   └── api.js          # API service for backend communication
│   └── components/
│       └── ContactForm.jsx # Updated with backend integration
└── .env                    # Frontend environment variables
```

## 🚀 Quick Start

### Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 2: Configure Environment Variables

Edit `backend/.env` and add your email credentials:

```env
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:5173

# MongoDB (optional - works without it)
MONGODB_URI=mongodb://localhost:27017/digigitz

# Email Configuration (REQUIRED for email notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@digigitz.com
ADMIN_EMAIL=admin@digigitz.com
```

### Step 3: Set Up Gmail for Emails (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password
   - Use this password in `EMAIL_PASS` (not your regular Gmail password)

### Step 4: Start the Backend Server

```bash
# From the backend directory
npm run dev
```

You should see:
```
🚀 Server running on port 5000
📍 API URL: http://localhost:5000
🌐 Environment: development
```

### Step 5: Start the Frontend

```bash
# From the root directory
npm run dev
```

## ✅ Testing the Setup

### Test 1: Health Check

Open your browser and visit:
```
http://localhost:5000/api/health
```

You should see:
```json
{
  "status": "OK",
  "message": "Digigitz API is running",
  "timestamp": "2026-02-15T..."
}
```

### Test 2: Submit Contact Form

1. Go to your website: `http://localhost:5173`
2. Navigate to the Contact page
3. Fill out the form and submit
4. You should see a success message
5. Check your admin email for the notification

## 📧 Email Configuration Options

### Option 1: Gmail (Recommended for Testing)
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
```

### Option 2: Outlook/Hotmail
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

### Option 3: Custom SMTP
```env
EMAIL_HOST=smtp.yourprovider.com
EMAIL_PORT=587
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-password
```

## 🗄️ MongoDB Setup (Optional)

The backend works without MongoDB, but you can add it for data persistence:

### Option 1: Local MongoDB
```bash
# Install MongoDB locally
# Then update .env:
MONGODB_URI=mongodb://localhost:27017/digigitz
```

### Option 2: MongoDB Atlas (Cloud - Free)
1. Go to: https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster
4. Get your connection string
5. Update `.env`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/digigitz
```

## 🌐 API Endpoints

### Contact Form Submission
```http
POST http://localhost:5000/api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "companyName": "Acme Inc",
  "designation": "CEO",
  "phone": "+1234567890",
  "services": ["Branding", "Web Development"],
  "budget": "$5000 - $10000",
  "hearAboutUs": "Google",
  "message": "I'm interested in your services..."
}
```

### Get All Contacts (Admin)
```http
GET http://localhost:5000/api/contact
```

### Get Single Contact
```http
GET http://localhost:5000/api/contact/:id
```

### Update Contact Status
```http
PATCH http://localhost:5000/api/contact/:id/status
Content-Type: application/json

{
  "status": "contacted"
}
```

## 🚀 Deployment

### Deploy Backend to Heroku

```bash
cd backend

# Login to Heroku
heroku login

# Create app
heroku create digigitz-api

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set EMAIL_USER=your-email
heroku config:set EMAIL_PASS=your-password
heroku config:set ADMIN_EMAIL=admin@digigitz.com
heroku config:set FRONTEND_URL=https://yourdomain.com

# Deploy
git init
git add .
git commit -m "Initial commit"
git push heroku main
```

### Deploy Backend to Railway

1. Go to https://railway.app
2. Connect your GitHub repository
3. Select the `backend` folder
4. Add environment variables in Railway dashboard
5. Deploy automatically

### Deploy Frontend to Vercel

```bash
# From root directory
npm install -g vercel
vercel

# Set environment variable in Vercel dashboard:
VITE_API_URL=https://your-backend-url.com/api
```

## 🔧 Troubleshooting

### Email Not Sending

**Problem**: Emails not being sent

**Solutions**:
1. Check if `EMAIL_USER` and `EMAIL_PASS` are set correctly
2. For Gmail, make sure you're using an App Password, not your regular password
3. Check if 2FA is enabled on your Gmail account
4. Check backend console for error messages

### CORS Errors

**Problem**: Frontend can't connect to backend

**Solutions**:
1. Make sure `FRONTEND_URL` in backend `.env` matches your frontend URL
2. Check if backend is running on port 5000
3. Verify `VITE_API_URL` in frontend `.env` is correct

### MongoDB Connection Failed

**Problem**: Can't connect to MongoDB

**Solutions**:
1. MongoDB is optional - the API works without it
2. If using local MongoDB, make sure it's running: `mongod`
3. If using MongoDB Atlas, check your connection string
4. Whitelist your IP address in MongoDB Atlas

### Form Submission Fails

**Problem**: Form shows error message

**Solutions**:
1. Check browser console for errors
2. Make sure backend is running
3. Verify API URL in frontend `.env`
4. Check network tab in browser dev tools

## 📝 Environment Variables Checklist

### Backend (.env)
- [ ] `PORT` - Server port (default: 5000)
- [ ] `FRONTEND_URL` - Your frontend URL
- [ ] `EMAIL_USER` - Your email address
- [ ] `EMAIL_PASS` - Your email app password
- [ ] `ADMIN_EMAIL` - Where to send notifications
- [ ] `MONGODB_URI` - (Optional) MongoDB connection string

### Frontend (.env)
- [ ] `VITE_API_URL` - Backend API URL

## 🎉 Success Checklist

- [ ] Backend server starts without errors
- [ ] Health check endpoint works
- [ ] Frontend connects to backend
- [ ] Contact form submits successfully
- [ ] Success message appears after submission
- [ ] Admin receives email notification
- [ ] Customer receives auto-reply email
- [ ] (Optional) Data saved to MongoDB

## 📚 Additional Resources

- **Backend README**: `backend/README.md`
- **API Documentation**: See backend README for detailed API docs
- **Email Setup**: https://support.google.com/accounts/answer/185833
- **MongoDB Atlas**: https://www.mongodb.com/docs/atlas/
- **Heroku Deployment**: https://devcenter.heroku.com/articles/deploying-nodejs

## 🆘 Need Help?

If you encounter any issues:

1. Check the console logs (both frontend and backend)
2. Verify all environment variables are set correctly
3. Make sure all dependencies are installed
4. Check the troubleshooting section above

## 🎊 You're All Set!

Your Digigitz website now has a fully functional backend! Users can submit contact forms, you'll receive email notifications, and all data is stored securely.

**Next Steps:**
1. Test the contact form thoroughly
2. Customize email templates in `backend/utils/emailService.js`
3. Add authentication for admin routes (future enhancement)
4. Deploy to production when ready

---

**Made with ❤️ for Digigitz**
