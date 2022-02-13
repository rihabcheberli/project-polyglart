import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExpoComponent} from './expo.component';

describe('expoComponent', () => {
  let component: ExpoComponent;
  let fixture: ComponentFixture<ExpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
