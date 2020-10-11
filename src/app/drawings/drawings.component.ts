import { Component, OnInit } from '@angular/core';
import { Sheet } from '../sheet';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.scss']
})
export class DrawingsComponent implements OnInit {

  sheets: Sheet[] = [];
  isPrintShown = false;

  constructor() { }

  getMaxId(): number {
    if (!this.sheets.length) {
      return 0;
    }
    const ids = this.sheets.map(sheet => sheet.id);
    const maxId = Math.max(...ids);
    return maxId;
  }

  incrementId(): number {
    const id = this.getMaxId() + 1;
    const sortedId = this.sheets.sort();
    return id;
  }

  addSheet(): void {
    const newSheet: Sheet = {
      id: this.incrementId(),
      no: '',
      description: '',
      edition: null,
      revision: null,
      type: ''
    };
    this.sheets.push(newSheet);
  }

  deleteSheet(sheetToDelete: Sheet): void {
    if (confirm('Are you sure you want to delete this sheet?')) {
      const idToDelete = sheetToDelete.id;
      const newSheets = this.sheets.filter((element) => {
        return idToDelete !== element.id;
      });
      this.sheets = newSheets;
    }
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
    this.addSheet();
  }

}
