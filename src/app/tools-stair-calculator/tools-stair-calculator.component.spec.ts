import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsStairCalculatorComponent } from './tools-stair-calculator.component';

describe('ToolsStairCalculatorComponent', () => {
  let component: ToolsStairCalculatorComponent;
  let fixture: ComponentFixture<ToolsStairCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsStairCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsStairCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
