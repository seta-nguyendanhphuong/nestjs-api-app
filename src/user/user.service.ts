import { HttpException, Injectable } from '@nestjs/common';
import { USER } from './user.mock';
import { userType } from './user.dto'; // import type

@Injectable({})
export class UserService {
  private user = USER;

  getUsers() {
    return this.user;
  }

  getUserById(id: number) {
    const userById = this.user.find((user) => user.id == id);

    if (userById == null) {
      throw new HttpException('Not Found', 404);
    }

    return userById;
  }

  deleteById(id: number) {
    console.log(id);

    const indexUser = this.user.findIndex((user) => user.id == id);
    console.log(indexUser);

    if (indexUser === -1) {
      throw new HttpException('Not Found', 404);
    }

    this.user.splice(indexUser, 1);
    return {
      message: `User at index: ${indexUser}`,
      data: this.user,
    };
  }

  postUser(userReceive: userType) {
    // console.log(userReceive);

    this.user.push(userReceive);
    if (userReceive) {
      return {
        status: 'success',
        data: this.user,
      };
    } else {
      return {
        status: 'fail',
        message: 'Posting not success !!',
      };
    }
  }

  updateUser(
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
  ) {
    const indexUser = this.user.findIndex((user) => user.id == id);

    if (indexUser < 0) {
      throw new HttpException('Not Found', 404);
    }

    this.user[indexUser] = {
      id: id,
      email: email,
      first_name: first_name,
      last_name: last_name,
      avatar: avatar,
    };

    return {
      message: `Update user at postion ${indexUser} successful`,
      data: this.user,
    };
  }
}
