import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private settingsDropdownVisible = false;

  constructor() {}

  setSettingsDropdownVisible(visible: boolean): void {
    this.settingsDropdownVisible = visible;
  }

  isSettingsDropdownVisible(): boolean {
    return this.settingsDropdownVisible;
  }
}
