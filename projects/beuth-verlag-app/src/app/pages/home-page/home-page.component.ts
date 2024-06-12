import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {SpinnerComponent} from "../../core/components/spinner/spinner.component";

import dataset from "../../../assets/data/users-list.json";
import {SessionService} from "../../core/authentication/session.service";
import {User} from "../../models/user.index";

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
  private readonly session: SessionService = inject(SessionService);
  private readonly users: User[] = dataset as User[];

  readonly currentUser: User | undefined = this.getCurrentUser();

  private getCurrentUser(): User | undefined {
    const userId: string | null = this.session.getUserId();
    return this.users.find((user: User): boolean => user.id === userId);
  }
}
