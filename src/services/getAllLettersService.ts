import letterRepository from "../repositories/letterRepository";
import { Letter } from "../entities/Letter";

const main = async() : Promise<Letter[]> => {
    const letters = await letterRepository.getAllLetters();

    return letters;
};

export default main;