import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Data } from 'src/app/models/data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnChanges {

  @Input () dataType: 'income' | 'outcome' | 'loan' | 'investment' = 'income'; 

  selectedDatas: Data [] = [];

  getRandomNumber (): string {
    return Math.floor(Math.random() * 99).toString()
  }

  constructor( private dataService: DataService) { }

  ngOnChanges(): void {
    this.dataService.getDataByType(this.dataType).subscribe(res => {
      this.selectedDatas = res;
    })
  }

}
