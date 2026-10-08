import Filme from '../model/filme.js'
class ServiceFilme {
   Buscar() {
       return Filme.Buscar()
   }
   BuscarUm(id) {
       if(!id || isNaN(id)) {
           throw new Error("Informe o id corretamente")
       }
       return Filme.BuscarUm(id)
   }
   BuscarClassificacao(classificacao) {
       if (classificacao === null) {
           throw new Error("Informe a classificação indicativa")
       }
       return Filme.BuscarClassificacao(classificacao)
   }
   Criar(titulo, classificacao, descricao, lancado) {
       if(!titulo, !classificacao, !descricao, !lancado) {
           throw new Error("Favor informar todos os dados")
       }
       Filme.Criar(titulo, classificacao, descricao, lancado)
   }
   Alterar(id, titulo, classificacao, descricao, lancado) {
       if(!id || isNaN(id) || !titulo, !classificacao, !descricao, !lancado) {
           throw new Error("Favor informar todos os dados")
       }
       Filme.Alterar(id, titulo, classificacao, descricao, lancado)
   }
   Deletar(id) {
       if(!id || isNaN(id)) {
           throw new Error("Favor informar o Id corretamente")
       }
       Filme.Deletar(id)
   }
}
export default new ServiceFilme()