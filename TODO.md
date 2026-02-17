changes.# MongoDB Connection Fix - TODO List

## Task: Fix MongoDB Connection Error (ECONNREFUSED)

### Issue:
- Error: `querySrv ECONNREFUSED _mongodb._tcp.cluster0.rmxqn75.mongodb.net`
- This indicates the MongoDB Atlas cluster cannot be reached

### TODO Items:

- [x] 1. Update backend/db/connectToMongodb.js with better error handling and retry logic
- [ ] 2. Update backend/server.js to handle connection failures gracefully
- [ ] 3. Provide manual checklist for user to verify in MongoDB Atlas

### Manual Actions Required (User must do in MongoDB Atlas):
- [ ] Check if cluster is paused and resume if needed
- [ ] Add current IP to whitelist
- [ ] Verify cluster name is correct
