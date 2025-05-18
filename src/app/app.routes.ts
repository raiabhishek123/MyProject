import { Routes } from '@angular/router';
import { CheckComponent } from './components/check/check.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeroComponentComponent } from './components/hero-component/hero-component.component';

export const routes: Routes = [
    {path:'', component: HeroComponentComponent},
    {path: 'about', component: AboutComponent},
    {path:'login', component: LoginComponent},
    {path: 'contact', component: ContactComponent },
    {path: 'signup', component: SignupComponent},
    {path: '**', redirectTo:'/'}
];
