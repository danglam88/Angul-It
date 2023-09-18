import { Component, Output, EventEmitter } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  // Declare a list of all the allowed characters
  characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // Generate a text that contains 8 random characters from the list of allowed characters
  expectedResult: string = this.generateRandomText(8);

  // Initialize the answer from the user
  userAnswer: string = '';

  // Mark that the user has not answered yet initially
  answered: boolean = false;

  // Mark that the user has answered incorrectly initially
  result: boolean = false;

  // Initialize the result text (which is shown after the user answers)
  resultText: string = 'Wrong! Please try again by clicking Restart button.';

  // Create a custom level event and bind it to the captcha component
  @Output()
  levelEvent: EventEmitter<string> = new EventEmitter<string>();

  // Regenerate a text that contains 8 random characters from the list of allowed characters
  regenerateCharacters() {
    this.expectedResult = this.generateRandomText(8);
  }

  // Generate a text that contains 'length' random characters from the list of allowed characters
  generateRandomText(length: number) {
    let text = '';
    for (let i = 0; i < length; i++) {
      text += this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    }
    return text;
  }

  // Check the answer from the user
  checkAnswer() {
    // Mark that the user has answered
    this.answered = true;

    // Check if the user's answer is correct
    if (this.expectedResult === this.userAnswer) {
      // Mark that the user has answered correctly
      this.result = true;
      this.resultText = 'Correct! You can click Continue button to move to the next challenge.';
    }
  }

  emitLevel(event: any) {
    // If the user clicks the Restart button, regenerate the arithmetic expression
    if (event.target.value === '2') {
      this.regenerateCharacters();
      this.userAnswer = '';
      this.answered = false;
      this.result = false;
      this.resultText = 'Wrong! Please try again by clicking Restart button.';
    }
    // Emit the level to the captcha component
    this.levelEvent.emit(event.target.value);
  }
}
