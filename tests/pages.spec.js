import request from 'supertest';
import app from '../app.js';
import { getMovies } from '../src/JS/getMovies.js';

test('Shows list of all movies from API', async () => {
  const movies = await getMovies();
  const response = await request(app)
    .get('/movies')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200);

  for (let i = 0; i < movies.length; i++) {
    expect(
      response.text.includes(`<img src=${movies[i].attributes.image.url} aria-label=${movies[i].attributes.title}/>`) 
    ).toBeTruthy();

    expect(
      response.text.includes(`a href='/movies/${movies[i].id}'`)
    ).toBeTruthy();

    expect(
      response.text.includes(`a href='/movies/${movies[i].attributes.title}'`)
    ).toBeFalsy();

  }
});

test('Showing correct title on info page', async () => {
  const movies = await getMovies();
  for (let i = 0; i < movies.length; i++) {
    const response = await request(app)
      .get('/movies/' + movies[i].id)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200);

    expect(
      response.text.includes(`${movies[i].attributes.title}`)
    ).toBeTruthy();
  }
});