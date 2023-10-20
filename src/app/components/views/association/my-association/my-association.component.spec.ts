import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAssociationComponent } from './my-association.component';

describe('MyAssociationComponent', () => {
  let component: MyAssociationComponent;
  let fixture: ComponentFixture<MyAssociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAssociationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
