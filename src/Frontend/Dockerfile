# Base image
FROM node:20

# Cria o diretório de trabalho
WORKDIR /app

# Copia apenas o package.json e package-lock.json para aproveitar o cache
COPY ../../package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o container
COPY . .

# Expõe a porta usada pelo Next.js
EXPOSE 3000

# Comando padrão
CMD ["npm", "run", "dev"]
