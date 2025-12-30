

RBAC System

Overview: 

This is an RBAC (Role-Based Access Control) system using MongoDB and JWT for user authentication and role management. It includes a user model with roles like admin, manager, and user.

Features
 - Roles: admin, manager, user
 - JWT Authentication
 - MongoDB Integration for user data storage

Installation
1. Clone the repo
   ```bash
   git clone https://github.com/Stuart0903/RBAC.git
   ```
   ```bash
   cd RBAC
3. Install dependencies
   ```bash
   npm install express mongoose jsonwebtoken bcryptjs dotenv
5. Set up .env
   ```bash
    PORT=5001
    mongoose_url="your-mongo-db-connection-string"
    JWT_SECRET="your_jwt_secret"
