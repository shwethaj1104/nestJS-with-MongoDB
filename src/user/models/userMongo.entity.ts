import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = UserMongo & Document;

@Schema()
export class UserMongo {
    @Prop()
    id: number;

    @Prop()
    email: string;

    @Prop()
    name: string;

    @Prop()
    username: string;

    // @Prop([String])
    // favoriteFoods: string[]
}

export const UserSchema = SchemaFactory.createForClass(UserMongo);