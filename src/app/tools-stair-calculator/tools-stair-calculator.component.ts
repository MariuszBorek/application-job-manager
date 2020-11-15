import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-tools-stair-calculator',
  templateUrl: './tools-stair-calculator.component.html',
  styleUrls: ['./tools-stair-calculator.component.scss']
})
export class ToolsStairCalculatorComponent implements OnInit {

  @Input() user: User;

  valueH: number;
  valueS: number;
  score: number;
  information: string;
  isStairsCorrect: boolean;


  constructor() { }

  checkStairs(): void {
    this.score = 2 * this.valueH + this.valueS;
    if (this.score >= 60 && this.score <= 65) {
      this.information = 'correct';
      this.isStairsCorrect = true;
    } else {
      this.information = 'invalid';
      this.isStairsCorrect = false;
    }
  }

  ngOnInit(): void {
  }

}
