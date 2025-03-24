import axios from "axios";
import { Router } from "express";
import JSDOM from 'jsdom'

export const getScraper= Router();


interface Product {
    title: string;
    rating: string;
    reviews: string;
    image: string;
}

getScraper.get('/api/scrape', async (req, res) => {
    const { keyword } = req.query;
    if (!keyword) {
        return res.status(400).json({ error: 'Keyword is required' });
    }

    try {
        const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        
        const dom = new JSDOM(data);
        const document = dom.window.document;
        const items: Product[] = [];

        document.querySelectorAll('.s-main-slot .s-result-item').forEach(item => {
            const product: Product = {
                title: item.querySelector('h2 a span')?.textContent || 'No title',
                rating: item.querySelector('.a-icon-star-small')?.textContent?.trim() || 'No rating',
                reviews: item.querySelector('.a-size-small .a-link-normal')?.textContent?.trim() || '0',
                image: item.querySelector('.s-image')?.src || ''
            };
            
            items.push(product);
        });

        res.json({ results: items });
    } catch (error) {
        res.status(500).json({ error: 'Failed to scrape data' });
    }
});