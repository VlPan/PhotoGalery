import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesDescComponent } from './images-desc.component';

describe('ImagesDescComponent', () => {
  let component: ImagesDescComponent;
  let fixture: ComponentFixture<ImagesDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
