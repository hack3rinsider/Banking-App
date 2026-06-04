CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'USER',
    account_number VARCHAR(20),
    balance NUMERIC(12,2) DEFAULT 10000.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    sender_account VARCHAR(20),
    receiver_account VARCHAR(20),
    amount NUMERIC(12,2),
    type VARCHAR(20) DEFAULT 'TRANSFER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users
(full_name,email,password,role,account_number,balance)
VALUES
(
'Admin User',
'admin@bank.com',
'$2b$10$Wu1JC.8t9M5sy69Rw6Nc9.qrHPmmQEKwcOTay5WLEJ3TL82n9mVze',
'ADMIN',
'9999999999',
999999
)
ON CONFLICT (email) DO NOTHING;

INSERT INTO users
(full_name,email,password,role,account_number,balance)
VALUES
(
'Demo User',
'user@bank.com',
'$2b$10$Wu1JC.8t9M5sy69Rw6Nc9.qrHPmmQEKwcOTay5WLEJ3TL82n9mVze',
'USER',
'1111111111',
10000
)
ON CONFLICT (email) DO NOTHING;
