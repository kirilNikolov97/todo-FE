import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  authenticate(username: string, password: string) {
    if (username !== '' && password !== '') {
      sessionStorage.setItem('loggedInUser', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    const currentUser = sessionStorage.getItem('loggedInUser');
    return currentUser !== null;
  }

  logout() {
    sessionStorage.removeItem('loggedInUser');
  }

}
