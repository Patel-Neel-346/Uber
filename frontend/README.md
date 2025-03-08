# Uber Clone Frontend

This is the frontend part of the Uber Clone application built with React and Vite.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/uber-clone.git
   ```

2. Navigate to the frontend directory:
   ```sh
   cd uber-clone/frontend
   ```

3. Install the dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Application

To start the development server, run:
```sh
npm run dev
# or
yarn dev
```

This will start the application on `http://localhost:3000`.

### Building for Production

To build the application for production, run:
```sh
npm run build
# or
yarn build
```

The production-ready files will be generated in the `dist` directory.

### Linting

To lint the code, run:
```sh
npm run lint
# or
yarn lint
```

## Project Structure

- `src/`: Contains the source code of the application.
  - `components/`: Reusable components.
  - `context/`: Context providers for state management.
  - `pages/`: Different pages of the application.
  - `App.jsx`: Main application component.
  - `main.jsx`: Entry point of the application.
- `public/`: Public assets.
- `index.html`: Main HTML file.
- `vite.config.js`: Vite configuration file.
- `package.json`: Project configuration and dependencies.

## Environment Variables

Create a `.env` file in the root of the `frontend` directory and add the following environment variables:
```
VITE_API_URL="http://localhost:8000"
VITE_GOOGLE_MAPS_API_KEY="your_google_maps_api_key"
```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the code.
- `npm run preview`: Previews the production build.

## Learn More

To learn more about React and Vite, check out the following resources:

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
