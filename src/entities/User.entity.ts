import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({length: 255, unique: true})
    userName: string

    @Column({length: 255})
    password: string

    @Column({length: 255, unique: true})
    email: string
}