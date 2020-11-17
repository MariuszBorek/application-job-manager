import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { Project } from '../project';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  @Input() user: User;
  @Input() project: Project;

  toolChoice: number;

  constructor() { }

  choseStairCalculator(): void {
    this.toolChoice = 0;
  }

  choseUValueCalculator(): void {
    this.toolChoice = 1;
  }

  choseScupperCalculator(): void {
    this.toolChoice = 2;
  }


  ngOnInit(): void {
    this.choseScupperCalculator();
  }

}
