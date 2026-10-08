import express from "express"
import ControllerFilme from '../controller/filme.js'
const router = express.Router()
router.get("/buscar", ControllerFilme.Buscar)
router.get("/buscarUm/:id", ControllerFilme.BuscarUm)
router.get("/buscarClassificacao/:classificacao", ControllerFilme.BuscarClassificacao)
router.post("/criar", ControllerFilme.Criar)
router.put("/alterar/:id", ControllerFilme.Alterar)
router.delete("/deletar/:id", ControllerFilme.Deletar)
export default router