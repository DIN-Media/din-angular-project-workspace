import {Component, output, OutputEmitterRef} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {DinLogoComponent} from "../din-logo/din-logo.component";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule, NgOptimizedImage, MatIconModule, MatTooltipModule,
    DinLogoComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly onLogout: OutputEmitterRef<void> = output()

  logout(): void {
    this.onLogout.emit()
  }
}
