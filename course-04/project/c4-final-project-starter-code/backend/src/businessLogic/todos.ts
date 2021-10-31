import { TodoAccess } from '../helpers/todosAcess'
// import { AttachmentUtils } from '../helpers/attachmentUtils';
import { TodoItem } from '../models/TodoItem'
import { TodoUpdate } from '../models/TodoUpdate'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
import { createLogger } from '../utils/logger'
import * as uuid from 'uuid'
// import * as createError from 'http-errors'

const logger = createLogger('TodoBusinessLogic')
const todoAccess = new TodoAccess()

export async function createTodo(userId: string, request: CreateTodoRequest)
    : Promise<TodoItem>
{
    // check if user exists

    logger.info(`creating todo for user ${userId}`)

    const todoItem: TodoItem = {
        userId: userId,
        todoId: uuid.v4(),
        createdAt: new Date().toISOString(),
        done: false,
        ...request
    }

    return todoAccess.createTodo(todoItem)
}

export async function getTodosForUser(userId: string)
    : Promise<TodoItem[]>
{
    // check if user exists

    logger.info(`getting all todos for user ${userId}`)

    return todoAccess.getTodosForUser(userId)
}

export async function updateTodo(userId: string, todoId: string, request: UpdateTodoRequest)
    : Promise<TodoItem>
{
    // check if user exists
    // check if todo ID exists

    const todoUpdate = request as TodoUpdate

    return await todoAccess.updateTodoForUser(userId, todoId, todoUpdate)
}

export async function deleteTodo(userId: string, todoId: string)
    :Promise<TodoItem>
{
    // check if user exists
    // check if todo ID exists

    logger.info(`deleting todo ${todoId} for user ${userId}`)

    return await todoAccess.deleteTodoForUser(userId, todoId)
}

export async function createAttachmentPresignedUrl(userId: string, todoId: string)
    : Promise<string>
{
    return todoId
}
