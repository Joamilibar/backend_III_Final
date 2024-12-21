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