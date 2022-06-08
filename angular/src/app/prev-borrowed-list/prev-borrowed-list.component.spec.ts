import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevBorrowedListComponent } from './prev-borrowed-list.component';

describe('PrevBorrowedListComponent', () => {
  let component: PrevBorrowedListComponent;
  let fixture: ComponentFixture<PrevBorrowedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevBorrowedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevBorrowedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
