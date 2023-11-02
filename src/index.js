import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyApp from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Find from './find';
import FavoritePage from './fav_page';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Routes>
        <Route path="/react-gh-pages" element={<MyApp />} />

        <Route path="/find" element={<Find />} />
        <Route path="/favourite" element={<FavoritePage/>}/>
      </Routes>
      </Router></React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*const axios=require('axios');
const cheerio=require('cheerio')

async function main(max=50){
  
  const URLs=['https://attackertv.so/search/fast'];
  const visited=[];
  const movies=new Set();
  while(URLs.length!==0 && visited.length<=max){
    const paginationurl=URLs.pop();
    const pageHTML=await axios.get(paginationurl);
    visited.push(paginationurl);
    const $=cheerio.load(pageHTML.data);
    $('.page-item a').each((index,element)=>{
      const paginationURL=$(element).attr('href');
      if ( 
				!visited.includes(paginationURL) && 
				!URLs.includes(paginationURL) 
			) { 
				URLs.push(paginationURL); 
			} 
		
    })
    $(".flw-poster a").each((index, element) => { 
			const productURL = $(element).attr("href"); 
			movies.add(productURL); 
		}); 
  }
	console.log([...movies]);
  console.log(URLs); 

}
  
main() 
	.then(() => { 
		// successful ending 
		process.exit(0); 
	}) 
	.catch((e) => { 
		// logging the error message 
		console.error(e); 
 
		// unsuccessful ending 
		process.exit(1); 
	});



/*  const puppeteer = require('puppeteer');

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Navigate to the website
  await page.goto('https://imdb.com');
  await page.waitForSelector('#suggestion-search');

  // Find the search input field and enter a search query
  const searchInput = await page.$('#suggestion-search');
  await searchInput.type('Fast and the Furious');

  // Find the search button and click it
  const searchButton = await page.$('.imdb-header-search__search-submit-button');
  await searchButton.click();

  // Wait for the search results to load
  await page.waitForSelector('.ipc-metadata-list-summary-item ipc-metadata-list-summary-item--click find-result-item find-title-result .ipc-metadata-list-summary-item__c .ipc-metadata-list-summary-item__tc .ipc-metadata-list-summary-item__t' );

  // Extract and process the search results
  const searchResults = await page.$eval('.ipc-metadata-list-summary-item ipc-metadata-list-summary-item--click find-result-item find-title-result .ipc-metadata-list-summary-item__c .ipc-metadata-list-summary-item__tc .ipc-metadata-list-summary-item__t', (results) => results.innerText);
  console.log('Search results:', searchResults);

  // Close the browser
  await browser.close();
})();
*/