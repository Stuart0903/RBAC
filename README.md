

RBAC System

Overview: 

This is an RBAC (Role-Based Access Control) system using MongoDB and JWT for user authentication and role management. It includes a user model with roles like admin, manager, and user.

Features
 - Roles: admin, manager, user
 - JWT Authentication
 - MongoDB Integration for user data storage

Installation
1. Clone the repo
   - git clone https://github.com/your-username/rbac-system.git
   - cd RBAC
2. Install dependencies
   - npm install express mongoose jsonwebtoken bcryptjs dotenv
3. Set up .env
   - PORT=5001
   - mongoose_url="your-mongo-db-connection-string"
   - JWT_SECRET="your_jwt_secret"
