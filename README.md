# MovieDb Web App

A web application built with **Next.js** and **Tailwind CSS** that fetches trending and popular movies from the **TMDb API**.

## Features
- Fetches and displays **trending** and **popular** movies.
- Fully responsive, styled with **Tailwind CSS**.
- Simple and clean interface to explore movie information.

---

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- **Node.js** (v12.x or later)
- **npm** (v6.x or later)
- **Docker** (if using Docker)

If you're using Docker, make sure you have Docker Desktop installed for Windows/macOS, or Docker daemon running on Linux. Follow the necessary setup instructions for your system:

Windows/macOS: Install and run Docker Desktop.

Linux: Install Docker and ensure the Docker daemon is running.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AbhayShaw1912/MovieDb.git
cd MovieDb
```
### 2.Setup Environment Variables
Create a .env.local file in the root of your project and add the following line:
```bash
API_KEY=your_tmdb_api_key_here
```
Replace your_tmdb_api_key_here with the actual API key you copied from TMDb.

### 3. Running Locally (Way 1)

#### Install Dependencies

```bash
npm install
```
### Run the Development Server
```bash
npm run dev
```
Now, open your browser and visit http://localhost:3000 to see the app in action.

### 4. Running with Docker (Way 2)
To run the app using Docker, follow these steps:

### Step 1: Add API_KEY
Ensure that the .env.local file is correctly set up with your TMDb API key before building the Docker image.
```bash
API_KEY=your_tmdb_api_key_here
```
### Step 2: Build the Docker Image
The docker build command creates a Docker image of the app. You can name the image whatever you'd like (e.g., moviedb-app). The name you choose will be used when you run the container later.
```bash
docker build -t movie-db .
```
Note: Replace movie-db with any name you'd like for your Docker image. This is just the image name and can be changed to anything.
### Step 3: Run the Docker Container
After building the image, run the container using the following command. This will expose the app on port 3000 on your local machine.
```bash
docker run -p 3000:3000 movie-db
```
Note: If you used a different name for the image (instead of movie-db), make sure to replace movie-db in the docker run command with the name you used during the build process.

Now, open your browser and visit http://localhost:3000 to access the app running in Docker.

### Directory Structure
Here's a quick overview of the project's directory structure:

```bash
.
├── components/           # React Components for UI
├── pages/                # Next.js pages
├── public/               # Static assets (images, fonts, etc.)
├── styles/               # Global styles (Tailwind CSS)
├── .env.local           # Environment variables (API_KEY)
├── Dockerfile            # Docker build instructions
├── package.json          # Project metadata and dependencies
└── next.config.js        # Next.js configuration
```

<hr/>

### Screenshot 📸

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
  <img src="https://github.com/user-attachments/assets/766200e9-fe8e-44d5-a4a7-568a23bd735d" width="200" />
  <img src="https://github.com/user-attachments/assets/c3c45f91-baf2-40f7-9341-f56d255f76bc" width="200" />
  <img src="https://github.com/user-attachments/assets/aceb028f-165e-4166-9e6d-450c79be1881" width="200" />
  <img src="https://github.com/user-attachments/assets/a818514b-160d-4728-87c2-f20d47367b3e" width="200" />
</div>
