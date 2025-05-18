import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-component',
  imports: [NgIf,CommonModule, RouterModule],
  templateUrl: './hero-component.component.html',
  styleUrl: './hero-component.component.css'
})
export class HeroComponentComponent implements OnInit{
  isLoggedIn: boolean = false;
  firstName: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(status => {
      this.isLoggedIn = status;
      if (status) {
        this.firstName = this.authService.getCurrentUser()?.firstName || '';
      }
    });
  }
}
