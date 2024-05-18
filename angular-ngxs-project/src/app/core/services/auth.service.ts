import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';

// MODELS
import { User } from '../../state/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  logIn(user: { email: string, password: string}): Observable<User> {
    return observableOf({
      username: 'Some User',
      csrf_token: "x-123456",
      user_id: 1,
      client_id: 1,
      is_confirmed: true,
      token: '123456'
      }).pipe(
        delay(500)
      );
  }

  logOut(): Observable<any> {
    return observableOf({"detail": "Successfully logged out."});
  }

}
