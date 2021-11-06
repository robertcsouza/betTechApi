'use strict'

const Cliente = use('App/Models/Cliente')
const Endereco = use('App/Models/Endereco')
const Password = use('App/Models/Clientepassword')
const Hash = use('Hash')

class ClienteController {

    async index({auth,response,params}){
      
         const clientes = await Cliente.query().with('endereco').fetch()
        return clientes 
   }


    async store({auth,request}){
        const {id} = auth.user;
        
        
        const clienteRequest = request.only(['nome','cnpj','obra','contrato','telefone']);

        const enderecoRequest = request.only(['rua','numero','complemento','cidade','estado','cep','bairro']);

       const cliente = await  Cliente.create(clienteRequest);
        
       await cliente.endereco().create(enderecoRequest); 
        
        return cliente;

         
    }



}

module.exports = ClienteController
