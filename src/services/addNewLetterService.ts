import { ILetter } from '../interfaces/letter';
import LetterRepository from '../repositories/letterRepository';
import { Letter } from '../entities/Letter';

const main = async(data: ILetter) => {
    const letter = new Letter(data);

    const letter_created = LetterRepository.addNewLetter(letter);

    return letter_created;
};

export default main;