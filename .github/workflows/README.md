# Node.js Demo App - CI/CD Pipeline

## 📌 Project Overview

This project demonstrates a complete CI/CD pipeline for a sample Node.js web application using GitHub Actions and Docker.

The pipeline automatically runs when code is pushed to the `main` branch. It installs dependencies, runs tests, builds a Docker image, and pushes the image to DockerHub.

## 🛠️ Technologies Used

- Node.js
- Express.js
- Jest
- Supertest
- Docker
- DockerHub
- GitHub
- GitHub Actions

## 📂 Project Structure

```text
nodejs-demo-app/
│
├── .github/
│   └── workflows/
│       └── main.yml
│
├── tests/
│   └── app.test.js
│
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md