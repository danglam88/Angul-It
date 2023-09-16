import { Component } from '@angular/core';

@Component({
  selector: 'math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {
  // Generate 2 random numbers between 1 and 100
  firstNumber: number = Math.floor(Math.random() * 100) + 1;
  secondNumber: number = Math.floor(Math.random() * 100) + 1;

  // Generate a random operator among +, -, *, /
  operators: string[] = ['+', '-', '*', '/'];
  operator: string = this.operators[Math.floor(Math.random() * this.operators.length)];

  // Calculate the expected result
  expectedResult: string = eval(this.firstNumber + this.operator + this.secondNumber).toFixed(0);

  // Initialize the answer from the user
  userAnswer: string = '';

  // Initialize the status of the answer
  answered: boolean = false;

  // Initialize the status of the result
  result: boolean = false;

  // Initialize the result text
  resultText: string = '';

  checkAnswer() {
    this.answered = true;
    if (this.expectedResult === this.userAnswer) {
      this.result = true;
      this.resultText = 'Correct! You can click Continue button to move to the next challenge.';
    } else {
      this.resultText = 'Wrong! Please try again by clicking Restart button.';
    }
  }
}
