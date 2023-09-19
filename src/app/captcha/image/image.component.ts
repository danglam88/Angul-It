import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  // Initialize the expected result
  expectedResult: number[] = [];

  // Initialize the answer from the user
  userAnswer: number[] = [];

  // Mark that the user has not answered yet initially
  answered: boolean = false;

  // Mark that the user has answered incorrectly initially
  result: boolean = false;

  // Initialize the result text (which is shown after the user answers)
  resultText: string = 'Wrong! Please try again!';

  // Create a custom level event and bind it to the captcha component
  @Output()
  levelEvent: EventEmitter<string> = new EventEmitter<string>();

  // Generate a random cat image and return the correct answer
  generateRandomCatImage() {
    const correctAnswer: number[] = [];

    // Get a random cat image among 8 images
    const randomCatNumber = Math.floor(Math.random() * 8) + 1;

    // Load the image
    const image = new Image();
    image.src = `assets/images/cat${randomCatNumber}.jpg`;

    image.onload = () => {
      // Get the image container
      const imageContainer = document.getElementById('image-container');

      // Create a table to arrange the grids in a 6x6 matrix
      const table = document.createElement('table');
      table.className = 'image-table';

      // Center the table horizontally
      table.style.margin = 'auto';

      const tableSize = { cols: 6, rows: 6 };

      // Calculate the square size in a grid
      const squareSize = {
        width: image.width / tableSize.cols,
        height: image.height / tableSize.rows
      };

      // Create rows and columns to arrange the grids
      for (let row = 0; row < tableSize.rows; row++) {

        const tr = document.createElement('tr');
        tr.className = 'grid-row';
        tr.style.padding = '0';

        for (let col = 0; col < tableSize.cols; col++) {

          const td = document.createElement('td');
          td.className = 'grid';
          td.style.width = `${squareSize.width}px`;
          td.style.height = `${squareSize.height}px`;
          td.style.padding = '0';
          td.style.display = 'inline-block';
          td.style.margin = '2px';

          const canvas = document.createElement('canvas');
          canvas.width = squareSize.width;
          canvas.height = squareSize.height;

          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(
              image,
              col * squareSize.width,
              row * squareSize.height,
              squareSize.width,
              squareSize.height,
              0,
              0,
              squareSize.width,
              squareSize.height
            );
          }

          td.appendChild(canvas);
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }

      // Append the table to the image container
      if (imageContainer) {
        imageContainer.innerHTML = '';
        imageContainer.appendChild(table);
      }
    };
    
    return correctAnswer;
  }

  // Format the text when the component is initialized
  ngOnInit() {
    this.regenerateCatImages();
  }

  // Regenerate the cat images
  regenerateCatImages() {
    this.expectedResult = this.generateRandomCatImage();
  }

  // Check the answer from the user
  checkAnswer() {
    // Mark that the user has answered
    this.answered = true;

    // Check if the user's answer is correct
    if (this.expectedResult === this.userAnswer) {
      // Mark that the user has answered correctly
      this.result = true;
      this.resultText = 'Correct! Let\'s now verify!';
    }
  }

  emitLevel(event: any) {
    // If the user clicks Try Again button, regenerate the cat images
    if (event.target.value === '3') {
      this.regenerateCatImages();
      this.userAnswer = [];
      this.answered = false;
      this.result = false;
      this.resultText = 'Wrong! Please try again!';
    }
    // Emit the level to the captcha component
    this.levelEvent.emit(event.target.value);
  }
}
