import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrahorizontalnavbarComponent } from './barrahorizontalnavbar.component';

describe('BarrahorizontalnavbarComponent', () => {
  let component: BarrahorizontalnavbarComponent;
  let fixture: ComponentFixture<BarrahorizontalnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrahorizontalnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrahorizontalnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
