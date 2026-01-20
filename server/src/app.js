import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

/* -------------------- Global Middlewares -------------------- */

// Parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// Logger
app.use(morgan("dev"));

/* -------------------- Test Route -------------------- */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy 🚀",
  });
});

export default app;
