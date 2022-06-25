import { prismaClient } from "../database/client/prismaClient";
import { Letter } from '../entities/Letter';

class LetterRepository{
    constructor() {};

    async getAllLetters() : Promise<Letter[]> {
        const letters = await prismaClient.letter.findMany({});

        return letters;
    };

    async addNewLetter(letter: Letter) : Promise<Letter> {
        const letter_created = await prismaClient.letter.create({
            data: {
                name: letter.name,
                author: letter.author,
                letter: letter.letter
            }
        });

        return letter_created;
    };

    async deleteLetter(id: number) : Promise<Letter> {
        const letter_deleted = await prismaClient.letter.delete({
            where: { id }
        });

        return letter_deleted;
    };

    async editLetter(data: Letter) : Promise<Letter> {
        const letter_edited = await prismaClient.letter.update({
            where: { id: data.id },
            data: {
                name: data.name,
                author: data.author,
                letter: data.letter
            },
        });

        return letter_edited;
    };

    async existById(id: number) : Promise<Boolean> {
        const letter = await prismaClient.letter.findUnique({
            where: { id }
        });

        return letter ? true : false;
    };
};

export default new LetterRepository();