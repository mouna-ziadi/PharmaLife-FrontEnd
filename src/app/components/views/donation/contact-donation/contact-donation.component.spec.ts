import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDonationComponent } from './contact-donation.component';

describe('ContactDonationComponent', () => {
  let component: ContactDonationComponent;
  let fixture: ComponentFixture<ContactDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
