import express from "express"
const app = express()

app.use(express.json())


const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})