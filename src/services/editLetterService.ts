import letterRepository from '../repositories/letterRepository';
import { Letter } from '../entities/Letter';
import { ILetter } from '../interfaces/letter';

const main = async(data: ILetter) : Promise<Letter> => {
    const letter = new Letter(data);
    const letter_edited = await letterRepository.editLetter(letter);

    return letter_edited;
};

export default main;