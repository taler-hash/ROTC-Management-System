import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {

    public async fetchUsers({auth,request,response}:HttpContextContract){
        await auth.use('api').authenticate()

        const user = User.query().preload('userRoles',(q)=>{
            q.preload('role')
        })

        

        return user
    }
}
