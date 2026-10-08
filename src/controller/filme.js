import ServiceFilme from '../service/filme.js'
class ControllerFilme {
   Buscar(req, res) {
       try {
           const filmes = ServiceFilme.Buscar()
           res.send({ filmes })
       } catch (e) {
           res.send({ message: e.message })
       }
   }
   BuscarUm(req, res) {
       try {
           const id = req.params.id
           const titulo = ServiceFilme.BuscarUm(id)
           res.send({ titulo })
       } catch (error) {
           res.send({ message: error.message })
       }
   }
   BuscarClassificacao(req, res) {
       try {
           const filmes = ServiceFilme.BuscarClassificacao(req.params.classificacao)
           res.send({ filmes })
       } catch (error) {
           res.send({ message: error.message })
       }
   }
   Criar(req, res) {
       try {
           const titulo = req.body.titulo
           const classificacao = req.body.classificacao
           const descricao = req.body.descricao
           const lancado = req.body.lancado
           ServiceFilme.Criar(titulo, classificacao, descricao, lancado)
           res.send({ message: "Catalogado com sucesso!" })
       } catch (error) {
           res.send({ message: error.message })
       }
   }
   Alterar(req, res) {
       try {
           const id = req.params.id
           const titulo = req.body.titulo
           const classificacao = req.body.classificacao
           const descricao = req.body.descricao
           const lancado = req.body.lancado
           ServiceFilme.Alterar(id, titulo, classificacao, descricao, lancado)
           res.send({ message: "Alterado com sucesso!" })
       } catch (error) {
           res.send({ message: error.message })
       }
   }
   Deletar(req, res) {
       try {
           const id = req.params.id
           ServiceFilme.Deletar(id)
           res.send({ message: "Deletado com sucesso!" })
       } catch (error) {
           res.send({ message: error.message })
       }
   }
}
export default new ControllerFilme()