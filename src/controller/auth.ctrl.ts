import {Request, Response} from 'express'
import Users, {IUsers} from '../models/users.schema'
import jwt from 'jsonwebtoken'
import config from '../config/config'
export const register = async(req: Request, res: Response) =>{
	const{name, last_name,email,password,rol}=req.body;
	console.log({name, last_name,email,password,rol})
	if(!name || !last_name || !email || !password || !rol){
		return res.send({mesage: 'se requieren todos los campos de forma obligada'})
	}
	const user = await Users.findOne({email});
	console.log(user)
	if(user){
		return res.status(400).json({message: 'este email ya existe'})
	}
	
	try {
		const newUser = new Users({name, last_name,email,password,rol})
		const saveUser = await newUser.save()
		res.status(201).json(saveUser);	
	} catch (error) {
		res.status(500).json({error_msg: error.message})
	}
	
}
export const login =async(req: Request, res: Response)=>{
	const{email,password}=req.body;


	if(!email || !password){
		return res.send({mesage: 'se requieren todos los campos de forma obligada'})
	}
	const dataUser = await Users.findOne({email});
	
	if(!dataUser){
		return res.status(400).json({message: 'este email no existe - debe registrarse'})	
	}
	const hashpassword: string = dataUser.password;
	const isMatch = await dataUser.comparePassword(password, hashpassword)
	console.log(isMatch)
	if(isMatch){
		return res.status(200).json({token: createToken(dataUser)})
	}
	return res.status(400).json({error_msg: 'email o password incorrectas'})

}

function createToken(users:IUsers){
	return jwt.sign({id: users.id, email: users.email, rol: users.rol}, config.jwt,{expiresIn: 86400})
}