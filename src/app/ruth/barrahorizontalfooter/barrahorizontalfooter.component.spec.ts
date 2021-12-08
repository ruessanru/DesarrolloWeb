import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrahorizontalfooterComponent } from './barrahorizontalfooter.component';

describe('BarrahorizontalfooterComponent', () => {
  let component: BarrahorizontalfooterComponent;
  let fixture: ComponentFixture<BarrahorizontalfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrahorizontalfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrahorizontalfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
