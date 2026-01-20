# DVTS Community - Client

The frontend application for DVTS Community, a Q&A platform built with React.js.

## Overview

This React application provides the user interface for the DVTS Community platform, allowing users to interact with questions, answers, user profiles, and more.

## Tech Stack

- **React.js** (v18.2.0)
- **Redux** (v4.2.1) - State management
- **React Router DOM** (v6.9.0) - Routing
- **Axios** (v1.3.4) - HTTP requests
- **React Quill** (v2.0.0) - Rich text editor
- **React Toast** (v2.4.0) - Notifications
- **CSS** - Custom styling

## Project Structure

```
client/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── assets/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Avatar/
│   │   ├── Editor/
│   │   ├── HomeMainbar/
│   │   ├── LeftSidebar/
│   │   ├── Navbar/
│   │   ├── RightSidebar/
│   │   └── ...
│   ├── pages/          # Page components
│   │   ├── Auth/
│   │   ├── Home/
│   │   ├── Questions/
│   │   ├── Tags/
│   │   ├── UserProfile/
│   │   └── Users/
│   ├── actions/        # Redux actions
│   ├── reducers/       # Redux reducers
│   ├── api/            # API configuration
│   ├── assets/         # Static assets
│   ├── App.js          # Main app component
│   ├── index.js        # Entry point
│   └── setupProxy.js   # Proxy configuration
├── package.json
└── README.md
```

## Features

- **Authentication**: Login/signup forms with OTP verification
- **Question Management**: View, ask, and interact with questions
- **Answer System**: Post and vote on answers
- **User Profiles**: View and edit user information
- **Tags**: Browse questions by tags
- **Responsive Design**: Mobile-friendly interface
- **Real-time Updates**: Dynamic content loading

## Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

## Installation

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

The client uses a proxy to communicate with the backend. The proxy is configured in `src/setupProxy.js` to route API calls to `http://localhost:5000`.

## Available Scripts

### `npm start`
Runs the app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- The page will reload when you make changes.
- You may see lint errors in the console.

### `npm test`
Launches the test runner in interactive watch mode.
- See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.
- It correctly bundles React in production mode and optimizes the build for the best performance.
- The build is minified and the filenames include the hashes.
- Your app is ready to be deployed!

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## API Integration

The client communicates with the backend API through Axios. API calls are defined in `src/api/index.js` and dispatched via Redux actions in `src/actions/`.

## Styling

- Custom CSS files are used for styling.
- Components have their own CSS files (e.g., `HomeMainbar.css`).
- The app is responsive and uses media queries for different screen sizes.

## Contributing

1. Follow the existing code structure.
2. Use Redux for state management.
3. Ensure components are reusable.
4. Test your changes thoroughly.

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Redux documentation](https://redux.js.org/)
