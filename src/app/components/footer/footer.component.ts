import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [NgFor, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  
  // Company information - replace with your actual details
  companyName: string = 'YourCompany';
  companyAddress: string = '123 Main Street, City, Country';
  companyEmail: string = 'contact@yourcompany.com';
  companyPhone: string = '+1 (123) 456-7890';
  
  // Social media links - replace with your actual links
  socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/', icon: 'facebook' },
    { name: 'Twitter', url: 'https://twitter.com/', icon: 'twitter' },
    { name: 'Instagram', url: 'https://instagram.com/', icon: 'instagram' },
    { name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'linkedin' }
  ];
  
  // Site navigation links - replace with your actual pages
  navigationLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Products', url: '/products' },
    { name: 'Contact', url: '/contact' }
  ];
}
