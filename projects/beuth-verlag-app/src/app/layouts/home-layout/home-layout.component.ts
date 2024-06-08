import {Component, inject} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../../core/components/header/header.component";
import {FooterComponent} from "../../core/components/footer/footer.component";
import {AuthenticationApplication} from "../../core/authentication/authentication.application";

@Component({
  selector: 'app-home-page-layout',
  standalone: true,
  imports: [
    RouterOutlet, HeaderComponent, FooterComponent
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {
  private readonly authApplication: AuthenticationApplication = inject(AuthenticationApplication);

  logout(): void {
    this.authApplication.logout();
  }

}
