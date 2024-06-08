import {Component, inject} from '@angular/core';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AuthenticationApplication} from "../../authentication/authentication.application";

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [
    MatProgressSpinnerModule
  ],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  private readonly authApplication: AuthenticationApplication = inject(AuthenticationApplication);

  /**
   * To check if the application is loading.
   */
  get isLoading(): boolean {
    return this.authApplication.isLoading;
  }

}
