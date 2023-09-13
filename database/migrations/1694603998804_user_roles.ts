import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user_roles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('user').onDelete('CASCADE')
      table.integer('role_id')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at').defaultTo(this.now(6)).notNullable()
      table.timestamp('updated_at').defaultTo(this.now(6)).notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
