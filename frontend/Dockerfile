# Use a compatible Node.js version for Next.js
FROM node:18

# Create a non-root user and set up the working directory
RUN useradd -m appuser
WORKDIR /app

# Set the user to root for installing dependencies
USER root

# Copy package files to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies with --unsafe-perm flag to avoid permission issues
RUN npm install --unsafe-perm=true

# Change ownership of the app directory to appuser
RUN chown -R appuser:appuser /app

# Switch to appuser
USER appuser

# Ensure the user can write to the .next directory and other directories
RUN mkdir -p /app/.next && chown -R appuser:appuser /app/.next

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]

