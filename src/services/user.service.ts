import User from "../entities/User.entity";
import { Pagination, PaginationParamns } from "../interfaces/pagination.interface";
import { useRepository } from "../repositories";

export const createUserService = async (data: Omit<User, 'id'>): Promise<User> => {
    const newUser: User = await useRepository.save(data)

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

    const [users, count] = await useRepository.findAndCount({
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

export const upadteUserServive = async (user: User, data: Partial<User>): Promise<User> => {
    return await useRepository.save({ ...user, ...data })
}

export const deleteUserService = async (user: User): Promise<void> => {
    await useRepository.remove(user)
}