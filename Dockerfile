FROM node:23-alpine


#setting the working directory
WORKDIR /app

#copy packages from package.json
COPY package*.json ./


#install dependencies
RUN npm install
#copy files
COPY . .


#expose port to run the app
EXPOSE 3000

#Define the command to run the app
CMD ["npm","run","dev"]