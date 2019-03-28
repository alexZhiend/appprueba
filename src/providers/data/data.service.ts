import { Injectable } from '@angular/core';
import { AuthService } from './auth.service'

@Injectable()
export class DataService {

  constructor(private authService: AuthService) { }

  auth(): AuthService {
    return this.authService;
  }

}
