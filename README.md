# Backend_III_Proyecto_Final

<div align="center" id="top"> 
  <img src="./src/public/img/avatar.png" alt="Backend_70075" />

&#xa0;

  <!-- <a href="https://backend_70075.netlify.app">Demo</a> -->
</div>
<!-- 
<h1 align="center">Proyecto Final - Backend_70075</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/{{joamilibar}}/backend_70065?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/{{joamilibar}}/backend_70065?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/{{joamilibar}}/backend_70065?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/{{joamilibar}}/backend_70065?color=56BEB8">
 -->
  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/{{YOUR_GITHUB_USERNAME}}/backend_70065?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/{{YOUR_GITHUB_USERNAME}}/backend_70065?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/{{YOUR_GITHUB_USERNAME}}/backend_70065?color=56BEB8" /> -->
</p>

<!-- Status -->

<h4 align="center">
	  Backend_70075 🚀 Proyecto Final Backend Avanzado III
</h4>

<br>

## Entrega Proyecto Final

Dockerizando el Proyecto

Implementación de mejoras y Dockerización del proyecto.

Se cumplieron los requerimientos según las siguientes consignas:

  <br>

<img alt="imagen consigna1" src="./src/public/img/Dockerizando-01.png">
<img alt="imagen consigna2" src="./src/public/img/Dockerizando-02.png">

### Documentación del módulo de "Users" con Swagger.

[http://localhost:8080/api-docs/](http://localhost:8080/api-docs/)

<br>

<img alt="imagen consigna3" src="./src/public/img/Swagger-Users.png">

<br>

### Desarrollo de los test funcionales para todos los endpoints del router "adoption.router.js".

<br>

```bash
# Endpoints

router.get('/',adoptionsController.getAllAdoptions);

router.get('/:aid',adoptionsController.getAdoption);

router.post('/:uid/:pid',adoptionsController.createAdoption);

# Inicio del test
$ npm test

```

<br>

### Desarrollo de Dockerfile para gegenrar la imagen del proyecto.

```bash
# Utilizar una imagen base oficial de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install --production

# Reconstruir bcrypt para el entorno Docker
RUN npm rebuild bcrypt --build-from-source

# ENV PORT=8080
# ENV MONGO_URL=mongodb+srv://joamilibarra:oK4kAi1laK4MdSwY@coder70065.llnur.mongodb.net/docker?retryWrites=true&w=majority&appName=Coder70065

# Copiar el resto de los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto en el que corre la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
```

<br>

### Imagen de Docker en Dockerhub

```bash
# Imagen Dockerhub
joamilibarra/pet-adoption

# Inicia tu aplicación en el puerto 8080.
docker run -p 8080:8080 joamilibarra/pet-adoption:latest

# Comando Pull Docker (descargar imagen desde Dockerhub)
docker pull joamilibarra/pet-adoption:latest


```

<img alt="imagen consigna3" src="./src/public/img/Dockerhub-imagen.png">

<br>

### Organización: Estructura de Archivos

    BACKEND_70075-root/

```bash
└── 📁src
    └── 📁config
        └── database.js
    └── 📁controllers
        └── adoptions.controller.js
        └── mocking.controller.js
        └── pets.controller.js
        └── sessions.controller.js
        └── users.controller.js
    └── 📁dao
        └── Adoption.js
        └── 📁models
            └── Adoption.js
            └── Pet.js
            └── User.js
        └── Pets.dao.js
        └── Users.dao.js
    └── 📁dto
        └── Pet.dto.js
        └── User.dto.js
    └── 📁mocking
        └── pets.mock.js
        └── users.mock.js
    └── 📁public
        └── 📁img
            └── 1671549990926-coderDog.jpg
            └── avatar.png
            └── Dockerhub-imagen.png
            └── Dockerizando-01.png
            └── Dockerizando-02.png
            └── Dockerizando-03.png
            └── Snapshot_get_pets.png
            └── Snapshot_get_users.png
            └── Snapshot_mockingusers_50_navegador.png
            └── Snapshot_mockingusers_50.png
            └── Snapshot_post_users_pets_01.png
            └── Snapshot_post_users_pets_02.png
            └── Snapshot_preentregaIII_1.png
            └── Snapshot_preentregaIII_2.png
            └── Snapshot_preentregaIII_3.png
            └── Swagger-Users.png
    └── 📁repository
        └── AdoptionRepository.js
        └── GenericRepository.js
        └── PetRepository.js
        └── UserRepository.js
    └── 📁routes
        └── adoption.router.js
        └── mocks.router.js
        └── pets.router.js
        └── sessions.router.js
        └── users.router.js
    └── 📁services
        └── index.js
    └── 📁test
        └── adoption.router.test.js
        └── Users.test.js
    └── 📁utils
        └── error.dictionary.js
        └── error.helper.js
        └── error.utils.js
        └── index.js
        └── swagger.js
        └── uploader.js
    └── app.js
```

## Iniciando

```bash
# Clonar este proyecto
$ git clone https://github.com/Joamilibar/backend_III_Final.git

# Instalar dependencias
$ npm install

# Iniciar servidor
$ npm start

# Iniciar test
$ npm test

# El servidor inicia en: <http://localhost:8080>
```

## License

#### Pública

<!-- This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file. -->

by <a href="https://github.com/Joamilibar/Backend_III_PreEnt.git" target="_blank">`Joamil Ibarra`</a>

&#xa0;

<a href="#top">Back to top</a>

# backend_III_Final
