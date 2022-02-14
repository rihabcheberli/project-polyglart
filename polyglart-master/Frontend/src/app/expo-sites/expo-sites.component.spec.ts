import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { expoSitesComponent } from './expo-sites.component';

describe('expoSitesComponent', () => {
  let component: expoSitesComponent;
  let fixture: ComponentFixture<expoSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ expoSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(expoSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
