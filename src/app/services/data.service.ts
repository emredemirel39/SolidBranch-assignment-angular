import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'http://localhost:1050/data';

  constructor( private http: HttpClient ) { }

  getAllData () {
    return this.http.get<Data []>(this.baseUrl)
  }

  getDataByType (type: 'income' | 'outcome' | 'loan' | 'investment') {
    return this.http.get<Data []>(`${this.baseUrl}?type=${type}`)
  }
}
