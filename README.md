# 🏦 NovaBank – Full Stack Banking Application

A modern full-stack banking system built for real-world DevOps + backend + deployment practice using **Node.js, PostgreSQL, Docker, Nginx, and Ansible automation**.

---

## 🚀 Features

- 👤 User Registration & Login
- 🔐 JWT Authentication
- 💰 Deposit Money
- 🔁 Transfer Funds
- 📜 Transaction History
- 📊 Profile Dashboard
- 🛡️ Admin User Monitoring
- 🐳 Dockerized Deployment
- 🌐 Nginx Reverse Proxy
- ⚙️ Ansible Automated Deployment

---

## 🧰 Tech Stack

### 🎨 Frontend
- 🧾 HTML
- 🎨 CSS
- ⚡ Vanilla JavaScript
- 🌐 Nginx

### 🧠 Backend
- 🟢 Node.js
- 🚂 Express.js
- 🔐 JWT Authentication
- 🧂 bcrypt Password Hashing

### 🗄️ Database
- 🐘 PostgreSQL

### ⚙️ DevOps / Infra
- 🐳 Docker
- 📦 Docker Compose
- 🤖 Ansible
- ⚙️ PM2
- 🌐 Nginx Reverse Proxy

---

## 🏗️ Project Structure

```bash
Banking-App/
├── 🤖 ansible/
├── 🧠 backend/
├── 🗄️ db/
├── 🎨 frontend/
├── 🐳 docker-compose.yml
└── 📄 README.md

💻 Local Deployment
cd Banking-App

docker compose down -v
docker compose up -d --build

🌍 Access URLs
    • 🎨 Frontend → http://localhost:18080
    • 🧠 Backend API → http://localhost:13000

🔑 Default Credentials
🛡️ Admin
    • 📧 Email: admin@bank.com
    • 🔑 Password: admin123
👤 Demo User
    • 📧 Email: user@bank.com
    • 🔑 Password: admin123

🤖 Ansible Deployment
Run inside controller container:
mkdir -p ~/.ssh
ssh-keyscan -H web1 web2 web3 db1 mon1 >> ~/.ssh/known_hosts
cd /ansible/Banking-App/ansible
ansible-playbook -i inventory.ini deploy-banking.yml
ansible-playbook -i inventory.ini fix-server.yml
ansible-playbook -i inventory.ini fix-all.yml

🔌 API Endpoints
🔐 Authentication
    • POST /login
    • POST /register
💰 Banking
    • POST /deposit
    • POST /transfer
    • GET /transactions
    • GET /my-transactions
👤 User
    • GET /me
    • GET /user/:email
    • POST /change-password
🛡️ Admin
    • GET /admin/users

📸 Screenshots
📌 Add later:
    • 🔐 Login Page
    • 📊 Dashboard
    • 💸 Transfer Funds
    • 💰 Deposit Money
    • 📜 Transaction History
    • 🛡️ Admin Panel

🚀 Future Improvements
    • 🔄 CI/CD Pipeline
    • ☸️ Kubernetes Deployment
    • ⚡ Redis Caching
    • 🚦 Rate Limiting
    • 📧 Email Notifications
    • 📱 Mobile Responsive UI
    • 📊 Monitoring Dashboard
# 🤖 Ansible Banking App Deployment

After running the Ansible playbook, the banking app will be deployed on all web nodes.

---

## 🌐 Access URLs

- 🖥️ web1 → http://localhost:8083  
- 🖥️ web2 → http://localhost:8084  
- 🖥️ web3 → http://localhost:8086  

---

## ⚙️ Flow

- Frontend served via Nginx  
- Backend runs on Node.js (PM2)  
- API routed through `/api`  
- Database connected via `db1:5432`  

---

## 🗄️ Database

- Host: `db1`  
- Port: `5432`  

---

## 🎯 Result

Same app is deployed on 3 servers for practice of Ansible multi-node deployment.

