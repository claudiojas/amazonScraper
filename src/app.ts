// Code Explanation:
// 1. App Class: Defines and organizes the Express server configuration.
// 2. Constructor:
//      . Creates an instance of Express (this.app = express();), configuring the base of the application.
// 3. listen() Method:
//      . Sets the port on which the server will listen for requests (const PORT = 8080;).
//      . Uses app.listen() to start the server and log a success message when it is running.
// 4. register() Method:
//      . CORS (cors({ origin: '*' })): Allows the application to accept requests from any origin (ideal for development, but may be restricted in production).
//      . express.json(): Allows reading requests with data in JSON format.
//      . express.urlencoded({ extended: true }): Allows the application to accept data in URL-encoded forms (useful for traditional forms).
//      . this.app.use(getScraper): Registers the scraping route you defined earlier.
// These methods together configure the application to accept requests from different sources, process data in JSON and URL-encoded format, and serve the route for scraping.


// Importing necessary modules and classes
import express, { Application } from "express"; // Express is the web framework used for the application
import cors from "cors"; // CORS middleware to enable cross-origin resource sharing
import { getScraper } from "./routes/scraper.router"; // Importing the scraping routes

// Class that defines the application setup and configuration
export class App {

    private app: Application; // Instance of the Express application

    // Constructor initializes the app instance
    constructor (){
        this.app = express(); // Initializes the Express application
    };

    // Method to start the server and listen on the specified port
    async listen(){
        const PORT = 8080; // Define the port number to run the server

        // Starts the server on the specified port
        this.app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}!!`); // Logs the success message when the server is up and running
        });
    };

    // Method to register middlewares and routes
    register(){
        // Configures CORS (Cross-Origin Resource Sharing) to allow requests from any origin
        this.app.use(cors({ origin: '*' }));

        // Middleware to parse incoming JSON data
        this.app.use(express.json());

        // Middleware to parse incoming URL-encoded data (usually for form submissions)
        this.app.use(express.urlencoded({ extended: true }));

        // Register the scraping routes defined in 'scraper.router.ts'
        this.app.use(getScraper);
    }
}
