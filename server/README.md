# DVTS Community - Server

The backend API for DVTS Community, a Q&A platform built with Node.js and Express.js.

## Overview

This Node.js/Express server provides RESTful APIs for user authentication, question/answer management, user profiles, and AI chatbot integration.

## Tech Stack

- **Node.js** (v16+)
- **Express.js** (v4.18.2) - Web framework
- **MongoDB** (v7.0.2) - Database
- **Mongoose** (v7.0.2) - ODM
- **JWT** (v9.0.0) - Authentication
- **Bcrypt** (v5.1.0) - Password hashing
- **Nodemailer** (v6.9.1) - Email service
- **OpenAI API** (v3.2.1) - Chatbot
- **CORS** (v2.8.5) - Cross-origin requests

## Project Structure

```
server/
├── config/
│   └── connectDB.js      # MongoDB connection
├── controllers/          # Route handlers
│   ├── auth.js
│   ├── users.js
│   ├── questions.js
│   ├── answers.js
│   ├── chatbot.js
│   └── otp.js
├── middleware/
│   └── auth.js           # JWT authentication middleware
├── models/               # Mongoose schemas
│   ├── auth.js
│   ├── questions.js
│   └── otp.js
├── routes/               # API routes
│   ├── Users.js
│   ├── Questions.js
│   ├── Answers.js
│   ├── Chatbot.js
│   └── Otp.js
├── utils/                # Utility functions
│   ├── generateOTP.js
│   ├── hashData.js
│   └── sendEmail.js
├── .env                  # Environment variables
├── index.js              # Server entry point
├── package.json
└── README.md
```

## Features

- **User Authentication**: JWT-based auth with signup/login
- **OTP Verification**: Email-based OTP for security
- **Question Management**: CRUD operations for questions
- **Answer System**: Post answers, voting system
- **User Profiles**: Profile management
- **AI Chatbot**: OpenAI integration for Q&A assistance
- **Email Notifications**: Nodemailer for OTP emails

## Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (local or Atlas)
- **npm** or **yarn**

## Installation

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the root of the server directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/dvts
JWT_SECRET=your_secure_jwt_secret_here
OPEN_AI_KEY=your_openai_api_key_here
AUTH_EMAIL=your_outlook_email@outlook.com
AUTH_PASS=your_outlook_app_password_here
```

### Environment Variables

- **PORT**: Server port (default: 5000)
- **MONGODB_URI**: MongoDB connection string
- **JWT_SECRET**: Secret key for JWT token generation
- **OPEN_AI_KEY**: API key for OpenAI chatbot
- **AUTH_EMAIL**: Email address for sending OTPs
- **AUTH_PASS**: App password for email authentication

## Database Setup

### Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service: `mongod`
3. Use `MONGODB_URI=mongodb://localhost:27017/dvts`

### MongoDB Atlas
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create cluster and database
3. Get connection string and update `MONGODB_URI`

## Available Scripts

### `npm start`
Starts the server with nodemon for development.
- Server runs on `http://localhost:5000`
- Auto-restarts on file changes

### `npm run server`
Starts the server with node for production.

## API Endpoints

### Authentication
- `POST /user/signup` - Register new user
- `POST /user/login` - Login user

### Users
- `GET /user/getAllUsers` - Get all users
- `PATCH /user/update/:id` - Update user profile

### Questions
- `GET /questions` - Get all questions
- `POST /questions/ask` - Create new question
- `GET /questions/:id` - Get question by ID
- `DELETE /questions/:id` - Delete question
- `PATCH /questions/:id` - Update question

### Answers
- `POST /answer/post/:id` - Post answer to question
- `PATCH /answer/vote/:id` - Vote on answer
- `PATCH /answer/:id` - Update answer
- `DELETE /answer/:id` - Delete answer

### Chatbot
- `POST /chatbot` - Send message to AI chatbot

### OTP
- `POST /otp/send` - Send OTP to email
- `POST /otp/verify` - Verify OTP

## Middleware

- **auth.js**: JWT token verification for protected routes
- **CORS**: Enabled for cross-origin requests

## Models

- **User**: User authentication and profile data
- **Question**: Question content, tags, votes
- **Answer**: Answer content, votes
- **OTP**: One-time password storage

## Utilities

- **generateOTP.js**: Generate random OTP codes
- **hashData.js**: Hash sensitive data
- **sendEmail.js**: Send emails via Nodemailer

## Error Handling

- Centralized error handling in controllers
- Proper HTTP status codes
- JSON error responses

## Security

- Password hashing with bcrypt
- JWT token authentication
- Input validation
- CORS configuration

## Contributing

1. Follow existing code structure
2. Add proper error handling
3. Use middleware for authentication
4. Test API endpoints thoroughly

## License

ISC License