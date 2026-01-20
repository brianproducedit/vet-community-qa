# DVTS Community

A full-stack Q&A community platform inspired by Stack Overflow, designed for the Department of Veterinary Services (DVTS). Users can ask questions, provide answers, vote on content, and interact with an AI-powered chatbot.

## Features

- **User Authentication**: Sign up, login, OTP verification via email.
- **Question & Answer System**: Post questions, provide answers, upvote/downvote.
- **User Profiles**: View and edit profiles, track reputation.
- **Tags System**: Categorize questions with tags.
- **AI Chatbot**: Integrated OpenAI-powered chatbot for assistance.
- **Responsive Design**: Works on desktop and mobile devices.
- **Real-time Updates**: Dynamic content loading.

## Tech Stack

### Frontend (Client)
- **React.js**: UI library
- **Redux**: State management
- **Axios**: HTTP client
- **React Router**: Navigation
- **React Quill**: Rich text editor
- **CSS**: Custom styling

### Backend (Server)
- **Node.js**: Runtime
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM
- **JWT**: Authentication
- **Bcrypt**: Password hashing
- **Nodemailer**: Email service
- **OpenAI API**: Chatbot integration

## Project Structure

```
dvts-question-and-answer-community/
├── client/          # React frontend
├── server/          # Node.js backend
├── README.md        # This file
└── ...
```

## Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (local installation or Atlas)
- **npm** or **yarn**

## Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd dvts-question-and-answer-community
```

### 2. Install Dependencies

#### Client
```bash
cd client
npm install
```

#### Server
```bash
cd server
npm install
```

### 3. Environment Configuration

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/dvts
JWT_SECRET=your_secure_jwt_secret_here
OPEN_AI_KEY=your_openai_api_key_here
AUTH_EMAIL=your_outlook_email@outlook.com
AUTH_PASS=your_outlook_app_password_here
```

- **MONGODB_URI**: Use local MongoDB or MongoDB Atlas connection string.
- **JWT_SECRET**: A secure random string for JWT tokens.
- **OPEN_AI_KEY**: Obtain from [OpenAI Platform](https://platform.openai.com/api-keys).
- **AUTH_EMAIL/AUTH_PASS**: Outlook email credentials for OTP (use app password).

### 4. Start MongoDB

Ensure MongoDB is running locally:
```bash
mongod
```

Or use MongoDB Atlas and update the URI accordingly.

### 5. Run the Application

#### Start Backend
```bash
cd server
npm start
```
Server runs on `http://localhost:5000`.

#### Start Frontend
```bash
cd client
npm start
```
Client runs on `http://localhost:3000`.

### 6. Access the App

Open `http://localhost:3000` in your browser.

## API Documentation

### Authentication
- `POST /user/signup` - Register new user
- `POST /user/login` - Login user

### Questions
- `GET /questions` - Get all questions
- `POST /questions/ask` - Ask a question
- `GET /questions/:id` - Get question details

### Answers
- `POST /answer/post/:id` - Post answer to question
- `PATCH /answer/vote/:id` - Vote on answer

### Users
- `GET /user/getAllUsers` - Get all users
- `PATCH /user/update/:id` - Update user profile

### Chatbot
- `POST /chatbot` - Send message to AI chatbot

### OTP
- `POST /otp/send` - Send OTP
- `POST /otp/verify` - Verify OTP

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit changes.
4. Push to branch.
5. Create a Pull Request.

## License

ISC License

## Contact

For questions or support, contact the development team.
