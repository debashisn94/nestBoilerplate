import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepo } from 'src/shared/repo/user.repo';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor (
        @InjectRepository(UserRepo)
        private userRepo : UserRepo,
    ) {}

    async createUser (userDto : UserDto) {
        
        return this.userRepo.createUser(userDto);
    }
    
}
