import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Role extends BaseModel {
  static get table () {
    return 'role'
  }

  @column({serializeAs:null})
  public id: number

  @column({ isPrimary: true,serializeAs:null })
  public role_id:number
  
  @column()
  public role_name:string

  @column.dateTime({ autoCreate: true, serializeAs:null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs:null })
  public updatedAt: DateTime
}
