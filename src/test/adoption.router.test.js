import mongoose from 'mongoose';
import request from 'supertest';
import app from '../app.js';
import { expect } from 'chai';
import { usersService, petsService, adoptionsService } from '../services/index.js';



describe('Test Funcional Adoption Router', () => {
    let userId, petId, adoptionId;


    beforeEach(async () => {


        const user = await usersService.create({
            first_name: "testName",
            last_name: "testLastName",
            email: `testEmail${Date.now()}@mail.com`,
            password: "123abc",
        });

        const pet = await petsService.create({
            name: "testPet",
            specie: "Cat",
            birthDate: new Date(),
            adopted: false,
            owner: user._id,
        });

        const adoption = await adoptionsService.create({
            owner: user._id,
            petId: pet._id,

        });

        console.log(user);
        console.log(pet);
        console.log(adoption);

        userId = user._id.toString();
        petId = pet._id.toString();
        adoptionId = adoption._id.toString();
    });


    it('Debería obtener una lista de todas las adopciones', async () => {
        const response = await request(app).get('/api/adoptions');
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.payload).to.be.an('array');
    });



    it('Debería devolver una adopción por su ID', async () => {
        const response = await request(app).get(`/api/adoptions/${adoptionId}`);
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.payload).to.be.an('object');
        expect(response.body.payload).to.have.property('_id');
        expect(response.body.payload._id.toString()).to.equal(adoptionId);
    });


    it('Debería crear una nueva adopción', async () => {
        const response = await request(app).post(`/api/adoptions/${userId}/${petId}`);
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body).to.have.property('status').that.equals('success');
        expect(response.body.message).to.equal('Pet adopted');
    });


    afterEach(async () => {
        try {
            const db = mongoose.connection.db;
            await db.collection('users').deleteMany({});
            await db.collection('pets').deleteMany({});
            await db.collection('adoptions').deleteMany({});
        } catch (error) {
            console.error('Error al eliminar los datos de prueba', error);
            throw error;
        }
    });

});
