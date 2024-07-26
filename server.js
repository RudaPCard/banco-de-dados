import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.get('/usuarios', (req, res) => {

    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {
    
    await prisma.user.create({
        data: { 
            
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })
    res.status(201).json({ message: "Usuário criado com sucesso!"})
})



app.listen(3000)

// req = requisição
// res = resposta
// http://localhost:3000