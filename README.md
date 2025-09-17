# Simple React Ecommerce

This project is a simple React-based ecommerce application, containerized with Docker and orchestrated using Docker Compose. CI/CD automation is handled via an Azure Pipeline YAML template.

---

## 🚀 Docker

### Build the Docker Image

To build the Docker image for the app, run:
```sh
docker build -t simple-react-ecommerce .
```

### Run the Docker Container

To run the container and expose it on your local machine:
```sh
docker run -p 5173:5173 simple-react-ecommerce
```
Your app will be available at [http://localhost:5173](http://localhost:5173).

---

## 🐳 Docker Compose

The `docker-compose.yml` file allows you to easily build and run the app as a service:

```yaml
version: '3.8'

services:
  social-site-demo:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "5173:5173"
    restart: unless-stopped
```

To start the service:
```sh
docker-compose up --build
```

To stop the service:
```sh
docker-compose down
```

---

## ⚙️ Azure Pipeline

The Azure Pipeline YAML template (`azure_pipelines/azure-pipeline-template.yaml`) automates build, test, and deployment:

- **Build & Test Stage:**  
  - Installs dependencies  
  - Runs lint and build steps  
  - Optionally runs tests  
  - Builds Docker Compose services

- **Deploy Stage:**  
  - Deploys the app using Docker Compose

### Usage

Reference the pipeline template in your Azure DevOps pipeline configuration.  
Customize the `ENV` parameter for different environments (e.g., NonProd, Prod).

---

## 📁 Key Files

- `Dockerfile` — Containerizes the React app using Node.js and Nginx.
- `docker-compose.yml` — Orchestrates the app as a service.
- `azure_pipelines/azure-pipeline-template.yaml` — Defines CI/CD stages for Azure DevOps.

---

## 📝 Notes

- Ensure your build output directory matches the Dockerfile (`dist` for Vite, `build` for Create React App).
- Update ports and service names in `docker-compose.yml` as needed.
- The pipeline template can be extended for additional steps (e.g., automated tests).

---