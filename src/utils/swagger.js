import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const PORT = process.env.PORT || 8080;

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Usuarios",
            version: "1.0.0",
            description: "API CRUD para gestionar usuarios",
        },
        servers: [
            {
                url: `http://localhost:${PORT}`
            },
        ],
    },
    apis: ["./src/routes/users.router.js"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
