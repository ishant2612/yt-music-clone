const { log } = require('console');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const apiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bebd9d1a5fmsh7d52fdfa71d85ebp1a6b35jsneef3b8812bfb',
    'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com'
  }
};

app.post('/search', async (req, res)  => {
  try { 

    const apiURL = `https://youtube-music-api3.p.rapidapi.com/search?q=${req.body.q}&type=song`;

    const response = await fetch(apiURL, apiOptions);
    const result = await response.text();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/recommend',async (req,res)  =>{
  try{
    const artists = ["Weeknd",'Jared Benjamin','kill dyle','ravi kishan','shawn mendes','juice wrld','xxxtentacion']
    const randomIndex = Math.floor(Math.random() * artists.length);
    const randArtist = artists[randomIndex];
    const apiURL = `https://youtube-music-api3.p.rapidapi.com/search?q=${randArtist}&type=song`;
    const response = await fetch(apiURL, apiOptions);
    const result = await response.text();
    res.send(result);

  }catch(error){
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})
 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
