import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiershipTeamsComponent } from './premiership-teams.component';

describe('PremiershipTeamsComponent', () => {
  let component: PremiershipTeamsComponent;
  let fixture: ComponentFixture<PremiershipTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiershipTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiershipTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
