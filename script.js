const API_KEY = "40d4b2b996e9a46b2a36802464110150";

let allArticles = []; // store articles for search

// LOAD NEWS
async function loadNews(category = "") {
  const container = document.getElementById("newsContainer");

  container.innerHTML = `
    <div class="skeleton-card"></div>
    <div class="skeleton-card"></div>
    <div class="skeleton-card"></div>
  `;

  try {
    const url = `https://gnews.io/api/v4/top-headlines?country=in&lang=en&topic=${category}&apikey=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    allArticles = data.articles;

    displayNews(allArticles);
    document.getElementById("loader").style.display = "none";

  } catch (error) {
    console.error(error);
    container.innerHTML = "Failed to load news 😢";
  }
}

// DISPLAY FUNCTION
function displayNews(articles) {
  const container = document.getElementById("newsContainer");
  if (!container) return;

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

// MANUAL NEWS DATA
const manualNews = [
  {
    title: "After SVC63, Another Telugu Banner for Salman Khan? Big Buzz in Industry",
    description: "After his upcoming film with a Telugu producer...",
    content: `After his upcoming film with a Telugu producer, Salman Khan is reportedly in talks for another big project under a Telugu banner.<br></br>

Sources close to the industry suggest that discussions are already in progress and the project is expected to be a high-budget entertainer.<br></br>

This collaboration could mark another major crossover between Bollywood and South Indian cinema, which has been trending in recent years.<br></br>

Fans are eagerly waiting for an official announcement, and if confirmed, this could become one of the most anticipated projects of the year.`,
    url: "#",
    image: "salman.jfif",
    category: "film"
  },

  {
    title: "Kyle Jamieson Penalized for Aggressive Send-Off in IPL Match",
    description: "New Zealand pacer Kyle Jamieson faced disciplinary action after his aggressive send-off to young batter Vaibhav Sooryavanshi during an IPL match sparked controversy.",
    content: `New Zealand fast bowler Kyle Jamieson has been penalized following an on-field incident involving young Indian batter Vaibhav Sooryavanshi during a recent IPL match.<br></br>

The incident occurred after Jamieson dismissed the youngster and followed it up with an intense and intimidating send-off. The gesture did not go unnoticed, as match officials reviewed the situation and found it to be in breach of the IPL's code of conduct.<br></br>

As a result, Jamieson has been fined for his actions, with officials emphasizing the importance of maintaining sportsmanship on the field. While competitive spirit is encouraged, actions that could be seen as aggressive or disrespectful are strictly monitored.<br></br>

Vaibhav Sooryavanshi, who has been gaining attention for his performances, remained composed despite the situation. The incident has sparked discussions among fans and experts about maintaining discipline and respect in high-pressure matches.<br></br>

The IPL governing body continues to reinforce fair play, ensuring that the spirit of the game remains intact even in intense moments.`,
    url: "#",
    image: "WhatsApp Image 2026-05-02 at 3.48.08 PM.jpeg",
    category: "sports"
  },

  {
    title: "Tamil Nadu Election Results: DMK, AIADMK and the Rising Influence of Vijay",
    description: "As counting continues in Tamil Nadu, traditional rivals DMK and AIADMK face fresh competition with actor Vijay's growing political presence drawing attention.",
    content: `The counting of votes in Tamil Nadu has brought renewed focus on the state's political landscape, where established parties like DMK and AIADMK continue to dominate, but new factors are beginning to shape the narrative.<br></br>

Among the emerging influences, actor Vijay's political entry has become a key point of discussion. His growing popularity, especially among younger voters, has added a fresh dimension to the competition. While he is still in the early stages of his political journey, his presence is already being closely watched by analysts and party leaders alike.<br></br>

Both DMK and AIADMK are striving to maintain their stronghold, with each party banking on its traditional voter base and campaign strategies. However, shifting public sentiment and the rise of alternative voices suggest that the political landscape may be evolving.<br></br>

Observers believe that while the main contest remains between the two major parties, the influence of new entrants could impact future elections. Vijay's appeal, combined with changing voter expectations, may play a role in reshaping political dynamics in the state.<br></br>

As the counting progresses, all eyes remain on the final results and the potential implications they may have on Tamil Nadu's political future. The developments are expected to influence strategies and alignments in the coming years.`,
    url: "#",
    image: "politics news.jpeg",
    category: "politics"
  },

  {
    title: "India Sets Record with Massive Underwater National Flag in Andaman Islands",
    description: "A stunning underwater display of the Indian national flag at Radhanagar Beach has earned global recognition and gone viral online.",
    content: `India has created history with a remarkable underwater display of the national flag in the Andaman and Nicobar Islands. This unique achievement took place at the famous Radhanagar Beach, one of the most beautiful beaches in Asia.<br></br>

A dedicated team of trained divers came together to carefully unfold and position the Indian tricolour beneath the sea. The entire process required strong coordination, precision, and discipline, as maintaining the shape and visibility of the flag underwater is extremely challenging.<br></br>

The initiative was not just about setting a record, but also about showcasing India's spirit of innovation and unity. The divers ensured that the flag was displayed with respect while also highlighting the beauty of the marine ecosystem surrounding the islands.<br></br>

<img src="merged image.jpeg" style="width:100%; border-radius:10px; margin:15px 0;"><br></br>

This extraordinary effort has officially been recognized by Guinness World Records, making it a proud moment for the nation. The achievement has drawn attention from across the globe, with people appreciating both the creativity and execution of the idea.<br></br>

The event quickly gained massive traction on social media, with videos and images spreading rapidly. Many users praised the initiative for combining patriotism with adventure and environmental awareness.<br></br>

Beyond the record, this initiative also serves as a reminder of the importance of protecting marine life and preserving natural habitats. It reflects how creative ideas can be used to inspire people while celebrating national pride.<br></br>

Overall, this record-setting underwater flag display stands as a powerful symbol of unity, dedication, and innovation, leaving a lasting impact on everyone who witnesses it.`,
    url: "#",
    image: "india flag.jpeg",
    category: "viral"
  },

  {
    title: "Congress-TVK Talks Create Political Buzz in Tamil Nadu",
    description: "Possible alliance discussions between Congress and Vijay's TVK have sparked major political attention across Tamil Nadu...",
    content: `Political discussions in Tamil Nadu have intensified after reports suggested possible alliance talks between the Congress party and actor Vijay's Tamilaga Vettri Kazhagam (TVK).<br><br>

Sources close to the political developments claim that early discussions have taken place regarding future cooperation between the two sides ahead of upcoming elections.<br><br>

The reports have also reportedly created concern within the DMK alliance, as Congress has been one of its long-time political partners in the state.<br><br>

Vijay, who recently entered active politics through TVK, has quickly gained strong public attention, especially among younger voters and first-time supporters.<br><br>

Political analysts believe that any future alliance involving TVK could significantly impact Tamil Nadu's political landscape in the coming years.<br><br>

While there has been no official confirmation yet, the ongoing discussions have already become one of the most talked-about political developments in the state.`,
    url: "",
    image: "tvk vs cng.png",
    category: "politics"
  },

  {
    title: "Mysuru's Clever Mirror Trick to Stop Public Urination Goes Viral",
    description: "A simple but creative idea introduced in Mysuru to prevent public urination has caught the attention of social media users across the country.",
    content: `A unique civic initiative from Mysuru has gone viral online after authorities introduced mirrors on public walls to discourage people from urinating in open spaces.

The idea is based on a simple psychological concept. When people see their own reflection while attempting to misuse public areas, they often feel uncomfortable and avoid the act altogether. Officials decided to test this method in locations that frequently faced sanitation complaints.

Surprisingly, the mirror installation has shown positive results. Residents in several areas reported cleaner surroundings and fewer incidents compared to before. The initiative has also sparked discussions on how low-cost and creative solutions can sometimes be more effective than strict penalties.

Photos and videos of the mirrors quickly spread across social media platforms, with many users praising the administration for thinking differently. Several people called it a smart and practical approach that other cities could also adopt.

The viral attention has turned the initiative into an example of how behavioural psychology can be used in public administration to solve everyday civic problems in a simple yet impactful way.`,
    url: "#",
    image: "mysore.jpeg",
    category: "trending"
  },

  {
    title: "Can Akshay Kumar Make a Strong Comeback with Bhooth Bangla After a Series of Box Office Setbacks?",
    description: "After facing multiple disappointing releases in recent years, Akshay Kumar's upcoming horror-comedy Bhooth Bangla is creating fresh buzz among fans and trade analysts.",
    content: `Akshay Kumar is once again in the spotlight as discussions around his upcoming film Bhooth Bangla continue to grow across the industry. After several underperforming films at the box office in recent years, many fans are now hoping this project could mark a strong comeback for the Bollywood star.<br></br>

The film has already generated curiosity because of its horror-comedy theme, a genre that has been gaining popularity among audiences. Viewers believe the combination of comedy, suspense, and entertainment could work in Akshay Kumar's favor if executed well.<br></br>

Trade experts have pointed out that the actor has gone through a difficult phase at the box office, with multiple films struggling to meet expectations. However, despite the setbacks, Akshay Kumar continues to remain one of the most recognized and bankable stars in the industry.<br></br>

One of the biggest talking points around Bhooth Bangla is its attempt to present Akshay in a fresh and entertaining avatar. Fans on social media have already started expressing excitement, with many saying the film has the potential to reconnect the actor with family audiences and comedy lovers.<br></br>

The makers are reportedly focusing heavily on commercial entertainment, humor, and mass appeal, which could help the film attract a wider audience upon release. Industry observers also believe that horror-comedies currently have strong market value due to the recent success of films in the genre.<br></br>

While there is still time before the film officially arrives in theatres, the growing online buzz suggests that audience interest is steadily building. Many fans are now waiting to see whether Bhooth Bangla can finally become the much-needed success Akshay Kumar has been looking for.<br></br>

If the film manages to connect with viewers emotionally and deliver solid entertainment, it could play an important role in reviving the actor's box office momentum once again.`,
    url: "#",
    image: "Bhooth bangla.jpeg",
    category: "film"
  }
];

// CATEGORY FILTER
function filterNews(category, event) {
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  if (event) {
    event.target.classList.add("active");
  }

  if (category === "all") {
    displayNews(manualNews);
  } else {
    const filtered = manualNews.filter(n => n.category === category);
    displayNews(filtered);
  }
}

// DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const btn = document.getElementById("darkBtn");

  if (document.body.classList.contains("dark-mode")) {
    btn.innerText = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    btn.innerText = "🌙";
    localStorage.setItem("theme", "light");
  }
}

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  if (navLinks) {
    navLinks.classList.toggle("show");
  }
}

// GO HOME
function goHome() {
  window.location.href = "index.html";
}

// WINDOW ON LOAD — everything runs here safely
window.onload = () => {

  // Reset scroll position
  window.scrollTo(0, 0);
  document.documentElement.scrollLeft = 0;
  document.body.scrollLeft = 0;

  // Load news
  const container = document.getElementById("newsContainer");
  if (container) {
    displayNews(manualNews);
  }

  // Restore dark mode
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Search & clear button
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearBtn");

  if (searchInput) {

    searchInput.addEventListener("keyup", function () {
      const value = this.value.toLowerCase();

      if (value === "") {
        displayNews(manualNews);
        return;
      }

      const filtered = manualNews.filter(article =>
        article.title.toLowerCase().includes(value) ||
        (article.description && article.description.toLowerCase().includes(value))
      );

      if (filtered.length === 0) {
        document.getElementById("newsContainer").innerHTML = `
          <h2 style="text-align:center; margin-top:40px;">
            😕 No results found
          </h2>
        `;
      } else {
        displayNews(filtered);
      }
    });

    if (clearBtn) {
      searchInput.addEventListener("input", () => {
        clearBtn.style.display = searchInput.value ? "block" : "none";
      });

      clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        clearBtn.style.display = "none";
        displayNews(manualNews);
      });
    }

    searchInput.addEventListener("blur", function () {
      if (this.value === "") {
        displayNews(manualNews);
      }
    });

  }

};