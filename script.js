const API_KEY = "40d4b2b996e9a46b2a36802464110150";

let allArticles = []; // store articles for search

// LOAD NEWS
async function loadNews(category = "") {
  const container = document.getElementById("newsContainer");

  container.innerHTML = "Loading news...";

  try {
    const url = `https://gnews.io/api/v4/top-headlines?country=in&lang=en&topic=${category}&apikey=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    allArticles = data.articles; // store for search

    displayNews(allArticles);
    document.getElementById("loader").style.display = "none";

  } catch (error) {
    console.error(error);
    container.innerHTML = "Failed to load news 😢";
  }
}

// DISPLAY FUNCTION
function displayNews(articles) {

  document.getElementById("loader").style.display = "none";

  const container = document.getElementById("newsContainer");

  container.innerHTML = "";

  articles.forEach(article => {

  const card = document.createElement("a");

card.href = `news.html?title=${encodeURIComponent(article.title)}&desc=${encodeURIComponent(article.content)}&img=${article.image}&author=NewsZone&date=May 02 2026`;
card.target = "_blank";

  card.classList.add("card-link");

  card.innerHTML = `
    <div class="news-card">
      <img src="${article.image || 'https://via.placeholder.com/300'}">
      <h3>${article.title}</h3>
      <p>${article.description || "No description available"}</p>
      <span class="read-btn">Read More</span>
    </div>
  `;

  container.appendChild(card);
});
}

const manualNews = [
  {
    title: "After SVC63, Another Telugu Banner for Salman Khan? Big Buzz in Industry",
    description: "After his upcoming film with a Telugu producer...",
    content: `After his upcoming film with a Telugu producer, Salman Khan is reportedly in talks for another big project under a Telugu banner.

Sources close to the industry suggest that discussions are already in progress and the project is expected to be a high-budget entertainer.

This collaboration could mark another major crossover between Bollywood and South Indian cinema, which has been trending in recent years.

Fans are eagerly waiting for an official announcement, and if confirmed, this could become one of the most anticipated projects of the year.`,
    url: "#",
    image: "salman.jfif",
    category: "film"
  },
  
  {
  title: "Kyle Jamieson Penalized for Aggressive Send-Off in IPL Match",

  description: "New Zealand pacer Kyle Jamieson faced disciplinary action after his aggressive send-off to young batter Vaibhav Sooryavanshi during an IPL match sparked controversy.",

  content: `New Zealand fast bowler Kyle Jamieson has been penalized following an on-field incident involving young Indian batter Vaibhav Sooryavanshi during a recent IPL match.

The incident occurred after Jamieson dismissed the youngster and followed it up with an intense and intimidating send-off. The gesture did not go unnoticed, as match officials reviewed the situation and found it to be in breach of the IPL's code of conduct.

As a result, Jamieson has been fined for his actions, with officials emphasizing the importance of maintaining sportsmanship on the field. While competitive spirit is encouraged, actions that could be seen as aggressive or disrespectful are strictly monitored.

Vaibhav Sooryavanshi, who has been gaining attention for his performances, remained composed despite the situation. The incident has sparked discussions among fans and experts about maintaining discipline and respect in high-pressure matches.

The IPL governing body continues to reinforce fair play, ensuring that the spirit of the game remains intact even in intense moments.`,
  
  url: "#",
  image: "WhatsApp Image 2026-05-02 at 3.48.08 PM.jpeg",
  category: "sports"
  }
];

displayNews(manualNews);

// CATEGORY CLICK
function filterNews(category) {
  if (category === "all") {
    displayNews(manualNews);
  } else {
    const filtered = manualNews.filter(n => n.category === category);
    displayNews(filtered);
  }
}

// SEARCH (WORKS NOW)

// DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  let btn = document.getElementById("darkBtn");

  if (document.body.classList.contains("dark-mode")) {
    btn.innerText = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    btn.innerText = "🌙";
    localStorage.setItem("theme", "light");
  }
}

// LOAD PAGE
window.onload = () => {
  // loadNews();

  let savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  document.getElementById("searchInput").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    const filtered = manualNews.filter(article =>
        article.title.toLowerCase().includes(value) ||
        (article.description && article.description.toLowerCase().includes(value))
    );

    displayNews(filtered);
});

};

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("show");
  });
});