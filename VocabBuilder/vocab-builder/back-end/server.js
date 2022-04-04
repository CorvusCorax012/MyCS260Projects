const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/vocab', {
  useNewUrlParser: true
});


const wordSchema = new mongoose.Schema({
  
  word: String,
  definition: String,
  partofSpeech: String,
  phonetic: String,
});

// 
const Word = mongoose.model('word', wordSchema);

// 
app.post('/api/words', async (req, res) => {
  const newWord = new Word({
    word: req.body.word,
    definition: req.body.definition,
    partofSpeech: req.body.partofSpeech,
    phonetic: req.body.phonetic,
  });
  try {
    await newWord.save();
    res.send(newWord);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.get('/api/words', async (req, res) => {
  try {
    let words = await Word.find();
    res.send(words);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/words/:id', async (req, res) => {
  try {
    //console.log(req.params.id);
    await Word.deleteOne({ _id: req.params.id });
    res.send({ action: 'deleted', id: req.params.id });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/words/:id', async (req, res) => {
  try {
    let word = await Word.findOne({ _id: req.params.id });
    word.word= req.body.word;
    word.definition= req.body.definition,
    word.partofSpeech= req.body.partofSpeech,
    word.phonetic= req.body.phonetic,
    await word.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});



app.listen(5400, () => console.log('Server listening on port 5400!'));