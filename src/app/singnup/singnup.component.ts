import { Component } from '@angular/core';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-singnup',
  templateUrl: './singnup.component.html',
  styleUrls: ['./singnup.component.css']
})
export class SingnupComponent  {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private signupService: SignupService) { }
  onSubmit() {
    if (this.isFormValid()) {
      const userData = { username: this.username, email: this.email, password: this.password };
      this.signupService.signup(userData).subscribe(
        response => {
          console.log('Signup successful', response);
        },
        error => {
          console.error('Signup failed', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  isFormValid(): boolean {
    return this.username.trim() !== '' && this.email.trim() !== '' && this.password.trim() !== '';
  }
  
    // Add logic to handle form submission
  }


