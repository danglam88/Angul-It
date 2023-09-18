import { Component } from '@angular/core';

@Component({
  selector: 'captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent {
  // Initialize the level to '1'
  level: string = '1';

  // Set the level based on what is emitted from the child component
  setLevel(level: string) {
    this.level = level;
  }
}
