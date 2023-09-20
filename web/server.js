import axios from "axios" //bibliota que conecta o back com o front

export const server = axios.create({
  baseURL: "http://localhost:3333", // colocamos parte do endereço que vai se repetir para todas as requisições.
})
