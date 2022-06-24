import { prismaCliente } from "../database/client/prismaClient";
import { Letter } from '../entities/Letter';
import { ILetter } from "../interfaces/letter";

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
    };

    async deleteLetter(id: number) {
        const letter = await prismaCliente.letter.findUnique({
            where: { id }
        });

        if (letter) {
            const letter_deleted = await prismaCliente.letter.delete({
                where: { id }
            })

            return letter_deleted;
        } else {
            throw new Error("letter on this id not exist");
        };
    };

    async editLetter(data: Letter) {
        if(data.id) {
            const letter_edited = await prismaCliente.letter.update({
                where: { id: data.id },
                data: {
                    name: data.name,
                    author: data.author,
                    letter: data.letter
                },
            });

            return letter_edited;
        }
    }
};

export default new LetterRepository();