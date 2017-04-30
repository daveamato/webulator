import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rom-loader',
  templateUrl: './rom-loader.component.html',
  styleUrls: ['./rom-loader.component.scss']
})
export class RomLoaderComponent implements OnInit {
  @Output() loaded: EventEmitter<ArrayBuffer[]> = new EventEmitter();

  bootromFile: File;
  gameromFile: File;

  loading: boolean;

  constructor() {
    this.loading = false;
  }

  ngOnInit() {
  }

  bootromFileChanged($event): void {
    this.bootromFile = $event.target.files[0];
  }

  gameromFileChanged($event): void {
    this.gameromFile = $event.target.files[0];
  }

  buttonState(): boolean {
    return !(this.bootromFile && this.gameromFile) || this.loading;
  }

  buttonText(): string {
    return this.loading ? 'Loading...' : 'Load';
  }

  load(): void {
    this.loading = true;
    
    Promise.all([
      this.readFile(this.bootromFile),
      this.readFile(this.gameromFile)
    ]).then((roms) => {
      this.loaded.emit(roms);
    });
  }

  private readFile(file: File): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result);

      reader.readAsArrayBuffer(file);
    });
  }
}
