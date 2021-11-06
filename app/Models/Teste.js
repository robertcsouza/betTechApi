'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Teste extends Model {

    relatorio(){
        return this.belongsTo('App/Models/Relatorio')
     }  
}

module.exports = Teste
