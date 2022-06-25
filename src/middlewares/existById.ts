import prismaRepository from '../repositories/letterRepository';
import { Request, Response,NextFunction } from "express";

const main = async(req: Request, res: Response, next: NextFunction) : Promise<Response|void> => {
    const { id } = req.params;
    const exists = await prismaRepository.existById(Number(id));

    if(!id) {
        return res.json({ error: "not received id param" });
    };

    if (exists) {
        next();
    } else {
        return res.json({ msg: "letter not found by this id by this id" });
    };
};

export default main;