import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {
  // Generate 2 random numbers between 1 and 10
  firstNumber: number = Math.floor(Math.random() * 10) + 1;
  secondNumber: number = Math.floor(Math.random() * 10) + 1;

  // Generate a random operator among +, -, and *
  operators: string[] = ['+', '-', '*'];
  operator: string = this.operators[Math.floor(Math.random() * this.operators.length)];

  // Calculate the expected result
  expectedResult: string = eval(this.firstNumber + this.operator + this.secondNumber).toFixed(0);

  // Generate the text format of the arithmetic expression
  textExpression: string = this.generateTextExpression();

  // Initialize the answer from the user
  userAnswer: string = '';

  // Mark that the user has not answered yet initially
  answered: boolean = false;

  // Mark that the user has answered incorrectly initially
  result: boolean = false;

  // Initialize the result text (which is shown after the user answers)
  resultText: string = 'Wrong! Please try again!';

  // Create a custom level event and bind it to the captcha component
  @Output()
  levelEvent: EventEmitter<string> = new EventEmitter<string>();

  // Generate the text format of the arithmetic expression
  generateTextExpression() {
    let text = '';
    switch (this.firstNumber) {
      case 1:
        text += 'one';
        break;
      case 2:
        text += 'two';
        break;
      case 3:
        text += 'three';
        break;
      case 4:
        text += 'four';
        break;
      case 5:
        text += 'five';
        break;
      case 6:
        text += 'six';
        break;
      case 7:
        text += 'seven';
        break;
      case 8:
        text += 'eight';
        break;
      case 9:
        text += 'nine';
        break;
      case 10:
        text += 'ten';
        break;
    }
    switch (this.operator) {
      case '+':
        text += ' plus ';
        break;
      case '-':
        text += ' minus ';
        break;
      case '*':
        text += ' multiplied by ';
        break;
    }
    switch (this.secondNumber) {
      case 1:
        text += 'one';
        break;
      case 2:
        text += 'two';
        break;
      case 3:
        text += 'three';
        break;
      case 4:
        text += 'four';
        break;
      case 5:
        text += 'five';
        break;
      case 6:
        text += 'six';
        break;
      case 7:
        text += 'seven';
        break;
      case 8:
        text += 'eight';
        break;
      case 9:
        text += 'nine';
        break;
      case 10:
        text += 'ten';
        break;
    }
    return text;
  }

  // Regenerate the arithmetic expression
  regenerateExpression() {
    // Regenerate 2 random numbers between 1 and 10
    this.firstNumber = Math.floor(Math.random() * 10) + 1;
    this.secondNumber = Math.floor(Math.random() * 10) + 1;

    // Regenerate a random operator among +, -, and *
    this.operator = this.operators[Math.floor(Math.random() * this.operators.length)];

    // Recalculate the expected result
    this.expectedResult = eval(this.firstNumber + this.operator + this.secondNumber).toFixed(0);

    // Regenerate the text format of the arithmetic expression
    this.textExpression = this.generateTextExpression();
  }

  // Check the answer from the user
  checkAnswer() {
    // Mark that the user has answered
    this.answered = true;

    // Check if the user's answer is correct
    if (this.expectedResult === this.userAnswer) {
      // Mark that the user has answered correctly
      this.result = true;
      this.resultText = 'Correct! Let\'s move on!';
    }
  }

  emitLevel(event: any) {
    // If the user clicks the Restart button, regenerate the arithmetic expression
    if (event.target.value === '1') {
      this.regenerateExpression();
      this.userAnswer = '';
      this.answered = false;
      this.result = false;
      this.resultText = 'Wrong! Please try again!';
    }
    // Emit the level to the captcha component
    this.levelEvent.emit(event.target.value);
  }
}
