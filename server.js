

const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'client/build')));
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())

// console.log that your server is up and running

let port = process.env.PORT || 3000;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port, () => console.log("listening on port"));

//db initialize
mongoose.connect('mongodb+srv://m001-student:m001-eric@sandbox-i21go.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

const NotesSchema = new mongoose.Schema({
  id: Number,
  text: String,
  date: String
});

const Note = mongoose.model("Note", NotesSchema);

const note1 = new Note ({ id: 0, text: 'test DB 1 click on me to show detail about notes', date: ''});
const note2 = new Note ({ id: 1, text: 'click the button to the right to delete this message', date: ''});

const defaultNotes = [note1, note2];





//some helper method
// check if an element exists in array using a comparer function
// comparer : function(currentElement)
Array.prototype.inArray = function(comparer) {
    for(var i=0; i < this.length; i++) {
        if(comparer(this[i])) return true;
    }
    return false;
};

// adds an element to the array if it does not already exist using a comparer
// function
Array.prototype.pushIfNotExist = function(element, comparer) {
    if (!this.inArray(comparer)) {

    }
};


/* GET users listing. */
app.get(port, function(req, res, next) {
    Note.find({}, function(err, foundNotes) {
      if (foundNotes.length === 0) {

        Note.insertMany(defaultNotes, function(err){
            if(err) {
              console.log(err);
            } else {
              console.log("successfully loaded default notes")
            }
        });
      } else {
        res.json(foundNotes);
}
    })
});



app.post(port, function(req, res, next) {

  const input = req.body

  const new_note = new Note(
    input
   );

  new_note.save();

  res.redirect(port);
});

app.delete(port, function(req, res, next) {
    const deleteid = req.body.id;


    Note.deleteMany({'id': deleteid}, function(err) {
      if(!err) { console.log("deleted")}
      res.redirect(port);
    });


});
