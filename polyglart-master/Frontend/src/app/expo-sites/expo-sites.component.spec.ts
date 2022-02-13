import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpoSitesComponent } from './expo-sites.component';

describe('ExpoSitesComponent', () => {
  let component: ExpoSitesComponent;
  let fixture: ComponentFixture<ExpoSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpoSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpoSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
