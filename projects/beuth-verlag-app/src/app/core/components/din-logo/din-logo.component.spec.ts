import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinLogoComponent } from './din-logo.component';

describe('DinLogoComponent', () => {
  let component: DinLogoComponent;
  let fixture: ComponentFixture<DinLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DinLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
