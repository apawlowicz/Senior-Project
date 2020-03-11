import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerModel } from './models/CustomerModel';

@Injectable({
    providedIn: 'root'
  })

export class DataService {

    apiUrl = 'http://localhost:8081/';

    constructor(private _http: HttpClient) { }

    getAllCustomers(){
        return this._http.get<CustomerModel[]>(this.apiUrl);
    }
}