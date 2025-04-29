# Use a newer version of Node.js (Node 16 or higher)
FROM node:16

# Create and use a non-root user for security purposes
RUN useradd -m appuser
USER appuser

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for better caching of dependencies
COPY --chown=appuser:appuser package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY --chown=appuser:appuser . .

# Build the app for production
RUN npm run build

# Expose port 3000 (or the port your app is running on)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

