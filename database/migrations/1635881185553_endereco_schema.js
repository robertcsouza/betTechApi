'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecoSchema extends Schema {
  up () {
    this.create('enderecos', (table) => {
      table.increments()
      table.string('rua',80)
      table.integer('numero')
      table.string('complemento',244)
      table.string('cidade',80)
      table.string('estado',80)
      table.integer('cliente_id')
      .unsigned().references('id').inTable('clientes')
      table.timestamps()
    })
  }

  down () {
    this.drop('enderecos')
  }
}

module.exports = EnderecoSchema
