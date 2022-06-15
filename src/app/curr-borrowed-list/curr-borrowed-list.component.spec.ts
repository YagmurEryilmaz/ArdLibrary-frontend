import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrBorrowedListComponent } from './curr-borrowed-list.component';

describe('CurrBorrowedListComponent', () => {
  let component: CurrBorrowedListComponent;
  let fixture: ComponentFixture<CurrBorrowedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrBorrowedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrBorrowedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
