import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowHistoryModalComponent } from './borrow-history-modal.component';

describe('BorrowHistoryModalComponent', () => {
  let component: BorrowHistoryModalComponent;
  let fixture: ComponentFixture<BorrowHistoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowHistoryModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowHistoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
