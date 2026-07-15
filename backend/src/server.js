import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()

import userRoute from "./routes/user.route.js"

app.use(express.json())


app.use("/user", userRoute)

const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})