import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import UserRole from './UserRole'
export default class User extends BaseModel {
  static get table () {
    return 'user'
  }

  public static preload = ['userRoles']

  @column({ isPrimary: true })
  public id: number

  @column()
  public email:string
  
  @column()
  public username:string

  @column()
  public fullname:string
  
  @column({serializeAs:null})
  public password:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=> UserRole,{
    foreignKey:'user_id',
    localKey:'id'
  })
  public userRoles:HasMany<typeof UserRole>


}
