export class RoutingPaths {
  static readonly HOME: string = 'home';
  static readonly AUTHENTICATE: string = 'authenticate';
  static readonly LOGIN: string = 'login';
  static readonly AUTH_LOGIN: string = this.AUTHENTICATE + '/' + this.LOGIN;
}

export class PageNames {
  static readonly BASE_NAME: string = 'DIN Beuth Verlag - '
}
