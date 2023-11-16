import { Request, Response, NextFunction } from "express";
import { userRepository } from "../repositories";
import AppError from "../errors/AppError.error";
import User from "../entities/User.entity";

export const verifyIdexist = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    const foundUser: User | null = await userRepository.findOneBy({id: Number(req.params.userId)})

    if(!foundUser) {
        throw new AppError('User not found', 404)
    }

    res.locals = { ...res.locals, foundUser}

    return next()
}