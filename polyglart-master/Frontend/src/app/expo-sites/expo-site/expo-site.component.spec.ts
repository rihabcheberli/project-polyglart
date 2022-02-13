import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {expoSiteComponent} from './expo-site.component';

describe('expoSiteComponent', () => {
  let component: expoSiteComponent;
  let fixture: ComponentFixture<expoSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [expoSiteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(expoSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
