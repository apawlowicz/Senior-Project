import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './team.model';
import { User } from './User.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:3000/tm';
  apiUrl2 = 'http://localhost:3000/user';

  constructor(private _http: HttpClient) { }

  getTeams(){
    return this._http.get<Team[]>(this.apiUrl);
  }

  getUser(teamId: number, artId: number){
    return this._http.get<User[]>(this.apiUrl2+'/'+teamId+'/'+artId);
  }
}
