// Code Explanation:
// 1. Gets the keyword from the user and checks if it was provided.
// 2. Calls the GET function of the methodsRepository to fetch the results page from Amazon.
// 3. Validates the response, ensuring that it is valid HTML.
// 4. Uses JSDOM to transform the HTML into a manipulable DOM document.
// 5. Loops through the page elements that represent the products and extracts:
// 6. The title, cleaning up unnecessary text.
// 7. The product image.
// 8. The rating and number of reviews.
// 9. Returns a list of IProductScraper objects containing the scraped data.


// Importing necessary interfaces and classes
import { IGetScraper, IProductScraper } from "../interfaces/method.interface"; // Import interfaces for scraper and products
import { methodsRepositorie } from "../repositorie/methods.repositorie"; // Import the repository class that handles scraping
import { JSDOM } from 'jsdom'; // JSDOM is used to parse and manipulate HTML content

// Class responsible for handling business logic related to web scraping
export class MethodsUseCase {
    private repositorie: methodsRepositorie; // Private instance of the repository class

    // Constructor initializes the repository instance
    constructor () {
        this.repositorie = new methodsRepositorie();
    };

    // Method that retrieves and processes scraped data
    async getScraper (keyword: IGetScraper) {
        
        // Check if a keyword was provided
        if (!keyword) {
            return { error: 'Keyword is required' }; // Return an error if the keyword is missing
        };

        // Calls the GET method from the repository to fetch the HTML content
        const resultRepositorie = await this.repositorie.GET(keyword);

        // Validate the response to ensure it contains valid HTML
        if (!resultRepositorie || typeof resultRepositorie !== 'string') {
            return { error: 'Invalid HTML content received' };
        };
        
        const data = resultRepositorie;

        // Additional check to prevent processing empty or invalid content
        if (!data || typeof data !== 'string' || data.trim() === '') {
            throw new Error('O conteúdo de resultRepositorie não é válido ou está vazio.');
        }

        // Uses JSDOM to parse the HTML content into a virtual DOM
        const dom = new JSDOM(data);
        const document = dom.window.document; // Access the document object
        const items: IProductScraper[] = []; // Array to store extracted product data

        // Selects all product elements from the Amazon search results page
        document.querySelectorAll('.s-main-slot .s-result-item').forEach(item => {
            // Extracts the product title
            const titleElement = item.querySelector('a h2 span');
            let title = titleElement ? titleElement.textContent?.trim() : 'No title';

            // Removes any "Undefined" text from the title
            title = title?.replace(/Undefined\s+/i, '').trim();

            // Regex to clean up the title, removing ratings if present
            const match = title?.match(/^(.+?)\s*(?:\d+\.\d+ out of 5 stars)?$/);
            if (match) {
                title = match[1].trim();
            }

            // Extracts the product image
            const imageElement = item.querySelector('.s-image') as HTMLImageElement;
            const imageSrc = imageElement?.src || '';

            // Creates an object representing the product details
            const product: IProductScraper = {
                title: title, // Cleaned product title
                rating: item.querySelector('.a-icon-star-small')?.textContent?.trim() || 'No rating', // Extracts the rating
                reviews: item.querySelector('.a-size-small .a-link-normal')?.textContent?.trim() || '0', // Extracts the number of reviews
                image: imageSrc // Extracts the product image URL
            } as IProductScraper;
            
            // Adds the product object to the array
            items.push(product);
        });

        // Returns the extracted product list
        return items;
    };
}



