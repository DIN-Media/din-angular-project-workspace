import {Component} from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";

import dataset from "../../../../assets/data/users-list.json"
import {Gender, User} from "../../../models/user.index";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-dummy-users-modal',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatListModule, MatIconModule, MatIconButton, MatDialogActions, MatDialogClose],
  templateUrl: './dummy-users-modal.component.html',
  styleUrl: './dummy-users-modal.component.css'
})
export class DummyUsersModalComponent {
  readonly users: User[] = dataset as User[];
  readonly Gender = Gender;

  selectedUser: User | undefined = undefined;

  constructor(private dialogRef: MatDialogRef<DummyUsersModalComponent>) {
  }

  /**
   * to select the user
   * @param user
   */
  selectUser(user: User): void {
    this.selectedUser = user;
  }


  save(): void {
    this.dialogRef.close(this.selectedUser);
  }

  /**
   * to cancel the selection of the user
   */
  undo(): void {
    this.selectedUser = undefined;
    this.dialogRef.close();
  }

}
