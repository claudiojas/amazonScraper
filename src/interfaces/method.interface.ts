
//This code defines a set of TypeScript interfaces that structure the data and methods used for scraping. 
// It helps ensure that functions follow a consistent format when dealing with API products and responses.


// Interface that defines the structure for the GET method parameters
export interface IGetScraper {
  keyword: string;
}

// Interface that defines the structure of a scraped product
export interface IProductScraper {
  title: string;
  rating: string;
  reviews: string;
  image: string;
}

// Interface for the API response format
export interface IResponseGetApi {
  data: string;
}

// Interface defining available scraping methods
export interface IMethodScraperValues {
  // The GET method takes an object with a keyword and returns a Promise with a string response
  GET({ keyword }:IGetScraper):Promise<string>;
}