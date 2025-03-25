# Amazon Scraper

This project is a simple web scraper built with **Node.js** and **TypeScript** to extract product listings from the first page of search results on Amazon based on a provided keyword. The backend uses **Axios** to fetch the content of Amazon's search results and **JSDOM** to parse and extract product details. The frontend is implemented with **HTML**, **CSS**, and **JavaScript**.

## Backend Technologies

- **Node.js**: JavaScript runtime for building the backend.
- **TypeScript**: Used for static typing and better code quality.
- **Express**: Web framework to handle HTTP requests.
- **Axios**: HTTP client for making requests to Amazon's website.
- **JSDOM**: Used to parse and extract product data from Amazon’s HTML content.
- **Cors**: Middleware to allow cross-origin requests.
- **Puppeteer**: Headless browser used for more complex scraping (optional).
- **dotenv**: For managing environment variables.

## Frontend Technologies

- **HTML**: For the basic structure of the webpage.
- **CSS**: For styling and making the webpage presentable.
- **JavaScript**: For handling user interactions and making AJAX requests to the backend API.

## Features

- Scrapes Amazon product listings based on a search keyword.
- Extracts product title, rating, number of reviews, and product image URL.
- Provides an API endpoint to trigger the scraping and return the results in JSON format.

## Prerequisites

- **Node.js** (>= 22.x)
- **NPM** (Node Package Manager)

## Setup

1. Clone the repository:

    ```bash
    https://github.com/claudiojas/amazonScraper.git
    cd amazonScraper
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file to store any environment variables (if needed).

4. Start the development server:

    ```bash
    npm run dev
    ```

    The backend server will be running at `http://localhost:8080`.

## API Endpoint

- **GET** `/api/scrape?keyword=yourKeyword`
  
  This endpoint accepts a query parameter `keyword` and returns a list of products found on Amazon's search results for that keyword. The returned JSON will include:

  - `title`: The product title.
  - `rating`: The product's rating (if available).
  - `reviews`: The number of reviews for the product.
  - `image`: The URL of the product's image.

### Example Request:
GET http://localhost:8080/api/scrape?keyword=laptop

### Example Response:

### Example Response:
### Example Response:

```json
{
  "results": [
    {
      "title": "Product Title",
      "rating": "4.5 out of 5 stars",
      "reviews": "1500",
      "image": "https://example.com/image.jpg"
    },
    ...
  ]
}
```
## Frontend

To run the frontend, simply open the `frontend/index.html` file in a browser. It allows you to input a keyword and fetch the results from the API, displaying the products in a clean format.

### Running the Frontend in VSCode

If you're using **Visual Studio Code (VSCode)**, you can simplify the process of opening the `index.html` file by using the **Live Server** extension. This extension allows you to quickly open an HTML file in a local development server with live reload, meaning any changes you make to the code will be automatically reflected in the browser without needing to refresh the page manually.

#### Steps to use Live Server:

1. Install the **Live Server** extension in VSCode. You can find it by searching for "Live Server" in the Extensions view (`Ctrl+Shift+X`).
2. After installing the extension, open the `frontend/index.html` file in VSCode.
3. Right-click on the HTML file and select **"Open with Live Server"** from the context menu.
4. Your browser will automatically open and load the page, and the Live Server will monitor for any changes to the HTML, CSS, or JavaScript files, reflecting them immediately in the browser.

This is a very efficient way to preview your frontend and test the interaction with the backend.

### File Structure

- **frontend/index.html**: The main HTML file for the frontend interface.
- **frontend/style.css**: Styles for the frontend page.
- **frontend/script.js**: JavaScript to handle AJAX requests and display the results.

## Notes

- This frontend interacts with the backend API to fetch product listings based on a keyword entered by the user.
- Make sure the backend server is running for the frontend to work properly.



# Amazon Scraper

Este projeto é um simples web scraper desenvolvido com **Node.js** e **TypeScript** para extrair listagens de produtos da primeira página de resultados de pesquisa na Amazon com base em uma palavra-chave fornecida. O backend usa **Axios** para buscar o conteúdo dos resultados de pesquisa da Amazon e **JSDOM** para analisar e extrair detalhes dos produtos. O frontend é implementado com **HTML**, **CSS** e **JavaScript**.

## Tecnologias do Backend

- **Node.js**: Ambiente de execução JavaScript para construir o backend.
- **TypeScript**: Usado para tipagem estática e melhor qualidade de código.
- **Express**: Framework web para gerenciar requisições HTTP.
- **Axios**: Cliente HTTP para fazer requisições para o site da Amazon.
- **JSDOM**: Usado para analisar e extrair dados de produtos do conteúdo HTML da Amazon.
- **Cors**: Middleware para permitir requisições de origens cruzadas.
- **Puppeteer**: Navegador sem cabeça utilizado para scraping mais complexo (opcional).
- **dotenv**: Para gerenciar variáveis de ambiente.

## Tecnologias do Frontend

- **HTML**: Para a estrutura básica da página web.
- **CSS**: Para estilizar e tornar a página web apresentável.
- **JavaScript**: Para gerenciar interações do usuário e fazer requisições AJAX para a API do backend.

## Funcionalidades

- Extrai listagens de produtos da Amazon com base em uma palavra-chave de pesquisa.
- Extrai título do produto, avaliação, número de avaliações e URL da imagem do produto.
- Fornece um endpoint da API para iniciar o processo de scraping e retornar os resultados no formato JSON.

## Pré-requisitos

- **Node.js** (>= 22.x)
- **NPM** (Node Package Manager)

## Configuração

1. Clone o repositório:

    ```bash
    https://github.com/claudiojas/amazonScraper.git
    cd amazonScraper
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Crie um arquivo `.env` para armazenar variáveis de ambiente (se necessário).

4. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

    O servidor backend estará rodando em `http://localhost:8080`.

## Endpoint da API

- **GET** `/api/scrape?keyword=suaPalavraChave`
  
  Esse endpoint aceita um parâmetro de consulta `keyword` e retorna uma lista de produtos encontrados nos resultados de pesquisa da Amazon para essa palavra-chave. O JSON retornado incluirá:

  - `title`: O título do produto.
  - `rating`: A avaliação do produto (se disponível).
  - `reviews`: O número de avaliações do produto.
  - `image`: A URL da imagem do produto.

### Exemplo de Requisição:
GET http://localhost:8080/api/scrape?keyword=laptop

### Exemplo de Resposta:

```json
{
  "results": [
    {
      "title": "Título do Produto",
      "rating": "4.5 de 5 estrelas",
      "reviews": "1500",
      "image": "https://example.com/imagem.jpg"
    },
    ...
  ]
}
```

## Frontend

Para rodar o frontend, basta abrir o arquivo `frontend/index.html` em um navegador. Ele permite que você insira uma palavra-chave e recupere os resultados da API, exibindo os produtos de forma limpa.

### Rodando o Frontend no VSCode

Se você estiver usando o **Visual Studio Code (VSCode)**, pode simplificar o processo de abrir o arquivo `index.html` usando a extensão **Live Server**. Essa extensão permite abrir rapidamente um arquivo HTML em um servidor de desenvolvimento local com recarga ao vivo, o que significa que quaisquer alterações feitas no código serão refletidas automaticamente no navegador sem a necessidade de atualizar a página manualmente.

#### Passos para usar o Live Server:

1. Instale a extensão **Live Server** no VSCode. Você pode encontrá-la pesquisando por "Live Server" na visualização de Extensões (`Ctrl+Shift+X`).
2. Após instalar a extensão, abra o arquivo `frontend/index.html` no VSCode.
3. Clique com o botão direito no arquivo HTML e selecione **"Open with Live Server"** no menu de contexto.
4. O seu navegador será automaticamente aberto e carregará a página, e o Live Server monitorará quaisquer alterações nos arquivos HTML, CSS ou JavaScript, refletindo-as imediatamente no navegador.

Essa é uma maneira muito eficiente de visualizar o seu frontend e testar a interação com o backend.

### Estrutura de Arquivos

- **frontend/index.html**: O arquivo HTML principal para a interface do frontend.
- **frontend/style.css**: Estilos para a página do frontend.
- **frontend/script.js**: JavaScript para gerenciar requisições AJAX e exibir os resultados.

## Notas

- Esse frontend interage com a API do backend para buscar as listagens de produtos com base em uma palavra-chave inserida pelo usuário.
- Certifique-se de que o servidor backend esteja rodando para o frontend funcionar corretamente.


