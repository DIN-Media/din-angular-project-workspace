import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {SpinnerComponent} from "../../core/components/spinner/spinner.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatButton,
    SpinnerComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
}
