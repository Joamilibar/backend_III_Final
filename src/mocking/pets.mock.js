import { faker } from '@faker-js/faker';

export const generateMockPets = () => {

    const pets = {
        name: faker.animal.dog(),
        specie: faker.animal.type(),
        adopted: false,
        owner: null
    }
    return pets;
}



