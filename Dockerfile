# ─────────────────────────────────────────────────────────
#  Dockerfile — Japanese Learning Station Backend
#  Builds a Node.js container for the Express API server
# ─────────────────────────────────────────────────────────

# Use the official lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first so Docker can cache the npm install layer
COPY backend/package*.json ./backend/

# Install Node.js dependencies
RUN cd backend && npm install --production

# Copy the rest of the project into the container
COPY . .

# Expose port 3000 so the outside world can reach the server
EXPOSE 3000

# Start the Express server
CMD ["node", "backend/server.js"]
