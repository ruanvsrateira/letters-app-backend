import letterRepository from "../repositories/letterRepository";
import { Letter } from "../entities/Letter";

const main = async(id: number) : Promise<Letter> => {  
    const letter_deleted = await letterRepository.deleteLetter(id);

    return letter_deleted;
};

export default main;