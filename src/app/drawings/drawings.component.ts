import { Component, OnInit } from '@angular/core';
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
    this.sheetService.getSheets()
      .subscribe(sheets => this.sheets = sheets);
  }

  addRow(): void {
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
  }

  addSheet(sheet: Sheet): void {
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
  }

  deleteSheet(sheet: Sheet): void {
    if (confirm('Are you sure you want to delete this sheet?')) {
      this.sheets = this.sheets.filter(s => s !== sheet);
      this.sheetService.deleteSheet(sheet).subscribe();
    }
  }



  // getMaxId(): number {
  //   if (!this.sheets.length) {
  //     return 0;
  //   }
  //   const ids = this.sheets.map(sheet => sheet.id);
  //   const maxId = Math.max(...ids);
  //   return maxId;
  // }

  // incrementId(): number {
  //   const id = this.getMaxId() + 1;
  //   return id;
  // }



  // deleteSheet(sheetToDelete: Sheet): void {
  //   if (confirm('Are you sure you want to delete this sheet?')) {
  //     const idToDelete = sheetToDelete.id;
  //     const newSheets = this.sheets.filter((element) => {
  //       return idToDelete !== element.id;
  //     });
  //     this.sheets = newSheets;
  //   }
  // }

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
