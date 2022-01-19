import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';
import { Post, Request } from '@nestjs/common';

@Controller('/auth')
export class AuthController {
  constructor(private prisma: PrismaService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/')
  async login(@Request() req) {
    return req.user;
  }
}
