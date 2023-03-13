export function movieInfo() {
  const movieOption = document.querySelectorAll(".list-styling li img");
  //const description = document.querySelector(".description");
  //const movieImg = document.querySelectorAll(".movies-list-item img");

  for (let i = 0; i < movieOption.length; i++) {
  
    movieOption[i].addEventListener("click", () => {
      let movieId = movieOption[i].id;
    console.log(movieId);
      window.open(location.href + `/${movieId}`, "_self");
  });
  }
}
