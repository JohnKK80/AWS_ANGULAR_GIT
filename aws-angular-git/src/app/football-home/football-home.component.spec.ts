import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballHomeComponent } from './football-home.component';

describe('FootballHomeComponent', () => {
  let component: FootballHomeComponent;
  let fixture: ComponentFixture<FootballHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
