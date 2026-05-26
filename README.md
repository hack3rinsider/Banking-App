
# Banking Demo Application

A simple banking application built for DevOps learning, automation practice, and infrastructure deployment demonstrations.

## Overview

This project was created as a demo banking system that can be deployed and managed using modern DevOps tools and practices. The primary goal is to provide a realistic application for learning and showcasing infrastructure automation rather than building a production banking platform.

## DevOps Learning Objectives

This application is used for:

- Docker containerization
- Docker Compose deployments
- Ansible automation
- Infrastructure provisioning
- Configuration management
- Application deployment automation
- Service management
- Environment configuration
- CI/CD demonstrations
- Linux administration practice
- Monitoring and troubleshooting exercises

## Features

### User Features

- User authentication
- Dashboard
- Account information
- Balance display
- Deposit funds
- Money transfers
- Transaction history
- Profile management
- Password change
- Logout

### Admin Features

- View all users
- View all account balances
- View all transactions
- Monitor user activity

## Technology Stack

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Node.js
- Express.js

Database:
- PostgreSQL

DevOps:
- Docker
- Docker Compose
- Ansible

## Project Structure

backend/
frontend/
db/
docker-compose.yml

## Running the Application

Build and start containers:

docker compose up -d --build

Stop containers:

docker compose down

View logs:

docker compose logs -f

## Application Access

Frontend:
http://SERVER_IP:18080

Backend API:
http://SERVER_IP:13000

## Demo Credentials

Admin User

Email: auto@test.com
Password: temp123

Regular Users

Email: test@test.com
Password: 123456

Email: receiver@test.com
Password: 123456

Email: pla@pla.com
Password: 123456

Email: kli@mli.com
Password: 123456

## Intended Usage

This project serves as a deployment target for:

- Ansible playbooks
- Docker automation
- Infrastructure testing
- Deployment pipelines
- Configuration management exercises
- Container orchestration practice
- System administration labs

## Disclaimer

This application is intended solely for educational purposes, DevOps demonstrations, and infrastructure automation practice. It is not production-ready and must not be used for real financial operations or sensitive data.
