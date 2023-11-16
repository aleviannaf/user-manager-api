import { Router } from "express"
import { createUserController, deleteUserController, readUserByIdController, readUserController, updateUserController } from "../controllers/user.controller"
import { verifyIdexist } from "../middlewares/verifyIdExist.middleware"
import { pagination } from "../middlewares/pagination.middleware"

export const userRouter: Router = Router()

userRouter.use('/:userId', verifyIdexist)

userRouter.post('/', createUserController)
userRouter.get('/', pagination, readUserController)
userRouter.patch('/:userId', updateUserController)
userRouter.get('/:userId', readUserByIdController)
userRouter.delete('/:userId', deleteUserController)