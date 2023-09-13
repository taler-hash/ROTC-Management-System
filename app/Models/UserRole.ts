import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne} from '@ioc:Adonis/Lucid/Orm'
import Role from 'App/Models/Role'

export default class UserRole extends BaseModel {
  static get table () {
    return 'user_roles'
  }

  @column({ isPrimary: true,serializeAs:null })
  public id: number

  @column({serializeAs:null})
  public user_id:number

  @column()
  public role_id:number

  @column.dateTime({ autoCreate: true, serializeAs:null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs:null })
  public updatedAt: DateTime

  @hasOne(()=> Role,{
    foreignKey:'role_id',
    localKey:'role_id'
  })
  public role:HasOne<typeof Role>
}
