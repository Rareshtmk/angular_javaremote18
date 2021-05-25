import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPriviewComponent } from './user-priview.component';

describe('UserPriviewComponent', () => {
  let component: UserPriviewComponent;
  let fixture: ComponentFixture<UserPriviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPriviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPriviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
