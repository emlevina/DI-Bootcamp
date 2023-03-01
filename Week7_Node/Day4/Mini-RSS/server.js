const express = require('express');
const app = express();
let Parser = require('rss-parser');
let parser = new Parser();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');

app.get('/', async (req, res) => {
  let feed = await parser.parseURL('https://www.sciencedaily.com/rss/top/science.xml');
  res.render('index', { feed: feed.items });
})

app.get('/search', async (req, res) => {
  res.render('search', { feed: [] });
})

app.get('/search/title', async (req, res) => {
  // console.log(req.query)
  let feed = await parser.parseURL('https://www.sciencedaily.com/rss/top/science.xml');
  const items = req.query.search ? feed.items.filter(item => item.title.toLowerCase().includes(req.query.search.toLowerCase())) : feed.items
  res.render('search', { feed: items });
})

app.listen(3000, () => {
  console.log('run on port 3000');
})