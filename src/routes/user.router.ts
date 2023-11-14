import { Router } from "express"
import { createUserController, deleteUserController, readUserByIdController, readUserController, updateUserController } from "../controllers/user.controller"
import { verifyIdexist } from "../middlewares/verifyIdExist.middleware"

export const userRouter: Router = Router()

userRouter.use('/:userId', verifyIdexist)

userRouter.post('/', createUserController)
userRouter.get('/', readUserController)
userRouter.patch('/:userId', updateUserController)
userRouter.get('/:userId', readUserByIdController)
userRouter.delete('/:userId', deleteUserController)