export interface User {
  user_id: number;
  client_id?: number;
  username: string;
  is_confirmed: boolean;
  csrf_token: string;
  token: string;
}

export class AuthStateModel {
  authenticated!: boolean;
  user!: User;
}
