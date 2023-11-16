import { Request, Response, NextFunction } from "express"
import { PaginationParamns } from "../interfaces/pagination.interface"

export const pagination = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    const queryPage: number = Number(req.query.page)
    const queryPerPage: number = Number(req.query.perPage)

    const page: number = queryPage && queryPage > 1 ? queryPage : 1
    const perPage: number = queryPerPage && queryPerPage > 0 ? queryPerPage : 5

    const baseUrl: string = 'http://localhost:3000/products'
    const prevPage: string = `${baseUrl}?page=${page - 1}&perPage=${perPage}`
    const nextPage: string = `${baseUrl}?page=${page + 1}&perPage=${perPage}`

    const pagination: PaginationParamns = {
        page: perPage * (page - 1),
        perPage,
        prevPage,
        nextPage
    }

    res.locals = { ...res.locals, pagination }
    return next()
}