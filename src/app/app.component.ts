import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Set the title of the app
  title = 'Angular-It';

  // Initialize the start to 'false'
  start: boolean = false;

  // Initialize the end to 'false'
  end: boolean = false;

  // Initialize the current state of the app
  currentState: any = {
    start: false,
    end: false,
    level: '1',
    level1Done: false,
    level2Done: false,
    level3Done: false
  };

  ngOnInit() {
    // Get the saved state from the local storage
    const savedState = localStorage.getItem('appState');

    // If there is a saved state in the local storage, use it
    if (savedState) {
      this.currentState = JSON.parse(savedState);
      this.start = this.currentState.start;
      this.end = this.currentState.end;
    } else {
      // If there is no saved state in the local storage, save the current state
      localStorage.setItem('appState', JSON.stringify(this.currentState));
    }
  }

  // Set the start based on what is emitted from the home component
  setStart(state: string) {
    if (state === 'start') {
      this.start = true;

      // Update the current state with the new property
      const newState = { start: true };
      this.currentState = { ...this.currentState, ...newState };

      // Save the current state to the local storage
      localStorage.setItem('appState', JSON.stringify(this.currentState));
    }
  }

  // Set the start and the end based on what is emitted from the captcha component
  setResult(state: string) {
    if (state === 'result') {
      this.start = false;
      this.end = true;

      // Update the current state with the new properties
      const newState = { start: false, end: true };
      this.currentState = { ...this.currentState, ...newState };

      // Save the current state to the local storage
      localStorage.setItem('appState', JSON.stringify(this.currentState));
    }
  }

  // Set the end based on what is emitted from the result component
  setRestart(state: string) {
    if (state === 'restart') {
      this.end = false;

      // Set the current state to the initial state
      this.currentState = {
        start: false,
        end: false,
        level: '1',
        level1Done: false,
        level2Done: false,
        level3Done: false
      };

      // Save the current state to the local storage
      localStorage.setItem('appState', JSON.stringify(this.currentState));
    }
  }
}
