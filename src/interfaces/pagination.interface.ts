import User from "../entities/User.entity"

export type Pagination = {
    prevPage: string | null
    nextPage: string | null
    count: number,
    data: Array<User>
}

export type PaginationParamns = {
    prevPage: string,
    nextPage: string,
    perPage: number,
    page: number
}