export class LogIn {
  static readonly type = '[Auth] Log in';
  constructor(public payload: { email: string, password: string }) {}
}

export class LogOut {
  static readonly type = '[Auth] Log out';
}
