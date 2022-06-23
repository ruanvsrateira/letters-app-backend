import { Request, Response } from 'express';

import addNewLetterService from '../services/addNewLetterService';
import getAllLettersService from '../services/getAllLettersService';

class LetterController {
    constructor() {};

    async index(req: Request, res: Response) {
        const letters = await getAllLettersService();
    
        return res.json({ letters });
    };

    async addNewLetter(req: Request, res: Response) {
        const { name, author, letter } = req.body;

        const letter_created = await addNewLetterService({ name, author, letter });

        return res.json({ letter_created });
    };
 
};

export default new LetterController();
