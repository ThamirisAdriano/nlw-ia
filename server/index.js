import cors from "cors"
import express from "express"

const app = express()
app.use(cors()) //habilita a conexão do back com o front

//criando a rota
app.get("/summary/:id", (request, response) => {
  response.send("ID do vídeo: " + request.params.id) //queremos recuperar de dentro da requisição o id do parametro
}) //quando a requisição for feita para o servidor utilizando get, ele executa a função

app.listen(3333, () => console.log("Server is running on port 3333")) //método para escutar as requisições (porta, msg)
