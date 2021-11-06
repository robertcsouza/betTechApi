'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {
    endereco(){
        return this.hasOne('App/models/Endereco')
    }

    relatorio(){
        return this.hasMany('App/models/Relatorio')
    }
   
}

module.exports = Cliente
