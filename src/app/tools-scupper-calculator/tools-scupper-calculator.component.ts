import { Component, OnInit } from '@angular/core';
import { ToolScupperService } from '../tool-scupper.service';
import { Scupper } from '../scupper';

@Component({
  selector: 'app-tools-scupper-calculator',
  templateUrl: './tools-scupper-calculator.component.html',
  styleUrls: ['./tools-scupper-calculator.component.scss']
})
export class ToolsScupperCalculatorComponent implements OnInit {

  scupper: Scupper;

  constructor(private toolScupperService: ToolScupperService) { }

  checkScuppers(projectName: string, roofArea: string, scupperSideX: string, scupperSideY: string, bottomScupperLevelOverRoof: string, waterLevel: string): void {
    this.toolScupperService.checkScuppers(projectName,
      roofArea,
      scupperSideX,
      scupperSideY,
      bottomScupperLevelOverRoof,
      waterLevel).subscribe(scupper => this.scupper = scupper);
  }

  saveScupper(): void {
    this.toolScupperService.saveScupper(this.scupper).subscribe();
  }

  ngOnInit(): void {
  }



}
