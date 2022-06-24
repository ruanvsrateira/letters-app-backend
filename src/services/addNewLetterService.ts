import { ILetter } from '../interfaces/letter';
import { Letter } from '../entities/Letter';
import LetterRepository from '../repositories/letterRepository';

const main = async(data: ILetter) : Promise<Letter> => {
    const letter = new Letter(data);

    const letter_created = LetterRepository.addNewLetter(letter);

    return letter_created;
};

export default main;