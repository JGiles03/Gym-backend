import User from "../models/User.js"
import { Request, Response } from 'express';

async function index(req: Request, res: Response) {
    try{
        const users = await User.getAll();
        res.status(200).send(users);
    } catch(err: any){
        res.status(500).send({error: err.message})
    }
}

async function getByName(req: Request, res: Response) {
    try{
        const name = req.params.name;
        const user = await User.getByName( typeof name === "string" ? name : name[0]);
        res.status(200).send(user);
    } catch(err: any) {
        res.status(404).send({error: err.message})
    }
}

export default { index, getByName};