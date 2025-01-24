import {Component, inject, input, InputSignal} from '@angular/core';
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
  loadingMessage: InputSignal<string> = input.required()

  /**
   * To check if the application is loading.
   */
  get isLoading(): boolean {
    console.info(this.loadingMessage() + ' : ' + this.authApplication.isLoading())
    return this.authApplication.isLoading();
  }

}
