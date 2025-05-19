const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

console.log(movieId);


const imgContainer = document.querySelector(".imgContainer");
const infoContainer = document.querySelector(".infoContainer");

const movie = movieList.results.find(movie => String(movie.id) === movieId);

const img = `
  <img
    class="img-fluid rounded shadow"
    src="https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}"
    alt="${movie.title} poster"
  />
  `;

  const badgeColors = [
    "bg-primary", "bg-secondary", "bg-success",
    "bg-danger", "bg-warning", "bg-info",
    "bg-light text-dark", "bg-dark"
  ];
  
  const genreHtml = movie.genre_ids
    .map(id => {
      const name = genreMap[id] || "Unknown";
      const randomColor = badgeColors[Math.floor(Math.random() * badgeColors.length)];
      return `<span class="badge ${randomColor} me-1">${name}</span>`;
    })
    .join("");

  const info = `
  <div class="px-2 py-3" style="font-size: 1.3rem; line-height: 1.8;">
    <h2 class="fw-bold mb-4" style="font-size: 3rem;">${movie.title}</h2>

    <p class="mb-4">
      <span class="fw-semibold me-2">Genre:</span> ${genreHtml}
    </p>

    <p class="mb-5">
      <span class="fw-semibold">Overview:</span><br>
      <span class="text-muted">${movie.overview}</span>
    </p>

    <div class="mb-3 d-flex justify-content-between">
      <span class="fw-semibold">Popularity:</span>
      <span>${movie.popularity.toFixed(1)}</span>
    </div>

    <div class="mb-3 d-flex justify-content-between">
      <span class="fw-semibold">Release date:</span>
      <span>${movie.release_date}</span>
    </div>

    <div class="mb-3 d-flex justify-content-between">
      <span class="fw-semibold">Vote average:</span>
      <span>${movie.vote_average} / 10</span>
    </div>

    <div class="mb-3 d-flex justify-content-between">
      <span class="fw-semibold">Vote count:</span>
      <span>${movie.vote_count.toLocaleString()}</span>
    </div>
  </div>
`;

imgContainer.innerHTML = img;
infoContainer.innerHTML = info;

const ctx = document.querySelector("#voteChart").getContext("2d");
