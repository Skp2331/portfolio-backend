import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import projectsRouter from "./routes/projects.js";
import certificationsRouter from "./routes/certifications.js";
import chatRouter from "./routes/chat.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("TC Portfolio Backend Running 🚀");
});

app.use("/api/projects", projectsRouter);
app.use("/api/certifications", certificationsRouter);
app.use("/api/chat", chatRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
