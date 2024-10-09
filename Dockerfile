# Use the official Node.js image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application for production
RUN npm run build

# Use a lightweight server to serve the app
FROM nginx:alpine

# Copy the build output to the nginx html directory
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose the port that nginx will run on
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
