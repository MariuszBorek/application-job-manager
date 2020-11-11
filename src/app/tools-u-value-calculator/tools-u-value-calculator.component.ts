import { Component, OnInit, Input } from '@angular/core';
import { Row } from '../row';
import { User } from '../user';

@Component({
  selector: 'app-tools-u-value-calculator',
  templateUrl: './tools-u-value-calculator.component.html',
  styleUrls: ['./tools-u-value-calculator.component.scss']
})
export class ToolsUValueCalculatorComponent implements OnInit {

  @Input() user: User;

  rows: Row[] = [];
  rsi: number;
  rse: number;
  uValue: number;

  constructor() { }

  getMaxId(): number {
    if (!this.rows.length) {
      return 0;
    }
    const ids = this.rows.map(row => row.id);
    const maxId = Math.max(...ids);
    return maxId;
  }

  incrementId(): number {
    const id = this.getMaxId() + 1;
    return id;
  }

  addRow(): void {
    const newRow: Row = {
      id: this.incrementId(),
      material: '',
      thickness: null,
      lambda: null,
      resistance: null
    };
    this.rows.push(newRow);
  }

  countRow(row: Row): void {
    row.resistance = row.thickness / row.lambda;

  }

  countU(): void {
    let sumR = 0;
    for (let i = 0; i < this.rows.length; i++) {
      sumR = sumR + this.rows[i].resistance;
    }
    this.uValue = 1 / (sumR + this.rsi + this.rse);
  }

  deleteRow(rowToDelete: Row): void {
    if (confirm('Are you sure you want to delete this row?')) {
      const idToDelete = rowToDelete.id;
      const newRows = this.rows.filter((element) => {
        return idToDelete !== element.id;
      });
      this.rows = newRows;
    }
  }

  ngOnInit(): void {
    this.addRow();
  }

}
