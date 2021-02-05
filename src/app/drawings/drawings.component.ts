import { Component, OnInit, Input } from '@angular/core';
import { Sheet } from '../sheet';
import { SheetService } from '../sheet.service';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.scss']
})
export class DrawingsComponent implements OnInit {

  sheets: Sheet[] = [];
  isPrintShown = false;

  constructor(private sheetService: SheetService) { }


  getSheets(): void {
    // if (this.project) {
      this.sheetService.getSheets()
        .subscribe(sheets => this.sheets = sheets);
    // }
  }

  addRow(): void {
    // if (this.project) {
      const newSheet: Sheet = {
        id: null,
        no: '',
        description: '',
        edition: null,
        revision: null,
        type: 'UNKNOWN'
      };
      this.sheetService.addSheet(newSheet)
        .subscribe(sheet => this.sheets.push(sheet));
    // }
  }

  addSheet(sheet: Sheet): void {
    // if (this.project) {
    const newSheet: Sheet = {
      id: sheet.id,
      no: sheet.no,
      description: sheet.description,
      edition: sheet.edition,
      revision: sheet.revision,
      type: sheet.type
    };
    this.sheetService.updateSheet(newSheet)
      .subscribe();
    // }
  }

  deleteSheet(sheet: Sheet): void {
    // if (this.project && confirm('Are you sure you want to delete this sheet?')) {
      this.sheets = this.sheets.filter(s => s !== sheet);
      this.sheetService.deleteSheet(sheet).subscribe();
    // }
  }

  printSheets(): void {
    if (!this.isPrintShown) {
      this.isPrintShown = true;
    } else {
      this.isPrintShown = false;
    }
  }

  sortBySheetType(): void {
    const sortedSheets = this.sheets.sort((e1, e2) => {
      if (e1.type > e2.type) {
        return 1;
      }
      if (e1.type < e2.type) {
        return -1;
      }
    });
    this.sheets = sortedSheets;
  }


  ngOnInit(): void {
    this.getSheets();
  }

}
