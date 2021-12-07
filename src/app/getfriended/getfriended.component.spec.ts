import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfriendedComponent } from './getfriended.component';

describe('GetfriendedComponent', () => {
  let component: GetfriendedComponent;
  let fixture: ComponentFixture<GetfriendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetfriendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetfriendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
