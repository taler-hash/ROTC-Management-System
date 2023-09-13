import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('fullname').notNullable().unique()
      table.string('username',100).notNullable().unique()
      table.string('email',254).notNullable().unique()
      table.string('password',255).notNullable().unique()
      table.string('role',60).notNullable()
      table.timestamp('created_at').defaultTo(this.now(6))
      table.timestamp('updated_at').defaultTo(this.now(6))
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
