import mongoose from "mongoose";

const connectDB = async (retries = 5, delay = 5000) => {
  for (let i = 0; i < retries; i++) {
    try {
      console.log(`🔄 Attempting to connect to MongoDB (Attempt ${i + 1}/${retries})...`);
      
      const conn = await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
        maxPoolSize: 10,
        retryWrites: true,
        retryReads: true,
      });
      
      console.log("✅ MongoDB connected successfully");
      console.log(`   Host: ${conn.connection.host}`);
      console.log(`   Database: ${conn.connection.name}`);
      return true;
    } catch (error) {
      console.error(`❌ MongoDB Connection Error (Attempt ${i + 1}/${retries}):`, error.message);
      
      // Check for specific error types
      if (error.name === 'MongoServerSelectionError') {
        if (error.message.includes('ECONNREFUSED')) {
          console.error("   🔴 Server refused connection - check if MongoDB Atlas cluster is running");
        } else if (error.message.includes('ETIMEDOUT') || error.message.includes('timeout')) {
          console.error("   🔴 Connection timed out - check network/firewall settings");
        } else if (error.message.includes('querySrv')) {
          console.error("   🔴 DNS SRV lookup failed - check cluster name and DNS settings");
        }
      }
      
      // Check if this is the last retry
      if (i < retries - 1) {
        console.log(`   ⏳ Retrying in ${delay/1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  console.error("❌ Failed to connect to MongoDB after all retries");
  console.error("   Please check:");
  console.error("   1. MongoDB Atlas cluster is running and not paused");
  console.error("   2. Your IP address is whitelisted in MongoDB Atlas");
  console.error("   3. The cluster name in your connection string is correct");
  console.error("   4. Network/firewall is not blocking the connection");
  
  return false;
};

export default connectDB;
