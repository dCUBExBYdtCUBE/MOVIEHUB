const mongoose=require('mongoose')
const express=require('express');
const app=express();
const cors=require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
  };
  
app.use(cors(corsOptions));

mongoose.connect('mongodb://127.0.0.1:27017/dude123', { useNewUrlParser: true, useUnifiedTopology: true });

const likedMoviesSchema = new mongoose.Schema({
  movieTitle: String,
});

const LikedMovie = mongoose.model('LikedMovie', likedMoviesSchema);

app.post('/like', async (req, res) => {
    const{data}=req.body

    try{
        const check = await LikedMovie.findOne({ movieTitle: data.movieTitle });
        console.log(data);

        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
            const likedMovie = new LikedMovie({ movieTitle: data.movieTitle });
            await likedMovie.save();
        }

    }
    catch(e){
        res.json("fail")
    }
});
app.listen(8002);