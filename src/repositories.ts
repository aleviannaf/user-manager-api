import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import User from "./entities/User.entity";
import { UserRepo } from "./interfaces/user.interface";

export const userRepository: UserRepo = AppDataSource.getRepository(User)