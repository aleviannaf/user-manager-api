import { Router } from "express"
import { createUserController, deleteUserController, readUserByIdController, readUserController } from "../controllers/user.controller"
import { verifyIdexist } from "../middlewares/verifyIdExist.middleware"

export const userRouter: Router = Router()

userRouter.post('/', createUserController)
userRouter.get('/', readUserController)
userRouter.get('/:userId', verifyIdexist, readUserByIdController)
userRouter.delete('/:userId', verifyIdexist, deleteUserController)