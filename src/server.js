const { rateLimit } = require('express-rate-limit');
const express=require('express');
const cors=require('cors');
const cheerio=require('cheerio');
const axios=require('axios');
const app=express();
const mongoose=require('mongoose')
const { MongoClient } = require('mongodb');
app.use(cors());
app.use(express.json());
const apiLimiter = rateLimit({
  windowMs: 1000, // 1 second window
  max: 4, // 5 requests per second
});

app.use(apiLimiter);


const MAX_RETRIES = 2; // Define the maximum number of retries

async function fetchDataWithRetry(options, retries) {
  try {
    const response=await axios.request(options)
      return response;
  } catch (error) {
    if (retries < MAX_RETRIES) {
      // If rate limited, retry after a delay (e.g., 1 second)
      if (error.response && error.response.status === 429) {
        console.log('Rate limited. Retrying...');
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust the delay as needed
        return fetchDataWithRetry(options, retries + 1);
      }
    }
    throw error; // Throw the error if not rate-limited or after max retries
  }
}

  
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
        movies.add({link:movieLink.href,title:movieLink.textContent});
      });

      const paginationLinks = await page.evaluate(()=> {
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

      const uri = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    // Connect to MongoDB
    await client.connect();

    // Accessing the database
    const db = client.db('users');

    // Check if the collection exists
    const collections = await db.listCollections().toArray();
    const collectionExists = collections.some((collection) => collection.name === req.query.message);

    if (collectionExists) {
      // If collection exists, fetch data from MongoDB collection
      const collectionData = await db.collection(req.query.message).find({}).toArray();
      res.json(collectionData);
    } else {
      const scrapedData = await scrapeDynamicPage('https://movie-web.app/search/movie/' + req.query.message, 50);
     
      // Collect movie titles
      //const movieTitles = scrapedData.map((movie) => movie.title);
      
      // Fetch IMDb data for each movie title
      const imdbData = [];
      for (const {link,title} of scrapedData) {
        const options = {
          method: 'GET',
          url: 'https://imdb8.p.rapidapi.com/auto-complete',
          params: { q: title },
          
        };
  
        try {
          const response = await fetchDataWithRetry(options,0);
          const list = response.data.d;
          for (const item of list){
            const name = item.l;
            if(name==title){
              const id=item.id;
              var poster = "https://img.freepik.com/premium-vector/coming-soon-banner-with-brick-wall_19426-797.jpg?w=996";
              if(item.i.imageUrl){
                poster = item.i.imageUrl;
              }
              const release = item.y;
              const rank = item.rank;
              
              const options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/title/get-genres',
                params: {
                
                  tconst: item.id
                },
              
              };

                try {
                  const response =  await fetchDataWithRetry(options,0);
                  genre=response.data;
                  imdbData.push({ name, poster, release, rank,genre,link });
                } catch (error) {
                  console.error(error);
                }

            }
          };
        } catch (error) {
          console.error(error);
          if (error.response) {
            console.error(error.response.data);
          }
        }
      }
  
      // Send IMDb data in the response
      const newCollection = db.collection(req.query.message);
      await newCollection.insertMany(imdbData);
      res.json(imdbData);
      }
      await client.close();
    }
    
    catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Scraping failed' });
    }
  });
    
  app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });

