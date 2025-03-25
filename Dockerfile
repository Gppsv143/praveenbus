# Use an official Java runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the application JAR file to the container
COPY target/praveenbus-backend.jar app.jar

# Expose the application's port
EXPOSE 9090

# Define environment variables for database connection
ENV DB_HOST=your-database-host
ENV DB_USER=your-database-user
ENV DB_PASSWORD=your-database-password

# Run the application
CMD ["java", "-jar", "app.jar"]
