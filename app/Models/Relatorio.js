'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Relatorio extends Model {
    cliente(){
        return this.belongsTo('App/Models/Cliente')
     } 

     teste(){
        return this.hasMany('App/models/Teste')
    }
}

module.exports = Relatorio
