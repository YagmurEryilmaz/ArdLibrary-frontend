import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewBookModalComponent } from './add-new-book-modal.component';

describe('AddNewBookModalComponent', () => {
  let component: AddNewBookModalComponent;
  let fixture: ComponentFixture<AddNewBookModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewBookModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewBookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
