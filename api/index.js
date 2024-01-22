import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import path from "path";

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();
const isProduction = process.env.NODE_ENV === 'production';

const app = express();

// Serve static files directly from the "client" directory during development
if (!isProduction) {
  app.use(express.static(path.join(__dirname, 'client')));
}

// Serve static files from the "client/dist" directory in production
app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.get("*", (req, res) => {
  // Use path.join to create the correct file path
  // In production, this will point to 'client/dist/index.html'
  res.sendFile(path.join(__dirname, isProduction ? 'client/dist' : 'client', 'index.html'));
});

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
