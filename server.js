const express = require('express');
const path = require('path');
const notesDB = require('./db/db.json');
const fs = require('fs');
const { data } = require('jquery');
const { error } = require('console');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

// get homepage
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// get notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// get all notes
app.get('/api/notes', (req, res) => {
    res.json(notesDB);
});

// post new note
app.post('/api/notes', (req, res) => {
    // const { title, text } = req.body;
    // if (title && text){
    //     const newNote = {
    //         title,
    //         text
    //     }

    //     const noteString = JSON.stringify(newNote);

    //     fs.writeFile(`./db/db.json`, noteString, (err) =>
    //     err
    //         ? console.error(err)
    //         : console.log(
    //             `nice`
    //         )
    //     );
  
    //     const response = {
    //         status: 'success',
    //         body: newNote,
    //     };

    //     console.log(response);
    //     res.status(201).json(response);
    // } else {
    //     res.status(500).json('yikes')
    // }
});


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
