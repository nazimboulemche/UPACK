import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { isEmpty } from 'lodash'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import passport from 'passport'
import randomstring from 'randomstring'
import sendMail from '../../services/sendMail'
import { hashPassword } from '../../utils/password'

const api = Router()

//create new object
api.post('/items', async (req, res) => {
    
    const acceptedFields = ['description', 'adress', 'city', 'zipCode', ]

    const missingValues = acceptedFields.filter(acceptedFields => !req.body[acceptedFields])
    if (!isEmpty(missingValues)) {
        return res.status(400).json({
            error: `${missingValues.join(', ')} missing`
        })
    }

    const { description, adress, city, zipCode, isFound, imageLink, userId } = req.body

    const prisma = new PrismaClient()
    try {
        const item = await prisma.item.create ({
            data:{
            description,
            adress,
            city,
            zipCode,
            isFound,
            imageLink,
            userId
            } 
        })
    return res.json(item)
    } catch (err) {
        res.status(400).json({err: err.message})
    }
})

//delete an object
api.delete('/items/:id', async (req, res) => {
    const prisma = new PrismaClient()
  try {
    await prisma.item.delete({ where: { id: Number(req.params.id ) } })

    return res.json({ message: 'Item deleted' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
})

//read all object
api.get('/items', async (req, res) =>{
    const prisma = new PrismaClient()
    try {
        const allItems = await prisma.item.findMany({
            select: {
                id: true,
                description: true, 
                adress: true,
                zipCode: true,
                city: true,
                user: {
                    select: {
                        id: true,
                        email: true,
                    }
                }
            }
        })
        return res.json(allItems)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ err: 'Something went wrong'})
    }
})

// find an object
api.get('/items/:id', async (req, res) => {
    const prisma = new PrismaClient()
    try {
        const item = await prisma.item.findUnique({ where: { id: Number(req.params.id)} })

        return res.json(item)
    } catch ( err ) {
        console.log(err)
        return res.status(500).json({ err: 'Something went wrong'})
    }
})

export default api