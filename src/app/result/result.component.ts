import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  // Create a custom restart event and bind it to the app component
  @Output()
  restartEvent: EventEmitter<string> = new EventEmitter<string>();

  // Emit the restart to the app component
  emitRestart(event: any) {
    this.restartEvent.emit(event.target.value);
  }
}
