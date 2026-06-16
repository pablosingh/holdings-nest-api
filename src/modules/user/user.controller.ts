import { Controller, Get, Param, Post, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('all')
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
  @Get('/id=:id')
  async findUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findUserById(id);
  }
  @Get('info/id=:id')
  async getUserWithInfo(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getUserWithInfo(id);
  }
  @Post('create')
  async createUser(@Body() toCreate: UserDto) {
    return await this.userService.createUser(toCreate);
  }
  @Delete('delete/id=:id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.deleteUser(id);
  }
  @Put('update/id=:id')
  async updateUser(@Param('id', ParseIntPipe) id: number, @Body() toUpdate: UserDto) {
    return await this.userService.updateUser(id, toUpdate);
  }
}
