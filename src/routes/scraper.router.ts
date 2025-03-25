import { Router } from "express";
import { MethodsUseCase } from "../usecases/methods.usecase";

export const getScraper= Router();


getScraper.get('/api/scrape', async (req, res) => {
    
    try {
        const { keyword } = req.query;
    
        const getUseCase = new MethodsUseCase();
        const resultUseCase = await getUseCase.getScraper(keyword);


        return res.json({ resultUseCase });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Failed to scrape data' });
    }
});