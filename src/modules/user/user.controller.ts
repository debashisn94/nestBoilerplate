import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
        
    constructor (
        private userService : UserService
    ) {}

    @Post()
    createUser( 
        @Body () userDto: UserDto 
    ) {
        return this.userService.createUser(userDto);
    }


}
