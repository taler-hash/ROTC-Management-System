import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'role'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('role_id')
      table.string('role_name')
      table.timestamp('created_at').defaultTo(this.now(6))
      table.timestamp('updated_at').defaultTo(this.now(6))
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
