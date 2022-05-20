import mongoose from 'mongoose';

export const connetToDb = () => {  // exporta a função connetToDb
  mongoose
    .connect(process.env.DB_URI, {  // conecta ao banco de dados
      useNewUrlParser: true,  // usa o novo formato de url
      useUnifiedTopology: true,  // usa a nova topologia
    })
    .then(() => console.log('MongoDB Atlas Conectado!')) // mensagem de sucesso
    .catch((err) => console.error(err)); // mensagem de erro
};
