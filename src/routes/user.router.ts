import { Router } from "express"
import { createUserController, deleteUserController, readUserByIdController, readUserController } from "../controllers/user.controller"

export const userRouter: Router = Router()

userRouter.post('/', createUserController)
userRouter.get('/', readUserController)
userRouter.get('/:userId', readUserByIdController)
userRouter.delete('/:userId', deleteUserController)