portfolio-repo-s3


Overview
This project is focused on deploying a personal portfolio website using GitHub Actions for automatic deployment to an AWS S3 bucket. Additionally, a Docker workflow is implemented to containerize the portfolio application and push it to Docker Hub for easy distribution and deployment.

Features
Portfolio Website: A personal portfolio website showcasing your projects, skills, and achievements.
GitHub Actions Deployment: Automatic deployment of the portfolio website to an AWS S3 bucket on every push to the main branch.
Docker Workflow: Containerization of the portfolio application using Docker, facilitating easy distribution and deployment across different environments.
Technologies Used
GitHub Actions: Utilized for continuous integration and deployment (CI/CD) of the portfolio website.
AWS S3: Used as the hosting service for the portfolio website, enabling scalable and reliable deployment.
Docker: Employed for containerizing the portfolio application, ensuring consistency and portability across different environments.
Docker Hub: Used as the container image registry for storing and distributing the Dockerized portfolio application.
Usage
Setting Up GitHub Actions:

Configure GitHub Actions workflow (.github/workflows/deploy.yml) to trigger deployment to AWS S3 bucket on each push to the main branch.
Ensure appropriate AWS credentials are set up as GitHub Secrets for secure deployment.
Docker Workflow:

Implement Dockerfile for defining the environment and dependencies required for running the portfolio application.
Configure Docker workflow to build the Docker image, tag it appropriately, and push it to Docker Hub for distribution.
Deploying Portfolio:

Push changes to the main branch to trigger GitHub Actions workflow for automatic deployment to the AWS S3 bucket.
Pull the Docker image from Docker Hub and deploy it to your desired environment using Docker.
Contributing
Contributions are welcome! If you have any suggestions, improvements, or feature requests, feel free to open an issue or submit a pull request.
