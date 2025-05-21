const params = new URLSearchParams(window.location.search);
const keyword = params.get("keyword")?.toLowerCase() || "";

const searchKeyword = document.querySelector(".keyword");
const resultList = document.querySelector(".resultList");

const defaultImg = "https://image.tmdb.org/t/p/w440_and_h660_face";

console.log(movieList);
if (!keyword) {
  resultList.innerHTML = `
  <div class="w-100 text-center py-5">
    <h3>Please enter a keyword to search 🎬</h3>
  </div>
`;
} else {
  const filtered = movieList.results.filter(movie => 
    movie.original_title.toLowerCase().includes(keyword)
  );

  if(filtered.length === 0) {
    resultList.innerHTML = `
    <div class="w-100 text-center py-5">
      <h3>No results found for "<strong>${keyword}</strong>" 😥</h3>
      <p>Try another keyword or check spelling</p>
    </div>
  `;
  } else {
    searchKeyword.innerHTML = `[${keyword}] `;

    resultList.innerHTML = "";
    filtered.forEach(movie => {
      const movieCard = `
        <div class="col-md-4 col-12">
          <div class="card h-100" style="min-height: 500px;">
            <img 
            src="${defaultImg}${movie.poster_path}" 
            class="card-img-top"
            alt="${movie.original_title} poster"
            onerror="this.onerror=null; this.src='${defaultImg}';">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${movie.original_title}</h5>
              <p class="card-text" style="
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
              ">${movie.overview}</p>
              <a href="detail.html?id=${movie.id}" class="btn mt-auto text-white" style="background-color: #72BF78;">Detail</a>
            </div>
          </div>
        </div>
        `;

      resultList.innerHTML += movieCard;
    })
  }
}
