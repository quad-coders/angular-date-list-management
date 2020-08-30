import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateListManagementComponent } from './date-list-management.component';

describe('DateListManagementComponent', () => {
  let component: DateListManagementComponent;
  let fixture: ComponentFixture<DateListManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateListManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateListManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
