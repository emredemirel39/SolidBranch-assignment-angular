import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/app/models/data';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent implements OnInit {

  @Input() dataType!: string;
  @Input() allData!: Data[];

  public filteredData: Data [] = [];

  constructor() { }

  ngOnInit(): void {
    this.getFilteredData()
  }

  getFilteredData () {
    this.filteredData = this.allData?.filter(data => data.type === this.dataType);
  }

}
