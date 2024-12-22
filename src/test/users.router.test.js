import mongoose from 'mongoose';
import request from 'supertest';
import app from '../app.js';
import { expect } from 'chai';
import { usersService } from '../services/index.js';

describe('Test Funcional Users Router', () => {
    let userId;

    before(async () => {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://tuURI', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        }
    });

    beforeEach(async () => {
        const user = await usersService.create({
            first_name: "testName",
            last_name: "testLastName",
            email: `testEmail${Date.now()}@mail.com`,
            password: "123abc",
        });

        userId = user._id.toString();
    });

    it('Debería obtener una lista de todos los usuarios', async () => {
        const response = await request(app).get('/api/users');
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('status', 'success');
        expect(response.body.payload).to.be.an('array');
    });

    it('Debería devolver un usuario por su ID', async () => {
        const response = await request(app).get(`/api/users/${userId}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('status', 'success');
        expect(response.body.payload).to.be.an('object');
        expect(response.body.payload).to.have.property('_id');
        expect(response.body.payload._id.toString()).to.equal(userId);
    });

    it('Debería actualizar un usuario por su ID', async () => {
        const updatedData = { first_name: "UpdatedName" };
        const response = await request(app)
            .put(`/api/users/${userId}`)
            .send(updatedData);

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('status', 'success');
        expect(response.body.payload).to.be.an('object');
        expect(response.body.payload).to.have.property('first_name', 'UpdatedName');
    });

    it('Debería eliminar un usuario por su ID', async () => {
        const response = await request(app).delete(`/api/users/${userId}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('status', 'success');
        expect(response.body.message).to.equal('User deleted');
    });

    afterEach(async () => {
        await usersService.deleteMany({});
    });

    after(async () => {
        await mongoose.connection.close();
    });
});
