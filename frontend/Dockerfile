# Stage 1: Build stage
FROM node:18 as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --unsafe-perm=true

COPY . .

RUN npm run build

# Stage 2: Production stage
FROM node:18

WORKDIR /app

# Copy only the necessary build artifacts from the previous stage
COPY --from=build /app ./

# Ensure a clean and optimized build with no unnecessary dependencies
RUN npm install --only=production --unsafe-perm=true

EXPOSE 3000

CMD ["npm", "start"]

