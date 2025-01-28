# Imagem base do Node.js
FROM node:20

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar o arquivo package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar os arquivos do projeto
COPY . .

# Expor a porta onde o servidor será executado
EXPOSE 3000

# Comando para rodar o servidor
CMD ["node", "app.js"]
