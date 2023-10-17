import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditEmployeeComponent } from './addedit-employee.component';

describe('AddeditEmployeeComponent', () => {
  let component: AddeditEmployeeComponent;
  let fixture: ComponentFixture<AddeditEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddeditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
