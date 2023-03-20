import express from 'express';
import path, { resolve } from 'path';
import { engine } from "express-handlebars";
import { marked } from "marked";
import { getMovies, getMovie } from "./src/JS/getMovies.js";


const app = express();

app.set("view engine", "handlebars");
app.set("views", "./views");
app.engine('handlebars', engine({
    defaultLayout: 'index',
    helpers: {
        markdown: (md) => marked(md),
    }, 
  })
);



app.get("/", async (req, res) => {
    const movies = await getMovies();
    res.render("main", { movies });
    res.status(200);
});

app.get('/movies', async (req, res) => {
    const movies = await getMovies();
    res.render("movies", { movies });
    res.status(200);
})

app.get('/movies/:movieId', async (req, res) => {
    const movie = await getMovie(req.params.movieId);
    if (movie) {
        res.render("movie-info", { movie });
        res.status(200);
      } else {
        res.render("404");
        res.status(404);
      }
})

app.get('/about-us', (req, res) => {
    res.render('about-us');
    res.status(200);
})

app.get('/events', (req, res) => {
    res.render('events');
    res.status(200);
})

app.get('/salons', (req, res) => {
    res.render('salons');
    res.status(200);
})

app.get('/restaurant', (req, res) => {
    res.render('restaurant');
    res.status(200);
})

app.get('/salonA', (req, res) => {
    res.render('salonA');
    res.status(200);
})

app.get('/salonB', (req, res) => {
    res.render('salonB');
    res.status(200);
})

app.get('/under-construction', (req, res) => {
    res.render('under-construction');
    res.status(200);
})

app.get('/booking', (req, res) => {
    res.render('booking');
    res.status(200);
})


app.use('/static', express.static(resolve('static')));
app.use('/movies/static', express.static(resolve('static')));
app.use('/src', express.static(resolve('src')));
app.use('/movies/src', express.static(resolve('src')));
app.use(express.json());


app.use('*', (req, res) => {
    res.render('404');
    res.status(404);
})

app.listen('5080', (req, res) => {
    console.log('Server is listening on port 5080');
})

export default app;