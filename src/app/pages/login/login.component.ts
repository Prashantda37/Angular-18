import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: any = {
    username: '',
    password: ''
  }
  router: Router = inject(Router)
  // constructor(private router: Router) { } this can be used OLD way

  authentication(): void {
    console.log(this.login);
    localStorage.setItem('authentication', JSON.stringify(this.login));
    // this.router.navigate(['home']) //this can be used
    this.router.navigateByUrl('home')
  }
}
