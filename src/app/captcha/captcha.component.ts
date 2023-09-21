import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent {
  // Initialize the level to '1'
  level: string = '1';

  // Initialize the completion of each level to 'false'
  level1Done: boolean = false;
  level2Done: boolean = false;
  level3Done: boolean = false;

  // Create a custom result event and bind it to the app component
  @Output()
  resultEvent: EventEmitter<string> = new EventEmitter<string>();

  // Set the level based on what is emitted from the child component
  setLevel(level: string) {
    this.level = level;

    // Mark the completion of each level
    if (level === '2' && !this.level1Done) {
      this.level1Done = true;
    } else if (level === '3' && !this.level2Done) {
      this.level2Done = true;
    } else if (level === 'result') {
      // Emit the result to the app component
      this.resultEvent.emit(level);
      
      if (!this.level3Done) {
        this.level3Done = true;
      }
    }
  }
}
