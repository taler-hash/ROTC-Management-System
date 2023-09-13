import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  static get table () {
    return 'user'
  }

  @column({ isPrimary: true })
  public id: number

  @column()
  public email:string
  
  @column()
  public username:string

  @column()
  public fullname:string

  @column()
  public role:string
  
  @column()
  public password:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
