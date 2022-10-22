import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {

  public allData: Data [] = []

  public uniqueDataTypes: string [] = []

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllData().subscribe( res => {
      this.allData = res;
      this.uniqueDataTypes = Array.from(new Set(res.map(data => data.type)))
    })
    
  }

}
