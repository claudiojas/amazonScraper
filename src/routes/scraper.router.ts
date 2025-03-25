// Code Explanation:
// 1. Creates an Express router (getScraper) to define the scraping route.
// 2. Defines a GET /api/scrape route to process scraping requests.
// 3. Extracts the keyword from the request parameters.
// 4. Creates an instance of MethodsUseCase, responsible for processing the scraping logic.
// 5. Calls the getScraper() method to fetch the data from Amazon and extract product information.
// 6. Returns the extracted results in JSON format.
// 7. If an error occurs, catches and returns an HTTP 500 response, informing the failure.


// Importing necessary modules and classes
import { Router } from "express"; // Express router to handle API routes
import { MethodsUseCase } from "../usecases/methods.usecase"; // Import the use case class responsible for scraping
import { IGetScraper } from "../interfaces/method.interface"; // Import the interface for the scraper input

// Creating an instance of the Express Router
export const getScraper = Router();

// Defining a GET endpoint to handle web scraping requests
getScraper.get('/api/scrape', async (req, res) => {
    try {
        // Extracting the keyword from the query parameters
        const { keyword } = req.query;
        
        // Ensuring the keyword is properly structured according to IGetScraper interface
        const key = { keyword } as IGetScraper;

        // Creating an instance of MethodsUseCase, which contains the scraping logic
        const getUseCase = new MethodsUseCase();
        
        // Calling the scraping method and storing the result
        const resultUseCase = await getUseCase.getScraper(key);

        // Sending the extracted data as a JSON response
        res.json({ results: resultUseCase });
        return;

    } catch (error) {
        // Logging the error in case something goes wrong
        console.log(error);

        // Sending an error response with status code 500 (Internal Server Error)
        res.status(500).json({ error: 'Failed to scrape data' });
        return;
    }
});
