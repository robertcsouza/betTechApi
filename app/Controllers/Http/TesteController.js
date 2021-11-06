'use strict'
const Relatorio = use('App/Models/Relatorio')
const Teste = use('App/Models/Teste')
class TesteController {

    async index({auth,request,response}){
        const {relatorio_id} = request.params; 
         //const teste = await Teste.findBy('relatorio_id',relatorio_id);
         const teste = await Teste.query()
         .where('relatorio_id','=', relatorio_id)
         .fetch()
         
         

        return teste;
    }

    async store({auth,request,response}){
        const {id} = auth.user;
        const {relatorio_id} = request.params; 
       const body = request.body; 

       const relatorio = await  Relatorio.find(relatorio_id);
       
       if(!relatorio) return response.status(401).send({ error: "Não foi possivel encontrar o Relatorio"})


       await relatorio.teste().create(body); 
        
        return {"ok":"teste adicionado"};        
    }

    async update({auth,request,response}){
        const {teste_id} = request.params;
        const {carga} = request.body;
        const teste = await Teste.find(teste_id);
       
        teste.merge({'carga':carga})
        teste.save();
        return teste;
       
    }
}

module.exports = TesteController
