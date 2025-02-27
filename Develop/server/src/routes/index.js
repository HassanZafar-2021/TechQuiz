import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import apiRoutes from "./api/index.js"; // Ensure this is ES module

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.use("/api", apiRoutes);

// Serve React front-end in production
router.use((_req, res) => {
  res.sendFile(path.join(__dirname, "../../../client/dist/index.html"));
});

export default router; // Change `module.exports` to `export default`
