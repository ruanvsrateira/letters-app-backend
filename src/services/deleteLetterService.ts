import { Letter } from "@prisma/client";
import letterRepository from "../repositories/letterRepository";

const main = async(id: number) : Promise<Letter> => {  

    const letter_deleted = await letterRepository.deleteLetter(id);

    if(letter_deleted) {
        return letter_deleted;
    } else {
        throw new Error();
    };
};

export default main;