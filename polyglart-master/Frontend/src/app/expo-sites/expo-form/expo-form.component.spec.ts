import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {expoFormComponent} from './expo-form.component';

describe('expoFormComponent', () => {
  let component: expoFormComponent;
  let fixture: ComponentFixture<expoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [expoFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(expoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
