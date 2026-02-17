# Digigitz Backend API

Backend API for the Digigitz website, built with Node.js, Express, and MongoDB.

## 🚀 Features

- **Contact Form API** - Handle contact form submissions
- **Email Notifications** - Automatic email notifications to admin and customers
- **MongoDB Integration** - Store and manage contact inquiries
- **RESTful API** - Clean and organized API endpoints
- **CORS Support** - Configured for frontend integration
- **Error Handling** - Comprehensive error handling and validation

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- Gmail account (or other SMTP service for emails)

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` with your actual values:
   - `MONGODB_URI` - Your MongoDB connection string
   - `EMAIL_USER` - Your email address
   - `EMAIL_PASS` - Your email app password (for Gmail, create an app password)
   - `ADMIN_EMAIL` - Email where contact forms should be sent

3. **Start the server:**
   ```bash
   # Development mode (with auto-restart)
   npm run dev
   
   # Production mode
   npm start
   ```

## 📡 API Endpoints

### Contact Form

#### Submit Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "companyName": "Acme Inc",
  "designation": "CEO",
  "phone": "+1234567890",
  "services": ["Branding", "Web Development"],
  "budget": "$5000 - $10000",
  "hearAboutUs": "Google Search",
  "message": "I'm interested in your services..."
}
```

#### Get All Contacts (Admin)
```http
GET /api/contact?status=new&limit=50&page=1
```

#### Get Single Contact (Admin)
```http
GET /api/contact/:id
```

#### Update Contact Status (Admin)
```http
PATCH /api/contact/:id/status
Content-Type: application/json

{
  "status": "contacted"
}
```

#### Delete Contact (Admin)
```http
DELETE /api/contact/:id
```

### Health Check
```http
GET /api/health
```

## 🗄️ Database Schema

### Contact Model
```javascript
{
  name: String (required),
  email: String (required),
  companyName: String,
  designation: String,
  phone: String,
  services: [String],
  budget: String,
  hearAboutUs: String,
  message: String (required),
  status: String (enum: new, contacted, in-progress, completed, archived),
  ipAddress: String,
  userAgent: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 📧 Email Configuration

### Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an app password: https://myaccount.google.com/apppasswords
3. Use the app password in your `.env` file

### Other SMTP Services
Update the email configuration in `.env`:
```env
EMAIL_HOST=smtp.yourprovider.com
EMAIL_PORT=587
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-password
```

## 🔒 Security Notes

- Never commit `.env` file to version control
- Use strong passwords and app-specific passwords
- Add authentication middleware for admin routes (TODO)
- Implement rate limiting for production (TODO)
- Add input sanitization for production (TODO)

## 🚀 Deployment

### Deploy to Heroku
```bash
# Install Heroku CLI
heroku login
heroku create digigitz-api

# Set environment variables
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set EMAIL_USER=your-email
heroku config:set EMAIL_PASS=your-password
# ... set other variables

# Deploy
git push heroku main
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Railway
1. Connect your GitHub repository
2. Add environment variables in Railway dashboard
3. Deploy automatically on push

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NODE_ENV` | Environment (development/production) | No |
| `PORT` | Server port | No (default: 5000) |
| `FRONTEND_URL` | Frontend URL for CORS | Yes |
| `MONGODB_URI` | MongoDB connection string | Yes |
| `EMAIL_HOST` | SMTP host | Yes |
| `EMAIL_PORT` | SMTP port | Yes |
| `EMAIL_USER` | Email username | Yes |
| `EMAIL_PASS` | Email password | Yes |
| `EMAIL_FROM` | From email address | No |
| `ADMIN_EMAIL` | Admin email for notifications | Yes |

## 🧪 Testing

```bash
# Test health endpoint
curl http://localhost:5000/api/health

# Test contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'
```

## 📚 Tech Stack

- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Nodemailer** - Email sending
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 👥 Authors

- **Mudassar** - Initial work - Digigitz

## 🙏 Acknowledgments

- Built for Digigitz digital agency
- Designed for seamless integration with React frontend

---

**Made with ❤️ by Digigitz**
