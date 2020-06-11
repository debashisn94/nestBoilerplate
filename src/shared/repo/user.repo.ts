import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "../entity/user.entity";
import { UserDto } from "src/modules/user/dto/user.dto";

@EntityRepository(UserEntity)

export class UserRepo extends Repository <UserEntity> {

    async createUser (userDto : UserDto) {

        const {name, email, phone} = userDto;
        
        const user = await new UserEntity();

        user.name = name;
        user.phone = phone;
        user.email = email;

        user.save();
        
        return user;
    }
}

