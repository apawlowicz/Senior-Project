import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private token: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
  }

  logout() {
    this.token.signOut();
    this.router.navigate(['/login']);
  }
}