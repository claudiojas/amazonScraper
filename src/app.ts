import express, { Application } from "express";
import cors from "cors"
import { getScraper } from "./routes/scraper.router";


export class App {

    private app:Application;
    constructor (){
        this.app = express();
    };

    async listen(){
        const PORT= 8080;

        this.app.listen(PORT, ()=>{
            console.log(`Server running in the port ${PORT}!!`)
        })
    };

    register(){
        this.app.use(cors());
        this.app.use(express.json({ limit: '10mb' }));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(getScraper);
    }
}