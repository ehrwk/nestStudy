import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { UserService } from './user.service';


@Controller('user')
export class UserController {
    
    constructor (private userService: UserService){}

    //유저생성
    @Post()
    create(@Body() userData: CreateUserDto){
        return this.userService.create(userData);
    }

    //유저 수정
    @Patch('/:id')
    update(@Param("id") userId: number, @Body() userData: UpdateUserDto){
        return this.userService.update(userId, userData);
    }

    //유저 1명조회
    @Get('/:id')
    getUser(@Param("id") userId: number){
        return this.userService.getUser(userId);
    }
    
}