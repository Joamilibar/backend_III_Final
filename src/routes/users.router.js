import { Router } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import usersController from '../controllers/users.controller.js';

const router = Router();

router.get('/', usersController.getAllUsers);
router.get('/:uid', usersController.getUser);
router.put('/:uid', usersController.updateUser);
router.delete('/:uid', usersController.deleteUser);


export default router;

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        uid:
 *           type: string
 *           description: ID del usuario
 *        first_name:
 *           type: string
 *           description: Nombre del usuario
 *        last_name:
 *           type: string
 *           description: Apellido del usuario
 *        email:
 *           type: string
 *           description: Email del usuario
 *        password:
 *           type: string
 *           description: Contraseña del usuario
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *   summary: Obtener lista con todos los usuarios
 *   tags: [Users]
 *   responses:
 *      200:
 *         description: Lista de usuarios *      
 *         content:
 *           application/json:
 *            schema:
 *             type: array
 *             items:
 *              $ref: '#/components/schemas/User' 
 */
router.get('/', usersController.getAllUsers);


/**
 * @swagger
 * /api/users/{uid}:
 *  get:
 *   summary: Obtener un usuario por su ID
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: uid
 *      schema:
 *       type: string
 *      required: true
 *      description: ID del usuario
 *   responses:
 *      200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *            schema:
 *             $ref: '#/components/schemas/User'
 *      404:
 *         description: Usuario no encontrado     
 */
router.get('/:uid', usersController.getUser);


/**
 * @swagger
 * /api/users/{uid}:
 *  put:
 *   summary: Actualizar un usuario por su ID
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: uid
 *      schema:
 *       type: string
 *      required: true
 *      description: ID del usuario a actualizar
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/User'
 *   responses:
 *      200:
 *         description: Usuario actualizado correctamente
 *         content:
 *           application/json:
 *            schema:
 *             $ref: '#/components/schemas/User'
 *      400:
 *         description: Datos inválidos
 *      404:
 *         description: Usuario no encontrado
 */
router.put('/:uid', usersController.updateUser);


/**
 * @swagger
 * /api/users/{uid}:
 *  delete:
 *   summary: Eliminar un usuario por su ID
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: uid
 *      schema:
 *       type: string
 *      required: true
 *      description: ID del usuario a eliminar
 *   responses:
 *      200:
 *         description: Usuario eliminado correctamente
 *      404:
 *         description: Usuario no encontrado
 */
router.delete('/:uid', usersController.deleteUser);