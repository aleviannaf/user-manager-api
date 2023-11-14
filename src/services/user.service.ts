import User from "../entities/User.entity";
import AppError from "../errors/AppError.error";
import { useRepository } from "../repositories";

export const createUserService = async (data: Omit<User, 'id'>): Promise<User> =>{
    const newUser: User = await useRepository.save(data)

    return newUser
}

export const readUserService = async (): Promise<User[]> =>{
    const users: User[] = await useRepository.find()

    return users
}

export const upadteUserServive = async (user: User, data: Partial<User>): Promise<User> =>{
    return await useRepository.save({...user, ...data})
}

export const deleteUserService = async (user: User):Promise<void>=>{
    await useRepository.remove(user)
}