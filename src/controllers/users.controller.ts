import {Request, Response} from 'express'
import {connect} from '../database';

import {User} from '../interface/users.interface';

export async function getUsers(request: Request, response: Response): Promise<Response>{

   const connection =  await connect();
   const data = await connection.query('SELECT * FROM users');
   return response.json(data[0]);

}

export async function createUsers(request: Request, response: Response) {
    const newUser: User = request.body;
    return response.json({message: 'User created'});
    
}