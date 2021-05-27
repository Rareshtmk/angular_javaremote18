import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private user: UserModel | undefined;
  constructor() { }

  public setUser(user: UserModel): void {
    this.user = user;
  }

  public getUser(): UserModel | undefined {
    return this.user;
  }
  

  public getToken(): string | undefined {
    if(this.user){
      return this.user.token;
    }
    return undefined;
  }

  public isUserLoged(): boolean {
    return this.user != undefined;
  }

  public logOut(): void {
    this.user = undefined;
  }
}
