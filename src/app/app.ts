import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import {Home} from './components/home/home';
import {About} from './components/about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Home, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-fundamentals');
}
