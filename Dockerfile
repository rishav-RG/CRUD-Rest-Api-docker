# Use Node LTS base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your code
COPY . .

# Expose the app port
EXPOSE 5001

# Start the app
CMD ["npm", "run", "dev"]
