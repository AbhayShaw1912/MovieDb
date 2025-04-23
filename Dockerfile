### Build Stage
FROM node:23-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install all dependencies (including dev)
COPY package*.json ./
RUN npm install

# Copy rest of the project files
COPY . .

# Build the Next.js app
RUN npm run build


### Production Stage
FROM node:23-alpine

# Set environment to production
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

COPY .env.local ./.env.local

# Copy ONLY the necessary build artifacts and assets from builder

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.mjs ./next.config.mjs


# Expose port Next.js uses
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "start"]
