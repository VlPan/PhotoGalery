import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDescComponent } from './image-desc.component';

describe('ImageDescComponent', () => {
  let component: ImageDescComponent;
  let fixture: ComponentFixture<ImageDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
