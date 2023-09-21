import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  // Initialize the completion of the level to 'false'
  @Input()
  levelDone: boolean = false;

  // Declare a list of all the allowed characters
  characters: string = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789';

  // Initialize a text that contains 6 random characters from the list of allowed characters
  expectedResult: string = this.generateRandomText(6);

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

  // Format the text using canvas
  formatText(text: string) {
    // Get the canvas and its context
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Background color
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Text properties
      ctx.font = 'bold 100px Arial';
      ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

      // Bend the text
      ctx.save();
      ctx.transform(1, 0.1, 0, 1, 0, 0);

      // Position and render the text
      const textWidth = ctx.measureText(text).width;
      ctx.fillText(text, (canvas.width - textWidth) / 2, canvas.height / 2);

      // Random lines
      for (let i = 0; i < 50; i++) {
        // Random line color
        ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

        // Random line position and size
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
      }

      // Random dots
      for (let i = 0; i < 100; i++) {
        // Random dot color
        ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

        // Random dot position and size
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Restore the canvas
      ctx.restore();
    }
  }

  ngOnInit() {
    // Check if the level has already been done before
    if (this.levelDone) {
      this.resultText = 'You\'ve already passed this level! Let\'s move on!';
    } else {
      // Format the text when the component is initialized
      this.formatText(this.expectedResult);
    }
  }

  // Regenerate a text that contains 6 random characters from the list of allowed characters
  regenerateCharacters() {
    this.expectedResult = this.generateRandomText(6);
    this.formatText(this.expectedResult);
  }

  // Generate a random text that contains 'length' random characters
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
      this.resultText = 'Correct! Let\'s move on!';
    }
  }

  emitLevel(event: any) {
    // If the user clicks Try Again button, regenerate the random text
    if (event.target.value === '2') {
      this.levelDone = false;
      this.regenerateCharacters();
      this.userAnswer = '';
      this.answered = false;
      this.result = false;
      this.resultText = 'Wrong! Please try again!';
    } else {
      // Emit the level to the captcha component
      this.levelEvent.emit(event.target.value);
    }
  }
}
