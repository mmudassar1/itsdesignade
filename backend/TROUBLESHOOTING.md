# MongoDB Connection Troubleshooting

You are encountering a `ETIMEOUT` error when connecting to your MongoDB Atlas cluster. This means your application cannot reach the database server.

**Error:** `Error connecting to MongoDB: querySrv ETIMEOUT _mongodb._tcp.cluster0.p4v3zdv.mongodb.net`

## Steps to Fix

1.  **Check IP Whitelist**
    *   Go to [MongoDB Atlas](https://cloud.mongodb.com).
    *   Navigate to **Network Access** in the left sidebar.
    *   Click **Add IP Address**.
    *   Select **Add Current IP Address** (or `Allow Access from Anywhere` for testing, though less secure).
    *   Click **Confirm**.
    *   Wait a minute for changes to deploy.

2.  **Check Cluster Status**
    *   Go to **Database** in the left sidebar.
    *   If your cluster is **Paused** (common on Free Tier after inactivity), click **Resume**.

3.  **Check Firewall / DNS**
    *   Ensure your local network or firewall isn't blocking DNS queries or outbound connections to port 27017.
    *   Try changing your DNS to Google (8.8.8.8) or Cloudflare (1.1.1.1) if resolution fails.

## Code Changes Made

I have updated your backend code to handle connection failures more gracefully:
*   **server.js**: Now waits for a successful database connection before starting the HTTP server. This prevents the "Cannot call insertOne before connection is complete" runtime error.
*   **db/connectToMongoDB.js**: Now throws an error if the initial connection fails, allowing the application to stop immediately rather than starting in a broken state.
