import axios from "axios";
import { IGetScraper, IMethodScraperValues } from "../interfaces/method.interface";
import puppeteer from "puppeteer";


export class methodsRepositorie implements IMethodScraperValues {
    async GET({ keyword }: IGetScraper): Promise<string> {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
        await page.goto(url, { waitUntil: 'domcontentloaded' });

        const { data }: { data: string } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept-Language': 'en-US,en;q=0.9',
                'Referer': 'https://www.amazon.com/',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'TE': 'Trailers',
            }
        });

        return data;
       
    }
}