import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SolidBranch-assignment-angular';

  constructor (private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAllData().subscribe(res => console.log(res))
  }

}
