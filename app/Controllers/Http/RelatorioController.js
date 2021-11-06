'use strict'
const Cliente = use('App/Models/Cliente')
const Relatorio = use('App/Models/Relatorio')
const Hash = use('Hash')
class RelatorioController {

    async store({auth,request,response}){
        const {id} = auth.user;
        
        const {client_id} = request.params; 
        
        const body = request.body;

        let date = new Date();    
        const hash = await Hash.make(date.toString());

        const payload = {"token":hash.toString(),...body};
        
       const cliente = await  Cliente.find(client_id);

       if(!cliente)   return response.status(401).send({ error: "Não foi possivel encontrar o cliente"})
       if(!client_id)   return response.status(401).send({ error: "Não foi possivel encontrar o cliente"})
       
       await cliente.relatorio().create(payload); 
       
        return {'ok':'relatorio cadastrado'};
          
         
    }

     async generate({auth,request,response}){

            const {relatorio_id} = request.params;

           // const relatorio = await Relatorio.find(relatorio_id);
           const relatorio = await Relatorio.query().where('id',relatorio_id).with('cliente').with('teste').fetch()
            
            return relatorio;

     }


     async generateAuth({request,response}){

        const token = request.header('x-token');
        
        
          if(!token)   return response.status(401).send({ error: "Não foi possivel gerar o relatorio"})   
       // const relatorio = await Relatorio.find(relatorio_id);
       const relatorio = await Relatorio.query().where('token',token).with('cliente').with('teste').fetch()
        
        return relatorio;
        

 }


  


}

module.exports = RelatorioController
