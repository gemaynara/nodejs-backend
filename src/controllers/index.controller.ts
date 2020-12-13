import {Request, Response} from 'express'


export function index(request: Request, response: Response) : Response{
    return response.json("Welcome")
};