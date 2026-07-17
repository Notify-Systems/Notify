import app from "./app.js"
import dotenv from "dotenv";
dotenv.config();

const PORT = 3939

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})