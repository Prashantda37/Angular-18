import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  logedInUser: any

  constructor() {
    const user = localStorage.getItem("authentication");;
    if (user) {
      this.logedInUser = JSON.parse(user)
    }
  }

}
