// Code Explanation:
// 1. Importing Modules:
//      . App is the main class that defines the server and routes.
//      . dotenv is used to load environment variables from a .env file to configure the application.
// 2. Loading Environment Variables:
//      . dotenv.config() loads the environment variables in the .env file into process.env, allowing the use of variables such as API keys, sensitive settings, etc.
// 3. Creating an App Instance:
//      . const app = new App(); creates a new instance of the App class, which contains the server configuration logic
// 4. Starting the Server:
//      . app.listen() starts the Express server, causing it to start listening for requests on the configured port (8080, as per the previous code).
// 5. Registering Routes and Middleware:
//      . app.register() registers all routes and middleware required for the application, such as CORS and the scraping route.

// These methods allow you to configure and run the server in an organized way, loading configurations and initializing everything necessary for the application to work.


// Importing necessary modules and classes
import { App } from "./app"; // Importing the App class that contains the server setup and configuration
import dotenv from 'dotenv'; // Importing dotenv to load environment variables from a .env file

// Calling dotenv.config() to load environment variables into process.env
dotenv.config();

// Creating a new instance of the App class, which sets up the application
const app = new App();

// Calling the 'listen' method to start the server and listen for incoming requests
app.listen();

// Calling the 'register' method to register all middlewares and routes (including the scraping route)
app.register();
