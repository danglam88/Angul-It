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

  // Set the start based on what is emitted from the child component
  setStart(start: string) {
    this.start = start;
  }
}
