import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Set the title of the app
  title = 'Angular-It';

  // Initialize the start to 'false'
  start: string = 'false';

  // Initialize the end to 'false'
  end: string = 'false';

  // Set the start based on what is emitted from the captcha component
  setHome(state: string) {
    if (state === 'home') {
      this.start = 'false';
    }
  }

  // Set the start based on what is emitted from the home component
  setStart(state: string) {
    if (state === 'start') {
      this.start = 'true';
    }
  }

  // Set the start and the end based on what is emitted from the captcha component
  setResult(state: string) {
    if (state === 'result') {
      this.start = 'false';
      this.end = 'true';
    }
  }

  // Set the end based on what is emitted from the result component
  setRestart(state: string) {
    if (state === 'restart') {
      this.end = 'false';
    }
  }
}
