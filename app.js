import express from 'express';
import path from 'path';


const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
    res.status(200);
})

app.get('/movies', (req, res) => {
    res.sendFile(path.resolve('movies.html'));
    res.status(200);
})

app.use("/static", express.static("./static"));
app.use("/src", express.static("./src"));

app.listen('5080', (req, res) => {
    console.log('Server is listening on port 5080');
})