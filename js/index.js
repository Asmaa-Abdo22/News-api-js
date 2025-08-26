// *----HTML ELEMENTS ----
const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".asidee");
const overlay = document.querySelector(".overlay");
const newsContainer = document.querySelector(".news-container");
const placeHolderImg = "../imgs/Placeholder-_-Glossary.svg";
const navLinks = document.querySelectorAll(".navbar ul li a");
const asideLinks = document.querySelectorAll(".asidee ul li a");
let countryCodee = "us";
let categoryCountry = "business";
console.log("navlinks", asideLinks);
// ^----GLOBAL VARIABLES ----
// &----FUNCTIONS ----
async function getNews(category, countrycode) {
  let response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${countrycode}&category=${category}&apiKey=56fd3d86847f4852ac1d783fb60f3da5`
  );
  let data = await response.json();
  console.log("array of news", data.articles);
  displayArticles(data.articles);
}
getNews(categoryCountry, countryCodee);

function displayArticles(arr) {
  newsContainer.innerHTML = " ";
  if (arr.length === 0) {
    newsContainer.innerHTML = `<p class="text-center text-danger">⚠️  Not Available From API Right Now </p>`;
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    newsContainer.innerHTML += `
     <div class="item" data-aos="fade-up" data-aos-delay="${i * 50}">
                        <div class="inner h-100 shadow rounded">
                            <img src="${arr[i].urlToImage || placeHolderImg}"
                            alt="${
                              arr[i].title
                            }" class="w-100 rounded" data-aos="zoom-in" data-aos-delay="${
      i * 50 + 100
    }">
                            <div class="inner-body p-3">
                                <h2 class="h5" data-aos="fade-right" data-aos-delay="${
                                  i * 50 + 150
                                }">${
      arr[i].title.length > 50
        ? arr[i].title.slice(0, 20) + "..."
        : arr[i].title
    }</h2>
                                <p class="text-muted" data-aos="fade-up" data-aos-delay="${
                                  i * 50 + 200
                                }">${arr[i].description} </p>
                                <a class="btn-primary btn" href="${
                                  arr[i].url
                                }" data-aos="fade-up" data-aos-delay="${
      i * 50 + 250
    }">Read More </a>
                            </div>
                        </div>
                    </div>
    `;
  }
}

// ?----EVENTS ----
document.addEventListener("DOMContentLoaded", function () {
  sidebarToggle.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", function () {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
  });
});
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function (e) {
    console.log("one nav link");
    let prevActive = document.querySelector(".navbar ul .active");
    prevActive.classList.remove("active");
    e.target.classList.add("active");
    if (e.target.innerHTML === "Egypt") {
      countryCodee = "eg";
    } else if (e.target.innerHTML === "United States") {
      countryCodee = "us";
    } else if (e.target.innerHTML === "Japan") {
      countryCodee = "jp";
    } else {
      countryCodee = "fr";
    }
    getNews(categoryCountry, countryCodee);
  });
}
for (let i = 0; i < asideLinks.length; i++) {
  asideLinks[i].addEventListener("click", function (e) {
    console.log("aside link");
    let prevActive = document.querySelector(".asidee .active");
    console.log("prev active");
    prevActive.classList.remove("active");
    e.target.classList.add("active");
    if (e.target.innerHTML.trim().toLowerCase() === "business") {
      categoryCountry = "business";
    } else if (e.target.innerHTML.trim().toLowerCase() === "sports") {
      categoryCountry = "sports";
    } else if (e.target.innerHTML.trim().toLowerCase() === "science") {
      categoryCountry = "science";
    } else {
      categoryCountry = "technology";
    }
    getNews(categoryCountry, countryCodee);
  });
}
