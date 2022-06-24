import { Letter } from '../entities/Letter';
import { ILetter } from '../interfaces/letter';
import letterRepository from '../repositories/letterRepository';

const main = async(data: ILetter) => {
    const letter = new Letter(data);
    const letter_edited = await letterRepository.editLetter(letter);


    return letter_edited;
};

export default main;