import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsUValueCalculatorComponent } from './tools-u-value-calculator.component';

describe('ToolsUValueCalculatorComponent', () => {
  let component: ToolsUValueCalculatorComponent;
  let fixture: ComponentFixture<ToolsUValueCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsUValueCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsUValueCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
