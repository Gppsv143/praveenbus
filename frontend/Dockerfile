# Use a compatible Node.js version for Next.js
FROM node:18

# Create a non-root user and set up the working directory
RUN useradd -m appuser
WORKDIR /app

# Set the user to root for installing dependencies
USER root

# Copy package files to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Switch to appuser after installation
USER appuser

# Build the Next.js app
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]

