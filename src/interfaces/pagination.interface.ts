import { UserRead } from "./user.interface"

export type Pagination = {
    prevPage: string | null
    nextPage: string | null
    count: number,
    data: UserRead
}

export type PaginationParamns = {
    prevPage: string,
    nextPage: string,
    perPage: number,
    page: number
}