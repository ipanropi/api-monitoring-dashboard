import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/service/menu-service/menu-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(public menuService: MenuService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleSettingsDropdown() {
    this.menuService.setSettingsDropdownVisible(!this.menuService.isSettingsDropdownVisible());
  }

  logout() {
    // Add your logout logic here
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
