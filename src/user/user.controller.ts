import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { userType } from './user.dto'; // import type
import { query } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/allUser')
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('/:id')
  getUserById(@Param('id') id) {
    return this.userService.getUserById(id);
  }

  @Post('/postUser')
  postUser(@Body() user: userType) {
    return this.userService.postUser(user);
  }

  @Delete('/deleteUser/:id')
  deleteUserById(@Param('id') id) {
    return this.userService.deleteById(id);
  }

  @Put('/updateUser/:id')
  updateUserById(@Param('id') id, @Body() body) {
    console.log(body);

    const email = body.email;
    const first_name = body.first_name;
    const last_name = body.last_name;
    const avatar = body.avatar;

    return this.userService.updateUser(
      id,
      email,
      first_name,
      last_name,
      avatar,
    );
  }
}
