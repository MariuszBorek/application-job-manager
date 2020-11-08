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
  scuppers: Scupper[];
  instructionImg = 'assets/images/instructionscupper.png';

  constructor(private toolScupperService: ToolScupperService) { }

  checkScuppers(projectName: string,
    roofArea: string,
    scupperSideX: string,
    scupperSideY: string,
    bottomScupperLevelOverRoof: string,
    waterLevel: string): void {
    this.toolScupperService.checkScuppers(projectName,
      roofArea,
      scupperSideX,
      scupperSideY,
      bottomScupperLevelOverRoof,
      waterLevel).subscribe(scupper => this.scupper = scupper);
  }

  findByProjectName(phrase: string): void {
    this.toolScupperService.findByProjectName(phrase).subscribe(scuppers => this.scuppers = scuppers);
  }

  saveScupper(): void {
    this.toolScupperService.saveScupper(this.scupper).subscribe();
  }

  findAllScuppers(): void {
    this.toolScupperService.findAll()
      .subscribe(scuppers => this.scuppers = scuppers);
  }
  deleteScupper(scupper: Scupper): void {
    console.log(scupper);
  }

  hideScuppers(): void {
    this.scuppers = new Array();
  }

  cleanAllScuppers(): void {
    if (confirm('Are you sure you want to clear all saved scuppers?')) {
      this.toolScupperService.clearAllScuppers().subscribe(scuppers => this.scuppers = scuppers);
    }
  }

  scupperInitial(): Scupper {
    const initialScupper: Scupper = {
      id: null,
      projectName: 'unknown',
      roofArea: 0,
      scupperSideX: 0,
      scupperSideY: 0,
      realScupperArea: 0,
      activeScupperArea: 0,
      waterLevel: 0,
      bottomScupperLevelOverRoof: 0,
      numberOfScuppers: 0,
      numberOfScuppersRound: 0
    };
    return initialScupper;
  }

  ngOnInit(): void {
    this.scupper = this.scupperInitial();
  }



}
