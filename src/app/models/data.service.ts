import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './team.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:3000/';

  constructor(private _http: HttpClient) { }

  getTeams(){
    return this._http.get<Team[]>(this.apiUrl);
  }
}
