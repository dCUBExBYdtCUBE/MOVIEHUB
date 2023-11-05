const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());



  
const puppeteer = require('puppeteer');

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

      const movieLinks = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll('a[href^="/media/tmdb-movie-"]'));
        const hrefs = links.map(link => link.getAttribute('href'));
        return hrefs;
      });

      for (const href of movieLinks) {
        movies.add(href);
      }

      const paginationLinks = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll('a[href^="/search/movie"]'));
        return links.map(link => link.getAttribute('href'));
      });

      URLs.push(...paginationLinks);
    }
  }

  await browser.close();

  // Filter out undefined values
  const filteredMovies = [...movies].filter(url => url !== undefined);

  return filteredMovies;
}
app.get('/api', async (req, res) => {
    try {
      const scrapedData = await scrapeDynamicPage('https://movie-web.app/search/movie/' + req.query.message, 50);
      res.send(scrapedData)
    } 
    
    catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Scraping failed' });
    }
  });
    
  app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });
