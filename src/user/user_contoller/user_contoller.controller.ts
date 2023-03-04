import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { UserServiceService } from '../user_service/user_service.service';

@Controller('user')
export class UserContollerController {
    constructor(private userService: UserServiceService) { }

    // http://localhost:3000/user
    @Post()
    create(@Body() user: User): Observable<User> {
        return this.userService.create(user);
    }

    // http://localhost:3000/user/1
    @Get(':id')
    findOne(@Param() param): Observable<User> {
        return this.userService.findOne(param.id);
    }

    // http://localhost:3000/user
    @Get()
    findAll(): Observable<User[]> {
        return this.userService.findAll();
    }

    // http://localhost:3000/user/1
    @Delete(':id')
    deleteOne(@Param('id') id: string): Observable<User> {
        return this.userService.deleteOne(Number(id));
    }

    // http://localhost:3000/user/3
    @Put(':id')
    updateOne(@Param('id') id:string,@Body() user:User):Observable<any>{
        return this.userService.updateOne(Number(id),user);
    }

}
