'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TesteSchema extends Schema {
  up () {
    this.create('testes', (table) => {
      table.integer('reg'),
      table.string('nota',244),
      table.string('fckProj',244),
      table.string('moldagem',244),
      table.string('ruptura',244),
      table.integer('idade'),
      table.integer('slump'),
      table.string('hora',45),
      table.string('local',244),
      table.string('peca',244),
      table.decimal('carga'),
      table.decimal('fck'),
      table.integer('relatorio_id')
      .unsigned().references('id').inTable('relatorios')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('testes')
  }
}

module.exports = TesteSchema
