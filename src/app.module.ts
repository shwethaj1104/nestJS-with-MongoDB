import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { userEntity } from './user/models/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type:'postgres',
      url:process.env.DATABASE_URL,
      autoLoadEntities:true,
      synchronize:true
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   url: process.env.MONGODB_DATABASE_URL,
    //   database: process.env.MONGODB_DATABASE,
    //   // entities: [
    //   //   __dirname + '/../**/*.entity.{ts,js}',
    //   // ],
    //   entities: [userEntity],
    //   ssl: true,
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    //   retryWrites:false, 
    // }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
