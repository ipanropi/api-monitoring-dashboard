import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ApiService } from './service/api-service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = '';


  private titles: { [key: string]: string } = {
    '/documentation': 'Documentation',
    '/documentation/newfile': 'Documentation',
    '/settings': 'Setting',
    '/reporting': 'Reporting',
    '/settings/email': 'Setting',
    '/settings/interval-rate': 'Setting',
    // Add more routes and titles as needed
  };
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.title = this.titles[event.urlAfterRedirects] || 'API Monitoring Dashboard';
    });
  }

  setTitle(newTitle: string) {
    this.title = newTitle;
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
