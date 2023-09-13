import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'
import LoginValidator from 'App/Validators/LoginRequestValidator'


export default class AuthController {

    public async login({auth,request,response}:HttpContextContract){
        try{
            const data = await request.validate(LoginValidator)

            const user = await User.findBy('username',data.username)

            if(user && await Hash.verify(user.password,data.password)){
                const token = await auth.use('api').generate(user,{
                    expiresIn: '120 mins'
                })
                return token
            }
            
            return response.status(401).json({ message: 'Invalid credentials' })
        }catch(err){
            return response.status(422).json(err.messages)
        }

        
        
    }
}
