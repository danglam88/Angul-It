import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Create a custom start event and bind it to the app component
  @Output()
  startEvent: EventEmitter<string> = new EventEmitter<string>();

  // Emit the start to the app component
  emitStart(event: any) {
    this.startEvent.emit(event.target.value);
  }
}
