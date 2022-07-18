const { readFile } = require('fs');
const express = require('express');
const app = express();



app.use(express.json());

const videos = [
    {id: 1, name: "inception"},
    {id: 2, name: "founder"},

];

app.get('/api/videos/:id', (req, res) => {
    res.send(videos.find(v => v.id === parseInt(req.params.id)));
});

app.get('/', (req, res) => {
    readFile('./index.html', 'utf8', (error, data) => {
        res.send(data);
    });
    
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

