# Use the official Node.js 20 image as the base image
FROM node:20-alpine AS deps

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json or yarn.lock for dependency installation
COPY package.json package-lock.json* yarn.lock* ./

# Install dependencies
RUN npm ci --prefer-offline

# Rebuild the source code only when needed
FROM node:20-alpine AS builder
WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

# Build the Next.js app
RUN npm run build

# Production image, copy from builder
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy package.json and next.config.js to runner
COPY package.json ./
COPY next.config.ts ./
# Copy .next output, public assets and node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# If using a custom server, expose the correct port (default: 3000)
EXPOSE 3000

# Start the Next.js app
CMD ["npx", "next", "start"]
