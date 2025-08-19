import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import notesRouter from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT=process.env.PORT || 5001;
const __dirname = path.resolve(); // Get the current directory name

//middlewares
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173", // Adjust this to your frontend URL
    })
  );
}
app.use(express.json()); // Middleware to parse JSON bodies
app.use(rateLimiter); // Apply rate limiting middleware


app.use("/api/notes",notesRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("Server is running on port : " + PORT);
   });
});

