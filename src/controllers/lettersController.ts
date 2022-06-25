import { Request, Response } from 'express';

import addNewLetterService from '../services/addNewLetterService';
import getAllLettersService from '../services/getAllLettersService';
import deleteLetterService from '../services/deleteLetterService';
import editLetterService from '../services/editLetterService';

class LetterController {
    constructor() {};

    async index(req: Request, res: Response) : Promise<Response> {
        try {

            const letters = await getAllLettersService();
            return res.json({ letters });

        } catch(e) {
            
            return res.json({ msg: `${e}` });

        };
    };

    async store(req: Request, res: Response) : Promise<Response> {
        const { name, author, letter } = req.body;

        try {

            const letter_created = await addNewLetterService({ name, author, letter });
            
            return res.json({ letter_created });

        } catch (e) {

            return res.json({ error: `${e}` })

        };
    };

    async destroy(req: Request, res:Response) : Promise<Response>{
        const { id } = req.params;

        try {

            const letter_deleted = await deleteLetterService(Number(id));

            return res.json({ letter_deleted });

        }catch (e) {

            return res.json({ error: `${e}` });

        };
    };

    async edit(req: Request, res: Response) : Promise<Response>{
        const { id } = req.params;
        const { name, author, letter } = req.body;

        try {

            const letter_edited = await editLetterService({ id: Number(id), name, author, letter });
        
            return res.json({ letter_edited });

        } catch(e) {

            return res.json({ error: `${e}` });

        };  
    };
};

export default new LetterController();
