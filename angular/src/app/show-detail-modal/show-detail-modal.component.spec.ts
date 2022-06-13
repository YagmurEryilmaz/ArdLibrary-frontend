import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailModalComponent } from './show-detail-modal.component';

describe('ShowDetailModalComponent', () => {
  let component: ShowDetailModalComponent;
  let fixture: ComponentFixture<ShowDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
