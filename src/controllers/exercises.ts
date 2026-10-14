import Exercise from '../models/Exercise.ts';
import type { Request, Response } from 'express';

async function index(req: Request, res: Response) {
    try{
        const exercises = await Exercise.getAll();
        res.status(200).send(exercises);
    } catch(err: any){
        res.status(500).send({error: err.message})
    }
}

export default { index };