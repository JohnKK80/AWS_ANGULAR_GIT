import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleEmployeeComponent } from './female-employee.component';

describe('FemaleEmployeeComponent', () => {
  let component: FemaleEmployeeComponent;
  let fixture: ComponentFixture<FemaleEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemaleEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemaleEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
