import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UpdateuserDto } from 'src/user/dto/updateuser.dto/updateuser-dto';
import { UserDto } from 'src/user/dto/user.dto/user-dto';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userserv: UserService) {}

  @Post()
  create(@Body() newUser: UserDto) {
    return this.userserv.createU(newUser);
  }

  @Get('flight')
  async find() {
    return this.userserv.findflight();
  }

  @Delete(':id')
  async rmbook(@Param('id') id: number) {
    return this.userserv.remove(id);
  }

  @Get(':datef')
  async finddate(@Param('datef') datef: string) {
    return this.userserv.findDay(datef);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateuserdto: UpdateuserDto) {
    return this.userserv.update(id, updateuserdto);
  }
}
