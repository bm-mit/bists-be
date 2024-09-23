import { Module } from '@nestjs/common';
import { SocketGateway } from './socket/socket.gateway';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    ApiModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'hims',
      password: 'password',
      database: 'hims',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    SocketModule,
  ],
  controllers: [],
  providers: [SocketGateway],
})
export class AppModule {}
