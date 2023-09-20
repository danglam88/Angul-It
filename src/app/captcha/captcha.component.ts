import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent {
  // Initialize the level to '1'
  level: string = '1';

  // Create a custom result event and bind it to the app component
  @Output()
  resultEvent: EventEmitter<string> = new EventEmitter<string>();

  // Set the level based on what is emitted from the child component
  setLevel(level: string) {
    this.level = level;

    // Emit the result to the app component
    if (level === 'result') {
      this.resultEvent.emit(level);
    }
  }
}
