'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Endereco extends Model {
    cliente(){
        return this.belongsTo('App/Models/Cliente')
     }  
}

module.exports = Endereco