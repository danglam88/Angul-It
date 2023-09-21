import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {
  // Initialize the level to '1'
  level: string = '1';

  // Initialize the completion of each level to 'false'
  level1Done: boolean = false;
  level2Done: boolean = false;
  level3Done: boolean = false;

  // Get the current state from the app component
  @Input()
  currentState: any;

  // Initialize the current state of the app
  ngOnInit() {
    this.level = this.currentState.level;
    this.level1Done = this.currentState.level1Done;
    this.level2Done = this.currentState.level2Done;
    this.level3Done = this.currentState.level3Done;
  }

  // Create a custom result event and bind it to the app component
  @Output()
  resultEvent: EventEmitter<string> = new EventEmitter<string>();

  // Set the level completion based on what is emitted from the child component
  setPass(level: string) {
    if (level === '1') {
      this.level1Done = true;
    } else if (level === '2') {
      this.level2Done = true;
    } else if (level === '3') {
      this.level3Done = true;
    }

    // Update the current state with the new properties
    const newState = { level1Done: this.level1Done, level2Done: this.level2Done, level3Done: this.level3Done };
    this.currentState = { ...this.currentState, ...newState };

    // Save the current state to the local storage
    localStorage.setItem('appState', btoa(JSON.stringify(this.currentState)));
  }

  // Set the level based on what is emitted from the child component
  setLevel(level: string) {
    this.level = level;

    // Emit the result to the app component
    if (level === 'result') {
      this.resultEvent.emit(level);
    } else {
      // Update the current state with the new property
      const newState = { level: level };
      this.currentState = { ...this.currentState, ...newState };

      // Save the current state to the local storage
      localStorage.setItem('appState', btoa(JSON.stringify(this.currentState)));
    }
  }
}
