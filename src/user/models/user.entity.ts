import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class userEntity {
    @PrimaryGeneratedColumn()//creates a primary column which value wil be automatically genrated with an auto increment value
    id:number;

    @Column()//each entity class property that is marked with @column will be mapped to the appropriate db table column
    name:string;

    @Column({unique:true})
    username:string;

    @Column({nullable: true})
    email:string;
}