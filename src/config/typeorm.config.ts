import {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'dummy_test',
    entities: [__dirname + '/../shared/entity/*.entity.{js,ts}'],
    synchronize: true,
};