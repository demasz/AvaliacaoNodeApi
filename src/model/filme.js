const filmes = new Array(
    
    {
        id: 0,
        titulo: "Vingadores Doomsday",
        classificacao: 14,
        descricao:"Ação, Drama, Aventura, Ficção Científica",
        lancado: "não"
   },

    {
        id: 1,
        titulo: "DUNA Parte III",
        classificacao: 16,
        descricao:"Fantasia, Ficção Científica, Ecologia, Espaço Cideral",
        lancado: "não"
   },

    {
        id: 2,
        titulo: "Obcessão",
        classificacao: 18,
        descricao:"Terror Psicológico, Romance, Suspense",
        lancado: "sim"
   },

    {
        id: 3,
        titulo: "A Odisseia",
        classificacao: 16,
        descricao:"Épico de Ação e Fantasia",
        lancado: "sim"
   }

)
class Filme {
   Buscar() {
       return filmes
   }
   BuscarUm(id) {
       return filmes[id]
   }
   BuscarClassificacao(classificacao) {
       const desejada = String(classificacao)
       return filmes.filter(({ classificacao }) =>
           String(classificacao) === desejada
       )
   }
   Criar(titulo, classificacao, descricao, lancado) {
       filmes.push({ titulo, classificacao, descricao, lancado })
   }
   Alterar(id, titulo, classificacao, descricao, lancado) {
       filmes[id].filme = titulo
       filmes[id].filme = classificacao
       filmes[id].filme = descricao
       filmes[id].filme = lancado
   }
   Deletar(id) {
       filmes.splice(id, 1)
   }
}
export default new Filme()