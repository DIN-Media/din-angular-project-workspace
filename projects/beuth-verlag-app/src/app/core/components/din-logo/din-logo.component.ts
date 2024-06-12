import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RoutingPaths} from "../../const";
import {Router} from "@angular/router";

@Component({
  selector: 'app-din-logo',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './din-logo.component.html',
  styleUrl: './din-logo.component.css'
})
export class DinLogoComponent {
  private readonly router: Router = inject(Router);

  toHomePage(): void {
    this.router.navigate([RoutingPaths.HOME]).then()
  }
}
