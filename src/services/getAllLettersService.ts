import letterRepository from "../repositories/letterRepository";

const main = async() => {
    const letters = await letterRepository.getAllLetters();

    return letters;
};

export default main;