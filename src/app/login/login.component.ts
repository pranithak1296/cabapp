import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Import the AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  onSubmit() {
    if (this.isFormValid()) {
      const loginData = { username: this.username, password: this.password };
      this.authService.login(loginData).subscribe(
        response => {
          console.log('Login successful', response);
          // Handle successful login, e.g., navigate to a dashboard
        },
        error => {
          console.error('Login failed', error);
          // Handle login error, e.g., show an error message
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  isFormValid(): boolean {
    return this.username.trim() !== '' && this.password.trim() !== '';
  }
}
