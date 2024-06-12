import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyUsersModalComponent } from './dummy-users-modal.component';

describe('DummyUsersModalComponent', () => {
  let component: DummyUsersModalComponent;
  let fixture: ComponentFixture<DummyUsersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyUsersModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DummyUsersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
