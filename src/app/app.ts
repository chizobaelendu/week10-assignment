import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar-component/nav-bar-component';
import { Home } from './components/home/home';

@Component({
  imports: [RouterOutlet, NavBarComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('advance-routing-and-loading-techniques');
}
