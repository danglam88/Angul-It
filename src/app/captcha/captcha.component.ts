import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent {
  // Initialize the level to '1'
  level: string = '1';

  // Create a custom home event and bind it to the app component
  @Output()
  homeEvent: EventEmitter<string> = new EventEmitter<string>();

  // Create a custom result event and bind it to the app component
  @Output()
  resultEvent: EventEmitter<string> = new EventEmitter<string>();

  // Set the level based on what is emitted from the child component
  setLevel(level: string) {
    this.level = level;

    if (level === 'home') {
      // Emit the home to the app component
      this.homeEvent.emit(level);
    } else if (level === 'result') {
      // Emit the result to the app component
      this.resultEvent.emit(level);
    }
  }
}
