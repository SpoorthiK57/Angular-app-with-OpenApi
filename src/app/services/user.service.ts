
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';

import { UserControllerService } from '../api/api/userController.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private userControllerService: UserControllerService) {

  }

  getUserList(): Observable<User[]> {
    return this.userControllerService.findAllUser();
  }

  createUser(user: User): Observable<Object> {
    return this.userControllerService.registerUser(user);
  }

  getUserById(id: number): Observable<User> {
    return this.userControllerService.findById(id);
  }

  updateUser(id: number, user: User): Observable<Object> {
    return this.userControllerService.updateUser(id, user);
  }

  deleteUser(id: number): Observable<Object> {
    return this.userControllerService.deleteUser(id);
  }
}