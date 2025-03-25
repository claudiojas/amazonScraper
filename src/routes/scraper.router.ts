import { Router } from "express";
import { MethodsUseCase } from "../usecases/methods.usecase";
import { IGetScraper } from "../interfaces/method.interface";

export const getScraper= Router();


getScraper.get('/api/scrape', async (req, res) => {
    
    try {
        const { keyword } = req.query;
        const key = {keyword} as IGetScraper
    
        const getUseCase = new MethodsUseCase();
        const resultUseCase = await getUseCase.getScraper(key);


        res.json({ results: resultUseCase });

        return

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to scrape data' });
        return
    }
});