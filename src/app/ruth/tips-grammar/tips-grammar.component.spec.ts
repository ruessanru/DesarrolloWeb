import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsGrammarComponent } from './tips-grammar.component';

describe('TipsGrammarComponent', () => {
  let component: TipsGrammarComponent;
  let fixture: ComponentFixture<TipsGrammarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsGrammarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsGrammarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
