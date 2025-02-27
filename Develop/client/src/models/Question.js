// Import the Answer type from the Answer module
import { Answer } from './Answer';

// Define the Question interface
export class Question {
  constructor(_id, question, answers) {
    this._id = _id;
    this.question = question;
    this.answers = answers;
  }
}
