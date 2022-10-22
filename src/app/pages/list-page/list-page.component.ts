import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  tabs: string[]  = [
    'income', 'outcome', 'loan', 'investment'
  ];

  dataType: 'income' | 'outcome' | 'loan' | 'investment' = 'income'; 

  //functions
  handleSelect (event: Event) {
    const e = event.target as HTMLSpanElement;
    this.dataType = e.id as typeof this.dataType
  };

  constructor() { }

  ngOnInit(): void {
  }

}
