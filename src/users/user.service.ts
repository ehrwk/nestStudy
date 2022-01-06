import { Body, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from "./dto/update-user.dto";

import {
    User,
    Prisma
} from '@prisma/client';

import { throws } from "assert";


@Injectable()
export class UserService{
    constructor(private prisma: PrismaService){}
       
    create(userData: CreateUserDto){
        return this.prisma.createUser(userData);
    }
    
    update(userId: number, userData: UpdateUserDto){
        return this.prisma.updateUser(userId, userData);
    }

    getUser(userId: number){
        return this.prisma.findUserById(userId);
    }

}