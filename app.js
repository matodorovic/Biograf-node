import express from 'express';
import path from 'path';
import Twig from 'twig';


const app = express();

app.set('views', '/views');
app.set('view engine', 'twig');
app.engine('Twig', Twig.renderFile);

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
    res.status(200);
})

app.get('/movies', (req, res) => {
    res.sendFile(path.resolve('movies.html'));
    res.status(200);
})

app.get('/movies/:id', (req, res) => {
    res.sendFile(path.resolve('movie-info.html'));
    res.status(200);
})

app.get('/about-us', (req, res) => {
    res.sendFile(path.resolve('about-us.html'));
    res.status(200);
})

app.get('/events', (req, res) => {
    res.sendFile(path.resolve('events.html'));
    res.status(200);
})

app.get('/salons', (req, res) => {
    res.sendFile(path.resolve('salons.html'));
    res.status(200);
})

app.get('/restaurant', (req, res) => {
    res.sendFile(path.resolve('restaurant.html'));
    res.status(200);
})

app.get('/salonA', (req, res) => {
    res.sendFile(path.resolve('salonA.html'));
    res.status(200);
})

app.get('/salonB', (req, res) => {
    res.sendFile(path.resolve('salonB.html'));
    res.status(200);
})

app.get('/under-construction', (req, res) => {
    res.sendFile(path.resolve('under-construction.html'));
    res.status(200);
})

app.get('/booking', (req, res) => {
    res.sendFile(path.resolve('booking.html'));
    res.status(200);
})

app.use("/static", express.static("./static"));
app.use("/src", express.static("./src"));

app.use('/*', (req, res) => {
    res.sendFile(path.resolve('404.html'));
    res.status(404);
})


app.listen('5080', (req, res) => {
    console.log('Server is listening on port 5080');
})