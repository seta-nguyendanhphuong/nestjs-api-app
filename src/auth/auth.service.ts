import { Injectable } from '@nestjs/common';

@Injectable({}) // this is dependency injection
export class AuthService {
  register() {
    return {
      message: 'Register an user',
    };
  }

  login() {
    return {
      message: 'Login an user',
    };
  }

  getData(): String {
    return "<h1>hello</h1>"
  }
}
