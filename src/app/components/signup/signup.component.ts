import { NgIf, CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-signup',
  imports: [NgIf, NgClass, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  signupForm!: FormGroup;
  submitted = false;
  passwordVisible = false;

  constructor(private formBuilder: FormBuilder, private authServicve : AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [
        Validators.required, 
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]]
    });
  }

  // Type-safe getters for form controls
  get firstName(): FormControl {
    return this.signupForm.get('firstName') as FormControl;
  }
  
  get lastName(): FormControl {
    return this.signupForm.get('lastName') as FormControl;
  }
  
  get phoneNumber(): FormControl {
    return this.signupForm.get('phoneNumber') as FormControl;
  }
  
  get password(): FormControl {
    return this.signupForm.get('password') as FormControl;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    // Process form data here (e.g., send to API)
    console.log('Registration successful!', this.signupForm.value);
    
    // In a real app, you'd typically call a service to register the user
    var x = this.signupForm.value;
    this.authServicve.register(this.signupForm.value);
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}