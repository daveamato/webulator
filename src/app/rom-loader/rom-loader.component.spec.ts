import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomLoaderComponent } from './rom-loader.component';

describe('RomLoaderComponent', () => {
  let component: RomLoaderComponent;
  let fixture: ComponentFixture<RomLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
