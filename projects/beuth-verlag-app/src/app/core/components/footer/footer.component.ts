import {Component} from '@angular/core';

import hyperlinksDataset from "../../../../assets/data/hyperlinks.json";
import socialMediasDataset from "../../../../assets/data/social-medias-links.json";
import {Hyperlink} from "../../../models/hyperlink";
import {NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgOptimizedImage, MatButtonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly hyperlinks: Hyperlink[] = hyperlinksDataset as Hyperlink[];
  readonly socialMedias: Hyperlink[] = socialMediasDataset as Hyperlink[];
  readonly resetPasswordText: string = "Reset Password";
}
