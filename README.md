# 🏦 NovaBank – Full Stack Banking Application

A production-style banking application built to practice real-world Backend Development, DevOps, Infrastructure Automation, CI/CD, and Multi-Node Deployments.

---

# 🚀 Features

* 👤 User Registration
* 🔐 JWT Authentication
* 🔑 Secure Login System
* 💰 Deposit Money
* 🔁 Transfer Funds
* 📜 Transaction History
* 👤 User Profile
* 🛡️ Admin User Management
* 🐳 Dockerized Infrastructure
* 🌐 Nginx Reverse Proxy
* 🤖 Ansible Automated Deployment
* ⚙️ PM2 Process Management
* 🔄 Jenkins CI/CD Pipeline
* 🗄️ PostgreSQL Auto Initialization
* 🏗️ Multi-Node Deployment Architecture

---

# 🧰 Tech Stack

## 🎨 Frontend

* HTML5
* CSS3
* Vanilla JavaScript
* Nginx

## 🧠 Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt Password Hashing

## 🗄️ Database

* PostgreSQL

## ⚙️ DevOps & Infrastructure

* Docker
* Docker Compose
* Jenkins
* Ansible
* PM2
* Nginx Reverse Proxy

---

# 🏗️ Architecture

```text
Users
  │
  ▼
Nginx
  │
  ▼
Node.js API (PM2)
  │
  ▼
PostgreSQL
```

---

# 📁 Project Structure

```text
Banking-App/
├── ansible/
├── backend/
├── db/
├── frontend/
├── docker-compose.yml
└── README.md
```

---

# 🌐 Application Access

## Banking Application

* web1 → http://localhost:8083
* web2 → http://localhost:8084
* web3 → http://localhost:8086

---

# 🔑 Default Credentials

## Admin User

Email:

[admin@bank.com](mailto:admin@bank.com)

Password:

admin

## Demo User

Email:

[user@bank.com](mailto:user@bank.com)

Password:

admin

---

# 🤖 Ansible Deployment

Run inside controller container:

```bash
mkdir -p ~/.ssh

ssh-keyscan -H web1 web2 web3 db1 mon1 >> ~/.ssh/known_hosts

cd /ansible/Banking-App/ansible

ansible-playbook -i inventory.ini deploy-banking.yml

ansible-playbook -i inventory.ini fix-server.yml

ansible-playbook -i inventory.ini fix-all.yml
```

---

# 🔄 Jenkins CI/CD Pipeline

Pipeline automatically:

* Pulls latest code from GitHub
* Rebuilds containers
* Recreates infrastructure
* Initializes PostgreSQL
* Creates bankingdb automatically
* Imports schema automatically
* Deploys frontend and backend
* Starts backend using PM2
* Verifies deployment

---

# 🗄️ Database

## PostgreSQL

Host:

```text
db1
```

Port:

```text
5432
```

Database:

```text
bankingdb
```

Auto-created during deployment.

Schema and seed users are automatically imported during container startup.

---

# 🔌 API Endpoints

## Authentication

```http
POST /login
POST /register
```

## Banking

```http
POST /deposit
POST /transfer
GET /transactions
GET /my-transactions
```

## User

```http
GET /me
GET /user/:email
POST /change-password
```

## Admin

```http
GET /admin/users
```

---

# 📸 Screenshots

Add screenshots:

* Login Page
* Dashboard
* Deposit Funds
* Transfer Funds
* Transaction History
* User Profile
* Admin Panel
* Jenkins Pipeline
* Ansible Deployment

---

# 🎯 Learning Objectives

This project demonstrates:

* Backend API Development
* Authentication & Authorization
* PostgreSQL Database Design
* Docker Containerization
* Multi-Container Architecture
* Nginx Reverse Proxy Configuration
* Infrastructure Automation with Ansible
* CI/CD with Jenkins
* Multi-Node Application Deployment
* Production-style DevOps Workflows

---

# 📜 License

Educational and portfolio project.
