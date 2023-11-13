import { Request, Response } from "express"
import { createUserService, deleteUserService, readUserByIdService, readUserService } from "../services/user.service"
import User from "../entities/User.entity"

export const createUserController = async (req: Request, res: Response): Promise<Response> =>{
    const user: User = await createUserService(req.body)

    return res.status(201).json(user)
}

export const readUserController = async (req: Request, res: Response): Promise<Response> =>{
    const users: User[] = await readUserService()

    return res.status(200).json(users)
} 

export const readUserByIdController = async (req: Request, res: Response): Promise<Response> =>{
    const user: User = await readUserByIdService(Number(req.params.userId))

    return res.status(200).json(user)
} 

export const deleteUserController = async (req: Request, res: Response): Promise<Response> =>{
    await deleteUserService(Number(req.params.userId))

    return res.status(204).send()
} 