import { Request, Response } from 'express';

import addNewLetterService from '../services/addNewLetterService';
import getAllLettersService from '../services/getAllLettersService';
import deleteLetterService from '../services/deleteLetterService';
import editLetterService from '../services/editLetterService';

import { Letter } from '../entities/Letter';

class LetterController {
    constructor() {};

    async index(req: Request, res: Response) : Promise<Response>{
        const letters = await getAllLettersService();
    
        return res.json({ letters });
    };

    async addNewLetter(req: Request, res: Response) : Promise<Response>{
        const { name, author, letter } = req.body;

        const letter_created = await addNewLetterService({ name, author, letter });

        return res.json({ letter_created });
    };

    async destroy(req: Request, res:Response) : Promise<Response>{
        const { id } = req.params;

        try {
            const letter_deleted = await deleteLetterService(Number(id));

            return res.json({ letter_deleted });
        }catch (e) {
            return res.json({ error: "letter on this id not exist" });
        };
    };

    async edit(req: Request, res: Response) : Promise<Response>{
        const { id } = req.params;
        const { name, author, letter } = req.body;

        if(!id) {
            return res.json({ error: "not received id param" });
        }

        const letter_edited = await editLetterService({ id: Number(id), name, author, letter });

        return res.json({ letter_edited });
        
    }
};

export default new LetterController();
