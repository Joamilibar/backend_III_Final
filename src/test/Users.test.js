import mongoose from 'mongoose';
import User from '../dao/Users.dao.js';
import Pet from '../dao/Pets.dao.js';
import assert from 'assert';

mongoose.connect('mongodb+srv://joamilibarra:oK4kAi1laK4MdSwY@coder70065.llnur.mongodb.net/QA?retryWrites=true&w=majority&appName=Coder70065');


describe('Testing Users DAO', () => {
    before(function () {
        this.usersDao = new User();
    })

    it('Debe devolver los usuarios de la DB', async function () {
        this.timeout(50000);
        try {
            const result = await this.usersDao.get();
            assert.strictEqual(Array.isArray(result) && result.length >= 0, true);
        } catch (error) {
            console.error("Error en el Test", error);
            assert.fail("Test falló con un error", error);
        }
    })

    it("DAO debe agregar un usuario a la base de datos de forma correcta", async function () {
        let mockUser = {
            first_name: "Joamil",
            last_name: "Ibarra",
            email: "jibarra@mail.com",
            password: "123abc"
        }

        const result = await this.usersDao.save(mockUser);
        assert.ok(result._id);
    })

    /*  it("Dao debe agregar a un usuario un array de mascotas a la DB de forma correcta", async function () {
         let mockUser = {
             first_name: "Joamil",
             last_name: "Ibarra",
             email: "jibarra@mail.com"
         }
 
         const result = await this.usersDao.save(mockUser);
         assert.ok(result.pets, [])
     }) */

    beforeEach(function () {
        mongoose.connection.collections.users.deleteMany({});
        this.timeout(50000);
    })
});