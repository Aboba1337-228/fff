import express from "express";
import { CheckRoleMiddleware } from "../middleware/RoleMw.js";
import { allComments, changeStatus, commentsForFilter, createComment, deleteComment, userComments } from "../contrillers/commentController.js";

const commentRouter = express.Router()

commentRouter.post('/create', createComment)
commentRouter.post('/changeStatus', CheckRoleMiddleware(['ADMIN']), changeStatus)
commentRouter.get('/allForLesson/:lessonId', CheckRoleMiddleware(['ADMIN', 'USER']), allComments)
commentRouter.get('/userComments/:userId', CheckRoleMiddleware(['ADMIN', 'USER']), userComments)
commentRouter.get('/filter', CheckRoleMiddleware(['ADMIN', 'USER']), commentsForFilter)
commentRouter.get('/delete/:commentId', CheckRoleMiddleware(['ADMIN']), deleteComment)

export default commentRouter