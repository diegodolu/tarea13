# Usa una imagen base de Node.js
FROM node:22

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo de configuración de paquetes y luego las dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de tu aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Instala serve para servir la aplicación estática
RUN npm install -g serve

# Expon el puerto que usará tu aplicación
EXPOSE 80

# Comando para servir la aplicación
CMD ["serve", "-s", "dist", "-l", "80"]
