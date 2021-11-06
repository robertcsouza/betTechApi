'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RelatorioSchema extends Schema {
  up () {
    this.create('relatorios', (table) => {
      table.string('equipamento',244),
      table.string('marca',244),
      table.integer('serie'),
      table.string('aferido',244),
      table.string('certificado',244),
      table.string('conferente',244),
      table.string('respoonsavel',244),
      table.integer('cliente_id')
      .unsigned().references('id').inTable('clientes')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('relatorios')
  }
}

module.exports = RelatorioSchema
