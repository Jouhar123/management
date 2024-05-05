import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/user/schema/user.schema';
import { UserService } from 'src/user/user.service';


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector,
    private userService:UserService
  ) {}

 
  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<Role[]>('roles', context.getHandler());
    if (!roles) {
      return true; 
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user; 
    if (!user || !user.roles) {
      return false;
    }
    if (user.roles.includes(Role.ADMIN)) {
        return true; 
      }
      return false; 
    }
  }

