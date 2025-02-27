import mongoose from "mongoose";

const { Schema, model } = mongoose;

const AnswerSchema = new Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

const QuestionSchema = new Schema({
  question: { type: String, required: true },
  answers: [AnswerSchema],
});

const Question = model("Question", QuestionSchema);

export { Question };
