import { Router } from 'express'
import users from './users'
import items from './items'

const api = Router()

api.use('/users', users)
api.use('/', items)

export default api