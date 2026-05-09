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
  title: "Delhi CEO Wins Hearts After Offering Employees ₹10,000 And Paid Leave For Parents’ Vacation",

  description: "A Delhi-based CEO has gone viral online after announcing a thoughtful Mother’s Day initiative offering employees ₹10,000 and a paid three-day break to spend quality time with their parents.",

  content: `A Delhi entrepreneur has captured massive attention online after introducing a unique Mother’s Day initiative focused on family bonding and emotional wellbeing. The CEO announced that employees at his company would receive ₹10,000 along with a paid three-day leave to take their parents on a short vacation.<br><br>

The initiative was reportedly introduced to encourage workers to spend meaningful time with their parents instead of constantly delaying personal moments because of busy schedules and work pressure. The announcement quickly went viral across social media platforms, with many users praising the thoughtful gesture.<br><br>

Videos and posts related to the announcement began circulating widely online, where people described the move as refreshing and emotionally touching in today’s fast-paced corporate culture. Many users said it was rare to see companies prioritising emotional wellbeing and family relationships over routine workplace policies.<br><br>

According to reports, the paid leave provided under the initiative would remain separate from employees’ regular leave balance, allowing them to enjoy the trip without sacrificing personal vacation days. The company also offered reimbursement support to make the experience easier for staff members.<br><br>

The CEO explained that parents often spend years sacrificing their own dreams and comfort for their children, while many people keep postponing quality family time thinking they will do it “someday.” The initiative was designed to encourage employees to reconnect with their parents and create lasting memories.<br><br>

Social media users reacted strongly to the viral announcement, with many calling it one of the most wholesome workplace initiatives seen in recent times. Several people also shared personal stories about struggling to spend enough time with family because of demanding jobs and hectic city life.<br><br>

As Mother’s Day approaches, the story continues gaining attention online, sparking broader conversations about work-life balance, emotional health, and the importance of family connections in modern professional life.`,

  url: "#",

  image: "Mothers_Day.avif",

  category: "trending"
},


  {
  title: "Haridwar Viral Video Sparks Debate After Man Performs Symbolic Ritual for Wife Over Reel Obsession",

  description: "A shocking viral video from Haridwar has triggered massive discussions online after a man reportedly performed symbolic last rites for his wife, claiming social media and reel addiction had damaged their relationship.",

  content: `A viral video circulating across social media platforms has left many viewers stunned and emotional after a man in Haridwar was seen performing symbolic funeral rituals while holding a framed photo of his wife.<br><br>

According to claims shared online, the man was allegedly upset over his wife’s constant involvement in creating Instagram reels and spending excessive time on social media. The unusual act quickly grabbed public attention, with thousands of users reacting strongly to the incident.<br><br>

In the video, the man can be seen standing near the river during the ritual, while emotional background music and captions intensified the dramatic atmosphere. The clip rapidly spread across Instagram and other platforms, turning into one of the most discussed trending topics online.<br><br>

While some users viewed the act as an emotional protest against social media addiction affecting relationships, others criticized it as an extreme and insensitive step. Many people also pointed out that personal conflicts should be resolved through communication rather than public drama.<br><br>

The viral moment has once again sparked conversations about how social media can sometimes impact real-life relationships, mental peace, and family understanding when not balanced properly.<br><br>

As the video continues gaining attention, internet users remain divided, with debates ongoing about emotional expression, digital addiction, and the influence of online culture on modern relationships.`,

  url: "#",

  image: "haridwar incident.jpeg",

  category: "trending"
},


  {
  title: "Dhurandhar 2 Nears Rs 1800 Crore Worldwide as Buzz Around Third Part Grows",

  description: "Ranveer Singh and Sanjay Dutt’s blockbuster action film Dhurandhar 2 continues its historic box office run, with strong excitement building around a possible third installment.",

  content: `Ranveer Singh’s action-packed film <b>Dhurandhar 2</b> is continuing its dream run at the global box office even after completing 50 days in theatres. The film, which stars Ranveer Singh alongside Sanjay Dutt, has now moved close to the massive ₹1800 crore worldwide mark, making it one of the biggest Indian blockbusters in recent years.<br><br>

Despite facing competition from newer releases, the movie has managed to maintain steady collections during its eighth week. Trade analysts say the strong fan following, repeat audience response, and large-scale action sequences are helping the film stay strong at the ticket counter.<br><br>

The recent buzz around a possible <b>Dhurandhar 3</b> has also added fresh excitement among fans. Reports suggest that the makers have already started discussing ideas for continuing the franchise, although there has been no official announcement yet.<br><br>

Directed by Aditya Dhar, the film features a star-studded cast including Sanjay Dutt, Arjun Rampal, and R. Madhavan. The movie received huge attention for its large-scale visuals, intense action scenes, and emotional storyline.<br><br>

Fans on social media continue to celebrate the film’s success, with many calling it one of Ranveer Singh’s career-best performances. Several viral posts have also praised the film for its strong theatre experience and high-energy background score.<br><br>

Industry experts believe the movie could soon cross the ₹1800 crore milestone globally if the current pace continues over the weekend. The film has already broken multiple box office records during its theatrical run and remains among the top-performing Indian films worldwide.<br><br>

With the franchise gaining huge popularity, audience curiosity around the future of the series is growing rapidly. Many fans are now eagerly waiting to see whether the makers officially confirm the third installment in the coming months.`,

  image: "dhurandhar2.jpeg",

  category: "film"
},


  {
  title: "Couple Creates History by Swimming from Sri Lanka to India Through Ram Setu Route",

  description: "A couple has gone viral on social media after reportedly completing an extraordinary swim journey from Sri Lanka to India, inspiring thousands online with their determination and endurance.",

  content: `A couple has captured massive attention on social media after reportedly becoming the first pair to complete a long-distance swim journey from Sri Lanka to India through the Ram Setu route.<br><br>

The achievement quickly went viral online after videos and photos from the swim began circulating across Instagram and other platforms. Many users praised the duo for their dedication, courage, and mental strength required to complete such a demanding challenge.<br><br>

According to the viral post shared online, the couple revealed that they had started learning swimming only a few years ago and never imagined they would one day attempt such an extreme endurance swim.<br><br>

They also mentioned that emotional support from each other played a huge role during the journey, especially during difficult moments throughout the several-hour-long swim. The pair credited their coaches and training team for helping them prepare physically and mentally for the challenge.<br><br>

The swim reportedly lasted for nearly eleven hours, making it one of the most talked-about endurance-related viral moments currently trending on social media.<br><br>

Photos shared after the completion of the challenge showed the couple proudly holding the Indian national flag at the finish point, with supporters and trainers celebrating the achievement alongside them.<br><br>

Social media users flooded the comment sections with congratulatory messages, calling the accomplishment inspiring and motivational. Many people admired the discipline, preparation, and determination shown by the couple throughout the journey.<br><br>

The viral story has also sparked conversations around adventure sports, endurance swimming, and how ordinary individuals are pushing their physical and mental limits to achieve extraordinary goals.<br><br>

As the reel continues gaining traction online, the couple’s achievement is being celebrated by thousands who see it as a powerful example of teamwork, resilience, and dedication.<br><br>

The inspiring journey has now become one of the most widely shared trending stories across Instagram and other social media platforms.`,

  url: "#",

  image: "couple made history.jpeg",

  category: "trending"
},


  {
  title: "Tamil Nadu Politics Sees Major Twist as Vijay’s TVK Moves Closer to Forming Government",

  description: "Political activity in Tamil Nadu intensified after actor-turned-politician Vijay’s party TVK moved closer to forming the next government following alliance discussions and support from other parties.",

  content: `Tamil Nadu’s political atmosphere witnessed dramatic developments after Tamilaga Vettri Kazhagam (TVK), led by actor-turned-politician Vijay, moved closer to forming the next state government.<br><br>

Following the recent Assembly election results, TVK emerged as one of the biggest political forces in the state and quickly became the center of attention in government formation discussions.<br><br>

Over the past few days, multiple rounds of political talks and alliance discussions reportedly took place between TVK and several regional as well as national parties. These developments created huge buzz across Tamil Nadu, especially among Vijay supporters and political observers.<br><br>

The situation became more intense after reports suggested that support from alliance partners could help TVK cross the required majority mark in the Assembly. This has significantly strengthened the party’s position in the race to form the government.<br><br>

Supporters gathered in large numbers outside party offices and public locations as speculation surrounding Vijay’s possible swearing-in ceremony continued to dominate headlines. Social media platforms were also flooded with discussions, reactions, and celebrations from fans and political supporters.<br><br>

At the same time, opposition parties have continued to closely monitor the developments, with several leaders questioning the ongoing political negotiations and alliance shifts taking place after the election results.<br><br>

Political analysts believe the current developments could mark a major turning point in Tamil Nadu politics, as the state may witness a significant change in leadership dynamics after decades of dominance by traditional parties.<br><br>

Vijay’s entry into politics has already attracted strong support from younger voters and first-time voters, and the recent election performance of TVK has further increased discussions about the party’s long-term political future.<br><br>

While official announcements regarding the final government formation process are still awaited, the rapidly changing political situation has kept public attention firmly focused on Chennai and the evolving alliance equations.<br><br>

With expectations continuing to rise among supporters, all eyes are now on the next political move that could shape Tamil Nadu’s future government in the coming days.`,

  url: "#",

  image: "vijay tvk.jpeg",

  category: "politics"
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
    image: "soorya.jpeg",
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

The idea is based on a simple psychological concept. When people see their own reflection while attempting to misuse public areas, they often feel uncomfortable and avoid the act altogether. Officials decided to test this method in locations that frequently faced sanitation complaints.<br><br>

Surprisingly, the mirror installation has shown positive results. Residents in several areas reported cleaner surroundings and fewer incidents compared to before. The initiative has also sparked discussions on how low-cost and creative solutions can sometimes be more effective than strict penalties.<br><br>

Photos and videos of the mirrors quickly spread across social media platforms, with many users praising the administration for thinking differently. Several people called it a smart and practical approach that other cities could also adopt.<br><br>

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