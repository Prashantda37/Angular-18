import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-decorators-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './decorators-layout.component.html',
  styleUrl: './decorators-layout.component.css'
})
export class DecoratorsLayoutComponent {

}
