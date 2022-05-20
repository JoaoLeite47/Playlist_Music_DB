import express from 'express';
import dotenv from "dotenv";
import { connetToDb } from "./src/database/db.js";


dotenv.config(); // carrega as variáveis de ambiente

connetToDb();

const app = express(); // instancia do express

app.get('/', (req, res) => { 
  res.send('hello world');
});

const port = process.env.PORT || 3000; // porta padrão

app.listen(port, () => {
  // inicia o servidor
  console.log(`Servidor rodando em http://localhost:${port}`); // mensagem de sucesso
});

