
export interface IGetScraper {
  keyword: string;
}

export interface IProductScraper {
  title: string;
  rating: string;
  reviews: string;
  image: string;
}

export interface IResponseGetApi {
  data: string;
}

export interface IMethodScraperValues {
  GET({ keyword }:IGetScraper):Promise<string>;
}