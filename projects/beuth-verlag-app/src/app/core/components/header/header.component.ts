import {Component, output} from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  onLogout = output()

  logout(): void {
    this.onLogout.emit()
  }
}
