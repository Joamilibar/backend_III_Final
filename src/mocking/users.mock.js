import { createHash } from "../utils/index.js";
import { faker } from "@faker-js/faker";

export const generateMockUsers = async () => {
    const password = 'coder123';
    const hashedPassword = await createHash(password);


    const user = {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: hashedPassword,
        role: faker.helpers.arrayElement(['admin', 'user']),
        pets: []
    }


    return user;
}



