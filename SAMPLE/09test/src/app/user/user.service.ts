import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  name:object = {
    firstname:'hello',
    lastname:'kake'
  }
}
