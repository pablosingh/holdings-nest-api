import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('all')
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
  @Get(':id')
  async findUserById(@Param('id') id: number) {
    return await this.userService.findUserById(id);
  }
  @Post('create')
  async createUser(@Body() body: any) {
    const { full_name, email } = body;
    return await this.userService.createUser(full_name, email);
  }
  @Delete('delete/:id')
  async deleteUser(@Param('id') id: number) {
    return await this.userService.deleteUser(id);
  }
  @Put('update')
  async updateUser(@Body() body: any) {
    const { id, full_name, email } = body;
    return await this.userService.updateUser(id, full_name, email);
  }
}
