import { IGetScraper, IProductScraper } from "../interfaces/method.interface";
import { methodsRepositorie } from "../repositorie/methods.repositorie";
import { JSDOM } from 'jsdom';


export class MethodsUseCase {
    private repositorie: methodsRepositorie;
    constructor () {
        this.repositorie = new methodsRepositorie();
    };


    async getScraper (keyword: IGetScraper) {

        if (!keyword) {
            return { error: 'Keyword is required' }
        };


        const resultRepositorie = await this.repositorie.GET(keyword);


        if (!resultRepositorie || typeof resultRepositorie !== 'string') {
            return { error: 'Invalid HTML content received' };
        };
        
        const data = resultRepositorie;

        if (!data || typeof data !== 'string' || data.trim() === '') {
            throw new Error('O conteúdo de resultRepositorie não é válido ou está vazio.');
        }

        const dom = new JSDOM(data);
        const document = dom.window.document;
        const items: IProductScraper[] = [];
        resultRepositorie


        document.querySelectorAll('.s-main-slot .s-result-item').forEach(item => {
            const titleElement = item.querySelector('a h2 span');
            let title = titleElement ? titleElement.textContent.trim() : 'No title';
            
            const match = title.match(/^(.+?)\s*(?:\d+\.\d+ out of 5 stars)?$/);
            if (match) {
                title = match[1].trim();
            }
            const product: IProductScraper = {
                title: title,
                rating: item.querySelector('.a-icon-star-small')?.textContent?.trim() || 'No rating',
                reviews: item.querySelector('.a-size-small .a-link-normal')?.textContent?.trim() || '0',
                image: item.querySelector('.s-image')?.src || ''
            };
            
            items.push(product);
        });

        
        return items;
        
    };

}