import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsScupperCalculatorComponent } from './tools-scupper-calculator.component';

describe('ToolsScupperCalculatorComponent', () => {
  let component: ToolsScupperCalculatorComponent;
  let fixture: ComponentFixture<ToolsScupperCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsScupperCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsScupperCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
