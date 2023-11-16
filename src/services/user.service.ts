import User from "../entities/User.entity";
import { Pagination, PaginationParamns } from "../interfaces/pagination.interface";
import { UserUpdate } from "../interfaces/user.interface";
import { userRepository } from "../repositories";

export const createUserService = async (data: Omit<User, 'id'>): Promise<User> => {
    const newUser: User = await userRepository.save(data)

    return newUser
}

export const readUserService = async (
    {
        prevPage,
        nextPage,
        perPage,
        page
    }: PaginationParamns
): Promise<Pagination> => {

    const [users, count] = await userRepository.findAndCount({
        skip: page, // offset
        take: perPage, // limit
    })


    return {
        prevPage: page <= 1 ? null : prevPage,
        nextPage: count - page <= perPage ? null : nextPage,
        data: users,
        count,
    }
}

export const upadteUserServive = async (user: User, data: UserUpdate): Promise<User> => {
    return await userRepository.save({ ...user, ...data })
}

export const deleteUserService = async (user: User): Promise<void> => {
    await userRepository.remove(user)
}