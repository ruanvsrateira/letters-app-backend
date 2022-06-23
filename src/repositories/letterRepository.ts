import { prismaCliente } from "../database/client/prismaClient";
import { Letter } from "../entities/Letter";

class LetterRepository{
    constructor() {};

    async getAllLetters() {
        const letters = await prismaCliente.letter.findMany({});

        return letters;
    };

    async addNewLetter(letter: Letter) {
        const letter_created = await prismaCliente.letter.create({
            data: {
                name: letter.name,
                author: letter.author,
                letter: letter.letter
            }
        });

        return letter_created;
    }
};

export default new LetterRepository();