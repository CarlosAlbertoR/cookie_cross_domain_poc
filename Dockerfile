# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de tu aplicación
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto en el que tu aplicación se ejecutará
EXPOSE 3000

# Comando para iniciar tu aplicación
CMD ["node", "server.js"]