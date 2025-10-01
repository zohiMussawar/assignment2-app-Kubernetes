# Use official Node image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install
COPY package*.json ./
RUN npm install --production

# Copy source
COPY . .

# Expose port
EXPOSE 8080

# Start the app
CMD ["node", "app.js"]
