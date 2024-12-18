import { Router } from 'express';
import { generateMockPets } from '../mocking/pets.mock.js';
import { getMockingPets } from '../controllers/mocking.controller.js';
import { getMockingUsers } from '../controllers/mocking.controller.js';
import { generateData } from '../controllers/mocking.controller.js';

const router = Router();

router.get('/mockingpets', getMockingPets);

router.get('/mockingusers', getMockingUsers);

router.post('/generatedata', generateData)



export default router;

