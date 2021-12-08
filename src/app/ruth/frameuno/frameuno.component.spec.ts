import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameunoComponent } from './frameuno.component';

describe('FrameunoComponent', () => {
  let component: FrameunoComponent;
  let fixture: ComponentFixture<FrameunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
