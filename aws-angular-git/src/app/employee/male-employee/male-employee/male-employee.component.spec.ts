import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleEmployeeComponent } from './male-employee.component';

describe('MaleEmployeeComponent', () => {
  let component: MaleEmployeeComponent;
  let fixture: ComponentFixture<MaleEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaleEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaleEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
