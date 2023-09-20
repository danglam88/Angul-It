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

  // Set the start based on what is emitted from the home component
  setStart(start: string) {
    if (start === 'start') {
      this.start = 'true';
    }
  }

  // Set the start and the end based on what is emitted from the captcha component
  setSuccess(success: string) {
    if (success === 'success') {
      this.start = 'false';
      this.end = 'true';
    }
  }

  // Set the start and the end based on what is emitted from the result component
  setRestart(restart: string) {
    if (restart === 'restart') {
      this.start = 'true';
      this.end = 'false';
    }
  }
}
