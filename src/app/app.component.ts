import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loaded: boolean;

  constructor() {
    this.loaded = false;
  }

  load(roms: ArrayBuffer[]) {
    // TODO: load emulator;

    this.loaded = true;
  }
}
