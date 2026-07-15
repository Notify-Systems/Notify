import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()

app.use(express.json())


const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})