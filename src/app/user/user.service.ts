import { Injectable } from '@angular/core';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private user: UserModel | undefined;
  constructor() { }
}
