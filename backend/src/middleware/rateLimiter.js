import ratelimit from "../config/upstash.js";


const rateLimiter = async (req, res, next) => {
   try {
       const {success} = await ratelimit.limit("my-limit-key");// You can customize the key based on user ID or IP address if needed

        if (!success) {
            return res.status(429).json({message: "Too many requests, please try again later."});
        }

        next();
   } catch (error) {
        console.error("Rate limiter error:", error);
        next(error);
   }
}

export default rateLimiter;