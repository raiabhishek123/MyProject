import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { User } from '../models/user';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router : Router) {
  }

  public get currentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  public get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  public get isLoggedInValue(): boolean {
    return this.loggedIn.value;
  }

  public getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  login(phoneNumber: string, password: string, rememberMe: string): Observable<User> {
    var user!:User;
    var storeUser = localStorage.getItem("currentUser");
    if(storeUser)
    {
      user = JSON.parse(storeUser);
    }
    if (user!=null && phoneNumber === user.phoneNumber && password === user.password) {
      
      // Simulate API call delay
      return of(user).pipe(
        delay(1000),
        tap(user => {
          this.currentUserSubject.next(user);
          this.loggedIn.next(true);
        })
      );
    }
    
    // Simulate failed login
    return new Observable(observer => {
      setTimeout(() => {
        observer.error('PhoneNumber or password is incorrect '+ user);
      }, 1000);
    });
  }

  logout(): void {
    this.currentUserSubject.next(null);
    this.loggedIn.next(false);
  }

  register(user : User ): void{
    if(user != null)
    {
      var item = JSON.stringify(user);
      localStorage.setItem("currentUser", item);
    }
    this.router.navigateByUrl('/login');
  }
}
