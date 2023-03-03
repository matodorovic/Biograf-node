export async function getMovies() {
  const response = await fetch("http://plankton-app-xhkom.ondigitalocean.app/api/movies");
  const payload = await response.json();
  return payload.data;;
}

export async function getMovie(id) {
  const response = await fetch(`http://plankton-app-xhkom.ondigitalocean.app/api/movies/${id}`);
  const payload = await response.json();
  return payload.data;
}