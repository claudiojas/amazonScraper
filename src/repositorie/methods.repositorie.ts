// Using Puppeteer:
//  1. Opens a headless browser (no graphical interface).
//  2. Creates a new page.
//  3. Accesses the Amazon search URL with the given keyword.

// Using Axios
//  1. Makes an HTTP GET request to the same URL using axios.get().
//  2. Includes a set of headers to simulate a real browser.


import axios from 'axios';
import { IGetScraper, IMethodScraperValues } from "../interfaces/method.interface";
import puppeteer from 'puppeteer';



// Class that implements the IMethodScraperValues interface
export class methodsRepositorie implements IMethodScraperValues {
    
    // Asynchronous GET method that fetches data based on a given keyword
    async GET({ keyword }: IGetScraper): Promise<string> {
        
        // Launches a headless browser instance using Puppeteer
        const browser = await puppeteer.launch({ headless: true });

        // Opens a new page in the browser
        const page = await browser.newPage();

        // Constructs the Amazon search URL using the given keyword
        const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;

        // Navigates to the Amazon search results page and waits until the DOM is fully loaded
        await page.goto(url, { waitUntil: 'domcontentloaded' });

        // Makes an HTTP GET request to the same Amazon URL using Axios
        const { data }: { data: string } = await axios.get(url, {
            headers: {
                // Spoofing headers to make the request appear as if it comes from a real browser
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept-Language': 'en-US,en;q=0.9',
                'Referer': 'https://www.amazon.com/', // Sets the referer as Amazon's homepage
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'TE': 'Trailers',
            }
        });

        // Returns the raw HTML content of the Amazon search results page
        return data;
    }
}


