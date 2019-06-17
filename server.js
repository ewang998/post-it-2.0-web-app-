const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });
let notes = [];
let loadednotes = [{ id: 0, text: 'click on me to show detail about notes', date: ""},
                   { id: 1, text: 'click the button to the right to delete this message', date: ""}];

/* GET users listing. */
app.get('/loadednotes', function(req, res, next) {
  if(notes.length > 0) {
     res.json(notes);
  } else {
    res.json(loadednotes);
  }
});

app.get('/notes', function(req, res, next) {

    res.json(notes);

});

app.post('/notes', function(req, res, next) {
  new_note = req.body
  notes.push(new_note)
  res.json(notes)
});

app.delete('/delete', function(req, res, next) {
    console.log(req.body.id)
    console.log(notes)
    notes = notes.filter(note => note.id !== req.body.id)
    console.log(notes)
    res.json({ message: 'Deleted' })
});
