import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsGiftComponent } from './donations-gift.component';

describe('DonationsGiftComponent', () => {
  let component: DonationsGiftComponent;
  let fixture: ComponentFixture<DonationsGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsGiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
