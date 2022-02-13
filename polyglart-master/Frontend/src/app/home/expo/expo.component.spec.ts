import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { expoComponent } from './expo.component';

describe('expoComponent', () => {
  let component: expoComponent;
  let fixture: ComponentFixture<expoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ expoComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(expoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
