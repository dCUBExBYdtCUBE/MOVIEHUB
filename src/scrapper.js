// /*
// const axios=require('axios');
// const cheerio=require('cheerio')

// async function main(max=50){
  
//   const URLs=['https://movie-web.app/search/movie/fast'];
//   const visited=[];
//   const movies=new Set();
//   while(URLs.length!==0 && visited.length<=max){
//     const paginationurl=URLs.pop();
//     const pageHTML=await axios.get(paginationurl);
//     visited.push(paginationurl);
//     const $=cheerio.load(pageHTML.data);
//     $('.grid.grid-cols-2.gap-6.sm\\:grid-cols-3 a').each((index,element)=>{
//       const paginationURL=$(element).attr('href');
//       if ( 
// 				!visited.includes(paginationURL) && 
// 				!URLs.includes(paginationURL) 
// 			) { 
// 				URLs.push(paginationURL); 
// 			} 
		
//     })
//     $(".grid.grid-cols-2.gap-6.sm\\:grid-cols-3 a").each((index, element) => { 
// 			const productURL = $(element).attr("href"); 
// 			movies.add(productURL); 
// 		}); 
//   }
// 	console.log([...movies]);
//   console.log(URLs); 

// }
  
// main() 
// 	.then(() => { 
// 		// successful ending 
// 		process.exit(0); 
// 	}) 
// 	.catch((e) => { 
// 		// logging the error message 
// 		console.error(e); 
 
// 		// unsuccessful ending 
// 		process.exit(1); 
// 	});



// /*  const puppeteer = require('puppeteer');

// (async () => {
//   // Launch a headless browser
//   const browser = await puppeteer.launch();

//   // Create a new page
//   const page = await browser.newPage();

//   // Navigate to the website
//   await page.goto('https://imdb.com');
//   await page.waitForSelector('#suggestion-search');

//   // Find the search input field and enter a search query
//   const searchInput = await page.$('#suggestion-search');
//   await searchInput.type('Fast and the Furious');

//   // Find the search button and click it
//   const searchButton = await page.$('.imdb-header-search__search-submit-button');
//   await searchButton.click();

//   // Wait for the search results to load
//   await page.waitForSelector('.ipc-metadata-list-summary-item ipc-metadata-list-summary-item--click find-result-item find-title-result .ipc-metadata-list-summary-item__c .ipc-metadata-list-summary-item__tc .ipc-metadata-list-summary-item__t' );

//   // Extract and process the search results
//   const searchResults = await page.$eval('.ipc-metadata-list-summary-item ipc-metadata-list-summary-item--click find-result-item find-title-result .ipc-metadata-list-summary-item__c .ipc-metadata-list-summary-item__tc .ipc-metadata-list-summary-item__t', (results) => results.innerText);
//   console.log('Search results:', searchResults);

//   // Close the browser
//   await browser.close();
// })();
// */
// const puppeteer = require('puppeteer');

// async function scrapeDynamicPage(url, max) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto(url);

//   const movies = new Set();
//   const visited = new Set();
//   const URLs = [url];

//   while (URLs.length > 0 && visited.size <= max) {
//     const currentURL = URLs.shift();
//     if (!visited.has(currentURL)) {
//       visited.add(currentURL);
//       await page.goto(currentURL, { waitUntil: 'networkidle2' });

//       // Check if scrolling is needed based on page structure
//       const isScrollNeeded = await page.evaluate(() => {
//         const contentHeight = document.documentElement.clientHeight;
//         const windowHeight = window.innerHeight;
//         return contentHeight > windowHeight;
//       });

//       if (isScrollNeeded) {
//         // Scroll down to load more content (adjust as needed)
//         while (true) {
//           const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
//           await page.evaluate(() => window.scrollBy(0, window.innerHeight));
//           await new Promise(r => setTimeout(r, 3000)); // Wait for the content to load (adjust the time as needed)

//           if (scrollHeight === await page.evaluate(() => document.documentElement.scrollHeight)) {
//             break;
//           }
//         }
//       }

//       const movieLinks = await page.evaluate(() => {
//         const links = Array.from(document.querySelectorAll('a[href^="/media/tmdb-movie-"]'));
//         const hrefs = links.map(link => link.getAttribute('href'));
//         return hrefs;
//       });

//       for (const href of movieLinks) {
//         movies.add(href);
//       }

//       const paginationLinks = await page.evaluate(() => {
//         const links = Array.from(document.querySelectorAll('a[href^="/search/movie"]'));
//         return links.map(link => link.getAttribute('href'));
//       });

//       URLs.push(...paginationLinks);
//     }
//   }

//   await browser.close();

//   // Filter out undefined values
//   const filteredMovies = [...movies].filter(url => url !== undefined);
//   console.log(filteredMovies);
// }

// scrapeDynamicPage('https://movie-web.app/search/movie/fast', 50)
//   .then(() => {
//     console.log('Scraping completed successfully.');
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function scrapeDynamicPage(url, max) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  const movies = new Set();
  const visited = new Set();
  const URLs = [url];

  while (URLs.length > 0 && visited.size <= max) {
    const currentURL = URLs.shift();
    if (!visited.has(currentURL)) {
      visited.add(currentURL);
      await page.goto(currentURL, { waitUntil: 'networkidle2' });

      // Check if scrolling is needed based on page structure
      const isScrollNeeded = await page.evaluate(() => {
        const contentHeight = document.documentElement.clientHeight;
        const windowHeight = window.innerHeight;
        return contentHeight > windowHeight;
      });

      if (isScrollNeeded) {
        // Scroll down to load more content (adjust as needed)
        while (true) {
          const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
          await page.evaluate(() => window.scrollBy(0, window.innerHeight));
          await new Promise(r => setTimeout(r, 3000)); // Wait for the content to load (adjust the time as needed)

          if (scrollHeight === await page.evaluate(() => document.documentElement.scrollHeight)) {
            break;
          }
        }
      }

      const pageHTML = await page.content();
      const $ = cheerio.load(pageHTML);

      const movieLinks = $('a[href^="/media/tmdb-movie-"]').map((index, element) => {
        const link = $(element);
        const href = link.attr('href');
        const spanText = link.find('h1').find('span').text();
        return {
          href: href,
          textContent: spanText
        };
      }).get();

      movieLinks.forEach((movieLink) => {
        movies.add({link:movieLink.href,text:movieLink.textContent});
      });

      const paginationLinks = Array.from(new Set($('a[href^="/search/movie"]').map((index, link) => $(link).attr('href')).get()));

      URLs.push(...paginationLinks);
    }
  }

  await browser.close();

  // Filter out undefined values
  const filteredMovies = [...movies].filter(url => url !== undefined);
  console.log(filteredMovies);
}

scrapeDynamicPage('https://movie-web.app/search/movie/fast', 50)
  .then(() => {
    console.log('Scraping completed successfully.');
  })
  .catch((error) => {
    console.error('Error:', error);
  });
