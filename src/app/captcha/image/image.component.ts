import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

// Define the cell interface as an object with two properties: row and col
interface cell {
  row: number;
  col: number;
}

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  // Initialize the completion of the level to 'false'
  @Input()
  levelDone: boolean = false;

  // Initialize the possibility to move on to 'false'
  movedOn: boolean = false;

  // Initialize the text to be shown when the user is able to move on
  movedOnText: string = '';

  // Initialize the expected result
  expectedResult: cell[] = [];

  // Initialize the answer from the user
  userAnswer: cell[] = [];

  // Mark that the user has not answered yet initially
  answered: boolean = false;

  // Mark that the user has answered incorrectly initially
  result: boolean = false;

  // Initialize the result text (which is shown after the user answers)
  resultText: string = 'Wrong! Please try again!';

  // Create a custom level event and bind it to the captcha component
  @Output()
  levelEvent: EventEmitter<string> = new EventEmitter<string>();

  // Create a custom pass event and bind it to the captcha component
  @Output()
  passEvent: EventEmitter<string> = new EventEmitter<string>();

  // Generate a random cat image and return the correct answer
  generateRandomCatImage() {
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
          td.style.margin = '5px';
          td.style.cursor = 'pointer';

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

          td.addEventListener('click', () => {
            if (!td.classList.contains('bling-bling')) {
              td.classList.add('bling-bling');
              td.style.transform = 'scale(1.2)';
              td.style.transition = 'all 0.3s ease-in-out';
              td.style.border = '2px solid red';
              this.userAnswer.push({ row, col });
            } else {
              td.classList.remove('bling-bling');
              td.style.transform = 'scale(1)';
              td.style.transition = 'all 0.3s ease-in-out';
              td.style.border = 'none';
              this.userAnswer = this.userAnswer.filter(cell => cell.row !== row || cell.col !== col);
            }
          });
        }
        table.appendChild(tr);
      }

      // Append the table to the image container
      if (imageContainer) {
        imageContainer.innerHTML = '';
        imageContainer.appendChild(table);
      }
    };
    
    return this.getCorrectAnswer(randomCatNumber);
  }

  // Get the correct answer based on the random cat image
  getCorrectAnswer(randomCatNumber: number) {
    const correctAnswer: cell[] = [];

    switch (randomCatNumber) {
      case 1:
        correctAnswer.push({ row: 0, col: 1 });
        correctAnswer.push({ row: 0, col: 2 });
        correctAnswer.push({ row: 0, col: 3 });
        correctAnswer.push({ row: 0, col: 4 });
        correctAnswer.push({ row: 1, col: 1 });
        correctAnswer.push({ row: 1, col: 2 });
        correctAnswer.push({ row: 1, col: 3 });
        correctAnswer.push({ row: 1, col: 4 });
        correctAnswer.push({ row: 1, col: 5 });
        correctAnswer.push({ row: 2, col: 0 });
        correctAnswer.push({ row: 2, col: 1 });
        correctAnswer.push({ row: 2, col: 2 });
        correctAnswer.push({ row: 2, col: 3 });
        correctAnswer.push({ row: 2, col: 4 });
        correctAnswer.push({ row: 3, col: 0 });
        correctAnswer.push({ row: 3, col: 1 });
        correctAnswer.push({ row: 3, col: 2 });
        correctAnswer.push({ row: 3, col: 3 });
        correctAnswer.push({ row: 3, col: 4 });
        correctAnswer.push({ row: 3, col: 5 });
        correctAnswer.push({ row: 4, col: 0 });
        correctAnswer.push({ row: 4, col: 1 });
        correctAnswer.push({ row: 4, col: 2 });
        correctAnswer.push({ row: 4, col: 3 });
        correctAnswer.push({ row: 4, col: 4 });
        correctAnswer.push({ row: 5, col: 0 });
        correctAnswer.push({ row: 5, col: 1 });
        correctAnswer.push({ row: 5, col: 2 });
        correctAnswer.push({ row: 5, col: 3 });
        correctAnswer.push({ row: 5, col: 4 });
        break;
      case 2:
        correctAnswer.push({ row: 0, col: 0 });
        correctAnswer.push({ row: 0, col: 1 });
        correctAnswer.push({ row: 1, col: 0 });
        correctAnswer.push({ row: 1, col: 1 });
        correctAnswer.push({ row: 1, col: 2 });
        correctAnswer.push({ row: 1, col: 3 });
        correctAnswer.push({ row: 1, col: 4 });
        correctAnswer.push({ row: 1, col: 5 });
        correctAnswer.push({ row: 2, col: 0 });
        correctAnswer.push({ row: 2, col: 1 });
        correctAnswer.push({ row: 2, col: 2 });
        correctAnswer.push({ row: 2, col: 3 });
        correctAnswer.push({ row: 2, col: 4 });
        correctAnswer.push({ row: 2, col: 5 });
        correctAnswer.push({ row: 3, col: 0 });
        correctAnswer.push({ row: 3, col: 1 });
        correctAnswer.push({ row: 3, col: 2 });
        correctAnswer.push({ row: 3, col: 3 });
        correctAnswer.push({ row: 3, col: 4 });
        correctAnswer.push({ row: 3, col: 5 });
        correctAnswer.push({ row: 4, col: 0 });
        correctAnswer.push({ row: 4, col: 1 });
        correctAnswer.push({ row: 4, col: 2 });
        correctAnswer.push({ row: 4, col: 3 });
        correctAnswer.push({ row: 4, col: 4 });
        correctAnswer.push({ row: 5, col: 2 });
        correctAnswer.push({ row: 5, col: 3 });
        correctAnswer.push({ row: 5, col: 4 });
        break;
      case 3:
        correctAnswer.push({ row: 1, col: 1 });
        correctAnswer.push({ row: 1, col: 2 });
        correctAnswer.push({ row: 1, col: 3 });
        correctAnswer.push({ row: 1, col: 4 });
        correctAnswer.push({ row: 1, col: 5 });
        correctAnswer.push({ row: 2, col: 1 });
        correctAnswer.push({ row: 2, col: 2 });
        correctAnswer.push({ row: 2, col: 3 });
        correctAnswer.push({ row: 2, col: 4 });
        correctAnswer.push({ row: 2, col: 5 });
        correctAnswer.push({ row: 3, col: 0 });
        correctAnswer.push({ row: 3, col: 1 });
        correctAnswer.push({ row: 3, col: 2 });
        correctAnswer.push({ row: 3, col: 3 });
        correctAnswer.push({ row: 3, col: 4 });
        correctAnswer.push({ row: 3, col: 5 });
        correctAnswer.push({ row: 4, col: 0 });
        correctAnswer.push({ row: 4, col: 1 });
        correctAnswer.push({ row: 4, col: 2 });
        correctAnswer.push({ row: 4, col: 3 });
        correctAnswer.push({ row: 4, col: 4 });
        break;
      case 4:
        correctAnswer.push({ row: 1, col: 1 });
        correctAnswer.push({ row: 1, col: 2 });
        correctAnswer.push({ row: 1, col: 3 });
        correctAnswer.push({ row: 1, col: 4 });
        correctAnswer.push({ row: 2, col: 1 });
        correctAnswer.push({ row: 2, col: 2 });
        correctAnswer.push({ row: 2, col: 3 });
        correctAnswer.push({ row: 2, col: 4 });
        correctAnswer.push({ row: 3, col: 1 });
        correctAnswer.push({ row: 3, col: 2 });
        correctAnswer.push({ row: 3, col: 3 });
        correctAnswer.push({ row: 3, col: 4 });
        correctAnswer.push({ row: 4, col: 1 });
        correctAnswer.push({ row: 4, col: 2 });
        correctAnswer.push({ row: 4, col: 3 });
        correctAnswer.push({ row: 4, col: 4 });
        correctAnswer.push({ row: 5, col: 1 });
        correctAnswer.push({ row: 5, col: 2 });
        correctAnswer.push({ row: 5, col: 3 });
        correctAnswer.push({ row: 5, col: 4 });
        break;
      case 5:
        correctAnswer.push({ row: 0, col: 1 });
        correctAnswer.push({ row: 0, col: 2 });
        correctAnswer.push({ row: 0, col: 3 });
        correctAnswer.push({ row: 1, col: 1 });
        correctAnswer.push({ row: 1, col: 2 });
        correctAnswer.push({ row: 1, col: 3 });
        correctAnswer.push({ row: 1, col: 4 });
        correctAnswer.push({ row: 2, col: 1 });
        correctAnswer.push({ row: 2, col: 2 });
        correctAnswer.push({ row: 2, col: 3 });
        correctAnswer.push({ row: 2, col: 4 });
        correctAnswer.push({ row: 2, col: 5 });
        correctAnswer.push({ row: 3, col: 1 });
        correctAnswer.push({ row: 3, col: 2 });
        correctAnswer.push({ row: 3, col: 3 });
        correctAnswer.push({ row: 3, col: 4 });
        correctAnswer.push({ row: 3, col: 5 });
        correctAnswer.push({ row: 4, col: 0 });
        correctAnswer.push({ row: 4, col: 1 });
        correctAnswer.push({ row: 4, col: 2 });
        correctAnswer.push({ row: 4, col: 3 });
        correctAnswer.push({ row: 4, col: 4 });
        correctAnswer.push({ row: 4, col: 5 });
        correctAnswer.push({ row: 5, col: 1 });
        correctAnswer.push({ row: 5, col: 2 });
        correctAnswer.push({ row: 5, col: 3 });
        correctAnswer.push({ row: 5, col: 4 });
        break;
      case 6:
        correctAnswer.push({ row: 1, col: 2 });
        correctAnswer.push({ row: 1, col: 3 });
        correctAnswer.push({ row: 2, col: 1 });
        correctAnswer.push({ row: 2, col: 2 });
        correctAnswer.push({ row: 2, col: 3 });
        correctAnswer.push({ row: 2, col: 4 });
        correctAnswer.push({ row: 3, col: 1 });
        correctAnswer.push({ row: 3, col: 2 });
        correctAnswer.push({ row: 3, col: 3 });
        correctAnswer.push({ row: 3, col: 4 });
        correctAnswer.push({ row: 4, col: 1 });
        correctAnswer.push({ row: 4, col: 2 });
        correctAnswer.push({ row: 4, col: 3 });
        correctAnswer.push({ row: 4, col: 4 });
        break;
      case 7:
        correctAnswer.push({ row: 0, col: 2 });
        correctAnswer.push({ row: 1, col: 2 });
        correctAnswer.push({ row: 1, col: 3 });
        correctAnswer.push({ row: 1, col: 4 });
        correctAnswer.push({ row: 1, col: 5 });
        correctAnswer.push({ row: 2, col: 1 });
        correctAnswer.push({ row: 2, col: 2 });
        correctAnswer.push({ row: 2, col: 3 });
        correctAnswer.push({ row: 2, col: 4 });
        correctAnswer.push({ row: 2, col: 5 });
        correctAnswer.push({ row: 3, col: 0 });
        correctAnswer.push({ row: 3, col: 1 });
        correctAnswer.push({ row: 3, col: 2 });
        correctAnswer.push({ row: 3, col: 3 });
        correctAnswer.push({ row: 3, col: 4 });
        correctAnswer.push({ row: 3, col: 5 });
        correctAnswer.push({ row: 4, col: 3 });
        correctAnswer.push({ row: 4, col: 4 });
        break;
      case 8:
        correctAnswer.push({ row: 0, col: 1 });
        correctAnswer.push({ row: 0, col: 2 });
        correctAnswer.push({ row: 0, col: 3 });
        correctAnswer.push({ row: 1, col: 1 });
        correctAnswer.push({ row: 1, col: 2 });
        correctAnswer.push({ row: 1, col: 3 });
        correctAnswer.push({ row: 1, col: 4 });
        correctAnswer.push({ row: 1, col: 5 });
        correctAnswer.push({ row: 2, col: 1 });
        correctAnswer.push({ row: 2, col: 2 });
        correctAnswer.push({ row: 2, col: 3 });
        correctAnswer.push({ row: 2, col: 4 });
        correctAnswer.push({ row: 2, col: 5 });
        correctAnswer.push({ row: 3, col: 1 });
        correctAnswer.push({ row: 3, col: 2 });
        correctAnswer.push({ row: 3, col: 3 });
        correctAnswer.push({ row: 3, col: 4 });
        correctAnswer.push({ row: 3, col: 5 });
        correctAnswer.push({ row: 4, col: 1 });
        correctAnswer.push({ row: 4, col: 2 });
        correctAnswer.push({ row: 4, col: 3 });
        correctAnswer.push({ row: 4, col: 4 });
        correctAnswer.push({ row: 4, col: 5 });
        break;
    }

    return correctAnswer;
  }

  ngOnInit() {
    // Check if the level has already been done before
    if (this.levelDone) {
      this.resultText = 'You\'ve already passed this level! Let\'s now verify!';
    } else {
      // Generate a random cat image when the component is initialized
      this.regenerateCatImages();
    }
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
    if (this.expectedResult.length === this.userAnswer.length
      && this.expectedResult.every(expectedItem => this.userAnswer.some(userItem =>
        userItem.row === expectedItem.row && userItem.col === expectedItem.col))) {
      // Mark that the user has answered correctly
      this.result = true;
      this.resultText = 'Correct! Let\'s now verify!';

      if (!this.movedOn) {
        // Emit the level completion to the captcha component
        this.passEvent.emit('3');
      }
    }
  }

  emitLevel(event: any) {
    // If the user clicks Try Again button, regenerate the cat images
    if (event.target.value === '3') {
      // If the user has already passed the level, show the move-on text
      if (this.levelDone) {
        this.levelDone = false;
        this.movedOn = true;
        this.movedOnText = 'You can verify at any time!'
      }
      this.regenerateCatImages();
      this.userAnswer = [];
      this.answered = false;
      this.result = false;
      this.resultText = 'Wrong! Please try again!';
    } else {
      // Emit the level to the captcha component
      this.levelEvent.emit(event.target.value);
    }
  }
}
