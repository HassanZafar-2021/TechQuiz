import db from "../config/connection.js"; // Now correctly imports default export

import { Question } from "../models/index.js"; // Ensure .js extension
import cleanDB from "./cleanDb.js"; // Now correctly imports default export

import fs from "fs";

// Read JSON correctly for ES Modules
const questionData = JSON.parse(
  fs.readFileSync(new URL("./pythonQuestions.json", import.meta.url), "utf-8")
);

try {
  await db();
  await cleanDB();

  // Insert data
  await Question.insertMany(questionData);

  console.log("Seeding completed successfully!");
  process.exit(0);
} catch (error) {
  console.error("Error seeding database:", error);
  process.exit(1);
}
