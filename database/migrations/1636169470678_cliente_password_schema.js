'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientePasswordSchema extends Schema {
  up () {
    this.create('cliente_passwords', (table) => {
      table.string('password',244)
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cliente_passwords')
  }
}

module.exports = ClientePasswordSchema
