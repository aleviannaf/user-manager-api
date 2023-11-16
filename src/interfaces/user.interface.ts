import { DeepPartial, Repository } from "typeorm";
import User from "../entities/User.entity";

export type UserRead = Array<User>;
export type UserUpdate = DeepPartial<User>;

export type UserRepo = Repository<User>