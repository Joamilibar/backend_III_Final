import { generateMockPets } from '../mocking/pets.mock.js';
import { generateMockUsers } from '../mocking/users.mock.js';
import userModel from '../dao/models/User.js';
import petModel from '../dao/models/Pet.js';
import { usersService } from "../services/index.js";



const getMockingPets = async (req, res, next) => {
    try {
        let pets = [];
        const count = 10;

        for (let i = 0; i < count; i++) {
            const mockPets = await generateMockPets();

            pets.push(mockPets);
        }

        res.json({
            status: 'success',
            data: pets
        })
    } catch (error) {
        next(error);
    }

}

const getMockingUsers = async (req, res, next) => {
    try {
        let users = [];
        const count = 50;

        for (let i = 0; i < count; i++) {
            const mockUsers = await generateMockUsers();

            users.push(mockUsers);
        }

        res.json({
            status: 'success',
            data: users
        })
    } catch (error) {
        next(error);
    }
}

const generateData = async (req, res, next) => {
    try {
        const { usersCount, petsCount } = req.body;
        let users = [];
        let pets = [];

        if (!usersCount || !petsCount) {
            return res.status(400).json({ error: 'Both "users" and "pets" parameters are required' });
        }

        for (let i = 0; i < usersCount; i++) {
            const newMockUser = await generateMockUsers();
            users.push(newMockUser);
        }

        await userModel.insertMany(users);

        for (let i = 0; i < petsCount; i++) {
            const newMockPet = generateMockPets();
            pets.push(newMockPet);
        }

        await petModel.insertMany(pets);


        res.status(201).json({
            status: 'success',
            data: {
                users: users,
                pets: pets
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error while generating and inserting data' });
        next(error);
    }
}

export {
    getMockingPets,
    getMockingUsers,
    generateData
}