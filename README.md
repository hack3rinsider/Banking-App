NovaBank – Full Stack Banking Application
A modern full-stack banking application built using Node.js, PostgreSQL, Docker, Nginx, and Ansible deployment automation.
Features
    • User Registration & Login
    • JWT Authentication
    • Deposit Money
    • Transfer Funds
    • Transaction History
    • Profile Dashboard
    • Admin User Monitoring
    • Dockerized Deployment
    • Nginx Reverse Proxy
    • Ansible-Based Automated Deployment

Tech Stack
Frontend
    • HTML
    • CSS
    • Vanilla JavaScript
    • Nginx
Backend
    • Node.js
    • Express.js
    • JWT Authentication
    • bcrypt Password Hashing
Database
    • PostgreSQL
DevOps / Infrastructure
    • Docker
    • Docker Compose
    • Ansible
    • PM2
    • Nginx Reverse Proxy

Project Structure
Banking-App/
├── ansible/
├── backend/
├── db/
├── frontend/
├── docker-compose.yml
└── README.md

Local Deployment
cd Banking-App

docker compose down -v

docker compose up -d --build
Frontend:
http://localhost:18080
Backend API:
http://localhost:13000

Default Credentials
Admin
Email: admin@bank.com
Password: admin123
Demo User
Email: user@bank.com
Password: admin123

Ansible Deployment
Inside controller container:
mkdir -p ~/.ssh
ssh-keyscan -H web1 web2 web3 db1 mon1 >> ~/.ssh/known_hosts

cd /ansible/Banking-App/ansible

ansible-playbook -i inventory.ini deploy-banking.yml
ansible-playbook -i inventory.ini fix-server.yml
ansible-playbook -i inventory.ini fix-all.yml

API Endpoints
Authentication
    • POST /login
    • POST /register
Banking
    • POST /deposit
    • POST /transfer
    • GET /transactions
    • GET /my-transactions
User
    • GET /me
    • GET /user/:email
    • POST /change-password
Admin
    • GET /admin/users

Screenshots
Add screenshots here later:
    • Login Page
    • Dashboard
    • Transfer Funds
    • Deposit Money
    • Transaction History
    • Admin Dashboard

Future Improvements
    • CI/CD Pipeline
    • Kubernetes Deployment
    • Redis Caching
    • Rate Limiting
    • Email Notifications
    • Responsive Mobile UI
    • Monitoring Dashboard
