import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBillAccsComponent } from './user-bill-accs.component';

describe('UserBillAccsComponent', () => {
  let component: UserBillAccsComponent;
  let fixture: ComponentFixture<UserBillAccsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBillAccsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBillAccsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
