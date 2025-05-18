import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isLoggedIn: boolean = false;
  constructor(private router: Router, private authService: AuthService){}
  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((value) =>{
      this.isLoggedIn = value
    });
  }
  logout(): void {
    this.isLoggedIn = false;
    this.authService.logout();
  }
}
