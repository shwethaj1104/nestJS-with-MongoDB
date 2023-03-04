import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { UserDocument, UserMongo } from "./models/userMongo.entity";


@Injectable()
export class UsersRepository {
    constructor(@InjectModel(UserMongo.name) private userModel: Model<UserDocument>) {}

    async findOne(userFilterQuery: FilterQuery<UserMongo>): Promise<UserMongo> {
        return this.userModel.findOne(userFilterQuery);
    }

    async find(usersFilterQuery: FilterQuery<UserMongo>): Promise<UserMongo[]> {
        return this.userModel.find(usersFilterQuery)
    }

    async create(userMongo: UserMongo): Promise<UserMongo> {
        const newUser = new this.userModel(userMongo);
        return newUser.save()
    }

    async findOneAndUpdate(userFilterQuery: FilterQuery<UserMongo>, userMongo: Partial<UserMongo>): Promise<UserMongo> {
        return this.userModel.findOneAndUpdate(userFilterQuery, userMongo, { new: true });
    }
}