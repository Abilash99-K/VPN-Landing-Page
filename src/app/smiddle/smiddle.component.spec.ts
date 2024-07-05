import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmiddleComponent } from './smiddle.component';

describe('SmiddleComponent', () => {
  let component: SmiddleComponent;
  let fixture: ComponentFixture<SmiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
