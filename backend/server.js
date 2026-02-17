import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db/connectToMongodb.js";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

// Import routes
import contactRoutes from "./routes/contact.js";

// Load environment variables
dotenv.config();

const port = process.env.PORT || 5000;

// Initialize Express app
const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/contact", contactRoutes);

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Digigitz API is running",
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

import { verifyEmailConfig } from "./utils/emailService.js";

// ... (existing imports)

const startServer = async () => {
  try {
    console.log(
      `Your app is listening on port http://localhost:${process.env.PORT}`
    );

    // Attempt to connect to MongoDB
    const dbConnected = await connectDB();

    // Verify Email Configuration
    await verifyEmailConfig();

    if (!dbConnected) {
      console.warn("⚠️  WARNING: Server started without database connection!");
      console.warn("   API endpoints requiring database may not work properly.");
    }

    // Start the HTTP server
    app.listen(port, () => {
      console.log(`✅ HTTP Server running on http://localhost:${port}`);
      if (!dbConnected) {
        console.warn("⚠️  Server is running in degraded mode (no database)");
      }
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
