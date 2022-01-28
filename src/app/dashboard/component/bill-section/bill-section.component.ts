import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-section',
  templateUrl: './bill-section.component.html',
  styleUrls: ['./bill-section.component.css']
})
export class BillSectionComponent implements OnInit {

  numOfTables : number = 10;
  constructor() { }

  ngOnInit(): void {
  }

  numberOfTables() {
    return new Array(this.numOfTables);
  }
}
