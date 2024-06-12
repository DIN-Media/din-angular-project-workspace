import hyperlinksDataset from "../../../assets/data/hyperlinks.json";
import {Hyperlink} from "../../models/hyperlink";

export class RoutingPaths {
  static readonly HOME: string = 'home';
  static readonly AUTHENTICATE: string = 'authenticate';
  static readonly LOGIN: string = 'login';
  static readonly AUTH_LOGIN: string = this.AUTHENTICATE + '/' + this.LOGIN;
}

export class PageNames {
  static readonly BASE_NAME: string = 'DIN Beuth Verlag - '
}

export class ErrorType {
  static readonly REQUIRED: string = 'required';
    static readonly EMAIL: string = 'email';
}

export class ErrorMessage {
  // Email
  static readonly EMAIL_REQUIRED: string = 'E-Mail erforderlich';
  static readonly EMAIL_INVALID: string = 'E-Mail ungültig';

  // Password
  static readonly PASSWORD_REQUIRED: string = 'Passwort erforderlich';
}

export class HyperlinksNames {
  private static readonly hyperlinks: Hyperlink[] = hyperlinksDataset as Hyperlink[];

  static readonly NEWSLETTER: string = this.hyperlinks[0].name;
  static readonly RESET_PASSWORT: string = this.hyperlinks[1].name;
}
