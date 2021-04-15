import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { BAD_REQUEST } from '../../constants/api'

const api = Router()

//get all users
api.get('/', async (req, res) => {
  try {

    const prisma = new PrismaClient()
    const users = await prisma.user.findMany({
      select: {
        firstname: true,
        lastname: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        id: true
      }
    })

    res.json({ data: { users } })
  } catch (err) {
    res.status(BAD_REQUEST.status).json({ error: err.message })
  }
})

// api.put('/:id', async (req, res) => {
//   try {
//     const id = parseInt(req.params.id, 10)

//     const prisma = new PrismaClient()
//     const user = await prisma.user.findFirst({
//       where: {
//         id
//       }
//     })

//     if (!user) {
//       return res.status(BAD_REQUEST.status).json({ error: `User ${id} doesn't exist` })
//     }

//     const acceptedFields = ['firstname', 'lastname', 'gender']
//     let data = {}
//     for (const key of acceptedFields) {
//       if (req.body[key]) {
//         data[key] = req.body[key]
//       }
//     }

//     const updatedUser = await prisma.user.update({
//       where: {
//         id
//       },
//       data
//     })

//     res.json({ data: { user: updatedUser } })
//   } catch (err) {
//     res.status(BAD_REQUEST.status).json({ error: err.message })
//   }
// })

// delete an user
api.delete('/:id', async (req, res) => {
  const prisma = new PrismaClient()
  try {
    await prisma.user.delete({ where: { id: Number(req.params.id)} })

    return res.json({ message: 'User deleted'})
  } catch (err) {
      console.log(err)
      return res.status(500).json({ err: 'Something went wrong' })
  }
})

//update an user 
api.put('/:id', async (req, res) => {
    const { firstname, lastname, email, telenumber } = req.body
    const id = req.params.id
    const prisma = new PrismaClient()
    try {
      let user = await prisma.user.findUnique({ where: { id: Number(req.params.id)} })
      console.log(user)
      if (!user) throw { user: 'User not found' }

      user = await prisma.user.update({
        where: { id: Number(req.params.id) },
        data: { firstname, lastname, email, telenumber },
      })

      return res.json(user)
    } catch (err) {
      console.log(err)
      return res.status(404).json(err)
    }
  }
)

// find an user
api.get('/:id', async (req, res) => {
  const prisma = new PrismaClient()
  try {
      const user = await prisma.user.findUnique({ where: { id: Number(req.params.id)} })

      return res.json(user)
  } catch ( err ) {
      console.log(err)
      return res.status(500).json({ err: 'Something went wrong'})
  }
})

export default api
