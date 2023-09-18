import { Component, Output, EventEmitter, Input } from '@angular/core';

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

  // Mark that the user has not answered yet initially
  answered: boolean = false;

  // Mark that the user has answered incorrectly initially
  result: boolean = false;

  // Initialize the result text (which is shown after the user answers)
  resultText: string = '';

  // Create a custom level event and bind it to the captcha component
  @Output()
  levelEvent: EventEmitter<string> = new EventEmitter<string>();

  // Check the answer from the user
  checkAnswer() {
    // Mark that the user has answered
    this.answered = true;

    // Check if the user's answer is correct
    if (this.expectedResult === this.userAnswer) {
      // Mark that the user has answered correctly
      this.result = true;
      this.resultText = 'Correct! You can click Continue button to move to the next challenge.';
    } else {
      this.resultText = 'Wrong! Please try again by clicking Restart button.';
    }
  }

  emitLevel(event: any) {
    // Emit the level to the captcha component
    this.levelEvent.emit(event.target.value);
  }
}
