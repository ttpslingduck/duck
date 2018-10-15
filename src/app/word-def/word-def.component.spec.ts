import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDefComponent } from './word-def.component';

describe('WordDefComponent', () => {
  let component: WordDefComponent;
  let fixture: ComponentFixture<WordDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
