'use strict'
const User = use('App/Models/User')
class UserController {
    async index({auth,request}){
      
        const {id,username,email} = auth.user
  
        return {id,username,email};

      }
  
  
      async create({ request,response }) {
      const data = request.only(["email", "password","username"])
      
      try {
  
        const user = await User.create(data)
      
        return user

      } catch (error) {
        
        if(error.code == 'ER_DUP_ENTRY'){
          return response.status(401).send({ error: "Usuario ja cadastrado"})
        }
         
        return response.status(401).send({ error: "Verifique os campos e tente novamente"})
           
      }
      
    }

    async reset({auth,request,response, }) {
        const  {id}= auth.user
        const user = await User.find(id);
        
        if(user){
          
          const data = request.only('password');
          user.merge(data);
          const result = await user.save();
  
          if(result === true){
              return {'messagem':'ação executada com sucesso'}
          }else{
            return response.status(200).send({ 'messagem': "Nada a atualizar"})
          }
          
        }
  
        return response.status(401).send({ error: "Nao autorizado"})

     
      
    }

    async update ({ auth, request, response }) {
        const  {id}= auth.user
        const user = await User.find(id);
        
        if(user){
          
          const data = request.only(["nome","telefone","whatsapp"]);
          user.merge(data);
          const result = await user.save();
  
          if(result === true){
              return {'messagem':'ação executada com sucesso'}
          }else{
            return response.status(200).send({ 'messagem': "Nada a atualizar"})
          }
          
        }
  
        return response.status(401).send({ error: "Nao autorizado"})
  }
  
}

module.exports = UserController
