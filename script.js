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
    card.href = `news.html?title=${encodeURIComponent(article.title)}&desc=${encodeURIComponent(article.content)}&img=${article.image}&author=NewsZone&date=${encodeURIComponent(article.date)}`;
    card.target = "_blank";
    card.classList.add("card-link");

    card.addEventListener("click", () => {

  if (typeof gtag === "function") {

    gtag("event", "article_open", {
      article_title: article.title
    });

  }

});

card.innerHTML = `
<div class="news-card">
<img
src="${article.image || 'https://via.placeholder.com/300'}"
alt="${article.title}"
loading="lazy">
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
  title: "Aamir Khan Marries Bengaluru-Based Gauri Spratt in an Intimate Ceremony; Couple Begins New Chapter",

  description: "Bollywood superstar Aamir Khan has tied the knot with his longtime partner Gauri Spratt in a private wedding ceremony attended by close family and friends. The Bengaluru-based entrepreneur and Aamir chose to keep the celebrations simple and intimate.",

  content: `Bollywood superstar Aamir Khan has officially begun a new chapter in his personal life by marrying his longtime partner Gauri Spratt in a private ceremony. The wedding, which had been the subject of speculation for several weeks, was held on July 5 at the actor's residence in Mumbai and was attended by close family members and a select group of friends. The couple deliberately opted for a low-key celebration instead of a grand celebrity wedding. :contentReference[oaicite:0]{index=0}<br><br>

Gauri Spratt, who is originally from Bengaluru, has largely stayed away from the limelight despite her association with one of Bollywood's biggest stars. The two have known each other for many years, and their friendship gradually developed into a relationship. Earlier this year, Aamir publicly introduced Gauri to the media during his birthday celebrations, confirming that they had been together for over a year. :contentReference[oaicite:1]{index=1}<br><br>

The wedding ceremony was intentionally kept simple, reflecting the couple's preference for privacy. Instead of hosting a lavish event with hundreds of guests, Aamir and Gauri invited only their closest relatives and trusted friends. Reports indicate that the marriage was conducted under the Special Marriage Act, followed by a private gathering and lunch for guests. :contentReference[oaicite:2]{index=2}<br><br>

The first photographs from the wedding soon surfaced online, creating excitement among fans. Aamir was seen wearing an elegant ivory traditional outfit paired with a dhoti, while Gauri complemented him in a graceful ivory ensemble. Their understated look received widespread appreciation on social media, with many praising the couple for choosing simplicity over extravagance. Aamir's silver anklet also became a talking point among fans after the wedding pictures went viral. :contentReference[oaicite:3]{index=3}<br><br>

Soon after the ceremony, the newlyweds made their first public appearance outside Aamir's residence despite heavy Mumbai rains. The couple greeted photographers and well-wishers with warm smiles, thanking everyone for their blessings. Videos and photographs from the appearance quickly spread across social media, drawing congratulatory messages from fans and celebrities alike. :contentReference[oaicite:4]{index=4}<br><br>

This marks Aamir Khan's third marriage. The actor was previously married to Reena Dutta, with whom he has two children, Junaid and Ira Khan. He later married filmmaker Kiran Rao, and although the couple separated in 2021, they have continued to maintain an amicable relationship while co-parenting their son Azad. Over the years, Aamir has consistently emphasized the importance of family and mutual respect despite personal changes in his life. :contentReference[oaicite:5]{index=5}<br><br>

In the days leading up to the wedding, Aamir had confirmed that the ceremony would be held at home and requested blessings from fans rather than extravagant celebrations. He explained that both he and Gauri preferred an intimate gathering focused on family rather than a high-profile public event. His announcement was met with warm wishes from across the film industry and from fans around the world. :contentReference[oaicite:6]{index=6}<br><br>

The wedding has generated significant attention because of Gauri's Bengaluru roots and her decision to remain away from the glamour of the film industry. Unlike many celebrity spouses, she has maintained a private lifestyle, which has only increased public curiosity about her. Since Aamir officially introduced her earlier, fans have been eager to know more about the woman who has become an important part of the actor's life. :contentReference[oaicite:7]{index=7}<br><br>

With the wedding now complete, congratulatory messages continue to pour in from colleagues, friends and admirers across the entertainment industry. Fans have wished the couple happiness and success as they begin their married life together. For Aamir Khan, one of Indian cinema's most celebrated actors, the occasion marks not only a personal milestone but also the beginning of a new journey with Gauri Spratt, built on years of friendship, trust and companionship. :contentReference[oaicite:8]{index=8}`,

  url: "aamir-khan-marries-bengaluru-gauri-spratt-private-wedding",

  image: "aamir-khan-gauri-spratt-wedding.jpeg",

  category: "film",

  date: "July 6, 2026"
},

  {
  title: "Khushbu Sundar Meets PM Narendra Modi, Invites Him to Daughter Avantika’s Wedding",

  description: "Actress and BJP leader Khushbu Sundar, along with filmmaker Sundar C and family members, met Prime Minister Narendra Modi in New Delhi to personally invite him to their daughter Avantika's wedding. The meeting photos have since gone viral on social media.",

  content: `Actress-turned-politician Khushbu Sundar recently shared a special family moment after meeting Prime Minister Narendra Modi in New Delhi. Accompanied by her husband, filmmaker Sundar C, and family members, Khushbu personally invited the Prime Minister to attend the wedding of their elder daughter, Avantika. :contentReference[oaicite:0]{index=0}<br><br>

The meeting gained significant attention after Khushbu posted photographs from the visit on social media. In the pictures, the actress and her family can be seen presenting the wedding invitation to the Prime Minister and posing for memorable photographs. The images quickly went viral, drawing reactions from fans, well-wishers and members of the film industry. :contentReference[oaicite:1]{index=1}<br><br>

Sharing details about the meeting, Khushbu expressed gratitude for the Prime Minister's time despite his busy schedule. She revealed that PM Modi warmly received the family and extended his blessings to the couple. According to her, the family felt humbled and honored by the opportunity to personally invite him to the wedding celebrations. :contentReference[oaicite:2]{index=2}<br><br>

Avantika, the elder daughter of Khushbu and Sundar C, is preparing to begin a new chapter in her life with fiancé Shravan Sreenivasan. Apart from the wedding preparations, Avantika has also been making headlines for stepping into the film industry. She is set to make her acting debut in a Malayalam film, marking the beginning of her journey in cinema. :contentReference[oaicite:3]{index=3}<br><br>

Khushbu Sundar remains one of the most recognizable personalities in South Indian entertainment and politics. Having enjoyed a successful acting career spanning decades, she later entered public life and currently serves as a prominent BJP leader in Tamil Nadu. Meanwhile, Sundar C continues to be one of the leading filmmakers in the Tamil film industry. :contentReference[oaicite:4]{index=4}<br><br>

The family meeting with Prime Minister Modi has become a widely discussed topic online, with fans congratulating Avantika and sending their best wishes to the couple. Many social media users also praised the warmth displayed during the interaction and wished the family a joyous wedding celebration.<br><br>

As preparations for the wedding continue, the photographs from the Delhi meeting have added a memorable highlight to the occasion. With blessings from family, friends and well-wishers pouring in, the upcoming wedding is expected to be one of the most talked-about celebrity family events in the coming weeks.`,

  url: "khushbu-sundar-invites-pm-modi-daughter-avantika-wedding",

  image: "khushbu-sundar-pm-modi-wedding-invitation.jpeg",

  category: "Entertainment",

  date: "June 3, 2026"
},

  {
  title: "Anushka Sharma’s Unique Ring Sparks Curiosity During RCB vs GT Clash; Here’s What It Really Is",

  description: "Anushka Sharma grabbed attention during the RCB vs GT IPL 2026 match, not just for cheering Virat Kohli but also for a distinctive turquoise ring seen on her finger. The accessory quickly became a talking point among fans online.",

  content: `Anushka Sharma once again found herself in the spotlight during Royal Challengers Bengaluru's high-voltage IPL 2026 clash against Gujarat Titans. While fans were focused on the action unfolding on the field, many eagle-eyed viewers noticed an unusual turquoise-colored ring on the actress's finger, sparking widespread curiosity across social media.<br><br>

Photos and videos from the match quickly went viral, with fans trying to identify the mysterious accessory. Many initially assumed it was a fashion statement or a gemstone ring, while others speculated that it carried a deeper personal or spiritual significance.<br><br>

The ring is reportedly a digital 'Jaap Counter' ring, also known as a prayer counter or mantra counter. Unlike traditional prayer beads used for meditation and spiritual practices, the modern electronic device is worn on a finger and allows users to keep track of mantra repetitions with the press of a button.<br><br>

Designed as a compact and portable alternative to a traditional mala, the digital counter helps devotees maintain focus during prayer or meditation without manually counting repetitions. The small display on the ring records the number of chants, making it a convenient tool for spiritual practice.<br><br>

Anushka Sharma and Virat Kohli have both been associated with spiritual practices in recent years. The couple has frequently visited religious and spiritual destinations, including Vrindavan, and has openly spoken about the importance of faith and mindfulness in their lives. Fans have previously spotted similar prayer counters being used by Virat as well.<br><br>

During the RCB vs GT match, cameras repeatedly captured Anushka cheering from the stands and appearing deeply invested in the game. Several images showed her pressing the ring while watching crucial moments, leading many observers to believe she was engaged in silent prayers for the team's success.<br><br>

The accessory soon became a major discussion point online, with social media users praising the actress for balancing modern lifestyle choices with spiritual traditions. Many fans also shared that they use similar digital counters for meditation, prayer and mantra chanting.<br><br>

Apart from the ring, Anushka's effortless match-day look also attracted attention. Dressed in a floral top paired with denim, she kept her appearance simple and elegant while supporting Virat Kohli and RCB during one of the team's most important matches of the season.<br><br>

Although the IPL clash generated plenty of cricketing headlines, Anushka's unique finger accessory managed to carve out its own moment online. What initially appeared to be a fashion accessory turned out to be a reflection of the actress's spiritual side, making it one of the most talked-about details from the match.`,

  url: "anushka-sharma-jaap-counter-ring-rcb-vs-gt-ipl-2026",

  image: "anushka-sharma-ring-rcb-vs-gt.jpeg",

  category: "film",

  date: "June 3, 2026"
},

  {
  title: "Prashanth Neel Reveals NTR Jr’s Surprising Take on Mahabharata: ‘Shakuni Was the Real Winner’",

  description: "Director Prashanth Neel has shared an intriguing conversation with NTR Jr about the Mahabharata. According to Neel, the actor offered an unexpected perspective by naming Shakuni as the true winner of the epic, sparking discussions among fans.",

  content: `Filmmaker Prashanth Neel has revealed an interesting conversation he once had with Telugu superstar NTR Jr, offering fans a glimpse into the actor's unique way of looking at mythology and storytelling. The anecdote has quickly caught the attention of cinema lovers and Mahabharata enthusiasts alike.<br><br>

Recalling the discussion, Prashanth Neel said NTR Jr asked him a simple yet thought-provoking question: "Who was the winner of the Mahabharata?" Like many people familiar with the epic, Neel responded that Lord Krishna was the ultimate winner and possibly Arjuna as well, considering the Pandavas emerged victorious in the Kurukshetra war.<br><br>

However, NTR Jr's answer surprised him. According to Neel, the actor disagreed and instead suggested that Shakuni was the real winner of the Mahabharata. The unexpected response left a lasting impression on the director and highlighted the actor's ability to view stories from unconventional angles.<br><br>

While Neel did not go into extensive detail about NTR Jr's reasoning, the statement has sparked considerable debate online. Fans have been discussing the complex role played by Shakuni in the epic and how his actions shaped the course of events leading to the great war. Many believe the remark reflects NTR Jr's deep interest in character psychology and layered storytelling.<br><br>

The Mahabharata remains one of India's most celebrated epics, with every generation interpreting its characters and events in different ways. While Krishna, Arjuna and the Pandavas are traditionally viewed as central figures in the story's victory narrative, characters such as Karna, Bhishma, Duryodhana and Shakuni continue to inspire alternate interpretations among scholars, writers and filmmakers.<br><br>

The revelation has generated excitement among fans because both NTR Jr and Prashanth Neel are known for their larger-than-life storytelling sensibilities. Their discussions about mythology, character motivations and narrative perspectives have only increased anticipation surrounding their future collaboration.<br><br>

NTR Jr is widely regarded as one of Indian cinema's most versatile performers, while Prashanth Neel has earned acclaim for creating visually grand and emotionally intense films. The director's recollection of this conversation has further strengthened the perception that the actor enjoys exploring stories beyond conventional viewpoints.<br><br>

As the anecdote continues to circulate on social media, fans are praising NTR Jr's thought-provoking perspective and debating whether Shakuni's influence on the events of the Mahabharata could indeed justify such an unconventional interpretation. Regardless of whether people agree with the conclusion, the discussion has once again demonstrated the timeless relevance of the epic and its enduring ability to inspire new perspectives.`,

  url: "prashanth-neel-reveals-ntr-jr-mahabharata-shakuni-real-winner",

  image: "ntr-jr-prashanth-neel-mahabharata-discussion.jpeg",

  category: "film",

  date: "June 3, 2026"
},

  {
  title: "Viral Post Claims K Annamalai Has Resigned From BJP, Sparks Political Buzz Ahead of Tamil Nadu Elections",

  description: "A social media post claiming that former Tamil Nadu BJP chief K Annamalai has resigned from the Bharatiya Janata Party and plans to launch a new regional political outfit has gone viral online, triggering widespread discussion across political circles.",

  content: `Political discussions intensified on social media after a viral post claimed that former Tamil Nadu BJP president K Annamalai had submitted his resignation from the Bharatiya Janata Party and was preparing to launch a new regional political party ahead of the state's upcoming electoral battles.<br><br>

The post, which has been widely shared across various social media platforms, alleges that Annamalai submitted a five-page resignation letter to the BJP's national leadership following reported differences over political strategy and alliance decisions. It further claims that the former IPS officer intends to build a Tamil Nadu-focused political movement centered on regional identity, governance reforms and development-oriented politics.<br><br>

The claims quickly attracted attention due to Annamalai's growing influence in Tamil Nadu politics over the past few years. Since entering politics after leaving the Indian Police Service, Annamalai has emerged as one of the BJP's most prominent faces in the state and played a key role in expanding the party's visibility through extensive grassroots campaigns and public outreach programs.<br><br>

One of the major factors behind his popularity has been the widely publicized 'En Mann En Makkal' yatra, which saw him travel across Tamil Nadu interacting with citizens and highlighting local issues. The campaign significantly boosted his public profile and helped establish him as a recognizable political figure beyond traditional party boundaries.<br><br>

The viral post suggests that Annamalai may seek to capitalize on this support base by launching a separate political platform. According to the circulating claims, the proposed party would focus on Tamil interests while maintaining a broader nationalist outlook. However, no official announcement confirming such a move has been made publicly at the time of writing.<br><br>

The speculation has generated mixed reactions among political observers and supporters. Some believe a new regional formation led by Annamalai could reshape political equations in Tamil Nadu, while others remain cautious and are waiting for confirmation from official sources before drawing conclusions.<br><br>

Tamil Nadu's political landscape has traditionally been dominated by regional parties, making any potential new entrant a topic of significant interest. With future elections expected to intensify competition among major political forces, even unconfirmed reports involving influential leaders often attract considerable public attention.<br><br>

As discussions continue online, political watchers are closely monitoring developments for any official clarification regarding Annamalai's future plans. Until a formal statement is issued, the claims circulating on social media remain the subject of speculation and debate rather than confirmed political developments.`,

  url: "viral-claims-k-annamalai-resignation-bjp-new-party",

  image: "k-annamalai-viral-political-post.jpeg",

  category: "Politics",

  date: "June 3, 2026"
},

  {
  title: "Kriti Sanon Addresses Rumours Linking Her and Rashmika Mandanna, Says ‘Two Girls Can Simply Be Friends’",

  description: "Actress Kriti Sanon has spoken about the tendency of people to create unnecessary rumours around female friendships. Her comments, reportedly linked to discussions surrounding Rashmika Mandanna and Cocktail 2, have gone viral on social media.",

  content: `Bollywood actress Kriti Sanon has found herself at the center of a viral social media discussion after comments attributed to her regarding female friendships began circulating online. The actress reportedly addressed rumours linking her with fellow actress Rashmika Mandanna and spoke about how friendships between women are often misunderstood by the public.<br><br>

According to the widely shared quote, Kriti pointed out that when two male actors share a close bond, people often celebrate it as a "bromance." However, when two women become close friends, many immediately assume there is rivalry, conflict or some other hidden story behind the relationship. She reportedly described this mindset as unfortunate and unnecessary.<br><br>

The comments have gained significant attention across social media platforms, where fans have been discussing the challenges female celebrities face when it comes to public perception. Many users agreed with Kriti's observations, arguing that women in the entertainment industry are frequently subjected to speculation that their male counterparts rarely experience.<br><br>

The discussion gained further momentum because of ongoing conversations surrounding Cocktail 2, a project that has generated considerable interest among movie fans. Social media users have been actively discussing the reported cast and possible on-screen dynamics between the actresses associated with the film, leading to various rumours and assumptions online.<br><br>

Over the years, both Kriti Sanon and Rashmika Mandanna have established themselves among the most popular actresses in Indian cinema. While Kriti has delivered several successful Bollywood films, Rashmika has built a strong fan following across multiple industries, including Telugu, Kannada, Tamil and Hindi cinema. Their growing popularity has naturally made them frequent subjects of online discussions and fan speculation.<br><br>

Industry observers note that social media often amplifies narratives of competition between actresses, even when there is little evidence to support such claims. In contrast, friendships and professional relationships between male actors are generally viewed more positively by audiences. The issue has been raised by several actresses over the years, many of whom have spoken about the pressure created by constant comparisons and rivalry narratives.<br><br>

The viral quote attributed to Kriti has resonated with many fans because it highlights a broader conversation about gender stereotypes and public perception within the entertainment industry. Supporters believe her remarks serve as a reminder that friendships between women should not automatically become subjects of gossip or speculation.<br><br>

While the original context of the statement continues to be discussed online, the message has sparked widespread debate about how female friendships are portrayed and perceived in popular culture. As the conversation continues, many fans have praised the sentiment, calling for a more balanced and respectful approach toward relationships between women in the film industry.`,

  url: "kriti-sanon-rashmika-mandanna-friendship-rumours-cocktail-2",

  image: "kriti-sanon-rashmika-mandanna-friendship.jpeg",

  category: "film",

  date: "June 3, 2026"
},

  {
  title: "Yash Unveils Intense ‘Toxic’ Avatar in New BGMI Collaboration Video, Fans Go Wild",

  description: "Rocking Star Yash has shared a brand-new promotional video as part of BGMI’s collaboration with his upcoming film ‘Toxic’. The stylish teaser introduces Yash’s exclusive voice pack and offers fans a glimpse into the dark world of the highly anticipated action drama.",

  content: `Rocking Star Yash has once again captured the attention of fans after appearing in a new promotional video released as part of the collaboration between Battlegrounds Mobile India (BGMI) and his upcoming film 'Toxic: A Fairy Tale for Grown-Ups'. The video was shared through a collaborative Instagram post featuring BGMI, Yash, KVN Productions and the official Toxic movie account.<br><br>

The teaser showcases Yash in a stylish and mysterious avatar, giving audiences another glimpse into the dark and action-packed world of the upcoming film. One sequence shows him arriving outside a brightly lit establishment named 'Paraiso' as the words 'This War Will Be Different' appear on screen. Another striking visual features Yash relaxing in a bathtub while delivering a dialogue connected to BGMI's iconic location Pochinki, creating a unique blend of cinema and gaming.<br><br>

The latest promotional video is part of BGMI's special collaboration with Toxic, allowing players to access an exclusive voice pack inspired by Yash's character. Through the update, gamers can use signature voice lines within the game, bringing a cinematic experience to their matches and further connecting fans with the film ahead of its release.<br><br>

The crossover has generated significant buzz across social media platforms. Fans have praised the teaser's cinematic visuals, Yash's screen presence and the creative way the film has been integrated into one of India's most popular mobile games. Many users expressed excitement about experiencing the exclusive voice pack while others eagerly discussed the new look and atmosphere showcased in the promotional clip.<br><br>

The collaboration marks another major promotional milestone for Toxic, one of the most anticipated Indian films currently in production. Directed by Geetu Mohandas, the film stars Yash in the lead role alongside an ensemble cast that includes Nayanthara, Kiara Advani, Huma Qureshi, Tara Sutaria and Rukmini Vasanth.<br><br>

Industry experts believe collaborations between major films and gaming platforms are becoming an increasingly important marketing strategy. By bringing movie characters and themes directly into popular games, filmmakers are able to engage younger audiences in new and interactive ways.<br><br>

With the BGMI collaboration now live and the latest teaser generating strong reactions online, excitement surrounding Toxic continues to grow. Fans are now eagerly waiting for more promotional material and updates from what is expected to be one of the biggest film releases in the coming months.`,

  url: "yash-toxic-bgmi-collaboration-video-instagram",

  image: "yash-toxic-bgmi-collaboration-video.jpeg",

  category: "Entertainment",

  date: "June 2, 2026"
},

  {
title: "D-Company Reportedly Activates Mumbai Network After ‘Dhurandhar’ Sparks Fresh Speculation Around Dawood Ibrahim",

description: "Intelligence-based reports claim D-Company has become active in Mumbai following the success of the film 'Dhurandhar', which features a character allegedly resembling fugitive gangster Dawood Ibrahim. Agencies are closely monitoring the developments.",

content: `The success of the blockbuster espionage thriller 'Dhurandhar' has reportedly triggered unexpected reactions within the underworld network linked to fugitive gangster Dawood Ibrahim. According to intelligence-based reports, D-Company has activated parts of its Mumbai network after the film reignited public discussions about Dawood's current status and influence.<br><br>

Sources cited in multiple reports claim that the film's portrayal of a character named 'Bade Saheb' has become a major point of concern for the syndicate. The character, shown as an ageing and weakened figure, is said to bear similarities to Dawood Ibrahim, one of India's most wanted fugitives. Reports suggest that the depiction has fueled speculation about the gangster's health and relevance, prompting alleged efforts by his network to project that he remains alive and influential.<br><br>

Investigators are reportedly examining intelligence inputs indicating that individuals linked to D-Company have been attempting to strengthen their ground-level presence. The alleged objective is not only to maintain the gang's image but also to demonstrate that the organization continues to wield influence despite years of crackdowns by Indian security agencies.<br><br>

According to reports, the syndicate's biggest challenge is rebuilding its network and attracting new recruits. Intelligence sources claim that younger individuals were allegedly approached without being informed about the broader objectives behind the operation. Authorities are investigating whether these recruitment efforts were connected to larger plans designed to revive the organization's activities.<br><br>

The reports also suggest that Pakistan-based handlers and long-time associates of the underworld network may have been involved in coordinating certain activities. However, several of these claims remain based on intelligence assessments and have not been independently verified by authorities through public statements.<br><br>

The developments come shortly after security agencies and law enforcement authorities intensified their focus on suspected terror-linked modules operating across different parts of the country. Officials believe recent arrests and investigations have disrupted several alleged networks before they could carry out planned activities.<br><br>

Dawood Ibrahim has remained one of India's most wanted fugitives for more than three decades. He is accused of orchestrating the 1993 Mumbai serial bomb blasts and has been designated a global terrorist by multiple international agencies. Indian authorities have long maintained that he is based in Karachi, Pakistan, a claim consistently denied by Pakistan.<br><br>

Meanwhile, the controversy has brought renewed attention to 'Dhurandhar', the Ranveer Singh-led film that has already generated significant discussion for its blend of fictional storytelling and real-world geopolitical themes. The movie's portrayal of characters believed to be inspired by real-life figures has sparked widespread debate among audiences and analysts alike.<br><br>

While the latest reports have attracted national attention, officials continue to treat the claims with caution. Security agencies are closely monitoring developments and assessing whether the reported activities indicate a larger attempt by D-Company to reassert its presence or merely a response to the public conversation generated by the film.<br><br>

As investigations continue, the episode has once again highlighted the enduring interest surrounding Dawood Ibrahim, his alleged network, and the security concerns associated with one of India's most notorious fugitives.`,

url: "d-company-activates-mumbai-network-after-dhurandhar-dawood-ibrahim-reports",

image: "dawood-ibrahim-d-company-dhurandhar.jpeg",

category: "India",

date: "June 2, 2026"
},


  {
  title: "Ram Charan Jokes About Viral Fame of Bodyguard Kevin Kunta: ‘I’m Not Letting Him Go Out’",

  description: "Telugu superstar Ram Charan has reacted to the growing popularity of his bodyguard Kevin Kunta, who has become a social media sensation during the promotions of ‘Peddi’. The actor jokingly said he is no longer allowing Kevin to go out because of his newfound fame.",

  content: `Actor Ram Charan is currently busy promoting his much-awaited pan-India film ‘Peddi’, but surprisingly, one of the biggest talking points surrounding the promotional tour has not been the film itself. Instead, it has been his bodyguard Kevin Kunta, who has gone viral across social media platforms for his imposing appearance and strong screen presence during public events.<br><br>

Over the past few weeks, photos and videos of Kevin accompanying Ram Charan at airports, promotional events and public appearances have flooded the internet. Fans quickly became curious about the security professional, with many searching for information about his background and career. The unexpected attention eventually turned Kevin into a social media celebrity in his own right.<br><br>

Responding to the buzz during a recent promotional interview, Ram Charan addressed the popularity of his bodyguard with his trademark sense of humor. The actor jokingly remarked that the media and fans had made Kevin so famous that he was no longer allowing him to step outside freely. Ram Charan laughed that people might try to offer him chocolates and biscuits in exchange for information about him, turning Kevin into an accidental celebrity.<br><br>

The actor also revealed that Kevin has been working closely with him and his family for nearly four years. According to Ram Charan, the bodyguard has accompanied them during family outings and public appearances, becoming a trusted member of their security team. His long association with the actor has helped him earn the trust of the entire family.<br><br>

Kevin Kunta is reportedly an international mixed martial arts (MMA) fighter originally from Gambia in West Africa and is currently based in Florence, Italy. His professional fighting background and physical fitness have contributed significantly to his reputation as an elite security professional. Reports suggest that his expertise in combat sports played a key role in his selection for high-profile celebrity protection assignments.<br><br>

The viral attention surrounding Kevin has led to widespread discussions online. Many social media users compared him to action movie characters, while others praised his disciplined and professional demeanor. Several fan pages dedicated to Ram Charan even began sharing exclusive posts and edits focused entirely on the bodyguard.<br><br>

Adding to the curiosity, reports circulating online claimed that Kevin receives between ₹2 lakh and ₹4 lakh per day for high-profile security assignments. Although these figures have not been officially confirmed, they have contributed to the growing fascination surrounding his role and professional career.<br><br>

Meanwhile, Ram Charan continues to focus on the release of ‘Peddi’, one of the most anticipated Telugu films of the year. The film features an ensemble cast including Janhvi Kapoor and Shiva Rajkumar and is scheduled for a theatrical release in June. Despite the excitement surrounding the movie, Kevin Kunta's unexpected rise to internet fame has become an entertaining side story during the promotional campaign.<br><br>

While celebrity bodyguards usually stay away from the spotlight, Kevin Kunta's case has been quite different. Without giving interviews or seeking attention, he has managed to become one of the most talked-about personalities associated with Ram Charan's promotional tour. As fans continue sharing his photos and videos online, Kevin's popularity shows no signs of slowing down anytime soon.`,

  url: "ram-charan-reacts-bodyguard-kevin-kunta-viral-fame",

  image: "ram-charan-bodyguard-kevin-kunta-viral.jpeg",

  category: "film",

  date: "June 2, 2026"
},

{
  title: "Raveena Tandon’s Mother Loses Jewellery Worth ₹25 Lakh, Trusted Aide Arrested In Theft Case",

  description: "A close aide of veteran actress Raveena Tandon’s family has been arrested after jewellery worth nearly ₹25 lakh reportedly went missing from her mother’s residence. Police investigations revealed that the accused had allegedly been trusted by the family for several years.",

  content: `A shocking theft case involving the family of Bollywood actress Raveena Tandon has come to light after jewellery worth approximately ₹25 lakh was allegedly stolen from the residence of her mother, Veena Tandon. The incident has attracted widespread attention due to the alleged involvement of a trusted aide who had been associated with the family for several years.<br><br>

According to reports, the missing jewellery included several valuable ornaments and family possessions that were kept inside the residence. The theft reportedly came to light after family members noticed that multiple items were missing and informed the authorities. Following the complaint, police launched an investigation to trace the missing valuables and identify those responsible.<br><br>

During the course of the investigation, suspicion reportedly fell on a woman who had been working closely with the family and had access to the residence. Authorities conducted inquiries and gathered evidence before taking the accused into custody. Police officials later confirmed that the woman had been arrested in connection with the case and further investigation was underway.<br><br>

Investigators believe that the accused may have taken advantage of the trust placed in her by the family. Reports suggest that she had been associated with the household for a considerable period, making it easier for her to move around the residence without raising suspicion. Police are now examining whether the theft was carried out alone or if additional individuals were involved.<br><br>

Officials have reportedly recovered a portion of the stolen valuables and are continuing efforts to trace the remaining jewellery. Authorities are also reviewing financial transactions and communication records connected to the accused to determine if there were any prior plans behind the alleged theft.<br><br>

The incident has sparked conversations about security and trust within households, particularly when valuable possessions are involved. Many social media users expressed sympathy for the Tandon family, while others pointed out how theft cases involving close associates often leave families emotionally affected in addition to financial losses.<br><br>

Raveena Tandon has not issued a detailed public statement regarding the case at the time of writing. However, sources indicate that the family is cooperating fully with the investigation and hopes that the remaining valuables will be recovered soon.<br><br>

Police officials have assured that the matter is being investigated thoroughly and that appropriate legal action will be taken based on the evidence collected. The case serves as a reminder of the importance of security measures and background verification, even when dealing with long-time employees or trusted associates.`,

  url: "raveena-tandon-mother-jewellery-theft-close-aide-arrested",

  image: "raveena-tandon-mother-jewellery-theft.jpeg",

  category: "entertainment",

  date: "June 2, 2026"
},


{
  title: "RJ Balaji Credits Suriya’s Generosity for ‘Karuppu’ Release After ₹300 Crore Box Office Success",

  description: "Director RJ Balaji has revealed that ‘Karuppu’ reached theatres only because of Suriya’s support and generosity during a difficult period for the film. The blockbuster has now crossed ₹300 crore worldwide and become one of the biggest Tamil hits of the year.",

  content: `The massive success of ‘Karuppu’ has become one of the biggest talking points in the Tamil film industry, but director RJ Balaji has now revealed that the journey to release the film was far from smooth. Speaking about the blockbuster's success, the filmmaker credited actor Suriya's generosity and unwavering support for helping the project reach audiences despite several challenges.<br><br>

‘Karuppu’, which released on May 15, has emerged as one of the highest-grossing Tamil films of 2026. Starring Suriya and Trisha Krishnan in lead roles, the fantasy action entertainer has crossed the ₹300 crore mark at the worldwide box office and continues to attract audiences even weeks after its release. The film's success has been celebrated by fans and industry members alike.<br><br>

Reflecting on the film's journey, RJ Balaji revealed that ‘Karuppu’ faced multiple delays and financial hurdles before finally making it to theatres. According to the director, the production experienced several unexpected challenges, creating uncertainty around the film's release schedule. Despite these setbacks, the team remained committed to completing the project and bringing it to audiences.<br><br>

RJ Balaji specifically praised Suriya for standing by the film during difficult times. The director stated that the actor's magnanimity and selfless approach played a major role in ensuring that the project moved forward. He explained that the film's eventual release was possible because of the support and confidence shown by the star when the production faced obstacles.<br><br>

The filmmaker also described the success of ‘Karuppu’ as a rewarding conclusion to a long journey. Reports indicate that RJ Balaji had been working on the project for nearly three years, making the film's blockbuster performance even more meaningful for him. He noted that overcoming delays and uncertainty made the eventual success feel even sweeter.<br><br>

Apart from audience appreciation, ‘Karuppu’ has also received praise from some of Indian cinema's biggest names. RJ Balaji revealed that actors Rajinikanth and Aamir Khan shared positive feedback about the film, something he described as a memorable moment for the entire team. Their appreciation further boosted morale among the cast and crew following the film's strong box office run.<br><br>

The success of ‘Karuppu’ has also strengthened the collaboration between Suriya and RJ Balaji. Industry observers have praised the film for balancing mass entertainment with emotional storytelling, mythology-inspired themes and powerful performances. Many critics believe the movie has expanded RJ Balaji's reputation beyond comedy-driven social dramas and established him as a filmmaker capable of delivering large-scale commercial entertainers.<br><br>

Adding to the excitement, RJ Balaji has already confirmed that a sequel titled ‘Karuppu 2’ is in development. Following the overwhelming response to the first installment, fans are eagerly waiting to see how the story will continue in the next chapter.<br><br>

For now, ‘Karuppu’ continues its successful theatrical run while the team celebrates both its commercial achievements and the journey that brought the film to the big screen. RJ Balaji's latest comments have also highlighted the importance of trust, teamwork and perseverance in filmmaking, with Suriya's support being remembered as a key factor behind one of Tamil cinema's biggest success stories of the year.`,

  url: "rj-balaji-credits-suriya-generosity-karuppu-release",

  image: "rj-balaji-suriya-karuppu-success.jpeg",

  category: "entertainment",

  date: "June 2, 2026"
},

  {
  title: "Suriya Gifts Luxury ‘Batman Edition’ Car to Cinematographer GK Vishnu After ‘Karuppu’ Crosses ₹300 Crore",

  description: "Actor Suriya has won hearts once again after gifting a luxury Mahindra BE6 Batman Edition electric SUV to cinematographer GK Vishnu as a token of appreciation for his contribution to the blockbuster success of ‘Karuppu’.",

  content: `Tamil superstar Suriya has once again demonstrated his appreciation for the people behind a film's success. Following the blockbuster performance of his latest film ‘Karuppu’, the actor reportedly gifted a luxury Mahindra BE6 Batman Edition electric SUV to the movie's cinematographer GK Vishnu. The gesture has received widespread praise from fans and industry members alike.<br><br>

‘Karuppu’, directed by RJ Balaji and starring Suriya and Trisha Krishnan, has emerged as one of the biggest Tamil blockbusters of the year. The film has crossed the ₹300 crore mark at the worldwide box office, making it one of the most successful projects in Suriya's career. The movie's blend of action, emotion and mythology has been widely appreciated by audiences across India and overseas markets.<br><br>

The spotlight now shifted to a heartwarming off-screen moment after GK Vishnu shared photographs of his newly received vehicle on social media. In his post, the cinematographer thanked Suriya and expressed his gratitude for the unexpected gift. Fans quickly flooded the comments section, praising the actor for recognizing the efforts of his technical team and celebrating success collectively.<br><br>

GK Vishnu's cinematography was considered one of the major highlights of ‘Karuppu’. His visual style, action sequences and dramatic frames played a significant role in enhancing the film's cinematic appeal. Critics and audiences alike praised the film's visuals, with many pointing out that the cinematography elevated several key moments throughout the story.<br><br>

Reports also suggest that Suriya extended similar gestures to other members of the film's technical crew. Music composer Sai Abhyankkar and editor Kalaivanan were also reportedly gifted luxury Mahindra BE6 electric vehicles as a mark of appreciation for their contributions to the film's massive success. The move has further strengthened Suriya's reputation as an actor who values teamwork and acknowledges the efforts of everyone involved in a project.<br><br>

Social media users praised the actor's generosity, with many describing the gesture as an example of strong leadership and gratitude. Fans noted that while actors often receive most of the public attention, technicians such as cinematographers, editors and composers play an equally important role in shaping a film's success. The gifts were therefore viewed as a meaningful recognition of their hard work.<br><br>

The success of ‘Karuppu’ has been a significant milestone for Suriya. The film not only delivered impressive box office numbers but also received appreciation from fellow actors, filmmakers and critics. Director RJ Balaji recently credited Suriya's support and commitment as a major reason behind the film's successful journey from production to release.<br><br>

As ‘Karuppu’ continues its successful theatrical run, Suriya's thoughtful gesture toward his team has become another talking point among fans. The actor's decision to celebrate the film's achievement by rewarding key technicians has added an emotional chapter to the movie's blockbuster journey and further strengthened his bond with collaborators in the industry.`,

  url: "suriya-gifts-batman-edition-car-gk-vishnu-karuppu-success",

  image: "suriya-gk-vishnu-batman-edition-car.jpeg",

  category: "film",

  date: "June 2, 2026"
},

  {
  title: "Krunal Pandya Becomes IPL’s Unbeaten Champion, Wins All 5 Finals He Has Played",

  description: "Royal Challengers Bengaluru all-rounder Krunal Pandya has achieved a remarkable IPL milestone by winning every final he has played in. The veteran cricketer now boasts a perfect record of five IPL finals and five championship titles.",

  content: `Royal Challengers Bengaluru's IPL triumph has not only brought joy to millions of fans but has also helped all-rounder Krunal Pandya create a unique piece of cricket history. The experienced player has now won all five IPL finals he has played in, making him one of the most successful performers in the tournament's history.

Krunal Pandya's incredible journey in the Indian Premier League began with Mumbai Indians, where he quickly established himself as a dependable all-rounder. Over the years, he became an important member of one of the most successful franchises in IPL history, contributing with both bat and ball during crucial matches.<br><br>

His first IPL title came with Mumbai Indians in 2017. The team went on to lift the trophy again in 2019 and 2020, with Krunal playing a key role in their championship campaigns. Each of those finals ended in victory, giving him a perfect record on the biggest stage of the tournament.

After moving on from Mumbai Indians, Krunal eventually joined Royal Challengers Bengaluru. While RCB had spent years chasing IPL glory, the franchise finally managed to break its title drought. Krunal's experience proved valuable as the team successfully navigated pressure situations and reached the final.<br><br>

The latest championship victory added another milestone to Krunal's already impressive career. With this triumph, he extended his unbeaten record in IPL finals to five wins from five appearances. Very few players in the league's history can claim such a flawless record in title-deciding matches.

One of the reasons behind Krunal's success has been his ability to perform under pressure. Whether contributing with economical bowling spells, crucial breakthroughs or useful runs lower down the order, he has consistently delivered when his teams needed him the most.<br><br>

Cricket analysts often point out that winning a single IPL final requires a combination of skill, preparation and composure. Achieving victory in five separate finals without suffering a defeat is a rare accomplishment that highlights Krunal's consistency and ability to handle high-pressure situations.

Fans on social media were quick to celebrate the achievement after the final. Many described him as an IPL lucky charm, while others praised his record as one of the most underrated achievements in the tournament's history. Several supporters even joked that any team featuring Krunal Pandya in an IPL final is almost guaranteed to lift the trophy.<br><br>

The veteran all-rounder has also built a reputation for stepping up in important matches. Throughout his IPL career, he has produced several memorable performances and has often been trusted by captains to deliver in crucial moments.

As the celebrations continue, Krunal Pandya's perfect finals record stands as one of the most unique statistics in IPL history. Five finals, five victories and zero defeats — a remarkable achievement that further strengthens his legacy as one of the league's most successful players.

With his unbeaten run in IPL finals still intact, fans will now be eager to see whether Krunal can continue extending this extraordinary record in the seasons to come.`,

  url: "krunal-pandya-unbeaten-champion-five-ipl-finals-five-trophies",

  image: "krunal-pandya-ipl-final-record.jpeg",

  category: "sports",

  date: "June 2, 2026"
},

  {
  title: "Viral High-Rise Video Sparks Speculation, Raises Serious Safety Concerns",

  description: "A viral video showing an elderly man leaning dangerously out of a high-rise apartment window while holding a mobile phone has triggered widespread discussion online. Social media users speculated about his intentions, but no evidence has emerged confirming any wrongdoing.",

  content: `A video circulating widely on social media has sparked debate and concern after showing an elderly man leaning far outside a high-rise apartment window while holding a mobile phone. The footage, which appears to have been recorded from a nearby building, has drawn attention due to the extreme risk involved.

In the video, the man can be seen extending his body outside the window and reaching toward a neighboring section of the apartment complex. The unusual scene led some social media users to speculate that he may have been attempting to observe or record activities inside nearby flats.

However, no verified information has emerged regarding the man's actual intentions. At present, there is no evidence confirming that he was spying on neighboring residents or engaging in any unlawful activity. The claims circulating online remain based largely on speculation.

While opinions on social media remain divided, many viewers have focused less on the allegations and more on the apparent danger of the act itself. Several users expressed concern that a single slip at such a height could have resulted in a fatal accident.

The viral footage has also reignited discussions about safety in high-rise residential buildings. Experts often warn against risky behavior near windows and balconies, particularly in multi-storey apartment complexes where falls can have devastating consequences.

As the video continues to spread online, the circumstances behind the incident remain unclear. No official statement or investigation confirming wrongdoing has been reported so far. Until verified information becomes available, the incident remains a subject of public curiosity rather than a confirmed case of surveillance or misconduct.

Authorities and safety advocates have urged people not to jump to conclusions based solely on viral clips and to avoid sharing unverified allegations. The incident serves as a reminder of both the power of social media speculation and the importance of personal safety in residential buildings.`,

  url: "viral-high-rise-video-sparks-speculation-safety-concerns",

  image: "high-rise-viral-video.jpeg",

  category: "viral",

  date: "May 31, 2026"
},

  {
  title: "Dallas Neighbor Dispute Ends in Double Murder, Elderly Man Sentenced to Life in Prison",

  description: "A long-running neighborhood dispute in Dallas, Texas, escalated into a fatal shooting that left two people dead. Authorities said years of complaints and growing tensions between neighbors ultimately culminated in a double murder case that shocked the community.",

  content: `A tragic neighborhood dispute in Dallas, Texas, turned deadly after a long-standing conflict between residents escalated into a double murder. The case involved 75-year-old Chung Kim and his upstairs neighbors, Michelle Jackson and her boyfriend, Jamie Stafford.

According to court records and reports, tensions had been building for months over sanitation concerns at the apartment complex. Kim allegedly complained that waste and urine from a dog kept by his upstairs neighbors regularly fell onto his patio area. He also claimed that dirty diapers were being thrown from the balcony onto his property, creating what he described as an unbearable living situation.

Kim reportedly documented the conditions and filed complaints with multiple authorities, including the homeowners association, local health officials and law enforcement agencies. However, the dispute remained unresolved, leading to continued frustration between the neighbors.

On February 4, 2013, the situation took a violent turn. Prosecutors stated that Kim armed himself with a handgun and confronted the couple. During the incident, Michelle Jackson was fatally shot on her balcony, while Jamie Stafford was later pursued and also shot dead.

Following his arrest, Kim argued during trial that he acted in self-defense. Prosecutors, however, maintained that the shootings were deliberate and not justified under the circumstances. After reviewing the evidence, a Dallas jury rejected the self-defense claim and found him guilty of capital murder.

The court subsequently sentenced Chung Kim to life imprisonment without the possibility of parole. The case drew widespread attention across the United States because of the unusual circumstances surrounding the dispute and the tragic consequences that followed.

Legal experts and community leaders later pointed to the case as an example of how unresolved neighborhood conflicts can escalate if tensions continue to grow without effective intervention. The incident remains one of the most widely discussed neighbor-dispute homicide cases in recent Dallas history.`,

  url: "dallas-neighbor-dispute-double-murder-chung-kim-case",

  image: "chung-kim-dallas-neighbor-dispute.jpeg",

  category: "viral",

  date: "May 31, 2026"
},

  {
  title: "Naga Chaitanya Moves Delhi High Court Against AI-Generated Divorce Claims",

  description: "Actor Naga Chaitanya has approached the Delhi High Court seeking protection against AI-generated and manipulated online content that allegedly spreads false claims regarding his divorce from Samantha Ruth Prabhu.",

  content: `Actor Naga Chaitanya has taken legal action against the spread of allegedly false and defamatory content related to his personal life. According to reports, the actor has approached the Delhi High Court seeking protection from AI-generated, manipulated and misleading content circulating online about his divorce from actress Samantha Ruth Prabhu.

The legal move comes amid the growing circulation of videos, posts and articles that reportedly link the couple's separation to unverified claims and fabricated narratives. Chaitanya's legal team has argued that several platforms and content creators have been spreading misinformation primarily to attract traffic and engagement.

Sources indicate that the petition seeks action against the publication and distribution of AI-generated material that allegedly misrepresents facts and damages the actor's reputation. The filing also raises concerns about the misuse of artificial intelligence tools to create misleading content involving public figures.

Naga Chaitanya and Samantha Ruth Prabhu announced their separation in 2021 after years of marriage. Since then, various rumors and speculative reports have continued to circulate on social media despite the absence of official confirmation regarding many of the claims.

The actor's legal representatives have emphasized that false narratives not only affect the individuals involved but also contribute to the growing problem of digital misinformation. They have urged authorities to take appropriate measures against defamatory content and unauthorized AI-generated material.

The case highlights increasing concerns within the entertainment industry over the use of artificial intelligence to create manipulated images, videos and stories that can rapidly spread across digital platforms. Legal experts believe the outcome of the matter could have wider implications for protecting celebrities and individuals from online misinformation.

The Delhi High Court is expected to examine the petition and determine the appropriate legal remedies regarding the circulation of the disputed content.`,

  url: "naga-chaitanya-delhi-high-court-ai-generated-divorce-claims",

  image: "naga-chaitanya-ai-content-divorce-case.jpeg",

  category: "film",

  date: "May 31, 2026"
},

  {
  title: "Aneet Padda Wraps ‘Shakti Shalini’ as Dark Bengali Folklore Twist Comes to Light",

  description: "The makers of ‘Shakti Shalini’ have completed filming for the upcoming horror-comedy, with new details revealing Aneet Padda in a powerful double role rooted in Bengali folklore, revenge and supernatural mystery.",

  content: `Maddock Films’ upcoming horror-comedy ‘Shakti Shalini’ has officially completed its final shooting schedule, with fresh details about the film’s dark storyline generating excitement among fans of the studio’s expanding horror universe.

According to reports, the film is deeply inspired by Bengali folklore and mythology, blending horror, revenge drama and supernatural elements. Actress Aneet Padda will be seen in a challenging double role, portraying two contrasting characters named Shakti and Shalini. Reports suggest that the conflict between these two characters forms the central theme of the story. :contentReference[oaicite:0]{index=0}

Shakti is described as an ordinary woman who gradually transforms into a protector, while Shalini is portrayed as a vengeful spirit who returns after suffering betrayal and a tragic death. Their eventual confrontation is expected to drive the film’s supernatural narrative. :contentReference[oaicite:1]{index=1}

Directed by Aditya Sarpotdar, the movie recently wrapped up its final schedule at Chitrarth Studio in Powai, Mumbai. The climax reportedly featured an elaborate sequence centered on the defeat of evil, with large sets recreating village environments and dramatic supernatural scenes. :contentReference[oaicite:2]{index=2}

The production team also shot important portions across Rajasthan and Madhya Pradesh, including locations such as Chambal, Morena, Gwalior, Datia and Dholpur. Actor Viineet Kumar Singh reportedly plays the antagonist, while Vishal Jethwa also features in a key role. Veteran actors Nana Patekar and Seema Biswas joined the cast during later schedules. :contentReference[oaicite:3]{index=3}

‘Shakti Shalini’ is part of Maddock Films’ growing horror-comedy universe, which includes popular titles such as ‘Stree’, ‘Bhediya’ and ‘Munjya’. The film is expected to expand the franchise with a darker folklore-driven storyline and a stronger supernatural backdrop. :contentReference[oaicite:4]{index=4}

With filming now complete, the movie is moving into post-production. Industry reports indicate that the makers are targeting a theatrical release in late 2026 or early 2027, depending on scheduling decisions. :contentReference[oaicite:5]{index=5}`,

  url: "aneet-padda-wraps-shakti-shalini-bengali-folklore-dark-twist",

  image: "shakti-shalini-aneet-padda-double-role.jpeg",

  category: "film",

  date: "May 30, 2026"
},

  {
  title: "Actor Sayaji Shinde Plants Over 6.5 Lakh Trees to Fulfill Promise Made to His Mother",

  description: "Veteran actor Sayaji Shinde has earned praise for an environmental mission that reportedly began with a promise to his mother. What started as a pledge to plant 5,000 trees has grown into an initiative responsible for nurturing more than 6.5 lakh trees across Maharashtra.",

  content: `Known for portraying powerful and often villainous characters on screen, actor Sayaji Shinde has emerged as a real-life environmental champion through his large-scale tree plantation efforts across Maharashtra.

According to reports, Shinde made a heartfelt promise to his mother during her final days that he would plant 5,000 trees in her memory. Determined to honor that commitment, he began working towards the goal, but eventually expanded the mission far beyond his original pledge.

Through the Sahyadri Devrayi initiative, the actor has reportedly helped plant and nurture more than 6.5 lakh native trees across different parts of Maharashtra. The project focuses on restoring natural ecosystems, increasing green cover and supporting biodiversity in the region.

Instead of building monuments or memorials, Shinde chose to create a living legacy by planting species such as banyan, peepal and tamarind trees. Environmental supporters say such native trees play an important role in maintaining ecological balance and providing long-term benefits to communities.

The initiative has received appreciation from environmentalists and citizens alike, with many praising the actor for turning a personal promise into a movement that benefits nature and future generations.

Sayaji Shinde's journey serves as a reminder that meaningful change often begins with a simple commitment. His efforts continue to inspire people to contribute towards environmental conservation and leave behind a positive impact on society.`,

  url: "sayaji-shinde-plants-6-5-lakh-trees-maharashtra",

  image: "sayaji-shinde-tree-plantation.jpeg",

  category: "film",

  date: "May 30, 2026"
},

  {
  title: "CBI Arrests Former Judge Giribala Singh in Twisha Sharma Death Case",

  description: "The Central Bureau of Investigation (CBI) has arrested former judge Giribala Singh in connection with the high-profile Twisha Sharma death case after intensifying its probe and conducting a crime scene reconstruction exercise.",

  content: `The investigation into the death of Twisha Sharma has taken a significant turn with the Central Bureau of Investigation (CBI) arresting former judge Giribala Singh. The arrest comes after the agency intensified its probe into the high-profile case and carried out a detailed crime scene reconstruction exercise.

According to reports, investigators recreated the sequence of events surrounding Twisha Sharma's death in an effort to verify statements and gather additional evidence. Samarth Singh and Giribala Singh were reportedly present during the reconstruction process as CBI officials examined various aspects of the case.

Sources claim that Samarth Singh participated in the recreation of the incident before investigators. The exercise was aimed at helping officials better understand the circumstances leading to Twisha Sharma's death and to cross-check information collected during the investigation.

Following the developments, the CBI reportedly sought the cancellation of Giribala Singh's bail. After several hours of questioning and interrogation at her residence, officials arrested her and placed her in judicial custody for further investigation.

The case has attracted widespread public attention since Twisha Sharma's death on May 12. The incident sparked debates on social media and generated demands for a thorough and impartial investigation into the circumstances surrounding her death.

Investigators are continuing to examine evidence, witness statements and forensic findings as part of the ongoing probe. The CBI has not yet disclosed all details of its findings, stating that the investigation remains active.

The arrest of Giribala Singh marks a major development in the case and is expected to play an important role in the next phase of the investigation. Authorities have indicated that further legal proceedings and questioning may follow as they work to establish the full sequence of events related to Twisha Sharma's death.`,

  url: "twisha-sharma-death-case-giribala-singh-arrested-cbi",

  image: "twisha-sharma-case-giribala-singh-arrest.jpeg",

  category: "india",

  date: "May 30, 2026"
},

  {
  title: "Tanveer Ahmed's Remarks on Vaibhav Suryavanshi Spark Debate Among Cricket Fans",

  description: "Comments attributed to former Pakistan cricketer Tanveer Ahmed regarding young Indian batting sensation Vaibhav Suryavanshi have triggered discussion across social media, with fans divided over his assessment of the teenager's aggressive style of play.",

  content: `A statement attributed to former Pakistan cricketer Tanveer Ahmed about rising Indian cricket talent Vaibhav Suryavanshi has generated significant discussion among cricket fans on social media.

According to posts circulating online, Ahmed questioned the young batter's aggressive approach and suggested that Suryavanshi should allow himself more time to settle and develop his game. He reportedly warned that a lack of patience could shorten the youngster's career and prevent him from achieving long-term success at the highest level.

Vaibhav Suryavanshi has emerged as one of the most talked-about young cricketers in recent months, earning praise for his fearless batting and ability to score quickly against quality opposition. His performances have attracted attention from cricket experts, former players and fans across the world.

The remarks attributed to Ahmed quickly sparked mixed reactions online. While some cricket followers agreed that young players need time to build a strong technical foundation and adapt to international-level competition, others defended Suryavanshi's attacking style, arguing that modern cricket rewards aggressive intent and fearless stroke play.

Several fans also pointed out that many successful contemporary cricketers have built their careers around attacking cricket, making comparisons with established stars known for their aggressive batting approaches.

As discussions continue, neither Suryavanshi nor his representatives have publicly responded to the comments. The debate has nevertheless highlighted the contrasting views that often emerge regarding the development of young sporting talents and the balance between aggression and consistency.

With his career still in its early stages, cricket observers believe Suryavanshi's future progress will ultimately depend on his ability to adapt, learn and perform consistently across different formats and conditions. For now, the young batter remains one of the most closely watched prospects in Indian cricket.`,

  url: "tanveer-ahmed-comments-vaibhav-suryavanshi-cricket-debate",

  image: "vaibhav-suryavanshi-tanveer-ahmed-comments.jpeg",

  category: "sports",

  date: "May 30, 2026"
},

  {
  title: "LeT Deputy Chief's Remarks on Israel Recognition Trigger Political Debate in Pakistan",

  description: "Comments attributed to Lashkar-e-Taiba deputy chief Saifullah Kasuri regarding Pakistan's potential recognition of Israel have sparked discussion and renewed attention on the country's internal political and security challenges.",

  content: `Remarks attributed to Saifullah Kasuri, identified in reports as a deputy chief of the Pakistan-based militant group Lashkar-e-Taiba (LeT), have generated controversy and debate after a video of a public address circulated online.<br><br>

According to claims shared on social media and various online platforms, Kasuri warned Pakistan's leadership against any move toward recognizing Israel. The comments were reportedly made during a public gathering attended by supporters and have since drawn widespread attention across the region.<br><br>

The reported remarks were allegedly directed at Pakistan's top civilian and military leadership, including Prime Minister Shehbaz Sharif and Army Chief General Asim Munir. The statements have fueled discussions about the influence of extremist organizations and their role in shaping public discourse within Pakistan.<br><br>

The issue comes amid recurring speculation over whether Pakistan could reconsider its longstanding policy regarding diplomatic recognition of Israel. Pakistan currently does not maintain formal diplomatic relations with Israel and has traditionally linked any policy shift to developments surrounding the Palestinian issue.<br><br>

Security analysts and political observers have noted that statements from individuals associated with banned or militant organizations often attract significant attention because of their potential impact on regional stability and domestic politics. The latest controversy has reignited conversations about extremism, counterterrorism efforts and the challenges faced by authorities in addressing radical narratives.<br><br>

The video and related claims continue to circulate online, prompting reactions from political commentators, security experts and social media users. However, official responses regarding the remarks and their broader implications remain limited at the time of writing.<br><br>

The incident has once again highlighted the sensitive nature of Pakistan's foreign policy discussions, particularly on issues involving Israel, regional geopolitics and national security.`,

  url: "let-deputy-chief-remarks-israel-recognition-pakistan-debate",

  image: "saifullah-kasuri-israel-recognition-remarks.jpeg",

  category: "viral",

  date: "May 30, 2026"
},

  {
  title: "Nashik Woman Arrested in Alleged Religious Conversion Network Case; Probe Underway",

  description: "A woman identified as Nida Khan has been arrested in Nashik as authorities investigate allegations related to religious conversion activities and suspected links with multiple organizations. Officials are examining digital devices and online communications as part of the ongoing probe.",

  content: `A woman identified as Nida Khan was arrested in Nashik, Maharashtra, following an investigation into alleged religious conversion activities. The case has attracted significant public attention after claims regarding the contents of her electronic devices circulated widely on social media.<br><br>

According to reports, investigators seized digital devices, including a laptop and mobile phones, during the course of the operation. Authorities are examining the devices and communication records to determine the nature and extent of her alleged activities.<br><br>

Social media posts have claimed that contacts linked to numerous organizations were discovered during the investigation. However, officials have not publicly confirmed all of the claims circulating online, and the findings remain subject to verification as the probe continues.<br><br>

Investigators are also reportedly examining online communications and video interactions allegedly connected to individuals and groups located outside India. Authorities are working to establish whether any unlawful activities were conducted through these networks.<br><br>

Law enforcement agencies stated that the investigation is ongoing and that all evidence recovered from electronic devices will undergo detailed forensic analysis. Officials have urged the public to avoid spreading unverified information until the inquiry is completed.<br><br>

The case has sparked widespread debate on social media, with users expressing concerns over issues related to religious conversion, online radicalization and digital communication networks. Political and social groups have also reacted strongly to the developments.<br><br>

Authorities have emphasized that the allegations are currently under investigation and that legal proceedings will be based on evidence collected during the probe. Further details are expected to emerge as investigators continue their examination of the case.`,

  url: "nashik-woman-arrested-alleged-religious-conversion-network-probe",

  image: "nashik-woman-arrested-alleged-religious-conversion.jpeg",

  category: "viral",

  date: "May 30, 2026"
},

  {
  title: "FIR Filed Against Mamata Banerjee Over Controversial 'Ganda Dharam' Remark at Eid Event",

  description: "West Bengal Chief Minister Mamata Banerjee has landed in controversy after remarks made during an Eid gathering were interpreted as referring to Hinduism as a 'ganda dharam'. The statement has triggered political backlash and an FIR has reportedly been filed against her.",

  content: `West Bengal Chief Minister and Trinamool Congress chief Mamata Banerjee has found herself at the center of a political controversy following comments made during an Eid-related public event in the state. The remarks, which quickly went viral on social media, have sparked criticism from political opponents and various groups.<br><br>

According to posts circulating online, Banerjee stated that she does not believe in the "ganda dharm" created by what she referred to as the "Jumla Party." Supporters of the Chief Minister have argued that the remark was directed at political ideology and divisive politics rather than any religion itself. However, critics interpreted the statement differently, leading to widespread outrage on social media.<br><br>

The controversy intensified after several social media accounts and political commentators claimed that the statement was an insult to Hinduism and Sanatana Dharma. Images and clips from the event were widely shared online, prompting strong reactions from various sections of the public.<br><br>

Amid the growing debate, reports emerged that an FIR had been filed against Banerjee, alleging criminal intimidation and objectionable remarks. The legal complaint has further fueled political discussions, with opposition leaders demanding action and clarification regarding the statement.<br><br>

The issue has also become a major talking point in West Bengal's political landscape, with supporters and critics offering sharply different interpretations of what was said during the event. While opponents accused the Chief Minister of disrespecting Hindu sentiments, her supporters maintained that the comments were aimed at a political party rather than any religious community.<br><br>

As the controversy continues to unfold, officials have not yet issued detailed information regarding the progress of the FIR or any potential legal proceedings. Meanwhile, the debate surrounding the remarks remains active across social media and political circles.<br><br>

The incident once again highlights how political speeches and public statements can quickly become subjects of national discussion, especially when issues involving religion and politics intersect.`,

  url: "fir-filed-mamata-banerjee-ganda-dharam-remark-eid-event",

  image: "mamata-banerjee-ganda-dharam-controversy.jpeg",

  category: "politics",

  date: "May 30, 2026"
},

 {
  title: "Ankita Lokhande Trolled for Wearing Hijab During Abu Dhabi Mosque Visit with Vicky Jain",

  description: "Television actress Ankita Lokhande faced online criticism after sharing photos from her Abu Dhabi mosque visit with husband Vicky Jain. The pictures sparked a debate on social media, with many users defending her for respecting local customs.",

  content: `Television actress Ankita Lokhande has found herself at the center of an online debate after sharing photographs from her recent trip to the United Arab Emirates with husband Vicky Jain. The couple's visit to a mosque in Abu Dhabi attracted significant attention across social media platforms.<br><br>

In the photographs, Ankita was seen wearing a hijab while exploring the mosque premises. The actress shared the images as part of a collection of memories from her UAE vacation, giving fans a glimpse into her travels with Vicky Jain.<br><br>

However, the pictures soon sparked mixed reactions online. While many social media users appreciated the actress for following the dress code and respecting local customs, others criticized her choice of attire, leading to widespread discussion on various platforms.<br><br>

Supporters of Ankita pointed out that covering the head is a standard requirement for women visiting many mosques around the world. They argued that the actress was simply showing respect for the religious site and adhering to local traditions during her visit.<br><br>

The images quickly went viral, drawing thousands of reactions and comments. Several fans defended Ankita, stating that travelers should respect the customs and cultural practices of the places they visit. Others viewed her appearance as a positive example of cultural sensitivity.<br><br>

Despite the criticism, Ankita Lokhande has not publicly responded to the controversy. Meanwhile, the photographs continue to circulate widely on social media, generating conversations among fans and critics alike.<br><br>

The incident once again highlights how celebrity posts often become topics of public debate, attracting both praise and criticism from different sections of the internet.`,

  url: "ankita-lokhande-trolled-hijab-abu-dhabi-mosque-visit",

  image: "ankita-lokhande-hijab-mosque.jpeg",

  category: "film",

  date: "May 29, 2026"
},

  {
  title: "Viral Video Allegedly Showing Youth Attacking Mother Carrying Newborn Sparks Outrage Online",

  description: "A disturbing viral video allegedly showing an intoxicated youth attacking a woman carrying a newborn baby has triggered massive outrage and emotional reactions across social media platforms.",

  content: `A disturbing video circulating widely on social media has sparked outrage after allegedly showing a young man behaving violently towards a woman carrying a newborn baby. The visuals, which rapidly spread across multiple platforms, have left many internet users shocked and concerned.<br><br>

According to claims shared online, the youth was allegedly under the influence of intoxicants during the incident. In the viral clip, he is reportedly seen threatening and attacking the woman and her child during what social media users described as a money-related dispute. The incident has triggered intense discussions online regarding public safety, substance abuse and violence against women.<br><br>

Several users reacted emotionally to the visuals, with many calling the incident disturbing and deeply inhuman. The clip has already gathered significant attention online, with thousands sharing their opinions and demanding strict legal action against those involved.<br><br>

Despite the outrage, the exact location and authenticity of the viral video could not be independently verified at the time of publishing. No official statement confirming where the incident took place has been released publicly so far, and administrative verification is reportedly still awaited.<br><br>

The viral circulation of the clip has once again highlighted growing concerns surrounding violent behaviour in public spaces and the increasing influence of substance abuse-related incidents. Many users on social media also urged authorities to take stronger action to ensure the safety of women and children.<br><br>

Officials are yet to release complete details regarding the matter, while the video continues to generate widespread debate and concern across online platforms.`,

  url: "viral-video-youth-attacking-mother-newborn-outrage",

  image: "viral-mother-newborn-attack-video.jpeg",

  category: "viral",

  date: "May 29, 2026"
},

  {
  title: "CRPF Constable Dies of Heart Attack During Duty, Family Donates Organs",

  description: "A young CRPF constable who suffered a sudden heart attack while on duty passed away despite medical efforts. In a remarkable act of generosity, her family decided to donate her organs, giving new hope to several patients.",

  content: `In a heartbreaking incident, a young woman serving as a constable in the Central Reserve Police Force (CRPF) lost her life after reportedly suffering a sudden heart attack while on duty. The unexpected tragedy has left her family, colleagues and well-wishers in deep grief.<br><br>

According to reports, the constable experienced severe health complications and was rushed for medical treatment. Despite the efforts of doctors and medical staff, she could not be saved and was declared dead. The news of her passing spread quickly, drawing condolences from people across different regions.<br><br>

While the family was struggling to cope with the loss, they made an inspiring and humanitarian decision. Instead of allowing their grief to define the moment, they chose to donate her organs so that others could receive a second chance at life.<br><br>

Medical experts stated that organ donation can help multiple patients suffering from critical illnesses. The family's decision has been widely appreciated, with many people praising their courage and selflessness during an extremely difficult time.<br><br>

Friends, relatives and fellow security personnel paid tribute to the young constable, remembering her dedication to service and commitment to duty. Many also described her final contribution through organ donation as a noble act that will continue to impact lives even after her passing.<br><br>

The incident has once again highlighted the importance of organ donation awareness in India. Health experts often encourage people to consider organ donation, noting that a single donor can help save several lives.<br><br>

As tributes continue to pour in, the constable's sacrifice and her family's compassionate decision have become a source of inspiration for many, turning a moment of tragedy into a message of hope and humanity.`,

  url: "crpf-constable-dies-heart-attack-family-donates-organs",

  image: "crpf-constable-organ-donation.jpeg",

  category: "viral",

  date: "May 29, 2026"
},

  {
  title: "China’s Humanoid Robot Delivers Smartphone In Minutes, Viral Incident Stuns Internet",

  description: "A humanoid robot delivering a smartphone to a customer within minutes in China has gone viral online, highlighting the country’s rapid advancements in autonomous delivery technology.",

  content: `China’s fast-growing robotics industry has once again grabbed global attention after a humanoid robot reportedly delivered a newly ordered smartphone to a customer within minutes in Hangzhou, Zhejiang Province. The unusual delivery incident quickly went viral across social media platforms.<br><br>

According to reports shared online, a young woman placed an order for a smartphone through a live-stream shopping platform. Just over ten minutes later, a humanoid robot allegedly arrived at her location carrying the package, marking a major milestone for autonomous delivery technology in China.<br><br>

The viral incident has reignited discussions about China’s rapidly expanding humanoid robotics industry. Reports suggest that more than 140 domestic robotics manufacturers are currently operating in China, while hundreds of humanoid robot models were introduced during the past year alone.<br><br>

Technology experts believe robot delivery systems are gradually moving beyond industrial and research purposes into real-world public usage. Several Chinese companies have already been testing autonomous delivery systems for food, groceries and online shopping orders in major cities.<br><br>

Social media users reacted with surprise after visuals and details related to the delivery began circulating online. While many users praised the technological advancement, others raised concerns regarding future employment changes, privacy and growing dependence on artificial intelligence-based systems.<br><br>

Industry observers say the development could significantly transform urban logistics and last-mile delivery systems in the coming years. As robotics and AI technology continue evolving rapidly, many experts believe autonomous delivery could soon become a common part of daily life across major global cities.`,

  url: "china-humanoid-robot-smartphone-delivery-viral",

  image: "china-humanoid-robot-phone-delivery.jpeg",

  category: "viral",

  date: "May 29, 2026"
},
  {
  title: "Shaadi.com Founder Anupam Mittal Offers To Sponsor Entire Wedding Of Lucky Winner, Internet Reacts",

  description: "Shaadi.com founder and Shark Tank India judge Anupam Mittal has gone viral after announcing that he would personally sponsor one lucky winner’s wedding expenses using his own credit card.",

  content: `Entrepreneur and Shark Tank India judge Anupam Mittal has become the centre of massive online attention after announcing a unique wedding sponsorship initiative through social media. The Shaadi.com founder’s latest announcement quickly went viral across Instagram and startup communities.<br><br>

According to posts shared online, Anupam Mittal revealed that he would personally sponsor the complete wedding expenses of one lucky winner using his own credit card. Referring to the campaign as “Your Shaadi, My Money,” the announcement instantly grabbed public attention and triggered huge reactions online.<br><br>

The viral announcement was reportedly shared through Mittal’s verified Instagram account, where social media users flooded the comments section with excitement, jokes and curiosity about the contest details. Many users described the campaign as one of the most unexpected and entertaining startup founder moments of the year.<br><br>

Anupam Mittal, widely recognised as the founder of Shaadi.com and one of the popular investors on Shark Tank India, often remains active on social media and startup discussions. His latest announcement further boosted conversations surrounding modern marketing strategies and viral internet campaigns.<br><br>

Several internet users praised the creative promotional idea, while others humorously discussed how expensive weddings have become in India. The campaign also sparked debates around destination weddings, luxury celebrations and the rising costs associated with modern marriages.<br><br>

The viral post continues gaining traction online, with many social media users eagerly waiting for additional details regarding participation rules and the final selection process.`,

  url: "anupam-mittal-sponsors-wedding-viral",

  image: "anupam-mittal-shaadi-wedding-sponsorship.jpeg",

  category: "viral",

  date: "May 29, 2026"
},

  {
  title: "Elon Musk’s Viral Warning About Car Startups Resurfaces Online, Sparks Business Debate",

  description: "A resurfaced statement by Tesla CEO Elon Musk about the extreme difficulty of building a successful car company has once again gone viral across social media platforms.",

  content: `Tesla CEO Elon Musk is once again trending online after an older statement about the automobile industry resurfaced across social media platforms. The viral quote reignited discussions about the challenges involved in building and sustaining a successful car company.<br><br>

In the resurfaced statement, Elon Musk reportedly said that anyone who believes starting a car company is easy is “a fool,” highlighting the intense financial and operational pressure faced by automobile manufacturers. The quote quickly gained attention among entrepreneurs, startup founders and business communities online.<br><br>

Musk has previously explained that the automobile sector remains one of the toughest industries globally due to manufacturing costs, supply chain management, research investments and the difficulty of maintaining positive cash flow. According to the viral discussion, Musk claimed that Ford and Tesla are among the very few American car companies that managed to avoid bankruptcy over the years.<br><br>

The resurfaced clip and quotes triggered major reactions online, with many users praising Tesla’s survival journey while others debated Musk’s leadership style and controversial business decisions. Several startup founders also shared the quote while discussing the harsh realities of entrepreneurship and scaling manufacturing businesses.<br><br>

Industry experts often describe the automotive sector as highly competitive because companies must manage technology, logistics, regulations, production and consumer demand simultaneously. Electric vehicle competition has further intensified pressure on both traditional and emerging car manufacturers worldwide.<br><br>

The viral statement once again reflects how Elon Musk’s comments continue influencing online business conversations, especially among technology enthusiasts and startup communities closely following Tesla and the future of electric mobility.`,

  url: "elon-musk-car-startup-warning-viral",

  image: "elon-musk-tesla-car-company-warning.jpeg",

  category: "viral",

  date: "May 29, 2026"
},

  {
  title: "Google’s Gemini Omni AI Video Tool Goes Viral, Internet Calls It ‘Future Of Content Creation’",

  description: "Google’s newly launched Gemini Omni AI model is creating massive online buzz after demonstrations showcased its ability to generate and edit videos through simple conversations.",

  content: `Google has once again captured global attention after unveiling Gemini Omni, a next-generation artificial intelligence model designed to generate and edit videos using natural conversations. The AI tool quickly became one of the most talked-about technology launches following Google I/O 2026.<br><br>

According to reports, Gemini Omni allows users to create and modify videos using combinations of text prompts, images, audio clips and existing footage. The technology is designed to simplify content creation through conversational AI interactions rather than traditional editing methods.<br><br>

The launch triggered major reactions across social media after demonstration videos showcased highly realistic AI-generated visuals. Many internet users described the technology as revolutionary, while others expressed concern about how AI-generated media could blur the line between reality and digital creation.<br><br>

Google reportedly introduced the first version, Gemini Omni Flash, across several products including the Gemini app, Google Flow and YouTube Shorts. Reports also suggested that the company added invisible SynthID watermarking to identify AI-generated content and improve transparency.<br><br>

Industry experts believe Gemini Omni could directly compete with advanced AI video generation platforms developed by companies such as OpenAI and Adobe. Analysts have described the launch as a potentially major turning point for digital video production and online content ecosystems.<br><br>

The viral discussions surrounding Gemini Omni also reignited debates about artificial intelligence ethics, misinformation risks and the future of creative jobs in media industries. Despite concerns, many creators and technology enthusiasts praised the tool’s powerful capabilities and future potential.`,

  url: "google-gemini-omni-ai-video-tool-viral",

  image: "google-gemini-omni-ai-video.jpeg",

  category: "viral",

  date: "May 29, 2026"
},

  {
  title: "Elon Musk Predicts Tesla Cars Will Soon Drive Passengers Automatically While They Sleep",

  description: "Tesla CEO Elon Musk has once again sparked massive discussion online after claiming that fully autonomous Tesla cars could soon allow passengers to sleep during journeys and wake up at their destination.",

  content: `Tesla CEO Elon Musk has gone viral once again after making bold claims regarding the future of autonomous driving technology. The billionaire entrepreneur stated that Tesla vehicles could soon allow passengers to sleep during travel while the car automatically drives them to their destination.<br><br>

According to reports, Musk said during an interview that hundreds of thousands — and possibly more than a million — Tesla vehicles may operate using advanced full self-driving capabilities in the United States by the end of 2026. The statement quickly triggered huge reactions across technology and automobile communities online.<br><br>

Musk reportedly explained that future Tesla systems could become advanced enough for passengers to avoid paying attention to the road entirely, allowing them to relax or sleep during journeys before waking up at their destination automatically. The announcement is being viewed as part of Tesla’s larger push toward robotaxi and autonomous mobility systems.<br><br>

Reports also highlighted Tesla’s growing focus on self-driving infrastructure, including ongoing robotaxi testing initiatives in parts of the United States. The company has been working aggressively on AI-powered driving technology, cameras, sensors and automated navigation systems for several years.<br><br>

The viral claim generated mixed reactions online. While many Tesla supporters praised the technological ambition and future possibilities, critics raised concerns regarding road safety, government regulations and the reliability of fully autonomous driving systems in real-world conditions.<br><br>

Experts believe self-driving technology could eventually transform transportation, urban mobility and logistics industries globally. However, large-scale deployment still faces legal, technical and public trust challenges before becoming fully mainstream.`,

  url: "elon-musk-tesla-self-driving-sleep-claim",

  image: "elon-musk-tesla-autonomous-driving.jpeg",

  category: "viral",

  date: "May 29, 2026"
},

  {
  title: "Delhi Traffic Police Introduces Solar-Powered AC Helmets Amid Extreme Heatwave",

  description: "Delhi Traffic Police has started testing solar-assisted AC helmets and portable cooling devices for officers working under intense summer heat as temperatures cross 45 degrees Celsius in the capital.",

  content: `Delhi Traffic Police has launched a new pilot initiative aimed at protecting traffic personnel from extreme summer temperatures by introducing solar-powered AC helmets and portable cooling devices. The move has quickly gained attention online as Delhi continues facing severe heatwave conditions.<br><br>

According to reports, the specially designed helmets are capable of reducing internal temperature levels by nearly 8 to 12 degrees Celsius. Traffic officers stationed at busy roads and high-congestion areas have reportedly started using the cooling equipment during duty hours.<br><br>

Apart from solar-assisted AC helmets, authorities have also introduced battery-operated handheld fans, portable ventilators and collar cooling devices for traffic personnel working under direct sunlight. Reports suggested that chilled drinking water and ORS packets are also being distributed regularly to help officers stay hydrated during long outdoor shifts.<br><br>

The pilot project is currently being observed at several major traffic junctions and roundabouts across Delhi NCR, where temperatures recently crossed 45 degrees Celsius. Officials are reportedly monitoring the effectiveness of the equipment before considering a larger citywide rollout.<br><br>

Social media users reacted positively after visuals of officers wearing the cooling helmets began circulating online. Many users praised the initiative and described it as an important step toward improving working conditions for frontline traffic personnel during dangerous heatwave periods.<br><br>

Experts believe extreme weather conditions are forcing cities across India to explore innovative solutions for outdoor workers, especially police officers, construction workers and public service employees who spend long hours exposed to direct heat.`,

  url: "delhi-traffic-police-solar-ac-helmets-heatwave",

  image: "delhi-police-solar-ac-helmet.jpeg",

  category: "viral",

  date: "May 29, 2026"
},

  {
  title: "‘Pinjara’ Song From Bobby Deol’s ‘Bandar’ Creates Buzz Online After Saregama Release",

  description: "The newly released track ‘Pinjara’ from the upcoming film ‘Bandar’ has started trending online, with fans praising Bobby Deol’s intense look and Amit Trivedi’s emotional composition.",

  content: `Music label Saregama Music has officially released the song ‘Pinjara’ from the upcoming film ‘Bandar’, and the track is already creating strong buzz across social media platforms. Featuring Bobby Deol in an intense avatar, the emotional track quickly grabbed attention from cinema and music lovers online.<br><br>

The song has been sung by popular composer and singer Amit Trivedi, while the project also features artists including Sudip Sharma, Sanya Malhotra, Sapna and several other contributors connected to the film. Within hours of release, the track collected massive views and engagement across YouTube and social media platforms.<br><br>

According to the song description shared by Saregama Music, ‘Pinjara’ explores themes of emotions, obsession and chaos, matching the intense tone associated with the film ‘Bandar’. Fans online particularly praised the haunting visuals, emotional composition and Bobby Deol’s serious screen presence in the promotional video.<br><br>

Social media users flooded the comments section with reactions shortly after the release. Many listeners appreciated Amit Trivedi’s musical style and described the song as emotionally powerful and cinematic. Several users also expressed excitement for the film’s theatrical release scheduled for June 5.<br><br>

Bobby Deol has recently been enjoying a major resurgence in popularity following several successful performances and viral appearances in intense roles. The release of ‘Pinjara’ has further increased anticipation surrounding ‘Bandar’ among movie audiences and music fans alike.<br><br>

As the song continues trending online, entertainment followers are now closely watching how the film’s promotions and soundtrack perform ahead of its official release in theatres worldwide.`,

  url: "pinjara-song-bandar-bobby-deol-release",

  image: "pinjara-song-bandar-bobby-deol.jpeg",

  category: "film",

  date: "May 29, 2026"
},

  {
  title: "Three Youths Arrested After Alleged Harassment Incident Near Waterfall In Karnataka’s Belthangady",

  description: "Police in Karnataka’s Belthangady reportedly arrested three youths after an alleged harassment incident involving college students near Didupe waterfall triggered public outrage online.",

  content: `A police case has reportedly been registered in Karnataka’s Dakshina Kannada district after an alleged harassment incident involving three college students near Didupe waterfall in Belthangady surfaced online and triggered strong public reactions.<br><br>

According to reports circulating on social media, three young women studying at a private college in Mangaluru had reportedly travelled to the Didupe waterfall area along with three youths identified as Abdul Altaf, Faizal Adil and Usman Salim. During the outing, the accused allegedly misbehaved with and harassed the women.<br><br>

Reports claimed the incident took place on May 20 when the group visited the tourist location in Belthangady taluk. Following the alleged harassment, the women reportedly raised objections and shouted for help, attracting the attention of people nearby. Local residents and bystanders allegedly intervened and informed the police about the situation.<br><br>

Belthangady police later reportedly took the three accused into custody and rescued the women involved in the incident. Authorities are said to have registered a formal case and also seized the vehicle allegedly used by the accused during the trip.<br><br>

The incident quickly spread across social media platforms, where users expressed concern regarding women’s safety at tourist destinations and demanded strict legal action in such cases. Several online discussions also focused on public security and safety measures in isolated tourist areas.<br><br>

Police officials have not yet released complete official details regarding the investigation, while further inquiry into the incident is reportedly ongoing.`,

  url: "belthangady-waterfall-harassment-case-karnataka",

  image: "belthangady-waterfall-harassment-incident.jpeg",

  category: "viral",

  date: "May 29, 2026"
},

  {
  title: "Netflix Faces Backlash Over AI Use In Squid Game Promo, Social Media Reacts Strongly",

  description: "Streaming giant Netflix has landed in controversy after social media users alleged that AI-generated visuals were used in a recent promotional campaign linked to Squid Game.",

  content: `Streaming platform Netflix has sparked fresh online debate after social media users claimed that artificial intelligence-generated visuals were used in a recent promotional campaign connected to the popular series ‘Squid Game’. The discussion quickly went viral across multiple platforms.<br><br>

According to viral posts circulating online, some users noticed unusual visual details and editing patterns in promotional materials linked to the series. Many internet users alleged that the content appeared to be AI-generated rather than traditionally designed or photographed.<br><br>

The controversy intensified after screenshots and comparison posts began spreading widely on social media. Several users criticised the increasing use of AI-generated visuals in entertainment promotions, arguing that it could affect opportunities for designers, editors and creative artists working in the industry.<br><br>

Meanwhile, another section of users defended the use of AI technology, saying entertainment companies across the world are increasingly experimenting with new digital tools for marketing and promotions. The debate has now become part of a larger global discussion surrounding artificial intelligence in creative industries.<br><br>

Reports also suggested that Netflix has not officially responded to several online claims linked to the viral visuals. However, the topic continued trending online as users debated whether AI-generated content should be clearly disclosed in entertainment campaigns.<br><br>

The incident once again highlights how rapidly evolving AI technology is changing digital entertainment and social media culture, with audiences now paying closer attention to authenticity in online promotional content.`,

  url: "netflix-ai-squid-game-promo-controversy",

  image: "netflix-ai-squid-game-controversy.jpeg",

  category: "viral",

  date: "May 28, 2026"
},

  {
  title: "15-Year-Old Vaibhav Sooryavanshi Breaks Chris Gayle’s Historic IPL Six-Hitting Record",

  description: "Rajasthan Royals youngster Vaibhav Sooryavanshi created history in IPL 2026 after breaking Chris Gayle’s long-standing record for the most sixes in a single IPL season.",

  content: `Teenage batting sensation Vaibhav Sooryavanshi has become one of the biggest talking points of IPL 2026 after breaking Chris Gayle’s historic record for the most sixes in a single IPL season. The Rajasthan Royals opener achieved the milestone during the high-voltage Eliminator clash against Sunrisers Hyderabad.<br><br>

The 15-year-old batter continued his fearless batting approach and smashed multiple sixes during his explosive innings, taking his season tally beyond Chris Gayle’s previous record of 59 sixes set in IPL 2012. Vaibhav’s remarkable power-hitting ability has surprised cricket fans and experts throughout the tournament.<br><br>

Reports stated that Vaibhav played a stunning knock of 97 runs off just 29 balls in the Eliminator match, narrowly missing out on a century while still producing one of the most destructive innings of the season. His innings reportedly included 12 massive sixes, helping Rajasthan Royals post a commanding total.<br><br>

Social media platforms quickly exploded with reactions after the youngster shattered one of IPL’s most iconic batting records. Many fans compared his aggressive batting style to Chris Gayle, while others described him as the future superstar of Indian cricket.<br><br>

Cricket experts and former players also praised the teenager’s confidence and fearless mindset at such a young age. Rajasthan Royals supporters celebrated the achievement online, calling Vaibhav Sooryavanshi one of the biggest discoveries of IPL 2026.<br><br>

With his extraordinary season continuing to create headlines, Vaibhav Sooryavanshi has now firmly established himself as one of the most exciting young talents in world cricket, while his record-breaking six-hitting spree has added another unforgettable chapter to IPL history.`,

  url: "vaibhav-sooryavanshi-breaks-chris-gayle-ipl-sixes-record",

  image: "vaibhav-sooryavanshi-ipl-sixes-record.jpeg",

  category: "sports",

  date: "May 28, 2026"
},

  {
  title: "Kangana Ranaut Defends Aishwarya Rai Bachchan Against Cannes Trolls, Viral Reaction Sparks Debate",

  description: "Actor Kangana Ranaut strongly reacted against online trolls targeting Aishwarya Rai Bachchan over her Cannes appearance, saying the former Miss World does not attend the festival to impress critics.",

  content: `Bollywood actor Kangana Ranaut has once again grabbed attention online after strongly reacting to social media trolls targeting Aishwarya Rai Bachchan during her recent Cannes Film Festival appearance. Kangana’s comments quickly went viral and triggered major discussions across entertainment circles.<br><br>

The controversy began after some social media users criticised Aishwarya Rai Bachchan’s appearance and body image following her Cannes red carpet visuals. Several online comments reportedly used offensive language while discussing the actor’s fashion choices and physical appearance.<br><br>

Reacting to the criticism, Kangana Ranaut defended Aishwarya Rai Bachchan and questioned the growing culture of body shaming online. According to reports, Kangana stated that Aishwarya does not attend Cannes to seek validation or impress critics, adding that such negativity toward women was unnecessary and disrespectful.<br><br>

Kangana’s reaction received mixed responses online. While many social media users appreciated her support for Aishwarya and praised her stand against trolling, others debated the larger issue of celebrity criticism and unrealistic beauty expectations in the entertainment industry.<br><br>

Aishwarya Rai Bachchan has remained one of India’s most recognised global fashion and cinema icons for years, especially at the Cannes Film Festival where her appearances regularly attract worldwide attention. Despite online criticism, many fans praised her confidence and elegance during this year’s event.<br><br>

The incident has now reignited conversations surrounding online trolling, celebrity body shaming and the pressure faced by public figures on social media platforms.`,

  url: "kangana-ranaut-defends-aishwarya-rai-cannes-trolls",

  image: "kangana-ranaut-aishwarya-rai-cannes-controversy.jpeg",

  category: "film",

  date: "May 28, 2026"
},

  {
  title: "Karnataka Power Shift Buzz Intensifies As Siddaramaiah Exit Speculation Grows, DK Shivakumar In Spotlight",

  description: "Political discussions in Karnataka have intensified after reports claimed growing pressure within Congress leadership regarding a possible leadership transition involving Chief Minister Siddaramaiah and Deputy Chief Minister DK Shivakumar.",

  content: `Karnataka politics has entered a high-voltage phase after fresh reports suggested that Congress leadership is actively discussing a possible leadership transition in the state government. Speculation surrounding Chief Minister Siddaramaiah’s future and Deputy Chief Minister DK Shivakumar’s role has now become one of the biggest political talking points in Karnataka.<br><br>

According to reports, senior Congress leaders, including Rahul Gandhi and Mallikarjun Kharge, recently held multiple discussions with Siddaramaiah and DK Shivakumar in Delhi amid growing internal political developments. Several reports claimed the Congress high command is attempting to maintain balance within the party while addressing leadership-related expectations.<br><br>

Political speculation further increased after reports emerged suggesting Siddaramaiah could step aside if the party leadership finalises a transition plan. However, Congress leaders have publicly maintained that no official announcement has yet been made regarding any leadership change in Karnataka.<br><br>

Meanwhile, DK Shivakumar’s supporters reportedly celebrated across parts of Karnataka following intense rumours surrounding a possible power shift. Political observers believe any future decision could significantly impact Congress strategies ahead of upcoming elections and internal party management.<br><br>

Reports also suggested discussions around alternative political responsibilities and organisational roles within the Congress party. However, no formal confirmation has been issued regarding reports linked to Rajya Sabha opportunities or future arrangements involving senior leaders.<br><br>

The developments have triggered massive public interest across Karnataka, with political supporters and opposition leaders closely watching every update connected to the state’s leadership situation. As speculation continues growing, all eyes now remain on the Congress high command for any official clarity in the coming days.`,

  url: "karnataka-congress-power-shift-siddaramaiah-dkshivakumar",

  image: "siddaramaiah-dkshivakumar-karnataka-politics.jpeg",

  category: "politics",

  date: "May 28, 2026"
},

  {
  title: "‘Drishyam 3’ Box Office Storm: Mohanlal Thriller Beats ‘Aadujeevitham’ Record In Just 6 Days",

  description: "Mohanlal’s ‘Drishyam 3’ continues its sensational box office run as the Malayalam thriller reportedly surpassed the lifetime collection of ‘Aadujeevitham’ within just six days of release.",

  content: `Malayalam superstar Mohanlal’s much-awaited thriller ‘Drishyam 3’ is creating history at the box office with an extraordinary worldwide run. Directed by Jeethu Joseph, the film has now reportedly crossed the lifetime worldwide earnings of Prithviraj Sukumaran’s blockbuster survival drama ‘Aadujeevitham’ within just six days of release.<br><br>

The film opened to massive excitement among audiences across Kerala and overseas markets, with fans returning to witness Georgekutty’s story once again on the big screen. Trade reports suggest that the film crossed over Rs 170 crore globally during its first week itself, making it one of the fastest Malayalam films to achieve the milestone.<br><br>

Industry trackers noted that ‘Drishyam 3’ maintained strong occupancy even during weekdays, which is considered a major achievement for a suspense thriller. The film reportedly performed exceptionally well in Kerala, Karnataka, Gulf countries, and other overseas regions where Malayalam cinema enjoys a huge fan base.<br><br>

The movie has also become one of the highest-grossing Malayalam films globally within a very short period. Reports claim the film surpassed the worldwide collection record of ‘Aadujeevitham: The Goat Life’, which had earlier received huge appreciation for its emotional storytelling and box office success.<br><br>

Fans and cinema lovers on social media have been praising Mohanlal’s performance along with Jeethu Joseph’s gripping screenplay. Many viewers described the film as an emotional yet suspense-filled continuation of the iconic ‘Drishyam’ franchise.<br><br>

The massive response has once again highlighted the growing global reach of Malayalam cinema. With the film continuing its strong theatrical run, trade experts now believe ‘Drishyam 3’ could break several more records in the coming days.`,

  url: "drishyam-3-box-office-collection-beats-aadujeevitham-record",

  image: "drishyam-3-box-office-record.jpeg",

  category: "film",

  date: "May 28, 2026"
},

  {
  title: "Rocking Star Yash Enters BGMI Universe As ‘Toxic’ Collaboration Excites Fans",

  description: "BGMI players and Rocking Star Yash fans have a major reason to celebrate as Battlegrounds Mobile India officially announced a special collaboration linked to Yash’s upcoming film ‘Toxic’.",

  content: `Gaming and cinema are coming together in a major way after Battlegrounds Mobile India (BGMI) officially revealed its collaboration with Rocking Star Yash’s upcoming film ‘Toxic’. The announcement quickly grabbed attention online, creating excitement among both gaming enthusiasts and Yash fans.<br><br>

BGMI shared promotional visuals featuring Yash along with ‘Toxic’ themed content, confirming that special in-game experiences will soon arrive for players. One of the biggest highlights includes exclusive Toxic voice packs inspired by the film, giving players a new gaming experience connected to the much-anticipated movie.<br><br>

According to official updates, players can expect themed rewards, collectibles and special collaboration content as part of BGMI’s latest update. The partnership marks another major entertainment crossover for the gaming platform, bringing cinema and mobile gaming communities together.<br><br>

Fans flooded social media soon after the announcement, with many celebrating Rocking Star Yash’s arrival into the BGMI universe. Several users described it as one of the biggest collaborations involving Indian gaming and cinema in recent times.<br><br>

‘Toxic’, one of Yash’s most anticipated upcoming projects, has already generated strong buzz among audiences. With BGMI now joining hands with the film, anticipation has grown even further among fans waiting to experience the collaboration inside the game.<br><br>

The announcement has now become a trending topic online, with gamers eagerly waiting for the new update and exclusive Yash-themed content to officially roll out across Battlegrounds Mobile India.`,

  url: "rocking-star-yash-bgmi-toxic-collaboration-update",

  image: "yash-bgmi-toxic-collaboration.jpeg",

  category: "film",

  date: "May 28, 2026"
},

  {
  title: "Samantha Ruth Prabhu Packs Action And Emotion In ‘Maa Inti Bangaaram’ Trailer, Fans Excited",

  description: "The trailer of Samantha Ruth Prabhu’s upcoming film ‘Maa Inti Bangaaram’ has created excitement online, showcasing a mix of family emotions, action sequences and a powerful new character avatar.",

  content: `Actor Samantha Ruth Prabhu has grabbed attention once again after the makers unveiled the official trailer of her upcoming film ‘Maa Inti Bangaaram’. The trailer quickly gained traction online, with fans discussing Samantha’s intense transformation and action-packed role.<br><br>

The trailer introduces Samantha in a family-oriented setting where her character initially appears to handle everyday responsibilities and family expectations. However, the story later shifts into an action-driven narrative as danger enters her life and forces her to protect her family.<br><br>

The film combines emotional family moments with large-scale action sequences, presenting Samantha in a more intense and powerful screen appearance. Reports suggest the actor performed several action scenes herself, adding to fan anticipation surrounding the film.<br><br>

Directed by Nandini Reddy, the film is scheduled for theatrical release on June 19, 2026. Apart from playing the lead role, Samantha is also associated with the project’s production side, making the film an important release in her career journey.<br><br>

Shortly after the trailer launch, social media platforms witnessed strong reactions from fans praising Samantha’s screen presence, action sequences and the emotional tone of the upcoming film. The trailer has now become a major talking point among cinema audiences ahead of the movie’s release.`,

  url: "samantha-ruth-prabhu-maa-inti-bangaaram-trailer-action-family-drama",

  image: "samantha-maa-inti-bangaaram-trailer.jpeg",

  category: "film",

  date: "May 27, 2026"
},

  {
  title: "IndiGo Pilot Shares Rare India-Pakistan Border View From Sky, Viral Video Stuns Internet",

  description: "A rare aerial video shared by an IndiGo pilot showing the illuminated India-Pakistan border from thousands of feet above ground has gone viral, leaving social media users fascinated by the dramatic night-time visuals.",

  content: `A rare cockpit video captured during a late-night IndiGo flight has grabbed major attention online after showing a breathtaking aerial view of the India-Pakistan border from the night sky. The video, shared by IndiGo pilot Captain Pradeep Krishnan, quickly spread across social media platforms and attracted massive public interest.<br><br>

The footage showed a long illuminated stretch of lights cutting through the darkness below, creating a striking visual contrast visible from high altitude. The glowing border line surprised many viewers, with social media users describing the visuals as emotional, fascinating and unlike anything they had seen before.<br><br>

During the flight announcement, the pilot reportedly informed passengers that they were witnessing one of the world's most sensitive and heavily monitored international borders. The visuals highlighted sections of the Radcliffe Line along with visible security infrastructure and floodlighting near border areas.<br><br>

The viral video triggered thousands of reactions online. While some users praised the stunning night-time view from the aircraft, others reflected on the historical significance and emotional impact associated with the India-Pakistan border.<br><br>

The rare aerial perspective has now become one of the most discussed viral moments online, giving people a unique glimpse of a location that few get the opportunity to witness from the sky.`,

  url: "indigo-pilot-india-pakistan-border-aerial-video-viral",

  image: "india-pakistan-border-indigo-pilot-viral-video.jpeg",

  category: "viral",

  date: "May 27, 2026"
},

  {
  title: "Karnataka Leadership Buzz Grows As Rahul Gandhi Reportedly Tries To Resolve Siddaramaiah Issue",

  description: "Fresh political discussions have intensified in Karnataka after reports claimed Congress leadership is attempting to address internal leadership questions involving Chief Minister Siddaramaiah and Deputy Chief Minister DK Shivakumar.",

  content: `Political developments in Karnataka have once again become a major talking point after reports suggested Congress leadership held important discussions regarding the state's future leadership structure. Political circles witnessed increased attention following meetings involving senior party leaders in New Delhi.<br><br>

According to reports, Congress leader Rahul Gandhi held discussions with Karnataka Chief Minister Siddaramaiah and Deputy Chief Minister DK Shivakumar amid growing speculation over possible leadership decisions within the state government. The developments have triggered strong political conversations across Karnataka.<br><br>

Several reports claimed party leaders are exploring options aimed at maintaining balance within the state leadership while ensuring organisational stability ahead of future political challenges. Discussions regarding potential political roles and responsibilities have further intensified public attention.<br><br>

However, Congress leaders have also publicly dismissed some reports surrounding leadership disputes and maintained that no final decisions have been officially announced regarding any change in the state's top leadership position.<br><br>

The developments continue attracting significant political interest, with supporters and observers closely monitoring upcoming announcements from Congress leadership regarding Karnataka politics in the coming days.`,

  url: "karnataka-leadership-buzz-rahul-gandhi-siddaramaiah-dk-shivakumar",

  image: "karnataka-congress-leadership-discussion.jpeg",

  category: "politics",

  date: "May 27, 2026"
},

  {
  title: "RCB Storm Into IPL 2026 Final After Dominant Qualifier Victory, Fans Celebrate Historic Moment",

  description: "Royal Challengers Bengaluru secured a place in the IPL 2026 final after a commanding performance in Qualifier 1, creating massive excitement among cricket fans across the country.",

  content: `Royal Challengers Bengaluru have officially booked their place in the IPL 2026 final after delivering a dominant performance in Qualifier 1. The victory sparked celebrations among RCB supporters, with social media platforms flooded with reactions, videos and messages from cricket fans.<br><br>

RCB defeated Gujarat Titans by a massive margin to directly enter the tournament final. The team produced an impressive all-round display with strong batting performances and disciplined bowling throughout the match. Reports stated that captain Rajat Patidar played a crucial role with an explosive unbeaten innings that helped RCB build a commanding total.<br><br>

Virat Kohli also contributed important runs before RCB bowlers maintained pressure and restricted Gujarat Titans during the chase. The victory further strengthened Bengaluru's growing confidence as the franchise moved one step closer to another IPL title opportunity.<br><br>

The qualification created huge excitement among supporters, especially with fans hoping RCB can continue their momentum in the final. Social media witnessed celebration posts, emotional fan reactions and praise for the team's performance after securing direct qualification.<br><br>

With the final now approaching, cricket followers will closely watch whether Royal Challengers Bengaluru can convert their impressive campaign into championship success and create another memorable chapter in IPL history.`,

  url: "rcb-qualified-ipl-2026-final-qualifier-win",

  image: "rcb-ipl-2026-final-qualification.jpeg",

  category: "sports",

  date: "May 27, 2026"
},

  {
  title: "Ranveer Singh Visits Chamundi Temple, Offers Apology Amid Controversy Over Daiva Remark",

  description: "Bollywood actor Ranveer Singh visited Chamundi Hills temple in Mysuru and offered prayers amid controversy linked to remarks connected to Daiva tradition, drawing public attention.",

  content: `Bollywood actor Ranveer Singh has once again become a talking point after visiting the Chamundeshwari Temple in Mysuru following controversy surrounding comments related to Daiva traditions. Reports stated that the actor visited the temple and offered special prayers before Goddess Chamundeshwari.<br><br>

According to reports, the visit was linked to an earlier controversy where remarks associated with traditional Daiva culture had triggered criticism among sections of people. The issue reportedly reached legal discussions, following which the actor was said to have expressed regret regarding the matter.<br><br>

Sources claimed Ranveer Singh arrived at the temple quietly without prior public announcement. He reportedly stood in line like other devotees and entered the temple premises without any major public appearance or celebration surrounding the visit.<br><br>

Reports further stated that the actor offered prayers before the deity and spent time inside the temple seeking blessings. Visuals and discussions related to the temple visit later gained attention across social media platforms.<br><br>

The controversy had earlier generated discussions among cinema audiences and followers of traditional cultural practices. With Ranveer Singh now visiting the temple and offering prayers, reactions continue emerging online as fans closely watch further developments.`,

  url: "ranveer-singh-chamundi-temple-apology-daiva-controversy",

  image: "ranveer-singh-chamundi-temple-mysuru.jpeg",

  category: "film",

  date: "May 27, 2026"
},

  {
  title: "Man Found Living Inside Bengaluru Flyover Pillar Sparks Discussion On Urban Housing Struggles",

  description: "A surprising incident near Bengaluru’s Jalahalli Cross gained attention after a man was reportedly found staying inside a hollow flyover pillar, raising discussions about housing challenges and urban living conditions.",

  content: `An unusual incident reported near Jalahalli Cross in Bengaluru has drawn widespread attention after a man was allegedly discovered living inside the hollow section of a flyover pillar. The incident quickly became a talking point online after visuals from the location spread across social media platforms.<br><br>

According to information circulating online, passersby and local residents noticed the man inside the narrow space beneath the flyover structure. The unexpected sight reportedly attracted public attention, with several people gathering near the location to understand how the individual managed to access and stay inside the pillar area.<br><br>

Reports suggested that the man may have been staying there for some time. While official details regarding his situation were not immediately available, the incident triggered conversations around rising living costs, housing affordability, and challenges faced by economically weaker sections in large cities.<br><br>

The situation also raised concerns regarding public infrastructure access and safety monitoring in urban areas. Social media users reacted with mixed emotions, with some expressing concern over housing struggles while others questioned how such a space remained unnoticed for a long period.<br><br>

The visuals continue gaining attention online as discussions grow regarding urban homelessness, living conditions and affordable housing concerns in rapidly growing metropolitan cities like Bengaluru.`,

  url: "bengaluru-man-living-inside-flyover-pillar-housing-concern",

  image: "bengaluru-flyover-pillar-living-space.jpeg",

  category: "viral",

  date: "May 27, 2026"
},

  {
  title: "Arshdeep Singh Deletes 200+ Instagram Posts, Viral Virat Kohli Reel Also Removed",

  description: "Indian cricketer Arshdeep Singh surprised fans after deleting more than 200 Instagram posts, including a viral reel featuring Virat Kohli, sparking major discussion across social media.",

  content: `Indian fast bowler Arshdeep Singh has created a major buzz online after reportedly removing more than 200 posts from his Instagram account. The unexpected social media activity quickly attracted attention among cricket fans, with many trying to understand the reason behind the sudden digital cleanup.<br><br>

One of the biggest surprises for followers was the removal of a highly popular Instagram reel featuring Virat Kohli from India's Champions Trophy celebrations. Reports stated that the reel had gained massive engagement online and was among Arshdeep's widely viewed posts.<br><br>

Apart from deleting posts, Arshdeep Singh also reportedly changed his display picture, adding further curiosity among fans. Following the update, only a limited number of posts remained visible on his account, mainly featuring personal moments, career highlights and promotional content.<br><br>

The move triggered strong reactions across social media platforms, with fans sharing different theories ranging from a personal social media reset to image rebranding. However, Arshdeep Singh has not publicly explained the reason behind the changes at the time of reporting.<br><br>

The social media development comes during an important cricket period, making the incident an unexpected talking point among cricket followers. Fans now continue waiting for any official clarification regarding the sudden Instagram activity.`,

  url: "arshdeep-singh-instagram-posts-deleted-virat-kohli-reel-removed",

  image: "arshdeep-singh-instagram-cleanup-kohli-reel.jpeg",

  category: "sports",

  date: "May 27, 2026"
},

  {
  title: "18-Year-Old Woman Arrested After Fatal Shooting Case Linked To Child Abuse Allegation",

  description: "An 18-year-old woman was arrested after a fatal shooting case that reportedly followed allegations involving inappropriate behaviour toward a child, according to reports.",

  content: `A shocking criminal case has drawn widespread attention after an 18-year-old woman identified as Alishon Torres was arrested in connection with a fatal shooting incident, according to reports.<br><br>

Authorities said the incident allegedly occurred after claims surfaced involving inappropriate behaviour toward a young child. Reports stated that the accused allegedly confronted the man before the situation escalated into violence.<br><br>

Police officials reportedly said the victim's body was later discovered inside a vehicle that had allegedly been repainted and abandoned. Investigators continued examining evidence connected to the case.<br><br>

According to reports, authorities later arrested the 18-year-old woman and recovered a firearm believed to be connected to the investigation. Officials said legal proceedings are currently underway.<br><br>

The case has triggered discussions online regarding crime, child protection concerns and the importance of allowing legal authorities to handle criminal allegations through proper legal processes.<br><br>

Police officials continue investigating the matter, and further details are expected as the case moves forward.`,

  url: "18-year-old-woman-arrested-fatal-shooting-child-abuse-allegation",

  image: "alishon-torres-crime-case.jpeg",

  category: "world",

  date: "May 26, 2026"
},

  {
  title: "Bihar Woman Allegedly Dies Four Days After Wedding In Suspected Dowry Harassment Case",

  description: "A 23-year-old woman from Bihar allegedly lost her life just four days after her wedding in a disturbing dowry-related case that has triggered police investigation and renewed concerns over dowry harassment in society.",

  content: `A disturbing incident from Bihar has drawn widespread attention after a 23-year-old newly married woman allegedly died just four days after her wedding in a suspected dowry harassment case.<br><br>

According to reports, the bride's family claimed they had already provided several gifts during the marriage, including cash, jewellery, furniture, a motorcycle and other household items. However, family members alleged that additional demands continued even after the wedding ceremony was completed.<br><br>

Reports claimed that one more gold chain was allegedly demanded after marriage, leading to tension between both families. Relatives of the woman alleged that she faced harassment and pressure inside her husband's home over the matter.<br><br>

Family members further claimed that the woman had secretly informed them about the difficulties she was experiencing after marriage. They alleged she had spoken about being mentally troubled and facing continued pressure related to dowry demands.<br><br>

Police officials said the woman was later found dead under suspicious circumstances. Authorities are investigating allegations linked to attempts to destroy evidence after the incident. Reports further stated that police registered a case and began legal proceedings connected to the matter.<br><br>

The case has once again raised discussions about dowry-related crimes and women's safety after marriage. Social media users and members of the public expressed concern over such incidents and demanded strict action against those found guilty.<br><br>

Dowry-related harassment remains a serious social issue in many parts of the country despite legal restrictions and awareness campaigns. Cases involving alleged harassment and violence continue to raise questions about social attitudes and protection mechanisms available for women.<br><br>

Police officials continue investigating the case, and further details are expected to emerge as the investigation progresses.`,

  url: "bihar-woman-dowry-harassment-case-four-days-after-wedding",

  image: "bihar-woman-dowry-case-investigation.jpeg",

  category: "viral",

  date: "May 26, 2026"
},

  {
  title: "Rashmika Mandanna Shines At Crunchyroll Anime Awards 2026, Global Appearance Grabs Attention",

  description: "Actor Rashmika Mandanna made a stylish appearance at the Crunchyroll Anime Awards 2026 in Tokyo, once again representing India on an international stage and drawing attention from fans worldwide.",

  content: `Actor Rashmika Mandanna attended the Crunchyroll Anime Awards 2026 held in Tokyo, Japan, adding another global appearance to her growing international journey. The actor participated in the prestigious anime event and once again became a talking point among fans online.<br><br>

Reports suggest Rashmika returned to the global event for another year, where she appeared as a presenter during the ceremony. Her presence highlighted India's growing representation at major international entertainment events.<br><br>

<img src="rashmika-mandanna-crunchyroll-anime-awards 01.jpeg"
style="width:100%;max-width:750px;height:auto;display:block;margin:20px auto;border-radius:10px;"
alt="News Image">

The actor also grabbed attention for her fashion appearance during the event, with social media users sharing images and reactions shortly after the ceremony. Fans praised her international presence and celebrated another major milestone in her career.<br><br>

Crunchyroll Anime Awards remains one of the biggest global celebrations recognising achievements in anime entertainment, bringing together artists, creators and celebrities from different parts of the world.<br><br>

Rashmika Mandanna's appearance has now become a widely discussed topic online, with many fans appreciating her continued rise on global entertainment platforms.`,

  url: "rashmika-mandanna-crunchyroll-anime-awards-2026-global-event",

  image: "rashmika-mandanna-crunchyroll-anime-awards.jpeg",

  category: "film",

  date: "May 26, 2026"
},

  {
  title: "Yuvraj Singh’s ‘Slipper’ Comment Goes Viral After Punjab Kings IPL 2026 Exit",

  description: "Former India cricketer Yuvraj Singh grabbed attention online after his humorous yet sharp comment aimed at Punjab Kings players following the team’s IPL 2026 playoff exit.",

  content: `Punjab Kings’ IPL 2026 campaign ended in disappointment after the team narrowly missed out on a playoff spot despite a strong start to the season. The exit triggered reactions from cricket fans and experts, but one comment from former India star Yuvraj Singh quickly grabbed social media attention.<br><br>

Reports suggest Punjab Kings had looked like playoff contenders after winning six of their opening seven matches. However, inconsistent performances later in the tournament affected their momentum, ultimately leaving them outside the playoff race.<br><br>

The viral moment reportedly began after Punjab Kings player Harpreet Brar shared a social media post featuring teammates Arshdeep Singh and Priyansh Arya. Responding to the post, Yuvraj Singh jokingly wrote a comment that roughly translated to ‘time to hit you with slippers’, a playful reaction that quickly spread online among cricket followers.<br><br>

Several fans viewed the remark as light-hearted frustration from a senior cricketer who has guided young Punjab-based players over the years. Social media discussions intensified as fans debated Punjab Kings’ season and individual performances.<br><br>

Punjab Kings’ latest IPL season has once again become a major talking point among cricket followers, while Yuvraj Singh’s viral comment has added another discussion point to the franchise’s difficult finish this year.`,

  url: "yuvraj-singh-slams-punjab-kings-trio-ipl-2026-exit-viral-comment",

  image: "yuvraj-singh-punjab-kings-slipper-comment.jpeg",

  category: "sports",

  date: "May 26, 2026"
},

  {
  title: "Yogi Adityanath Issues Strict Bakrid Guidelines, Says No Public Animal Sacrifice Or Road Block For Namaz",

  description: "Uttar Pradesh Chief Minister Yogi Adityanath has issued fresh guidelines ahead of Bakrid celebrations, stating that animal sacrifice should not take place in public areas and roads must remain free during prayer gatherings.",

  content: `Ahead of Bakrid celebrations, Uttar Pradesh Chief Minister Yogi Adityanath has instructed officials to ensure public order and proper festival management across the state.<br><br>

The administration stated that animal sacrifice should not take place in open public spaces. Authorities were also directed to ensure that roads and public movement areas remain unobstructed during Namaz gatherings to avoid inconvenience to citizens.<br><br>

Officials have reportedly been asked to maintain law and order while ensuring that religious events are conducted peacefully and within administrative guidelines. The state government emphasised that public safety and smooth management of festival arrangements remain a priority.<br><br>

The announcement has triggered discussions across political and social circles, with reactions emerging from different sections of the public regarding the measures introduced ahead of Bakrid celebrations.<br><br>

Festival-related administrative decisions often draw public attention, and officials are expected to closely monitor arrangements in the coming days as preparations continue across the state.<br><br>

The development has now become a widely discussed topic, with many closely watching how authorities implement the new instructions during upcoming festival activities.`,

  url: "yogi-adityanath-bakrid-guidelines-public-animal-sacrifice-namaz-road-ban",

  image: "yogi-adityanath-bakrid-guidelines.jpeg",

  category: "politics",

  date: "May 26, 2026"
},

  {
  title: "Ranveer Singh ‘Banned’ By FWICE? Don 3 Exit Controversy Triggers Bollywood Storm",

  description: "Ranveer Singh has landed in major controversy after FWICE issued a non-cooperation directive linked to his reported Don 3 exit, sparking intense debate across Bollywood.",

  content: `Bollywood star Ranveer Singh has found himself at the centre of a major entertainment controversy after the Federation of Western India Cine Employees (FWICE) issued a non-cooperation directive against the actor amid the ongoing Don 3 dispute.<br><br>

The controversy reportedly began following Ranveer Singh’s sudden departure from Don 3, the upcoming film directed by Farhan Akhtar. Reports suggest the film’s production team raised concerns regarding the actor’s exit after substantial work had already been completed for pre-production.<br><br>

FWICE stated that Ranveer Singh allegedly did not respond to multiple invitations to personally discuss the matter, eventually leading to the organisation issuing a non-cooperation directive. Industry discussions intensified after reports claimed significant financial impact connected to the project’s preparations.<br><br>

Reacting to the controversy, Ranveer Singh’s team reportedly said that the actor continues to hold respect for everyone associated with the Don franchise and believes professional matters should be handled with dignity and maturity.<br><br>

The situation has triggered heavy reactions across social media, with Bollywood fans divided over the issue. While some supported the actor, others questioned the developments surrounding one of Bollywood’s most anticipated films.<br><br>

With Don 3 carrying huge expectations among cinema audiences, fans are now closely watching upcoming developments as the controversy continues dominating entertainment headlines.`,

  url: "ranveer-singh-banned-fwice-don3-controversy",

  image: "ranveer-singh-fwice-don3-ban-row.jpeg",

  category: "film",

  date: "May 26, 2026"
},

  {
  title: "Karnataka: Bhatkal Boat Tragedy Leaves 8 Dead, Rescue Teams Continue Operations",

  description: "A tragic boat accident reported near Bhatkal in Karnataka has shocked people after multiple casualties were reported. Rescue efforts and emergency response teams continue operations following the incident.",

  content: `A heartbreaking tragedy from Karnataka's Uttara Kannada district has left people shocked after a boat accident near Bhatkal reportedly claimed multiple lives.<br><br>

According to details visible in local updates shared online on May 24, 2026, around 11 people were reportedly involved in the incident. Information circulating online indicates that 8 people lost their lives in the tragedy.<br><br>

The details shown in local reports suggest that among the deceased, 7 were women and 1 was a man. Rescue efforts were immediately launched after authorities and local residents learned about the accident.<br><br>

Images and videos connected to the incident spread rapidly across social media platforms, with people expressing grief and condolences for affected families. Emergency response teams and local authorities continued coordination efforts following the incident.<br><br>

The tragedy has triggered emotional reactions across Karnataka, with many social media users mourning the victims and demanding stronger safety measures to prevent such incidents in the future.<br><br>

Authorities are expected to continue investigation and official verification regarding circumstances surrounding the boat tragedy while support efforts continue for families affected by the incident.`,

  url: "minchal-karnataka-bhatkal-boat-tragedy-uttara-kannada",

  image: "bhatkal-boat-tragedy-karnataka.jpeg",

  category: "viral",

  date: "May 25, 2026"
},

  {
  title: "Tamil Nadu Viral Video Sparks Outrage After Police Briefing Clip Triggers Public Reaction",

  description: "A viral video from Tamil Nadu has created widespread discussion online after social media users reacted strongly to a police press interaction connected to a sensitive child case in Sulur.",

  content: `A video from Tamil Nadu has gone viral across social media platforms, triggering strong public reactions and widespread debate over official conduct during sensitive criminal investigations.<br><br>

The discussion began after a clip from a police media interaction related to a child case in Sulur circulated online. Several social media users questioned the behaviour and expressions of certain officials seen during the briefing, leading to criticism and public outrage across multiple platforms.<br><br>

According to reports circulating online, the incident is connected to the tragic death of a 10-year-old girl whose case has drawn emotional responses from local residents and people across the country. The matter has intensified discussions surrounding sensitivity, public communication, and the responsibilities of officials while addressing serious incidents.<br><br>

As the video spread rapidly online, many users expressed disappointment and demanded greater seriousness and professionalism during official press interactions involving highly sensitive cases. Others urged people to avoid drawing conclusions from short clips alone and wait for complete context before making judgments.<br><br>

The incident has once again highlighted how social media can rapidly amplify public sentiment, especially in cases involving children and emotionally sensitive investigations.<br><br>

Authorities continue handling the matter while conversations around accountability, public trust, and responsible communication remain active online.`,

  url: "tamil-nadu-viral-police-briefing-video-public-reaction",

  image: "tamil-nadu-police-viral-video-public-reaction.jpeg",

  category: "trending",

  date: "May 25, 2026"
},

  {
  title: "Ananya Panday Faces Social Media trolled Over Bharatanatyam Scene In 'Chand Mera Dil'",

  description: "Bollywood actress Ananya Panday has become the center of online discussion after a Bharatanatyam sequence from her latest film 'Chand Mera Dil' sparked mixed reactions across social media platforms.",

  content: `Actress Ananya Panday has found herself trending online after a Bharatanatyam performance scene from her newly released film 'Chand Mera Dil' triggered heavy discussion among movie viewers and dance enthusiasts.<br><br>

A short clip featuring Ananya performing Bharatanatyam in the film started circulating widely on social media soon after the movie's release. While some viewers appreciated the cinematic presentation and styling of the sequence, several others questioned the execution of the classical dance form, leading to criticism online.<br><br>

The discussion quickly expanded across social platforms, where users shared mixed opinions regarding the dance performance. Some classical dance followers expressed disappointment, saying the traditional style deserved stronger presentation and technique, while others defended the actress, arguing that filmmakers often adapt artistic forms for commercial storytelling.<br><br>

'Chand Mera Dil', featuring Ananya Panday alongside Lakshya, recently arrived in theatres and has continued attracting public attention through both audience reactions and online conversations surrounding the film.<br><br>

Despite the criticism, several fans extended support to Ananya, highlighting that actors frequently perform scenes based on creative direction and cinematic requirements. The debate has once again opened conversations around authenticity in portraying traditional art forms in mainstream cinema.<br><br>

As conversations continue online, the Bharatanatyam scene has become one of the most discussed moments from 'Chand Mera Dil', further pushing the film into social media spotlight.`,

  url: "ananya-panday-bharatanatyam-scene-chand-mera-dil-social-media-reaction",

  image: "ananya-panday-chand-mera-dil-bharatanatyam-scene.jpeg",

  category: "film",

  date: "May 25, 2026"
},

  {
  title: "KL Rahul Scripts IPL History With Rare Milestone, Continues Remarkable T20 Journey",

  description: "Indian batter KL Rahul added another major achievement to his career after reaching a unique IPL milestone, becoming the first cricketer to accomplish a rare feat across multiple franchises.",

  content: `KL Rahul once again showcased why he remains one of the most dependable performers in T20 cricket after achieving a historic milestone during IPL 2026. The stylish batter added another special record to his growing career achievements and created fresh buzz among cricket fans.<br><br>

The experienced wicketkeeper-batter became the first player in IPL history to cross the 1000-run mark for three different franchises. The achievement reflects Rahul's ability to consistently deliver performances despite changing teams, different batting roles, and varying match situations.<br><br>

Over the years, KL Rahul has built a strong reputation for combining stability with aggressive stroke play. Whether opening the innings or guiding a chase under pressure, the Karnataka cricketer has repeatedly delivered important contributions for his teams.<br><br>

Cricket followers quickly reacted online after the latest milestone, with fans praising Rahul's adaptability and long-term consistency in franchise cricket. Many supporters highlighted how maintaining high standards across multiple IPL teams makes the record even more impressive.<br><br>

IPL 2026 has seen several players create memorable moments, but Rahul's latest accomplishment further strengthens his standing among modern T20 cricket's most reliable performers.<br><br>

As the tournament enters its crucial phase, KL Rahul continues playing an important role while adding another historic achievement to an already impressive cricket journey.`,

  url: "kl-rahul-historic-ipl-milestone-2026",

  image: "kl-rahul-ipl-history-record-2026.jpeg",

  category: "sports",

  date: "May 25, 2026"
},

  {
  title: "Arjun Shines Despite LSG Defeat, Sachin Tendulkar Shares Emotional Message After IPL 2026 Debut",

  description: "Lucknow Super Giants may have ended their IPL 2026 campaign with defeat, but Arjun Tendulkar’s debut performance became one of the biggest talking points after Sachin Tendulkar shared an emotional message for his son.",

  content: `Lucknow Super Giants may not have finished on the winning side, but young pacer Arjun Tendulkar managed to leave a strong impression during his IPL 2026 debut appearance. The left-arm bowler finally received his opportunity after waiting throughout the season and delivered a performance that quickly grabbed cricket fans' attention.<br><br>

Making his first appearance for Lucknow Super Giants against Punjab Kings, Arjun showed calmness under pressure and produced important moments despite playing in a difficult situation. One of the standout highlights came when he picked up his maiden wicket with an impressive yorker delivery, giving fans a glimpse of his potential on a major IPL stage.<br><br>

The emotional moment became even more special after legendary cricketer Sachin Tendulkar shared a heartfelt social media message praising his son's patience, discipline, and dedication. Sachin highlighted how Arjun continued working hard quietly despite waiting an entire season for an opportunity. The message quickly went viral across social media platforms and received appreciation from cricket fans.<br><br>

Arjun's debut also sparked discussions among supporters about perseverance in professional sport. Many fans praised the youngster for staying prepared and making an impact when finally given his chance late in the tournament.<br><br>

While Lucknow Super Giants closed their campaign with disappointment, Arjun Tendulkar's first outing provided a positive takeaway and added another memorable chapter to his growing cricket journey. Cricket followers will now closely watch how the young pacer builds on this milestone in the coming seasons.`,

  url: "arjun-tendulkar-lsg-debut-sachin-emotional-post-ipl-2026",

  image: "arjun-tendulkar-lsg-debut-ipl2026.jpeg",

  category: "sports",

  date: "May 25, 2026"
},

  {
  title: "Rukmini Vasanth Unveils Avantra’s ‘The Gulistan Edit’ Collection In Bengaluru",

  description: "Actress Rukmini Vasanth launched Avantra’s latest festive collection ‘The Gulistan Edit’, a fashion line inspired by royal garden aesthetics, traditional craftsmanship, and ethnic elegance.",

  content: `Kannada actress Rukmini Vasanth unveiled Avantra’s latest festive collection, ‘The Gulistan Edit’, at a special launch event held in Bengaluru. The collection blends heritage-inspired fashion with contemporary styling and celebrates India’s traditional textile artistry.<br><br>

‘The Gulistan Edit’ takes inspiration from royal gardens and palace aesthetics, featuring floral motifs, intricate patterns, and elegant craftsmanship woven into sarees and ethnic wear collections. The designs aim to combine timeless Indian tradition with modern fashion sensibilities.<br><br>

Rukmini Vasanth, who serves as the brand face for Avantra, shared her appreciation for Indian ethnic fashion and highlighted how traditional clothing continues to carry identity, culture, and individuality. The actress praised the collection’s balance between heritage and personal expression.<br><br>

The launch event attracted attention from fashion enthusiasts and fans of the actress, with images and videos from the unveiling circulating widely across social media platforms. The collection includes festive sarees, ethnic ensembles, and handcrafted textile designs inspired by historic artistic elements.<br><br>

Rukmini Vasanth remains one of Kannada cinema’s rising stars and continues expanding her presence across South Indian entertainment while also associating with major fashion and lifestyle brands.`,

  url: "rukmini-vasanth-avantra-gulistan-edit-collection-launch",

  image: "rukmini-vasanth-avantra-gulistan-edit.jpeg",

  category: "film",

  date: "May 25, 2026"
},

  {
  title: "LSG vs PBKS Match Overshadowed By Fan Misconduct With Cheerleaders, Police Step In",

  description: "An unpleasant incident during the IPL 2026 match between Lucknow Super Giants and Punjab Kings has drawn criticism after some spectators allegedly behaved inappropriately with cheerleaders, forcing police officials to intervene.",

  content: `IPL 2026 witnessed an unfortunate moment during the Lucknow Super Giants (LSG) versus Punjab Kings (PBKS) match at Ekana Cricket Stadium in Lucknow after allegations surfaced regarding inappropriate behaviour by a section of spectators towards cheerleaders present inside the venue.<br><br>

Punjab Kings secured an important victory in the match to keep their playoff hopes alive, but the on-field cricket action was overshadowed by an incident involving crowd behaviour that quickly started circulating across social media platforms.<br><br>

According to reports and visuals shared online, a few spectators allegedly attempted to disturb cheerleaders during the match. Police officials and ground security personnel reportedly intervened immediately to bring the situation under control and prevent further disturbance.<br><br>

Videos from the stadium later went viral online, triggering criticism from cricket fans and social media users. Many users demanded stronger crowd discipline measures inside stadiums and highlighted the need for ensuring a safe working environment for everyone involved in sporting events.<br><br>

The incident has also restarted discussions about crowd responsibility, spectator behaviour, and the importance of maintaining respectful conduct during major sporting events. Cricket followers pointed out that stadiums should remain spaces where players, support staff, performers, and fans can participate safely without facing uncomfortable situations.<br><br>

While no detailed official statement explaining the exact nature of the incident has been released, reports suggest stadium authorities and police personnel acted quickly after noticing the situation. Some online discussions claimed objects may have been thrown towards cheerleaders, though authorities have not publicly confirmed complete details regarding the allegations.<br><br>

The discussion has once again highlighted conversations around safety standards, security arrangements, and fan behaviour management during high-profile cricket tournaments like the IPL.<br><br>

Despite Punjab Kings' impressive performance on the field, the off-field controversy became one of the major talking points following the LSG vs PBKS IPL 2026 fixture.`,

  url: "lsg-vs-pbks-cheerleaders-fan-misconduct-police-action-ipl-2026",

  image: "lsg-pbks-cheerleaders-police-action-ipl2026.jpeg",

  category: "sports",

  date: "May 25, 2026"
},

  {
  title: "Bigg Boss Fame Jahnavi Joins JDS In Presence Of HD Kumaraswamy, Political Entry Creates Buzz",

  description: "Television anchor, actress, and former Bigg Boss Kannada contestant Jahnavi has officially entered politics after joining Janata Dal (Secular) in the presence of HD Kumaraswamy. Her entry has created discussion among supporters and political followers across Karnataka.",

  content: `Television anchor and actress Jahnavi, who gained popularity through Kannada television and later became familiar to audiences through Bigg Boss Kannada, has officially entered Karnataka politics by joining Janata Dal (Secular) (JDS). The joining ceremony took place in Bengaluru in the presence of Union Minister and senior JDS leader HD Kumaraswamy.<br><br>

Jahnavi was welcomed into the party during an official event where party leaders extended support as she began a new phase in public life. Photos and visuals from the event quickly started circulating online, creating discussion among supporters, television audiences, and political followers.<br><br>

Having built recognition through entertainment and anchoring, Jahnavi's move into politics has drawn significant public attention. Social media platforms witnessed strong reactions after news of her political entry surfaced, with supporters wishing her success while many discussed what responsibilities she could receive within the party organization.<br><br>

Though the party has not yet officially announced a major organizational role for Jahnavi, political observers believe personalities from entertainment backgrounds can help parties strengthen outreach efforts, particularly among younger voters and television audiences.<br><br>

Celebrity entries into politics have often generated public curiosity in Karnataka, and Jahnavi's move continues that trend. Several actors, television personalities, and public figures have previously entered political life, bringing attention and wider public engagement to party activities.<br><br>

JDS leaders believe bringing individuals with public recognition can improve communication and connect political messaging with broader audiences. Jahnavi's presence within the party is expected to attract attention from entertainment followers who have known her through television over the years.<br><br>

The development has now become one of Karnataka's notable entertainment-political crossover stories, drawing discussion across both political circles and social media platforms as people watch closely to see what role Jahnavi takes up in the future.`,

  url: "bigg-boss-jahnavi-joins-jds-hd-kumaraswamy-political-entry",

  image: "jahnavi-jds-entry-hd-kumaraswamy.jpeg",

  category: "politics",

  date: "May 25, 2026"
},

  {
  title: "Rakshit Shetty Family Celebrates Parents’ 50th Wedding Anniversary With Traditional Rituals And Family Gathering",

  description: "Actor Rakshit Shetty’s family celebrated an emotional milestone as his parents completed 50 years of married life. The special occasion was marked with traditional rituals, homa, havan, and joyful family moments.",

  content: `Kannada actor Rakshit Shetty's family recently celebrated a memorable occasion as his parents completed 50 years of marriage, marking an important milestone in their family journey.<br><br>

The golden wedding anniversary celebration was organized with traditional homa, havan rituals, and spiritual ceremonies attended by close family members and loved ones. The event reflected gratitude, togetherness, and celebration of a relationship that has completed five decades.<br><br>

Photos shared from the celebration captured emotional family moments, rituals, prayers, and joyful memories from the special occasion. Family members gathered together to celebrate the milestone with warmth and happiness.<br><br>

The celebration quickly gained attention among Rakshit Shetty fans after pictures from the family event started circulating online. Many fans extended wishes and congratulatory messages to the actor's parents while appreciating the beautiful family celebration.<br><br>

Rakshit Shetty, one of Kannada cinema's popular actors and filmmakers, is known for keeping his personal life largely private. Because of this, glimpses from the family celebration attracted special attention from admirers and social media users.<br><br>

Golden wedding anniversaries are often celebrated as major family milestones representing love, commitment, and togetherness built over decades. Rakshit Shetty's family celebration has now become a heartwarming moment for fans celebrating alongside the actor and his loved ones.<br><br>

The pictures and family moments from the event continue receiving appreciation online, with many calling it a beautiful celebration of family values and lifelong companionship.`,

  url: "rakshit-shetty-parents-50th-wedding-anniversary-family-celebration",

  image: "rakshit-shetty-family-50th-wedding-anniversary.jpeg",

  category: "viral",

  date: "May 25, 2026"
},

  {
  title: "Kalaburagi Student Death Sparks Discussion On Academic Pressure And Mental Health",

  description: "A heartbreaking incident from Karnataka has triggered conversations around student mental health, academic expectations, and emotional well-being after a young NEET aspirant from Kalaburagi reportedly died by suicide.",

  content: `A tragic incident from Karnataka has drawn widespread attention after a NEET aspirant from Kalaburagi reportedly died by suicide, leaving family members, friends, and social media users deeply shocked.<br><br>

According to reports, the student had performed strongly in academics and had secured high marks in examinations. Family members reportedly stated that there were no visible signs of major distress at home, making the incident even more heartbreaking for those close to her.<br><br>

The incident has once again brought focus to conversations surrounding academic pressure, competitive examinations, emotional well-being, and the silent struggles students may experience internally.<br><br>

Many people online are urging families, educational institutions, and society to encourage open conversations around emotional health and create supportive environments for students facing pressure or stress.<br><br>

Mental health experts often emphasize that emotional struggles may not always be visible externally, making communication, support systems, and timely help extremely important.<br><br>

If someone is struggling emotionally or feeling overwhelmed, reaching out to trusted family members, friends, teachers, or mental health professionals can make a meaningful difference.`,

  url: "kalaburagi-student-death-academic-pressure-mental-health-discussion",

  image: "kalaburagi-neet-student-mental-health-discussion.jpeg",

  category: "viral",

  date: "May 25, 2026"
},

  {
  title: "Twisha Sharma Case: High Court Orders CBI Probe, Second Post-Mortem Examination",

  description: "The Twisha Sharma case has taken a major turn after the High Court ordered a CBI investigation and directed a second post-mortem examination, bringing renewed focus to the high-profile case.",

  content: `The Twisha Sharma case has witnessed a major development after the High Court directed that the investigation be handed over to the Central Bureau of Investigation (CBI) while also ordering a second post-mortem examination.<br><br>

The case has attracted widespread public attention following concerns raised by family members regarding the circumstances surrounding Twisha Sharma's death. Legal proceedings and public discussions surrounding the matter have continued to intensify in recent days.<br><br>

The High Court reportedly directed that a fresh forensic examination be conducted to ensure clarity regarding medical findings connected to the case. A specialized medical team has also been involved as part of the process.<br><br>

The transfer of the investigation to CBI is expected to bring an expanded probe into the matter. Authorities are likely to examine available evidence, medical reports, timelines, and related details during the investigation process.<br><br>

Family members have expressed hope that the latest developments could help bring greater clarity to the case. The matter continues to remain under legal scrutiny as further proceedings move ahead.<br><br>

The Twisha Sharma case has become one of the widely discussed developments nationally, with public attention remaining focused on the outcome of the investigation and judicial process.`,

  url: "twisha-sharma-case-cbi-probe-second-postmortem-high-court-order",

  image: "twisha-sharma-case-cbi-second-postmortem.jpeg",

  category: "viral",

  date: "May 24, 2026"
},

  {
  title: "Aishwarya Rai Bachchan Stuns Cannes 2026 With Elegant Blush Pink Couture Look",

  description: "Aishwarya Rai Bachchan once again captured global attention at Cannes 2026 after making a breathtaking appearance in a blush pink couture outfit, adding another memorable fashion moment to her long Cannes journey.",

  content: `Aishwarya Rai Bachchan has once again become one of the biggest highlights of Cannes Film Festival 2026 after her stunning second red carpet appearance created massive discussion across fashion and entertainment circles.<br><br>

The Bollywood icon appeared in an elegant blush pink couture outfit that immediately attracted global attention. Known for delivering memorable fashion moments at Cannes over the years, Aishwarya once again impressed fans with her graceful presence and signature style.<br><br>

<img src="aishwarya-rai-cannes-2026-blush-pink-couture 1st.jpeg"
style="width:100%;max-width:750px;height:auto;display:block;margin:20px auto;border-radius:10px;"
alt="News Image">

The look featured detailed craftsmanship, elegant styling, and a glamorous red carpet appearance that quickly started trending across social media platforms. Fans and fashion enthusiasts praised the actress for maintaining her iconic Cannes legacy while presenting a fresh and modern style statement.<br><br>

Adding to the special moment, daughter Aaradhya Bachchan also accompanied Aishwarya during the Cannes appearance, further drawing attention from fans and media coverage.<br><br>

<img src="aishwarya-rai-cannes-2026-blush-pink-couture 2nd.jpeg"
style="width:100%;max-width:750px;height:auto;display:block;margin:20px auto;border-radius:10px;"
alt="News Image">

Aishwarya Rai Bachchan, who has represented India at Cannes for several years, continues to remain one of the most recognized global fashion faces from Indian cinema. Her Cannes 2026 appearance has once again strengthened her reputation as one of the festival's most celebrated stars.<br><br>

Social media platforms continue witnessing praise for Aishwarya's latest fashion appearance, with many fans calling it one of her standout Cannes looks in recent years.`,

  url: "aishwarya-rai-bachchan-cannes-2026-blush-pink-couture-look",

  image: "aishwarya-rai-cannes-2026-blush-pink-couture.jpeg",

  category: "trending",

  date: "May 24, 2026"
},

  {
  title: "Shreyas Iyer Wants MI To Beat RR, Punjab Kings Captain Shares Playoff Wish",

  description: "Punjab Kings captain Shreyas Iyer openly shared his thoughts ahead of the Rajasthan Royals vs Mumbai Indians clash, saying his team would be hoping for a Mumbai Indians victory as the IPL playoff race heats up.",

  content: `Punjab Kings captain Shreyas Iyer has sparked discussion among cricket fans after openly expressing support for Mumbai Indians ahead of their important IPL 2026 clash against Rajasthan Royals.<br><br>

Punjab Kings remain involved in the tight playoff race, and upcoming match results could significantly impact qualification scenarios. Speaking after Punjab's recent performance, Shreyas Iyer admitted that his side would prefer Mumbai Indians to secure a victory against Rajasthan Royals.<br><br>

The Punjab captain's statement quickly grabbed fan attention online, with cricket followers discussing how closely teams are now monitoring other fixtures as the tournament enters its final stage.<br><br>

IPL 2026 has witnessed an intense playoff battle, with multiple franchises competing for limited qualification spots. Every match result now carries major importance for teams hoping to secure a place in the knockout rounds.<br><br>

Punjab Kings supporters also reacted strongly across social media platforms after Iyer's comments, highlighting how closely the playoff equation is being followed by players and fans alike.<br><br>

As the league phase approaches its final stretch, all eyes remain on key fixtures that could decide the final playoff picture in IPL 2026.`,

  url: "shreyas-iyer-mi-vs-rr-punjab-kings-playoff-race",

  image: "shreyas-iyer-mi-rr-playoff-statement.jpeg",

  category: "sports",

  date: "May 24, 2026"
},

  {
  title: "Cockroach Janata Party Ban Row: What Intelligence Inputs Reportedly Flagged",

  description: "Cockroach Janata Party (CJP), which recently gained massive social media attention, is now at the center of fresh discussions after reports emerged about intelligence inputs linked to the movement and concerns raised over online activities.",

  content: `Cockroach Janata Party (CJP), a social media-driven movement that rapidly gained online popularity, has entered a new phase of discussion after reports suggested intelligence agencies raised concerns regarding its growing digital reach and activities.<br><br>

The movement, which gained visibility following online discussions around youth issues and public concerns, quickly attracted large attention across social media platforms. Its rapid growth and increasing online engagement turned it into one of the most talked-about topics in recent days.<br><br>

Reports indicate that intelligence-related inputs reportedly highlighted concerns over large-scale online mobilization, possible misuse of sensitive issues, and the role of rapidly expanding digital networks. Discussions have also emerged regarding foreign-linked online accounts allegedly participating in related conversations.<br><br>

Authorities reportedly examined certain aspects linked to online campaigns associated with the movement as part of wider monitoring efforts. Meanwhile, conversations surrounding digital influence, social media activism, and online public mobilization continue to grow.<br><br>

The development has triggered mixed reactions online. While supporters view internet-based campaigns as a form of modern public expression, others believe greater transparency and safeguards are important as large-scale digital movements gain influence.<br><br>

Cockroach Janata Party continues to remain a widely discussed topic across online platforms, with debates continuing around social media influence, youth participation, and the growing role of digital movements in shaping public conversations.`,

  url: "cockroach-janata-party-ban-intelligence-warning-online-discussion",

  image: "cockroach-janata-party-ban-intelligence-warning.jpeg",

  category: "viral",

  date: "May 24, 2026"
},

  {
  title: "Kangana Ranaut Reacts To Viral Mangalsutra Photo, Clears Air On Secret Wedding Rumours",

  description: "Kangana Ranaut recently sparked online discussion after photos of her wearing a mangalsutra went viral on social media. The actress has now reacted to the growing speculation surrounding her personal life.",

  content: `Bollywood actress Kangana Ranaut recently became the center of online discussion after pictures of her wearing a mangalsutra and traditional attire started circulating widely across social media platforms.<br><br>

The viral photos quickly triggered speculation among fans and internet users, with many questioning whether the actress had secretly tied the knot. As discussions gained momentum online, social media platforms saw growing curiosity surrounding Kangana's personal life.<br><br>

However, Kangana Ranaut has now addressed the rumours and clarified that there is no secret marriage. Reports suggest the viral appearance was linked to a professional project, where the actress was seen in a character look related to filming activities.<br><br>

The actress reportedly stated that she would not hide such an important life decision from people and made it clear that online assumptions should not always be treated as facts.<br><br>

Known for frequently making headlines through both films and public statements, Kangana once again found herself trending online as fans continued discussing the viral images and speculation around them.<br><br>

The clarification has now helped put an end to the rumours, with attention shifting back toward Kangana Ranaut's upcoming work and future projects.`,

  url: "kangana-ranaut-reacts-viral-mangalsutra-photo-secret-wedding-rumours",

  image: "kangana-ranaut-mangalsutra-viral.jpeg",

  category: "film",

  date: "May 24, 2026"
},

  {
  title: "Sonam Wangchuk Calls Himself ‘Honorary Cockroach’, Supports CJP And Urges Centre To Hear Youth Voices",

  description: "Environmentalist and education reformer Sonam Wangchuk voiced support for the viral Cockroach Janata Party (CJP) movement, calling himself an ‘honorary cockroach’ while urging authorities to listen to concerns raised by young people.",

  content: `Environmentalist and education reformer Sonam Wangchuk has extended support to the viral online movement linked to the Cockroach Janata Party (CJP), a satirical digital campaign that has gained major traction across social media platforms in recent days.<br><br>

Speaking about the movement, Wangchuk described himself as an “honorary cockroach” while emphasizing that he personally does not qualify as a regular member of the campaign. He added that he is “neither unemployed nor lazy,” but said he connects with the larger message being raised by young people.<br><br>

The Cockroach Janata Party movement has attracted attention online by using satire, humour and social media campaigns to discuss issues such as unemployment, examination concerns and public accountability. The movement gained momentum after recent debates surrounding remarks related to unemployed youth.<br><br>

Wangchuk urged authorities to treat such online campaigns as democratic feedback instead of viewing them as a threat. He said the concerns raised by younger generations deserve attention and dialogue rather than suppression.<br><br>

The activist also highlighted that creative public expression should be seen as part of democratic participation, encouraging policymakers to engage with youth voices and understand growing concerns among younger citizens.<br><br>

As discussions continue across social media, the Cockroach Janata Party campaign remains one of the most talked-about digital movements currently gaining attention online, particularly among younger audiences.`,

  url: "sonam-wangchuk-supports-cjp-honorary-cockroach-youth-voices",

  image: "sonam-wangchuk-cjp-support-youth-voices.jpeg",

  category: "viral",

  date: "May 24, 2026"
},

  {
  title: "Allu Arjun Meets Venkatesh Iyer; RCB Player Gifts Special Jersey To Pushpa Star’s Son",

  description: "Actor Allu Arjun recently met cricketer Venkatesh Iyer in a special interaction that grabbed fans’ attention online. The memorable meeting became even more special after the RCB player gifted a jersey to Allu Arjun’s son.",

  content: `Actor Allu Arjun and cricketer Venkatesh Iyer recently shared a memorable moment that has now become a talking point among sports and cinema fans alike. The interaction between the Pushpa star and the Royal Challengers Bengaluru player quickly attracted attention online after photos and updates from their meeting started circulating across social media platforms.<br><br>

The meeting turned extra special after Venkatesh Iyer gifted a signed Royal Challengers Bengaluru (RCB) jersey to Allu Arjun’s son, Allu Ayaan. The thoughtful gesture immediately won the hearts of fans, especially cricket lovers who appreciated the connection between cinema and sports.<br><br>

Reports suggest that Allu Ayaan is fond of cricket, making the jersey gift a memorable surprise. Fans online reacted positively, with many calling it a wholesome crossover moment between Indian entertainment and cricket worlds.<br><br>

Photos from the interaction quickly gained traction across social media platforms, with fans sharing their excitement and admiration for the sportsmanship and warmth shown during the meeting.<br><br>

Allu Arjun, who enjoys massive popularity across India following the success of the Pushpa franchise, continues to remain one of the biggest stars in Indian cinema. Meanwhile, Venkatesh Iyer remains a key figure in Indian cricket and IPL, earning appreciation from fans for both his performances and personality off the field.<br><br>

The special meeting between the actor and cricketer has now become one of the trending celebrity-cricket moments online, once again showing how sports and entertainment continue to connect audiences across the country.`,

  url: "allu-arjun-meets-venkatesh-iyer-rcb-jersey-gift-allu-ayaan",

  image: "allu-arjun-venkatesh-iyer-rcb-jersey.jpeg",

  category: "sports",

  date: "May 24, 2026"
},

  {
  title: "Aishwarya Rai Turns Heads at Cannes Film Festival With Stunning Appearance",

  description: "Aishwarya Rai once again captured global attention at the Cannes International Film Festival with her elegant appearance, becoming one of the most talked-about celebrities at the prestigious event.",

  content: `Aishwarya Rai drew major attention at the Cannes International Film Festival with her latest appearance, once again proving why she remains one of India's biggest global style icons.<br><br>

The actress impressed fans and fashion enthusiasts with her elegant red carpet presence, with photos and videos quickly going viral across social media platforms.<br><br>

<img src="aishwarya rai cannes 2026.jpeg"
style="width:100%;max-width:750px;height:auto;display:block;margin:20px auto;border-radius:10px;"
alt="News Image">

Known for her long-standing association with Cannes, Aishwarya has represented Indian cinema at the international festival for more than two decades and continues to remain among the most anticipated celebrities every year.<br><br>

Her appearance this year once again sparked discussions online, with fans praising her style, confidence, and global presence at one of the world's biggest film festivals.<br><br>

Aishwarya Rai's Cannes appearance continues to highlight India's growing influence at international entertainment and fashion events, while her red carpet moments remain a major attraction for fans worldwide.`,

  url: "aishwarya-rai-cannes-film-festival-global-attention",

  image: "aishwarya-rai-cannes-film-festival.jpeg",

  category: "trending",

  date: "May 23, 2026"
},

  {
  title: "Record Crowd at Subrahmanya as Over 2,500 Devotees Perform Ashlesha Bali Seva",

  description: "A large number of devotees gathered at Subrahmanya following Ashlesha Nakshatra, with more than 2,500 devotees participating in the Ashlesha Bali seva, creating a record turnout.",

  content: `Subrahmanya witnessed a massive spiritual gathering as thousands of devotees arrived to participate in Ashlesha Bali seva on the occasion of Ashlesha Nakshatra.<br><br>

According to reports, more than 2,500 devotees took part in the ritual service, marking one of the biggest turnouts witnessed during the occasion.<br><br>

Ashlesha Bali is a significant ritual performed by devotees seeking blessings and spiritual well-being, especially at Subrahmanya, which is known for such religious practices and attracts devotees from different regions.<br><br>

Temple premises witnessed heavy crowds from early morning, with devotees patiently waiting to participate in the seva activities.<br><br>

The large participation once again highlighted the deep faith and spiritual importance attached to Ashlesha Nakshatra rituals among devotees visiting Subrahmanya.`,

  url: "subrahmanya-record-devotees-ashlesha-bali-seva",

  image: "subrahmanya-ashlesha-bali-record-devotees.jpeg",

  category: "viral",

  date: "May 23, 2026"
},

  {
  title: "Virat Kohli-Travis Head Handshake Row Goes Viral After RCB vs SRH Clash",

  description: "A heated moment between Virat Kohli and Travis Head during the RCB vs SRH IPL 2026 match has become a major talking point online after a viral post-match handshake incident grabbed fans’ attention.",

  content: `A tense on-field exchange between Virat Kohli and Travis Head during the IPL 2026 clash between Royal Challengers Bengaluru (RCB) and Sunrisers Hyderabad (SRH) has sparked major discussion across social media.<br><br>

The incident reportedly began during RCB’s chase when Kohli and Head were involved in a verbal exchange on the field. The intense atmosphere of the match quickly turned into one of the biggest talking points among cricket fans.<br><br>

According to reports, emotions continued after the match as a handshake moment between Kohli and Head attracted widespread attention online. Videos and clips from the incident rapidly went viral, leading fans to debate what exactly happened between the two star players.<br><br>

Several reports suggested that Travis Head made comments during the heated on-field exchange, which reportedly added to the tension between both cricketers. However, no official statement has been released by either player regarding the viral moment.<br><br>

The RCB vs SRH encounter itself remained a high-intensity contest, but the Kohli-Head interaction eventually became one of the most discussed moments from the match.<br><br>

As discussions continue online, cricket fans remain divided over the incident, while videos related to the handshake row continue gaining attention across social media platforms.`,

  url: "virat-kohli-travis-head-handshake-row-ipl-2026-viral",

  image: "kohli-travis-head-handshake-row.jpeg",

  category: "sports",

  date: "May 23, 2026"
},

  {
  title: "Mouni Roy-Disha Patani Viral Relationship Rumours Spark Online Buzz; Here’s What Reports Say",

  description: "Social media speculation surrounding actresses Mouni Roy and Disha Patani has gained attention online after a viral post triggered relationship rumours, leading to widespread discussion among fans.",

  content: `Actresses Mouni Roy and Disha Patani have recently found themselves at the centre of social media discussions after a viral post sparked rumours about their relationship status.<br><br>

The speculation reportedly began after screenshots and online posts started circulating across social media platforms, leading fans to question whether Mouni Roy had indirectly confirmed something personal involving Disha Patani.<br><br>

However, reports suggest that the viral claims are not based on any official confirmation from either actress. Multiple discussions online appear to have originated from fan interpretations and social media speculation rather than verified statements.<br><br>

Mouni Roy and Disha Patani are publicly known to share a close friendship and have frequently appeared together during vacations, celebrations, and social gatherings, which has often attracted fan attention.<br><br>

The viral discussions also surfaced during ongoing public attention surrounding Mouni Roy’s personal life, adding further curiosity among social media users.<br><br>

As of now, neither Mouni Roy nor Disha Patani has officially confirmed any relationship-related rumours. The viral trend currently remains part of social media speculation, while fans continue sharing reactions online.`,

  url: "mouni-roy-disha-patani-viral-relationship-rumours-truth",

  image: "mouni-roy-disha-patani-viral-rumours.jpeg",

  category: "film",

  date: "May 23, 2026"
},

  {
  title: "HC Directs State To Enforce Injunction Orders In Favour Of Veerendra Heggade Against Media Outlets",

  description: "The High Court has reportedly directed authorities to enforce injunction orders issued in favour of Veerendra Heggade in a case involving certain media outlets, drawing attention to legal responsibilities and compliance with court directives.",

  content: `A High Court directive involving Veerendra Heggade and certain media outlets has drawn public attention following developments related to enforcement of injunction orders.<br><br>

According to reports, the court directed the State to ensure implementation and enforcement of previously issued injunction orders connected to the matter. The development has sparked discussions surrounding legal compliance and responsibilities involving media-related cases.<br><br>

The case reportedly concerns issues linked to publication and dissemination of certain content, with legal proceedings focusing on court-issued protections and adherence to judicial directions.<br><br>

Court intervention in matters involving media reporting and legal restrictions often highlights the balance between freedom of expression, legal safeguards, and compliance with judicial orders.<br><br>

The latest development has now become a topic of discussion across legal and public circles, with attention turning towards how authorities implement court directives in sensitive matters involving public figures and media platforms.`,

  url: "hc-directs-state-enforce-injunction-orders-veerendra-heggade-media-outlets",

  image: "veerendra-heggade-hc-media-case.jpeg",

  category: "viral",

  date: "May 23, 2026"
},

  {
  title: "Family Allegedly Hired Contract Killer To Murder Son After Years Of Domestic Conflict: Police",

  description: "A shocking case from Uttar Pradesh has drawn nationwide attention after police alleged that a family hired a contract killer to murder their own son following years of tension, alcohol-related disputes, and domestic conflict.",

  content: `A disturbing case from Uttar Pradesh has come to light after police alleged that a family planned the murder of their own son following years of domestic conflict and repeated disputes inside the home.<br><br>

According to police officials, 32-year-old Dushyant Kumar allegedly struggled with alcohol addiction and was frequently involved in arguments at home. Investigators claimed repeated tensions and disturbances had created a stressful situation for family members over a long period.<br><br>

Police alleged that Dushyant’s parents and younger brother planned the murder and reportedly struck a deal worth ₹5 lakh with a local contract killer. Officials also claimed an advance payment was arranged during the alleged planning process.<br><br>

The victim’s body was later recovered from a dry canal area near Shyampur village. During the investigation, police tracked suspicious activity and questioned multiple people, eventually uncovering what officials described as a planned conspiracy.<br><br>

Investigators suspect a sharp weapon may have been used in the crime. Authorities stated that further investigation remains underway to identify all details connected to the case.<br><br>

Police have arrested some accused individuals while efforts continue to trace others linked to the case. The incident has sparked public discussions over family disputes, addiction-related struggles, and the serious consequences of unresolved domestic conflicts.`,

  url: "uttar-pradesh-family-contract-killer-son-domestic-conflict-case",

  image: "uttar-pradesh-family-contract-killer-case.jpeg",

  category: "viral",

  date: "May 23, 2026"
},

  {
  title: "Cockroach Janata Party Sparks Political Debate Online Amid BJP Unfollow Calls",

  description: "Cockroach Janata Party (CJP), a viral social media movement that recently gained attention online, is now witnessing political discussions after social media users raised questions about its messaging and campaigns.",

  content: `Cockroach Janata Party (CJP), which recently gained major attention across social media platforms, has now become part of a larger political discussion online.<br><br>

The movement initially attracted attention through content focused on public issues and youth-related conversations, helping it gain visibility among internet users and social media audiences.<br><br>

However, discussions intensified after online users pointed to social media campaigns encouraging people to unfollow BJP-related accounts. This triggered debates among users regarding whether the movement was remaining issue-focused or moving towards a political direction.<br><br>

Several social media users have also raised questions regarding reported political connections linked to individuals associated with the movement. These discussions have further increased online attention surrounding CJP and its growing digital presence.<br><br>

Online discussions have also included screenshots and claims circulating on social media regarding founder Abhijeet Dipke and alleged past controversies. However, multiple claims currently remain part of public online discussions, and official verification remains important before drawing conclusions.<br><br>

Supporters argue that digital movements have the right to express opinions and encourage public participation, while critics believe social media campaigns should maintain neutrality and transparency.<br><br>

The development has now turned Cockroach Janata Party into one of the widely discussed topics online, with conversations continuing across social media platforms regarding digital influence, public opinion, and political messaging.`,

  url: "cockroach-janata-party-political-debate-online-bjp-unfollow-campaign",

  image: "cockroach-janata-party-online-political-debate.jpeg",

  category: "viral",

  date: "May 23, 2026"
},

  {
  title: "Film Lovers, Don’t Miss This Sunday: 10 Movies In 10 Hours With Free Food And Snacks",

  description: "Cinema enthusiasts are in for a special treat this weekend as a unique film festival event promises 10 films in 10 hours along with complimentary food and refreshments for attendees.",

  content: `Movie lovers are set for a celebration this Sunday as a special film screening event promises an exciting experience filled with cinema, entertainment, and food.<br><br>

The event is expected to offer audiences an opportunity to watch 10 films over a span of 10 hours, creating a festival-like atmosphere for cinema enthusiasts looking to spend an entire day enjoying movies.<br><br>

Apart from the film marathon, organizers are also expected to provide free meals and snacks for attendees, making the experience even more appealing for people planning a weekend outing centered around films and entertainment.<br><br>

Film festivals have become increasingly popular among audiences who enjoy exploring diverse storytelling styles, independent cinema, and community-driven movie experiences beyond regular theatrical releases.<br><br>

The upcoming event has already generated attention among cinema fans, with discussions growing online about the combination of back-to-back movie screenings and complimentary food arrangements.<br><br>

For movie enthusiasts looking to enjoy a unique cinema experience, the special Sunday event promises entertainment, films, and festival energy all packed into one full-day celebration of cinema.`,

  url: "film-festival-10-movies-10-hours-free-food-sunday-event",

  image: "film-festival-10-movies-free-food.jpeg",

  category: "viral",

  date: "May 22, 2026"
},

  {
  title: "Ram Charan Praises Janhvi Kapoor’s Dedication At ‘Peddi’ Trailer Launch",

  description: "Ram Charan appreciated Janhvi Kapoor’s hard work and dedication during the ‘Peddi’ trailer launch event, saying she performed ‘100 times better’ than him in a recent song shoot.",

  content: `The trailer launch event of 'Peddi' created excitement among cinema fans as lead actor Ram Charan openly praised co-star Janhvi Kapoor for her dedication and commitment during the film's production.<br><br>

Speaking during the event, Ram Charan highlighted Janhvi Kapoor’s preparation process and work ethic on set. He revealed that during the filming of a recent song, Janhvi quietly prepared and practiced extensively, impressing everyone with her performance.<br><br>

Ram Charan reportedly said Janhvi performed “100 times better” than him in the final song they filmed together, appreciating her discipline and dedication towards her role. He also praised her ability to prepare silently and deliver strongly on screen.<br><br>

The actor also spoke about the emotional connection between their families, mentioning how his father Chiranjeevi and Janhvi Kapoor’s mother Sridevi shared a long professional association in cinema.<br><br>

Directed by Buchi Babu Sana, ‘Peddi’ stars Ram Charan and Janhvi Kapoor in lead roles and has generated major anticipation ahead of its theatrical release. The film’s trailer launch event also featured members of the production team and industry personalities.<br><br>

The event has now become a major talking point online, with fans appreciating the chemistry between the lead actors and Ram Charan’s heartfelt praise for Janhvi Kapoor’s dedication and effort.`,

  url: "ram-charan-praises-janhvi-kapoor-dedication-peddi-trailer-launch",

  image: "ram-charan-janhvi-kapoor-peddi-trailer-launch.jpeg",

  category: "film",

  date: "May 22, 2026"
},

  {
  title: "Cockroach Janta Party’s X Account Blocked In India: Who Is Founder Abhijeet Dipke?",

  description: "The viral satirical movement Cockroach Janta Party has landed in controversy after its X account was withheld in India. The development has also put founder Abhijeet Dipke into the national spotlight.",

  content: `The X account of the rapidly growing satirical political movement 'Cockroach Janta Party' (CJP) has reportedly been withheld in India, triggering widespread discussions across social media platforms.<br><br>

Users attempting to access the account inside India reportedly received an “Account Withheld” notice. Founder Abhijeet Dipke confirmed the development and stated that the restriction came following a legal demand. Reports suggest the account later returned through an alternate handle.<br><br>

Abhijeet Dipke, the founder behind Cockroach Janta Party, is a political communications strategist originally from Pune with experience in journalism, public relations, and political communication. Reports also suggest he previously worked with social media operations connected to political campaigns.<br><br>

The satirical movement gained major online traction after controversy surrounding remarks linked to unemployed youth, eventually turning into a wider internet-driven campaign discussing issues such as unemployment, rising costs, education concerns, and youth-related topics. The movement witnessed explosive growth across social media platforms within days.<br><br>

Despite the X account restriction, Cockroach Janta Party continues to attract online attention, with supporters actively discussing censorship concerns, satire, and digital freedom. The development has now sparked larger conversations surrounding social media regulation and online political expression in India.<br><br>

Meanwhile, Abhijeet Dipke has continued sharing updates online, with the issue becoming one of the most discussed digital stories in recent days.`,

  url: "cockroach-janta-party-x-account-blocked-india-abhijeet-dipke",

  image: "cacroach.jpeg",

  category: "trending",

  date: "May 22, 2026"
},

  {
  title: "Suraj Nambiar Breaks Silence On Divorce Rumours With Mouni Roy, Says ‘No Alimony, No Third Person’",

  description: "Businessman Suraj Nambiar has addressed growing speculation surrounding his separation from actress Mouni Roy, denying rumours about alimony, disputes, and third-party involvement.",

  content: `Businessman Suraj Nambiar has publicly reacted to ongoing discussions surrounding his separation from actress Mouni Roy, putting an end to multiple rumours circulating on social media.<br><br>

In a strong statement shared on social media, Suraj clarified that there is “no alimony,” “no disputes,” and “no third person involved” in their separation. He reportedly described several online claims as misleading and urged people to avoid spreading unverified narratives.<br><br>

Suraj also stated that both he and Mouni Roy mutually decided to move forward separately while maintaining respect and consideration for each other. He further expressed disappointment over media reports and speculation involving people unrelated to the situation.<br><br>

Mouni Roy and Suraj Nambiar recently announced their separation after four years of marriage, requesting privacy as they navigate personal matters away from public attention.<br><br>

The clarification has now sparked conversations online, with social media users discussing celebrity privacy and responsible reporting practices during sensitive personal situations.<br><br>

Meanwhile, Mouni Roy continues focusing on professional commitments, including recent public appearances and upcoming projects.`,

  url: "suraj-nambiar-divorce-rumours-mouni-roy",

  image: "divorse mouni roy.jpeg",

  category: "film",

  date: "May 22, 2026"
},

  {
  title: "Sara Tendulkar Calls Out Body-Shaming Post, Says ‘This Is Not Journalism’",

  description: "Sara Tendulkar has reacted strongly against an alleged body-shaming social media post, criticizing the content and calling it unacceptable while sparking discussions online about responsible journalism and online behavior.",

  content: `Sara Tendulkar has grabbed social media attention after reportedly reacting to an alleged body-shaming post shared by a paparazzi-related social media account.<br><br>

According to viral screenshots circulating online, Sara Tendulkar publicly expressed disappointment over the content and criticized the nature of such posts, reportedly stating that “this is not journalism.”<br><br>

The incident quickly triggered discussions across social media platforms, with users debating online responsibility, body-shaming culture, and ethical reporting standards in digital entertainment coverage.<br><br>

Many social media users supported Sara Tendulkar’s reaction, calling for greater sensitivity while covering celebrities and public personalities online.<br><br>

Body-shaming and online trolling continue to remain major concerns across digital platforms, with several public figures previously speaking about the emotional impact of negative commentary and social media criticism.<br><br>

The incident has now become a talking point among entertainment followers and internet users, with conversations growing around respectful reporting practices and responsible online engagement.<br><br>

Sara Tendulkar’s reaction has once again highlighted wider concerns surrounding social media accountability and how public personalities are discussed across digital spaces.`,

  url:"sara-tendulkar-body-shaming-response",

  image: "sara tendulkar.jpeg",

  category: "viral",

  date: "May 22, 2026"
},

  {
  title: "R Madhavan Reveals Why He Moved To Dubai For Son Vedaant’s Swimming Career",

  description: "Actor R Madhavan opened up about relocating to Dubai with his family to support son Vedaant Madhavan’s professional swimming journey, while also sharing concerns about handling fame at a young age.",

  content: `Actor R Madhavan recently opened up about an important decision his family made to support his son Vedaant Madhavan’s swimming ambitions. The actor revealed that they temporarily relocated to Dubai to ensure Vedaant could continue receiving proper training during a crucial phase of his sporting career.<br><br>

Madhavan shared that during the Covid-19 period, swimming pools across India remained closed, creating challenges for athletes preparing for international competitions. To avoid interruptions in Vedaant’s training, the family shifted to Dubai, where training facilities had resumed operations under strict supervision.<br><br>

The actor also spoke about concerns surrounding early recognition and public attention. Madhavan reportedly expressed that while success and appreciation are encouraging, fame at a young age can sometimes become temporary, emphasizing the importance of staying grounded and continuing hard work.<br><br>

Vedaant Madhavan has steadily built his own identity in competitive swimming, earning multiple medals and representing India in international events. His achievements have frequently made headlines, while Madhavan has consistently supported his son’s sporting journey.<br><br>

The actor’s comments have once again highlighted the sacrifices families often make to support young athletes pursuing professional careers, with many fans appreciating Madhavan’s commitment as a parent.`,

  url:"r-madhavan-dubai-son-vedaant-swimming",

  image: "madhavan.jpeg",

  category: "film",

  date: "May 22, 2026"
},

  {
  title: "How Parle’s Re 1 Melody Toffee Became A Symbol Of Modi-Meloni Diplomacy",

  description: "Parle’s iconic Re 1 Melody toffee has unexpectedly become a viral diplomatic symbol after Prime Minister Narendra Modi gifted it to Italian Prime Minister Giorgia Meloni, turning an everyday Indian candy into a global talking point.",

  content: `A small caramel-chocolate candy that has been part of Indian childhood memories for decades has now found an unexpected place in international diplomacy. Parle’s iconic Melody toffee recently grabbed global attention after Prime Minister Narendra Modi gifted packets of the popular candy to Italian Prime Minister Giorgia Meloni during a meeting in Rome.<br><br>

The gesture instantly caught social media attention, largely because of the internet-famous “Melodi” trend — a nickname created by combining Modi and Meloni’s names. The playful online trend first gained popularity during international events where the two leaders appeared together publicly.<br><br>

Soon after the gift exchange video surfaced online, social media users linked the iconic Melody candy with the already viral “Melodi” meme, making the toffee an unexpected diplomatic symbol.<br><br>

Melody, introduced by Parle Products in 1983, has remained one of India’s most recognizable affordable confectionery brands for decades. Known for its caramel outer layer and chocolate-filled center, the candy became a nostalgic part of Indian snack culture and remains popular across generations.<br><br>

What made the moment stand out was the symbolism behind it. Rather than presenting a luxury item, the gift highlighted an everyday Indian brand familiar to millions, showcasing India’s cultural identity through a simple and relatable product.<br><br>

The viral moment also sparked discussions about India’s growing soft power influence, where homegrown products, digital culture, and internet trends increasingly become part of global conversations.<br><br>

From neighborhood stores to international diplomacy, Melody’s journey from a Re 1 candy to a viral diplomatic symbol has now become one of the internet’s most talked-about stories.`,

  url: "Melody-Toffee-Became-A-Symbol-Of-Modi-Meloni-Diplomacy",

  image: "modi.jpeg",

  category: "trending",

  date: "May 22, 2026"
},

  {
  title: "GOAT Director Venkat Prabhu Gifts Iconic Movie Number Plate To CM Vijay",

  description: "Director Venkat Prabhu has gifted the iconic 'TN07 CM 2026' number plate from GOAT to Tamil Nadu Chief Minister Vijay, bringing back memories from the blockbuster film and creating buzz among fans online.",

  content: `Director Venkat Prabhu recently met Tamil Nadu Chief Minister Vijay and presented him with the iconic 'TN07 CM 2026' number plate featured in the blockbuster film GOAT (The Greatest Of All Time). The special gift has now become a major talking point among fans and social media users.<br><br>

The number plate gained popularity after appearing on the vehicle driven by Vijay’s character in GOAT. At the time of the film’s release, fans noticed the unique registration number, but it has now gained even more attention due to Vijay’s political journey.<br><br>

Venkat Prabhu also shared pictures from the meeting, making the moment even more special for fans. The filmmaker reportedly described the occasion as a memorable milestone while sharing his excitement online.<br><br>

The symbolic number plate has sparked fresh discussions among fans, with many revisiting scenes from GOAT and connecting them to Vijay’s public and political journey.<br><br>

Social media platforms were flooded with reactions soon after images from the meeting surfaced online, with supporters calling the gesture emotional and meaningful.<br><br>

GOAT remains one of Vijay’s widely discussed films, and this latest moment has once again brought the film back into conversations among cinema followers and fans.`,

  url: "#",

  image: "goat.jpeg",

  category: "film",

  date: "May 20, 2026"
},

  {
  title: "Kannada Actress Disha Madan Shines At Cannes In A Gown Made From 80-Year-Old Vintage Sarees",

  description: "Kannada actress and digital creator Disha Madan grabbed attention at Cannes with a unique outfit created using two 80-year-old vintage silk sarees, celebrating Indian heritage and sustainable fashion.",

  content: `Kannada actress and digital creator Disha Madan has impressed audiences with her stunning appearance at the Cannes Film Festival 2026, where her outfit became a major talking point online.<br><br>

Disha Madan chose a fashion statement that went beyond glamour, highlighting Indian craftsmanship, heritage, and sustainability on an international platform.<br><br>

Her special gown was reportedly designed using two 80-year-old vintage silk sarees, giving traditional Indian textiles a modern and global presentation. The outfit was designed by Bengaluru-based designer Niharika Vivek.<br><br>

The gown featured a stylish silhouette blending contemporary fashion with traditional Indian artistry. Reports suggest that skilled women artisans spent nearly 2,500 hours creating the detailed design.<br><br>

The outfit was also inspired by South Indian temple architecture and traditional embroidery influences, adding cultural depth to the overall look.<br><br>

Disha completed her appearance with elegant accessories, while social media users praised her effort to showcase Indian heritage through sustainable fashion at one of the world’s biggest film events.<br><br>

Her Cannes appearance has now gained widespread attention online, with many appreciating the combination of vintage craftsmanship and modern fashion showcased on a global stage.`,

  url: "#",

  image: "disha madan.jpeg",

  category: "trending",
  
  date: "May 20, 2026"
},

  {
  title: "Mouni Roy Arrives At Cannes 2026 Amid Personal Life Buzz, Focus Shifts To ‘Bombay Stories’",

   description: "Actress Mouni Roy has reached Cannes 2026 for her upcoming project ‘Bombay Stories’, with her latest appearance drawing attention online amid discussions surrounding her personal life.",

  content: `Actress Mouni Roy has arrived at the Cannes Film Festival 2026, making headlines with her latest appearance at the global event held on the French Riviera.<br><br>

The actress recently grabbed public attention after reports surrounding her personal life surfaced online. Amid ongoing discussions, Mouni has now shifted focus towards her professional commitments and upcoming film project ‘Bombay Stories’.<br><br>

Photos and videos from Cannes quickly began circulating online, where Mouni Roy was seen in a stylish black outfit paired with a bold fashion statement, attracting attention from entertainment followers and social media users.<br><br>

Her appearance at Cannes has triggered discussions among fans, with many praising her confidence and dedication towards work despite personal challenges being discussed publicly.<br><br>

Social media users have been actively sharing opinions regarding the actress balancing professional commitments while remaining in the spotlight during major international events.<br><br>

Mouni Roy continues to remain one of the prominent names in the entertainment industry, regularly making headlines for both her projects and public appearances.<br><br>

Meanwhile, fans are now waiting for further updates regarding ‘Bombay Stories’ and Mouni Roy’s upcoming work in cinema.`,

  url: "#",

  image: "mouny roy cannes.jpeg",

  category: "film",
  date: "May 20, 2026"
  },

  {
  title: "Urvashi Rautela’s Cannes 2026 Saree Look Sparks Comparison With Gigi Hadid’s Iconic NMACC Outfit",

  description: "Actress Urvashi Rautela has become the center of online discussions after netizens compared her Cannes 2026 ivory-and-gold saree appearance with Gigi Hadid’s popular NMACC 2023 look.",

  content: `Bollywood actress Urvashi Rautela has sparked major fashion discussions online following her appearance at the Cannes Film Festival 2026.<br><br>

The actress walked the red carpet wearing an ivory-and-gold saree paired with a heavily embellished golden blouse, instantly grabbing attention across social media platforms and entertainment pages.<br><br>

Soon after photos from the event surfaced online, several users began comparing Urvashi Rautela’s outfit with supermodel Gigi Hadid’s widely discussed 2023 NMACC look, which featured a similar ivory saree and ornate golden detailing.<br><br>

Fashion enthusiasts and netizens pointed out the noticeable similarities between the two looks, leading to fresh online debates regarding celebrity fashion inspiration and styling choices.<br><br>

The comparison quickly went viral across entertainment platforms, with fans sharing side-by-side images of both appearances and discussing the resemblance in styling, colour palette, and overall presentation.<br><br>

Despite the online buzz, Urvashi Rautela has not publicly responded to the comparisons or controversy surrounding her Cannes appearance.<br><br>

Meanwhile, the actress continues to remain active internationally through fashion events, film promotions, and public appearances, frequently making headlines for her glamorous red-carpet looks.`,

  url: "#",

  image: "gigi hadid.jpeg",

  category: "trending",
  date: "May 20, 2026"
},

  {
  title: "Sreeleela’s Mother Responds To Dating Rumours With Cricketer Tilak Varma",

  description: "Actress Sreeleela’s mother, Dr Swarnalatha, has reportedly dismissed ongoing dating rumours linking the actress with cricketer Tilak Varma, stating that there is absolutely no truth to the speculation.",

  content: `Dating rumours surrounding actress Sreeleela and Indian cricketer Tilak Varma have been circulating widely on social media platforms for the past few weeks.<br><br>

Although neither Sreeleela nor Tilak Varma publicly reacted to the rumours, the actress’s mother, Dr Swarnalatha, has now reportedly addressed the ongoing speculation and denied the claims completely.<br><br>

According to reports, Dr Swarnalatha stated that there is “absolutely no truth” behind the dating rumours currently being discussed online involving Sreeleela and the young cricketer.<br><br>

She further mentioned that Sreeleela is presently focused on her acting career and upcoming film projects while also preparing for her NEET-PG examination.<br><br>

The clarification from Sreelelea’s family has now become a major talking point among fans and entertainment followers online, with many users reacting to the statement across social media platforms.<br><br>

Sreeleela continues to remain one of the most popular young actresses in South Indian cinema, while Tilak Varma has also gained strong attention among cricket fans with his recent performances.<br><br>

Despite the rumours trending online, there has been no official confirmation or public statement from either Sreeleela or Tilak Varma regarding any relationship rumours.`,

  url: "#",

  image: "shreleela.jpeg",
  category: "film",
  date: "May 19, 2026"
},

  {
  title: "Thalapathy Vijay’s Former Manager Makes Shocking Claims About Keerthy Suresh",

  description: "Actor Vijay’s former manager has sparked controversy after making shocking comments involving Keerthy Suresh and Vijay’s personal life, creating massive discussions online.",

  content: `Tamil superstar Thalapathy Vijay has once again become the center of social media discussion after his former manager reportedly made controversial remarks involving actress Keerthy Suresh.<br><br>

According to viral reports and online discussions, Vijay’s former manager questioned why the actor would leave his wife and children during festival occasions like Pongal, while also making indirect comments linked to actress Keerthy Suresh.<br><br>

The statements quickly went viral across entertainment pages and fan communities, with many users debating whether the comments were aimed at ongoing rumours that have circulated online for years.<br><br>

Fans of Vijay strongly reacted to the remarks, with several people criticizing the former manager for bringing personal matters into public discussion. Others called the comments unnecessary and disrespectful toward both Vijay and Keerthy Suresh.<br><br>

Neither Vijay nor Keerthy Suresh has officially responded to the latest viral controversy. Despite the silence from both celebrities, social media platforms continue to witness heated reactions and discussions surrounding the issue.<br><br>

Thalapathy Vijay remains one of the biggest stars in South Indian cinema, while Keerthy Suresh continues to enjoy huge popularity across Tamil, Telugu, and Malayalam film industries.<br><br>

As the controversy spreads online, fans are waiting to see whether either side will address the viral comments publicly or choose to ignore the speculation entirely.`,

  url: "#",

  image: "keerthi.jpeg",

  category: "film",
  date: "May 19, 2026"
},

  {
  title: "Prashanth Sambargi Reacts To Rishab Shetty And Darshan’s Possible Political Entry",

  description: "Social activist and Bigg Boss contestant Prashanth Sambargi has shared his views on the possibility of actors Rishab Shetty and Darshan entering politics, creating fresh discussions online.",

  content: `Social activist and former Bigg Boss contestant Prashanth Sambargi has reacted to the ongoing discussions surrounding Kannada actors Rishab Shetty and Darshan Thoogudeepa possibly entering politics in the future.<br><br>

During a recent interaction, Prashanth Sambargi reportedly shared his opinion about film stars entering political life and specifically mentioned actors Rishab Shetty and Darshan, whose names are often discussed by fans in political conversations online.<br><br>

According to reports, Sambargi stated that celebrities already enjoy massive public support and influence, which naturally creates curiosity whenever political entry rumours begin circulating around popular stars.<br><br>

The comments quickly grabbed attention across Kannada entertainment and political discussion pages, with social media users debating whether actors should remain focused on cinema or actively participate in politics.<br><br>

Rishab Shetty, who gained nationwide popularity after the success of ‘Kantara’, continues to enjoy strong support among Kannada audiences. Meanwhile, Darshan also remains one of the biggest mass stars in Karnataka with a huge fan following.<br><br>

Although there has been no official confirmation regarding political plans from either actor, discussions involving celebrity political entry often become major talking points among fans and media platforms.<br><br>

Prashanth Sambargi’s latest comments have now added fresh attention to the topic, with fans actively sharing opinions and reactions online regarding the future of Kannada film stars in politics.`,

  url: "#",

  image: "rishab.jpeg",

  category: "film",
  date: "May 19, 2026"
},

  {
  title: "Bigg Boss Fame Shehnaaz Gill Sparks Dating Rumours With RCB Cricketer Devdutt Padikkal",

  description: "Rumours linking Bigg Boss contestant Shehnaaz Gill with Royal Challengers Bengaluru cricketer Devdutt Padikkal have gone viral after fans noticed reactions and discussions during a recent IPL match.",

  content: `Bigg Boss fame Shehnaaz Gill has once again become the center of online discussion after fresh dating rumours linked her with Royal Challengers Bengaluru (RCB) cricketer Devdutt Padikkal.<br><br>

The rumours started spreading across social media platforms after fans noticed conversations and reactions connected to a recent IPL match involving RCB. Several fan pages and entertainment accounts began discussing the possibility of a relationship between the actress and the Bengaluru-based cricketer.<br><br>

According to viral discussions online, Shehnaaz Gill’s name started trending alongside Devdutt Padikkal during the match day, creating huge curiosity among both cricket and entertainment fans.<br><br>

While some social media users claimed there were subtle hints pointing towards a possible connection, others called it pure fan speculation with no official confirmation from either side.<br><br>

Neither Shehnaaz Gill nor Devdutt Padikkal has publicly reacted to the dating rumours so far. Despite this, the topic continues trending widely across Instagram, X, and fan communities.<br><br>

Shehnaaz Gill remains one of the most popular celebrities to emerge from Bigg Boss, while Devdutt Padikkal continues to enjoy strong fan support in the IPL and Indian cricket circles.<br><br>

As speculation continues online, fans are eagerly waiting to see whether the viral rumours are true or simply another social media buzz surrounding celebrities and cricketers.`,

  url: "#",

  image: "devdatt padikal.jpeg",

  category: "trending",
  date: "May 18, 2026"

},

  {
  title: "Actor Ravi Mohan Breaks Down During Emotional Press Meet Amid Divorce Controversy",

  description: "Tamil actor Ravi Mohan made shocking emotional statements during a recent press meet, opening up about his troubled marriage, divorce issues, cyberbullying, and mental health struggles.",

  content: `Tamil actor Ravi Mohan has become the center of massive discussion online after an emotional press meet where he openly spoke about his ongoing divorce controversy and personal struggles.<br><br>

During the emotional interaction with media reporters, Ravi Mohan reportedly revealed that he has been going through a painful phase in his personal life for a long time. The actor claimed that his marriage had become mentally exhausting and said he had been silently suffering for years.<br><br>

Several viral clips from the press meet spread rapidly across social media platforms after the actor made shocking allegations regarding emotional pressure, cyberbullying, and family issues connected to his divorce situation.<br><br>

In one of the most emotional moments from the press conference, Ravi Mohan reportedly stated that he feels isolated from his children and emotionally broken due to the ongoing situation. He also claimed that online trolling and organized PR attacks were affecting his mental health severely.<br><br>

The actor further shocked fans after revealing that he had even harmed himself during the difficult period and admitted he was struggling mentally while trying to stay strong publicly.<br><br>

Another major statement that grabbed public attention was Ravi Mohan’s announcement that he would stay away from acting and films until his divorce and personal issues are legally resolved.<br><br>

Following the viral videos, social media platforms were flooded with reactions from fans and celebrities. While some people expressed sympathy and support for the actor, others questioned the seriousness of the allegations and demanded privacy for everyone involved.<br><br>

The emotional press meet has now become one of the most discussed entertainment controversies online, with hashtags related to Ravi Mohan trending across Instagram, X, YouTube, and entertainment pages.<br><br>

Despite the controversy, many supporters have urged people not to spread hate online and instead focus on mental health awareness and respectful discussion surrounding personal family matters.`,

  url: "#",

  image: "jayam ravi.jpeg",

  category: "film",
  date: "May 18, 2026"
},

  {
  title: "Actress Urvashi Rautela Stuns Cannes In Rs 1300 Crore Luxury Look",

  description: "Actress Urvashi Rautela grabbed massive attention at the Cannes Film Festival after reports claimed her luxury outfit, jewellery, and accessories together were worth nearly Rs 1300 crore.",

  content: `The prestigious Cannes Film Festival once again became the center of global fashion discussions as celebrities from around the world appeared in glamorous and luxurious outfits. This time, Indian actress Urvashi Rautela grabbed huge attention with her extravagant red carpet appearance.<br><br>

Urvashi Rautela, who also acted alongside Darshan in the Kannada film ‘Mr. Airavata’, reportedly wore a luxury Cannes look worth nearly Rs 1300 crore, according to several entertainment reports circulating online.<br><br>

Reports suggest that the actress wore a specially designed gown created by famous designer Michael Cinco. Inspired by Mexican artistic themes, the outfit featured an extremely grand and royal appearance, with reports claiming the gown itself was worth several crores.<br><br>

Along with the designer outfit, Urvashi also wore rare diamond jewellery, luxury accessories, and a crystal-styled clutch that added even more attention to her overall appearance on the red carpet.<br><br>

Photos and videos of Urvashi Rautela from the Cannes Film Festival quickly went viral across social media platforms. While many fans praised her glamorous international appearance and fashion sense, some users also reacted with surprise over the reported price of the entire look.<br><br>

Every year, Indian celebrities attending Cannes receive massive global attention for their fashion choices and red carpet moments. This year, Urvashi Rautela’s luxury appearance has become one of the most talked-about celebrity fashion moments from the festival.<br><br>

The actress continues to trend online as discussions around her extravagant Cannes outfit and jewellery remain viral across entertainment and fashion platforms.`,

  url: "urvashi-rautela-rs-1300-crore-cannes-look",

  image: "urvashi.jpeg",

  category: "film",
  date: "May 18, 2026"
},

  {
  title: "Hansika Motwani Breaks Silence On Divorce From Sohael Khaturiya After Months Of Silence",

  description: "Actress Hansika Motwani has finally reacted to her divorce from Sohael Khaturiya. The actress admitted the phase was emotionally difficult but revealed that she has moved forward stronger and without regrets.",

  content: `Popular actress Hansika Motwani has finally opened up about her divorce from businessman Sohael Khaturiya after remaining silent for several months.<br><br>

The actress recently spoke about the emotional phase and revealed that the journey was personally difficult for her. However, Hansika stated that she has now come out of the situation stronger and without any regrets.<br><br>

Without revealing detailed reasons behind the separation, Hansika shared that some matters are best kept private between two individuals. The actress chose to maintain dignity and privacy while speaking about the sensitive issue.<br><br>

Hansika also thanked her family members for supporting her throughout the difficult period and standing beside her during challenging times. Her latest statement has now gone viral across entertainment pages and social media platforms.<br><br>

Fans reacted emotionally to her comments, with many praising the actress for handling the situation maturely and positively despite the public attention surrounding her personal life.<br><br>

Hansika Motwani and Sohael Khaturiya’s wedding had earlier grabbed massive attention online because of its grand celebrations and luxurious visuals. Their separation later became one of the most discussed topics in entertainment circles.<br><br>

With her latest comments finally addressing the issue publicly, Hansika has once again become a trending topic across Bollywood and entertainment platforms.`,

  url: "hansika-motwani-breaks-silence-on-divorce-from-sohael-khaturiya",

  image: "hansika.jpeg",

  category: "film",
  date: "May 18, 2026"
},

  {
  title: "3-year-old girl raped by staff on the FIRST DAY of her school: Rapist granted bail by Delhi court",

  description: "shocking incident from Delhi has sparked nationwide outrage after a three-year-old girl was allegedly assaulted by a school staff member on the very first day of her school..",

  content: `shocking incident from Delhi has sparked nationwide outrage after a three-year-old girl was allegedly assaulted by a school staff member on the very first day of her school. According to reports, the accused was later granted bail by a Delhi court, triggering intense criticism across social media and public platforms.<br><br>

The case quickly gained attention online, with many users questioning the handling of the investigation and demanding stricter action against those involved. Activists and local groups have also called for accountability from officials connected to the case.<br><br> 

Following growing public pressure, authorities reportedly announced an inquiry into the matter, including the role of police and administrative officials linked to the investigation. Several women leaders and social activists welcomed the decision but stressed that the inquiry should be transparent and meaningful.<br><br>

The incident has reignited conversations across the country about child safety, school security measures, and the speed of justice in sensitive cases. Social media platforms continue to witness strong reactions from people demanding tougher laws and better protection for children..`,

  url: "#",

  image: "delhi.jpeg",

  category: "trending",
  date: "May 17, 2026"
},

  {
  title: "Alia Bhatt Reacts After Cannes Film Festival Video Goes Viral and Faces Massive Trolling",

  description: "Bollywood actress Alia Bhatt has responded after a video from the Cannes Film Festival went viral online and sparked heavy trolling across social media platforms.",

  content: `Bollywood actress Alia Bhatt has become the center of online discussion after a video from the Cannes Film Festival went viral and triggered massive reactions across social media platforms.<br><br>

The actress, who attended the prestigious international film festival in a glamorous designer outfit, quickly grabbed headlines after clips and photos from the event began circulating online. While many fans praised her appearance and confidence, several users started trolling certain moments from the viral video.<br><br>

According to online discussions, the trolling mainly focused on Alia Bhatt’s expressions, walk, styling choices, and interactions captured during the event. Memes and edited clips soon spread rapidly across Instagram, X, and entertainment pages.<br><br>

Reacting to the controversy, Alia Bhatt reportedly addressed the criticism calmly and positively. Reports suggest that the actress stated she prefers focusing on her work and experiences rather than reacting emotionally to online negativity.<br><br>

Many fans came out strongly in support of the actress and criticized the culture of unnecessary trolling targeting celebrities during global appearances and public events.<br><br>

The Cannes Film Festival remains one of the biggest international cinema events in the world, and Indian celebrities attending the festival often receive huge attention online for their fashion and public appearances.<br><br>

Despite the trolling, Alia Bhatt’s Cannes appearance continued trending across entertainment platforms, with many fashion pages and fans praising her overall presence at the event.<br><br>

As the viral discussion continues online, the actress remains one of the most talked-about Indian celebrities from this year’s Cannes Film Festival.`,

  url: "#",

  image: "alia bhatt.jpeg",

  category: "film",
  date: "May 17, 2026"
},

  {
  title: "Big Shock for Actor Darshan: No Immediate Relief as Supreme Court Orders Fast-Track Trial",

  description: "Kannada actor Darshan has reportedly suffered a major legal setback after the Supreme Court directed that the trial in the case be completed within one year, while immediate bail relief remains uncertain.",

  content: `Kannada actor Darshan has reportedly faced a major setback in the ongoing legal case after the Supreme Court directed authorities to complete the trial within one year.<br><br>

According to reports, the apex court stressed the need for a speedy investigation and trial process in the high-profile case that has remained under intense public and media attention for several months.<br><br>

The latest development reportedly came during a hearing connected to the actor’s bail proceedings. Reports suggest that Darshan did not receive immediate relief regarding bail, making the court’s direction a major talking point across Karnataka.<br><br>

The case involving the popular Kannada actor has generated widespread discussion among fans, legal experts, and political observers ever since the controversy first surfaced. Supporters of the actor have continued expressing hope for legal relief, while others have closely followed every court update.<br><br>

Soon after news of the Supreme Court’s observation became public, social media platforms were flooded with reactions from fans and netizens. Hashtags related to Darshan and the case quickly started trending online.<br><br>

Legal experts believe the Supreme Court’s direction to complete the trial within a fixed timeframe could accelerate proceedings significantly in the coming months.<br><br>

Meanwhile, fans of the actor continue waiting for further legal developments and clarity regarding future hearings connected to the case.<br><br>

The matter remains one of the most closely followed entertainment-related legal controversies in Karnataka, with every update receiving massive public attention online and across television media.`,

  url: "#",

  image: "darshan.jpeg",

  category: "film",
  date: "May 17, 2026"
},

  {
  title: "‘This Is The End Of Our Relationship’: KGF Fame Mouni Roy Reportedly Parts Ways After Four Years Of Marriage",

  description: "Actress Mouni Roy has become the center of discussion online after reports claimed that her four-year marriage has reportedly come to an end.",

  content: `Popular actress Mouni Roy has once again grabbed attention on social media after reports surfaced claiming that her four-year marriage has reportedly come to an end.<br><br>

The actress, who gained massive popularity across television, Bollywood, and South Indian cinema — including her appearance in the KGF universe — has now become the subject of intense online discussion following reports about trouble in her personal life.<br><br>

According to viral reports and online discussions, Mouni Roy and her husband are reportedly heading toward separation after being married for nearly four years. The reports gained even more attention after a statement allegedly linked to the actress saying, “This is the end of our relationship,” started circulating online.<br><br>

Soon after the news began trending, fans flooded social media with reactions, expressing shock and sadness over the reported development. Many users also shared old photos and videos of the couple while discussing their relationship journey.<br><br>

However, neither Mouni Roy nor her husband has officially released a detailed public confirmation regarding the reports circulating online. Because of this, several fans have urged people not to spread unverified information until an official statement is issued.<br><br>

The topic quickly started trending across Instagram, X, Reddit, and entertainment pages, with many entertainment portals discussing the possibility of separation and the reasons behind the reported fallout.<br><br>

Mouni Roy remains one of the most recognized actresses in Indian entertainment, known for her work in television serials, reality shows, Bollywood films, and major pan-Indian projects.<br><br>

As discussions continue online, fans are now waiting for official clarification from the actress regarding the rumors surrounding her personal life and marriage.`,

  url: "#",

  image: "mouni roy.jpeg",

  category: "film",
  date: "May 17, 2026"
},  
  
  {
  title: "Kejriwal Says India Needs Gen Z-Style Political Change Like Bangladesh and Nepal",

  description: "AAP chief Arvind Kejriwal has sparked fresh political debate after saying India also needs a Gen Z-led transformation similar to recent political changes seen in Bangladesh and Nepal.",

  content: `AAP national convener Arvind Kejriwal has triggered fresh political discussion after making remarks about the need for a new generation-led transformation in India similar to developments seen in neighbouring countries like Bangladesh and Nepal.<br><br>

Speaking during a public interaction, Kejriwal reportedly said that India also needs a “Gen Z transformation,” referring to the growing influence of young voters, digital awareness, and youth-driven political movements shaping modern politics across South Asia.<br><br>

His statement quickly went viral on social media platforms, with supporters praising the emphasis on youth participation in politics, while critics accused him of making controversial comparisons involving India and neighbouring countries.<br><br>

Kejriwal’s remarks reportedly focused on how younger generations are increasingly demanding accountability, transparency, employment opportunities, and governance reforms from political leaders.<br><br>

The AAP leader also highlighted the importance of social media, digital activism, and youth engagement in influencing political narratives and public opinion in recent years.<br><br>

Soon after the statement surfaced online, political reactions started pouring in from various parties and leaders. Supporters described the comments as a call for democratic participation by young citizens, while opponents criticized the statement and questioned the comparison with political situations in other countries.<br><br>

The topic has now become a major discussion point online, especially among young users and political commentators debating the future role of Gen Z in Indian politics.<br><br>

As the debate continues across television channels and social media, Kejriwal’s remarks have once again placed youth politics and generational change at the center of national political conversations.`,

  url: "#",

  image: "kejriwal.jpeg",

  category: "politics",
  date: "May 16, 2026"
},

  {
  title: "TVK MLA’s Remarks on Sanatan Dharma Spark Fresh Political Controversy in Tamil Nadu",

  description: "A fresh political controversy has erupted after a TVK MLA reportedly supported Udhayanidhi Stalin’s earlier remarks and said that they too have entered the arena to eradicate Sanatan Dharma.",

  content: `Tamil Nadu politics has once again witnessed fresh controversy after a TVK MLA reportedly made remarks supporting Udhayanidhi Stalin’s earlier statements regarding Sanatan Dharma.<br><br>

According to reports, the MLA allegedly stated that they too had “entered the arena to eradicate Sanatan Dharma,” a comment that quickly triggered strong reactions across political and social circles. The statement soon went viral online and sparked heated debates on social media platforms.<br><br>

The controversy gained attention because the remarks appeared to echo earlier comments made by Tamil Nadu minister Udhayanidhi Stalin, whose statements on Sanatan Dharma had already created major nationwide political discussions in the past.<br><br>

Supporters of the statement argued that the comments were aimed at criticizing social discrimination and outdated practices, while critics strongly condemned the remarks and accused the leaders of hurting religious sentiments.<br><br>

Several political parties and Hindu organizations reacted sharply after the statement surfaced online. Social media users also remained divided, with some backing the ideological stand while others demanded clarification and apology from the leaders involved.<br><br>

The controversy has now become a major talking point in Tamil Nadu politics, especially as political tensions continue to rise ahead of future electoral battles in the state.<br><br>

Meanwhile, discussions around religion, politics, and freedom of expression continue to dominate online conversations, with hashtags related to the issue trending across multiple platforms.<br><br>

As reactions continue pouring in, political observers believe the latest controversy could further intensify debates surrounding religion and political narratives in Tamil Nadu.`,

  url: "#",

  image: "sanathani.jpeg",

  category: "politics",
  date: "May 16, 2026"
},

  {
  title: "Suriya and Trisha’s ‘Karuppu’ Faces Release Chaos as Morning and Noon Shows Get Cancelled",

  description: "The much-awaited Tamil film Karuppu starring Suriya and Trisha Krishnan faced unexpected release-day problems after several morning and afternoon shows were reportedly cancelled across theatres.",

  content: `The release of Suriya and Trisha Krishnan’s highly anticipated Tamil film Karuppu ran into major trouble on release day after multiple theatres reportedly cancelled morning and afternoon shows at the last minute.<br><br>

The film, directed by RJ Balaji, had generated massive buzz before release, with fans gathering early outside theatres for special screenings. However, confusion spread quickly after several cinemas reportedly stopped screenings and paused advance bookings unexpectedly.<br><br>

According to reports, the sudden cancellation was linked to financial and distribution-related issues connected to the film’s release. Some reports claimed that unresolved dues and clearance-related problems created last-minute hurdles for distributors and theatre owners.<br><br>

The situation disappointed many Suriya fans who had already booked tickets for the first-day-first-show celebrations. Videos and reactions from theatres soon went viral on social media as fans expressed frustration over the unexpected cancellations.<br><br>

Director RJ Balaji later shared an emotional message apologising to audiences for the delay and assured fans that the team was working continuously to resolve the issue. Reports also suggested that actor Suriya personally stepped in to help sort out the financial complications surrounding the film’s release.<br><br>

Despite the setback, Karuppu continues to remain one of the most talked-about Tamil films online, with strong buzz surrounding its story, action sequences, and the return of Suriya and Trisha together on screen.<br><br>

The film is set in a rural backdrop and follows the story of a fierce protector who becomes the central figure in a conflict involving power, betrayal, and justice. The movie also stars Yogi Babu, Mansoor Ali Khan, and Indrans in key roles.<br><br>

Meanwhile, fans are now waiting for official confirmation regarding revised show timings and a smooth theatrical rollout in the coming days.`,

  url: "#",

  image: "karuppu.jpeg",

  category: "film",
  date: "May 16, 2026"
},

  {
  title: "German Influencer Lizelaj Speaks Out Amid Virat Kohli Social Media Controversy",

  description: "German influencer Lizelaj has reacted to the online controversy linked to Virat Kohli, claiming that some people allegedly offered her money to make false statements against the Indian cricketer.",

  content: `Virat Kohli has once again become the center of online discussion after German influencer and model Lizelaj reacted publicly to the recent social media controversy involving the Indian cricket star.<br><br>

The controversy reportedly started after claims surfaced online suggesting that Kohli had allegedly liked one of Lizelaj’s social media posts. The matter quickly went viral across cricket fan pages and social media platforms, leading to widespread discussion online.<br><br>

Reacting to the situation, Lizelaj reportedly said that she felt bad for Virat Kohli because the issue had been unnecessarily exaggerated on social media. She also mentioned that even she was surprised by how quickly the topic became viral online.<br><br>

The biggest talking point emerged after the influencer claimed that certain journalists and individuals allegedly approached her with offers of money to make false or negative statements against the Indian cricketer. Her statement immediately grabbed attention across social media.<br><br>

Many fans of Virat Kohli came forward in support of the cricketer and criticized the way the controversy was handled online. Several users also pointed out how celebrity social media activities often become massive discussions within minutes.<br><br>

The controversy has continued trending across Instagram, X, Threads, and cricket discussion pages, with users debating whether the entire issue was blown out of proportion unnecessarily.<br><br>

As discussions continue online, neither Virat Kohli nor his official representatives have released any detailed public response regarding the latest claims made by the influencer.`,

  url: "#",

  image: "controvarcy.jpeg",

  category: "trending",
  date: "May 16, 2026"
},

  {
  title: "Indonesian Man Arrested After Neighbour Dies Following Argument Over Marriage Questions",

  description: "A shocking incident from Indonesia has gone viral after a man was arrested for allegedly attacking his neighbour following repeated comments about his unmarried status.",

  content: `A disturbing incident from North Sumatra, Indonesia, has sparked massive discussion online after a 45-year-old man was arrested for allegedly attacking and killing his elderly neighbour following repeated personal remarks about his unmarried life.<br><br>

According to local reports, the accused reportedly became frustrated after his 60-year-old neighbour repeatedly questioned why he was still unmarried at the age of 45. Authorities say tensions between the two individuals had reportedly been building for some time before the situation turned violent.<br><br>

Reports further claim that the accused allegedly attacked the neighbour using a wooden object during a heated confrontation near the victim’s residence. Local residents reportedly intervened after hearing the disturbance, and the injured man was rushed to a hospital for treatment.<br><br>

However, despite medical efforts, the victim later succumbed to his injuries. Police officials reportedly arrested the suspect shortly after the incident and launched an investigation into the matter.<br><br>

The shocking case quickly went viral across social media platforms after international pages and users began sharing the incident online. Many internet users expressed sadness over how repeated personal comments and emotional frustration allegedly escalated into a deadly incident.<br><br>

The case has also triggered wider conversations online regarding mental health, social pressure surrounding marriage, and the emotional impact personal remarks can sometimes have on individuals.<br><br>

Authorities in Indonesia are continuing their investigation, and further legal proceedings are expected as officials examine all aspects connected to the case.`,

  url: "#",

  image: "man kills.jpeg",

  category: "trending",
  date: "May 16, 2026"
},

  {
  title: "Workplace Murder Case Shocks Social Media After Employee Arrested Over Colleague’s Death",

  description: "A disturbing workplace crime involving an employee and his colleague has sparked massive discussions online after reports revealed shocking details connected to the investigation.",

  content: `A shocking workplace crime case has gone viral on social media after reports emerged about the murder of a woman employee allegedly linked to personal disputes and rejection of a love proposal.<br><br>

According to reports circulating online, the accused, identified as Vinay Singh, was allegedly involved in the killing of his colleague Minky Sharma, who reportedly worked as an HR manager at the same company. The incident has triggered widespread reactions and concern across social media platforms.<br><br>

Initial reports suggest that personal disagreements and emotional conflict may have led to tensions between the two individuals. Authorities are reportedly investigating the sequence of events and gathering evidence connected to the case.<br><br>

The disturbing nature of the crime has shocked many internet users, especially after details related to the investigation began spreading online. Several people expressed concern over workplace safety, emotional instability, and rising incidents connected to personal obsession and rejection-related crimes.<br><br>

Police officials are continuing their investigation into the matter, and further legal proceedings are expected as authorities examine all available evidence and statements connected to the case.<br><br>

The incident has also sparked conversations online about mental health awareness, workplace boundaries, and the importance of handling personal conflicts responsibly.<br><br>

As the case continues to gain public attention, many users on social media have urged people not to spread unverified information and to allow authorities to complete the investigation officially.`,

  url: "#",

  image: "murder case.jpeg",

  category: "trending",
  date: "May 15, 2026"
},

  {
  title: "Kannada Actor Dileep Raj Passes Away at 47 After Massive Heart Attack",

  description: "Popular Kannada film and television actor Dileep Raj passed away at the age of 47 following a reported heart attack, leaving the Kannada entertainment industry and fans in shock.",

  content: `The Kannada entertainment industry was left shocked after actor and producer Dileep Raj passed away at the age of 47 following a reported massive heart attack.<br><br>

According to reports, Dileep Raj experienced severe chest pain during the early hours and was rushed to a hospital in Bengaluru. However, despite medical efforts, doctors were unable to revive him. His sudden demise has deeply saddened fans, colleagues, and members of the Kannada film and television industry.<br><br>

Dileep Raj was widely known for his performances in Kannada films, television serials, theatre, and dubbing work. He gained major recognition after appearing alongside Puneeth Rajkumar in the hit Kannada film Milana, which became a turning point in his acting career.<br><br>

Apart from films, he was also a familiar face on Kannada television and acted in several popular serials including Hitler Kalyana, Janani, Kumkuma Bhagya, and Ardha Satya. His natural acting style and emotional performances earned him a strong fan following over the years.<br><br>

Dileep Raj was also involved in television production through his banner DR Creations and contributed to the industry beyond acting. Many colleagues from the Kannada film fraternity expressed grief on social media after the news surfaced online.<br><br>

Fans remembered him as a talented and humble artist who remained connected with audiences through both cinema and television. Several emotional tributes started trending online soon after his passing was reported.<br><br>

The actor had remained active professionally in recent years and continued working in films and television projects. His sudden death at a relatively young age has once again sparked conversations around health awareness and stress in the entertainment industry.<br><br>

Dileep Raj is survived by his wife and children. His passing is being mourned across Karnataka by fans, actors, directors, and members of the television and film industry.`,

  url: "#",

  image: "dileep raj.jpeg",

  category: "trending",
  date: "May 15, 2026"
},


  {
  title: "Chakravarthy Chandrachud Defends Saanvi Sudeep Over Ganesha Tattoo Controversy",

  description: "Writer and public speaker Chakravarthy Chandrachud has strongly reacted to the trolling faced by Saanvi Sudeep over her Ganesha tattoo, saying personal choices about one’s body should not invite public judgment.",

  content: `Saanvi Sudeep recently became the center of online discussion after photos of her Ganesha tattoo began circulating on social media, triggering mixed reactions from users across different platforms.<br><br>

While some people appreciated the tattoo as a personal expression of faith and devotion, others criticized it online, leading to widespread debate and trolling. The controversy quickly gained attention among Kannada cinema followers and social media users.<br><br>

Reacting strongly to the criticism, writer and speaker Chakravarthy Chandrachud publicly supported Saanvi Sudeep and questioned why people were interfering in an individual’s personal choices. His comments defending her soon went viral online.<br><br>

Chandrachud reportedly stated that a person’s body and beliefs are entirely personal matters and outsiders have no right to decide how someone expresses their devotion or spirituality. His statement received support from several users who felt the trolling had become unnecessary and excessive.<br><br>

Many social media users also pointed out that tattoos connected to faith, culture, and spirituality have become common among celebrities and youngsters, and personal choices should not automatically become reasons for public attacks.<br><br>

At the same time, the issue also sparked debates around religious sensitivity, freedom of expression, and online trolling culture. Some users urged people to maintain respect while discussing personal beliefs and appearances.<br><br>

The discussion surrounding Saanvi Sudeep’s tattoo continued trending across Kannada entertainment circles, with fans and followers sharing divided opinions online. However, support messages for Saanvi also increased after Chakravarthy Chandrachud’s public response.<br><br>

As the conversation continues on social media, the incident once again highlights how celebrity personal choices often become topics of intense online discussion and public debate.`,

  url: "#",

  image: "sanvi sudeep.jpeg",

  category: "trending",
  date: "May 15, 2026"
},


  {
  title: "Tamil Nadu CM Vijay Orders Closure of 717 TASMAC Shops Near Public Sensitive Areas",

  description: "Tamil Nadu Chief Minister Vijay has reportedly ordered the closure of 717 TASMAC liquor outlets located near temples, schools, colleges, and bus stands across the state, creating massive public discussion online.",

  content: `Tamil Nadu Chief Minister Vijay has become the center of major public attention after reports surfaced about the government ordering the closure of 717 TASMAC liquor shops functioning near socially sensitive public locations across the state.<br><br>

According to details being widely shared online, the decision includes shutting down 276 liquor outlets located near places of worship, 186 shops operating close to educational institutions, and 255 outlets situated near bus stands and crowded public movement areas.<br><br>

The move has triggered strong reactions on social media, with many users calling it a bold administrative step aimed at addressing long-standing public concerns regarding liquor shops near schools, temples, and heavily populated zones.<br><br>

Supporters of the decision praised the government for focusing on public welfare and social responsibility, especially in areas where students, families, and daily commuters are regularly present. Several social organizations and local residents have reportedly welcomed the development and described it as a positive move for community safety and discipline.<br><br>

At the same time, the announcement has also sparked political discussions online, with people debating the long-term impact such decisions could have on public administration and state revenue systems.<br><br>

The notice circulating across social media platforms quickly went viral after multiple pages and users began sharing screenshots related to the reported order. Many fans of Vijay also praised the decision and described it as a strong leadership move after his transition into politics.<br><br>

Public discussions around TASMAC shops have remained a sensitive topic in Tamil Nadu for several years, especially concerning liquor outlets operating near educational and religious institutions. Various citizen groups had previously raised concerns regarding public inconvenience, safety, and social impact in crowded areas.<br><br>

As conversations continue across social media and news platforms, the reported closure of 717 TASMAC outlets is now being viewed as one of the most talked-about administrative decisions currently trending in Tamil Nadu politics.`,

  url: "#",

  image: "cm vijay.jpeg",

  category: "trending",
  date: "May 14, 2026"
},


  {
  title: "Hardik Pandya Unfollows Mumbai Indians on Instagram, Fans React Online",

  description: "Mumbai Indians captain Hardik Pandya has sparked fresh discussions among cricket fans after reportedly unfollowing the franchise’s official Instagram account.",

  content: `Mumbai Indians captain Hardik Pandya has once again become a major topic of discussion on social media after reports claimed that he unfollowed the official Instagram page of Mumbai Indians.<br><br>

The development quickly went viral among IPL fans, with many users beginning to speculate about possible reasons behind the move. Screenshots and discussions started spreading online soon after fans noticed that the Mumbai Indians account was missing from Hardik Pandya’s following list.<br><br>

Although neither Hardik Pandya nor the franchise has officially commented on the matter, the incident created massive buzz across cricket communities and fan pages. Several supporters described the move as surprising, especially considering Hardik’s leadership role in the team.<br><br>

Social media users immediately started debating whether the action could indicate internal differences, strategic social media management, or simply a temporary change with no major issue involved. Some fans also requested people not to overreact until an official clarification is released.<br><br>

Hardik Pandya has remained one of the most discussed cricketers in recent IPL seasons, especially after taking over Mumbai Indians captaincy. His leadership transition earlier had already triggered strong reactions among fans across social media platforms.<br><br>

Despite online speculation, many cricket analysts believe social media activity should not always be directly connected to professional decisions unless official statements confirm any issue.<br><br>

Meanwhile, Mumbai Indians supporters continue to closely watch the situation, with hashtags related to Hardik Pandya and Mumbai Indians trending online following the reports.<br><br>

As discussions continue across fan communities, cricket followers are now waiting to see whether either Hardik Pandya or the franchise responds publicly regarding the viral social media development.`,

  url: "#",

  image: "hardik.jpeg",

  category: "sports",
  date: "May 14, 2026"
},

{
  title: "‘We Didn’t Deserve This Win’: Rajat Patidar’s Honest Reaction Stuns RCB Fans",

  description: "RCB captain Rajat Patidar surprised cricket fans after Royal Challengers Bengaluru’s thrilling win over Mumbai Indians by saying the team did not deserve to win the match.",

  content: `Royal Challengers Bengaluru captain Rajat Patidar grabbed attention after making a surprisingly honest statement following RCB’s dramatic last-ball victory over Mumbai Indians in IPL 2026.<br><br>

Despite securing an important win in a tense thriller, Patidar admitted after the match that he felt RCB did not fully deserve the victory because the team should have chased the target more comfortably considering the strength of their batting lineup. His statement quickly went viral across social media platforms and cricket discussions online.<br><br>

RCB were chasing 167 runs but found themselves under heavy pressure after losing early wickets during the powerplay. The team struggled for momentum before Krunal Pandya played a match-saving innings that kept Bengaluru alive in the chase.<br><br>

Eventually, RCB managed to cross the finish line on the final ball, sealing a dramatic win over Mumbai Indians in one of the most intense matches of the season. However, instead of celebrating wildly, Patidar chose to openly speak about the team’s mistakes and batting collapse.<br><br>

“I don’t think we deserved to win the match because with our batting lineup, we should be chasing this target easily,” Patidar reportedly said after the game. <br><br>

Fans online reacted strongly to the statement, with many praising Patidar’s honesty and leadership attitude. Several cricket followers described his comments as refreshing because captains usually focus only on positives after a victory.<br><br>

Krunal Pandya’s fighting innings turned out to be the biggest reason behind RCB’s comeback during the difficult chase. His performance under pressure received appreciation from both fans and cricket experts. <br><br>

The thrilling win also boosted RCB’s playoff hopes significantly in IPL 2026, while Mumbai Indians’ defeat pushed them closer to elimination from the tournament. <br><br>

As discussions around Patidar’s statement continue trending online, many fans now see the RCB captain as a calm and straightforward leader who is willing to honestly evaluate his team even after important victories.`,

  url: "#",

  image: "rcb.jpeg",

  category: "sports",
  date: "May 13, 2026"
},


  {
  title: "Rahul Dravid Enters Franchise Cricket Ownership, Ashwin Named Team Captain",

  description: "Indian cricket legend Rahul Dravid has stepped into franchise cricket ownership after purchasing the Dublin Guardians team, with Ravichandran Ashwin reportedly set to lead the side.",

  content: `Former Indian cricket captain and legendary coach Rahul Dravid has entered the world of franchise cricket ownership by purchasing the Dublin Guardians team in an international cricket league setup.<br><br>

The development has created major excitement among cricket fans, especially because Dravid has mostly stayed away from commercial franchise ownership roles throughout his career. His entry into team ownership is now being viewed as a significant new chapter after his successful coaching stint with the Indian cricket team.<br><br>

According to reports, senior Indian spinner Ravichandran Ashwin is expected to captain the Dublin Guardians side. The combination of Rahul Dravid’s leadership experience and Ashwin’s tactical cricketing mind has already generated strong discussions among fans online.<br><br>

Cricket followers praised Dravid’s decision, with many believing his calm approach, deep cricket knowledge, and strong focus on player development could help build a competitive franchise culture. Fans also expressed curiosity about the type of young talent the team may target in the coming seasons.<br><br>

Rahul Dravid is widely respected across world cricket for his discipline, mentoring ability, and contribution to Indian cricket both as a player and coach. Under his coaching period, several young Indian players developed into key international performers.<br><br>

Meanwhile, Ashwin’s reported leadership role has also attracted attention due to his experience in multiple T20 leagues and his reputation as one of the smartest strategists in modern cricket.<br><br>

Social media users reacted positively after the news surfaced, with many calling the Dravid–Ashwin combination one of the most intelligent cricket partnerships in franchise leagues today.<br><br>

As more official announcements are expected soon, cricket fans are eagerly waiting to see how Rahul Dravid shapes the future of the Dublin Guardians franchise in the coming tournaments.`,

  url: "#",

  image: "rahul dravid.jpeg",

  category: "sports",
  date: "May 13, 2026"
},


  {
  title: "Who Is Jason Sanjay? Inside Vijay’s Son’s Education, Career & Directorial Journey",

  description: "While actor Vijay focuses on politics, his son Jason Sanjay is preparing for a career in cinema with filmmaking and direction, creating strong curiosity among fans across South India.",

  content: `Jason Sanjay, the son of Tamil superstar Vijay, has once again become a trending topic among cinema fans after fresh discussions about his career journey and directorial debut started circulating online.<br><br>

Unlike many star kids who choose acting as their first step into the film industry, Jason Sanjay appears to be taking a different route by focusing more on filmmaking and direction. His decision has surprised many fans and also increased excitement about his future in cinema.<br><br>

Jason Sanjay completed his education abroad and reportedly developed a strong interest in filmmaking, storytelling, and technical aspects of cinema during his studies. Over the years, he has maintained a relatively low public profile despite being the son of one of the biggest stars in South Indian cinema.<br><br>

According to industry discussions, Jason Sanjay has been learning filmmaking professionally and preparing himself carefully before officially entering the industry. Reports about his directorial debut have already created massive buzz among Vijay fans and cinema audiences.<br><br>

Meanwhile, Vijay’s growing involvement in politics has also shifted public attention toward Jason Sanjay’s future role in the entertainment industry. Many fans now believe that Jason could eventually carry forward the family’s connection with cinema while Vijay focuses on political activities.<br><br>

Social media users have been actively discussing whether Jason Sanjay will eventually step into acting in the future or continue purely as a filmmaker. However, his current focus appears to be more aligned with direction and behind-the-scenes creative work.<br><br>

Fans are especially curious because several young filmmakers from South India have recently delivered successful films with fresh storytelling styles, and many believe Jason Sanjay could also bring a modern cinematic approach to Tamil cinema.<br><br>

Although official details about his upcoming projects are still limited, the growing buzz around Jason Sanjay clearly shows that audiences are eagerly waiting to see how Vijay’s son builds his own identity in the film industry.`,

  url: "#",

  image: "jason.jpeg",

  category: "film",
  date: "May 13, 2026"
},


  {
  title: "From Ghilli to Leo: Iconic Vijay–Trisha Movies That Won Hearts Over the Years",

  description: "The on-screen chemistry between Thalapathy Vijay and Trisha Krishnan has remained one of the most loved pairings in South Indian cinema, delivering several blockbuster films from Ghilli to Leo.",

  content: `The pairing of Thalapathy Vijay and Trisha Krishnan continues to remain one of the most iconic and celebrated combinations in South Indian cinema. Over the years, the duo has delivered multiple memorable films that created a huge impact among audiences and became fan favorites across generations.<br><br>

Their journey together began with Ghilli, the blockbuster action entertainer that turned into a massive success and established their chemistry as one of the strongest on-screen pairings in Tamil cinema. The film’s songs, emotional scenes, comedy moments, and energetic performances are still loved by audiences even today.<br><br>

After the success of Ghilli, Vijay and Trisha appeared together in several successful films including Thirupaachi, Aathi, Kuruvi, and more. Fans admired the natural chemistry between the two stars, which became a major attraction in every film they worked on together.<br><br>

Years later, the duo reunited once again in Leo, directed by Lokesh Kanagaraj. Their comeback created massive excitement among cinema lovers, especially because audiences had been waiting for years to see the pair share screen space again.<br><br>

In Leo, fans appreciated the emotional connection between Vijay and Trisha along with the mature performances delivered by both actors. Social media platforms were flooded with nostalgic reactions, with many users remembering their earlier films while celebrating the reunion.<br><br>

Apart from box office success, Vijay and Trisha’s films also gained strong popularity through songs, romantic scenes, family emotions, and repeat television viewership over the years. Several of their movie tracks continue to trend online even today.<br><br>

Cinema fans often describe the Vijay–Trisha pairing as timeless because their films managed to connect with both younger audiences and family viewers alike. Their chemistry, screen presence, and comfort level together became one of the reasons behind the lasting popularity of their movies.<br><br>

From the energetic days of Ghilli to the intense emotional moments in Leo, Vijay and Trisha’s cinematic journey remains a memorable chapter in Tamil cinema history.`,

  url: "#",

  image: "vijay trisha.jpeg",

  category: "film",
  date: "May 13, 2026"
},


  {
  title: "‘Krishnavataram Part 1’ Sees Massive Box Office Growth With Huge Day 4 Jump",

  description: "Krishnavataram Part 1 continues its strong theatrical run as the mythological drama records a massive rise in collections by Day 4, creating strong buzz among movie audiences nationwide.",

  content: `Krishnavataram Part 1 is continuing its impressive box office journey as the film witnessed a massive rise in collections by Day 4 after a steady opening weekend performance.<br><br>

According to early trade reports, the mythological drama recorded a huge jump compared to its opening day numbers, showing strong audience interest and positive word-of-mouth across several regions. The film’s emotional storytelling, devotional themes, grand visuals, and powerful background score are being widely appreciated by viewers.<br><br>

Social media platforms have also been flooded with reactions from audiences praising the film’s presentation of Lord Krishna’s journey and the spiritual atmosphere created throughout the movie. Several fans described the experience as visually rich and emotionally engaging on the big screen.<br><br>

Trade analysts believe the film is benefiting heavily from family audiences and devotional viewers, especially during weekend shows and evening screenings. Many theatres in multiple cities reportedly witnessed increased occupancy due to strong public response.<br><br>

The film’s rise in collections has surprised many industry observers, especially after its moderate opening. However, positive audience reviews and viral online discussions appear to have boosted the movie significantly over the next few days.<br><br>

Cinema fans are also praising the large-scale production design, VFX work, and traditional mythological presentation, which helped Krishnavataram Part 1 stand out among recent theatrical releases.<br><br>

With the current momentum continuing strongly, the film is now expected to maintain steady collections in the coming days as anticipation around the next chapters of the franchise also continues growing online.<br><br>

As box office numbers keep improving, Krishnavataram Part 1 is quickly becoming one of the most talked-about devotional fantasy films currently running in theatres.`,

  url: "#",

  image: "krishna.jpeg",

  category: "film",
  date: "May 12, 2026"
},


  {
  title: "Ram Charan’s Fierce ‘Peddi’ Poster Sparks Massive Buzz Before Trailer Release",

  description: "Ram Charan’s latest poster from Peddi has gone viral online, with fans praising the actor’s rugged transformation and intense mass look ahead of the film’s trailer launch.",

  content: `Ram Charan has once again grabbed attention across social media after the makers of Peddi unveiled a powerful new poster from the film ahead of its much-awaited trailer launch.<br><br>

The latest poster showcases the actor in a rugged and intense avatar, carrying a raw village-style mass appearance that immediately caught fans’ attention online. With thick hair, a rough beard, fierce expressions, and a gritty background, the poster hints at a high-energy action drama rooted in strong emotions and powerful storytelling.<br><br>

Within minutes of its release, the poster started trending across multiple social media platforms, with fans praising Ram Charan’s screen presence and transformation. Many users compared the look to some of the actor’s most intense performances, while others called it one of his most striking posters in recent years.<br><br>

The excitement around Peddi has been steadily growing ever since the project was officially announced. Industry watchers believe the film could become another major milestone in Ram Charan’s career due to its large-scale production, emotional depth, and strong mass appeal.<br><br>

The makers are now preparing for the official trailer launch, which is expected to reveal more about the film’s story, action sequences, and Ram Charan’s character. Fans have already started countdowns online, eagerly waiting to see the actor in motion after the poster created such strong hype.<br><br>

Several fan pages and cinema trackers also pointed out the detailed design of the poster, especially the earthy visuals, dark tone, and rustic atmosphere that give the film a grounded and intense feel.<br><br>

As anticipation continues to rise, Peddi is quickly becoming one of the most discussed upcoming Indian films on social media, with audiences expecting a powerful theatrical experience from the team behind the project.`,

  url: "#",

  image: "peddi.jpeg",

  category: "film",
  date: "May 12, 2026"
},


  {
  title: "10-Year-Old Boy Killed in Leopard Attack Near Male Mahadeshwara Hills, Authorities Restrict Movement",

  description: "A tragic leopard attack near M.M. Hills claimed the life of a 10-year-old boy, prompting officials to temporarily halt padayatra activities and restrict two-wheeler movement in the forest region.",

  content: `A heartbreaking incident near Male Mahadeshwara Hills in Karnataka has created fear among local residents after a 10-year-old boy lost his life in a leopard attack near Nagamale village.<br><br>

According to officials, the child was reportedly attacked by the wild animal in a forest-side area close to the village. Local people rushed to help after hearing screams, but the boy could not be saved. The incident has left the entire region shocked and saddened.<br><br>

Following the attack, forest department authorities increased surveillance across nearby areas and announced temporary restrictions on padayatra movement and two-wheeler travel through sensitive forest routes around M.M. Hills.<br><br>

Officials stated that the restrictions were introduced mainly as a precautionary measure to ensure the safety of devotees, villagers, and travelers using forest roads during early morning and night hours.<br><br>

Residents in nearby villages have expressed growing concern over repeated wildlife movement near human settlements. Many locals claimed that leopard sightings have increased in recent months due to shrinking forest boundaries and food shortages inside the forest region.<br><br>

Forest teams have now intensified patrolling operations and are monitoring leopard movement using cameras and tracking methods. Authorities also advised people to avoid isolated routes and not allow children to move alone near forest edges.<br><br>

The tragic incident has once again raised discussions about human-wildlife conflict in forest-border regions of Karnataka. Social media users also reacted emotionally, with many demanding stronger safety measures around wildlife-sensitive areas.<br><br>

Officials said further monitoring will continue until the situation becomes safer for public movement in and around the M.M. Hills forest zone.`,

  url: "#",

  image: "mm hills.jpeg",

  category: "viral",
  date: "May 12, 2026"
},


  {
  title: "PM Modi Urges Indians to Work From Home, Avoid Foreign Travel Amid Iran War Concerns",

  description: "Prime Minister Narendra Modi has advised citizens to reduce unnecessary travel, adopt work-from-home practices, and limit fuel consumption as tensions linked to the Iran conflict continue impacting global energy markets.",

  content: `Prime Minister Narendra Modi has urged Indians to follow fuel-saving and cost-control measures as global tensions linked to the ongoing Iran conflict continue affecting international energy markets and economic stability.<br><br>

During a public address, Modi encouraged people to work from home wherever possible, hold online meetings, and avoid unnecessary foreign travel in order to reduce fuel consumption and ease pressure on the economy.<br><br>

The Prime Minister also appealed to citizens to limit non-essential spending on imported luxury items and avoid unnecessary purchases that could increase pressure on foreign exchange reserves. His remarks came amid growing global concerns over rising crude oil prices and disruptions linked to the West Asia crisis.<br><br>

According to reports, the government is closely monitoring the situation as tensions in the region continue impacting fuel supply chains and international markets. Rising oil prices are expected to affect transportation costs, inflation, and several sectors connected to imports and logistics.<br><br>

Modi reportedly asked people to adopt practical habits similar to those followed during the pandemic period, including virtual meetings, reduced fuel usage, public transport, and minimizing unnecessary travel.<br><br>

The appeal quickly became one of the most discussed topics across social media platforms, with many users debating whether work-from-home culture could return again if global fuel prices continue rising.<br><br>

Opposition leaders also reacted strongly to the statement, with some questioning the government’s handling of the economic situation and energy preparedness amid the international crisis.<br><br>

Experts believe India is trying to prepare early for possible economic pressure caused by instability in West Asia, especially because global crude oil prices and shipping routes remain highly sensitive during geopolitical conflicts.<br><br>

As discussions continue nationwide, the Prime Minister’s appeal has sparked wider conversations around fuel conservation, economic preparedness, remote work culture, and the long-term impact of global conflicts on everyday life in India.`,

  url: "#",

  image: "pm modi.jpeg",

  category: "politics",
  date: "May 12, 2026"
},


  {
  title: "Young Cricket Sensation Vaibhav Sooryavanshi Creates New World Record, Stuns Cricket Fans",

  description: "Young batter Vaibhav Sooryavanshi has grabbed nationwide attention after creating a new world record with his remarkable performance, becoming one of the most talked-about names in cricket.",

  content: `Young cricket sensation Vaibhav Sooryavanshi has once again become the center of attention after achieving a major milestone and creating a new world record with his outstanding performance on the field.<br><br>

The youngster’s achievement has created massive excitement among cricket fans, with many calling him one of the brightest upcoming talents in Indian cricket. His fearless batting style, confidence, and consistency have already made him a popular name among sports followers.<br><br>

According to reports, Vaibhav’s latest performance helped him break multiple records, making the moment even more special for cricket lovers. Fans across social media platforms have been celebrating the achievement, while several former players and experts also praised the young batter for his remarkable talent.<br><br>

At such a young age, Vaibhav Sooryavanshi has managed to achieve something many experienced players dream of accomplishing during their careers. His dedication, hard work, and calm approach under pressure are being widely appreciated by coaches and cricket analysts.<br><br>

The record-breaking performance has also increased discussions about his future in Indian cricket. Many believe the youngster has the potential to become one of the country’s biggest cricket stars in the coming years if he continues performing with the same confidence and discipline.<br><br>

Videos and highlights from the match quickly went viral online, with fans praising both his shot selection and maturity on the field. The achievement has now become one of the most discussed topics among cricket followers.<br><br>

As the cricket world continues to react to his historic performance, Vaibhav Sooryavanshi’s growing popularity shows no signs of slowing down. His latest achievement has not only created history but has also inspired many young aspiring cricketers across the country.<br><br>

With records already being broken at such an early stage of his journey, fans are now eagerly waiting to see what the young batter achieves next in his promising cricket career.`,

  url: "#",

  image: "vaibhav.jpeg",

  category: "sports",
  date: "May 12, 2026"
},



  {
  title: "TVK Chief Vijay Sworn In as Tamil Nadu Chief Minister, Marks Major Political Shift in State",

  description: "Actor-turned-politician Vijay officially took oath as the Chief Minister of Tamil Nadu, marking a historic political moment and the rise of TVK as a major force in the state.",

  content: `Tamilaga Vettri Kazhagam (TVK) chief Vijay officially took oath as the Chief Minister of Tamil Nadu on Sunday, creating one of the biggest political moments in the state’s recent history.<br><br>

The swearing-in ceremony took place in Chennai amid massive celebrations from supporters, party workers, and fans who gathered in large numbers to witness the historic occasion. The event marked Vijay’s official transition from cinema superstar to the state’s top political leader.<br><br>

Vijay’s rise in politics has been closely followed ever since he launched TVK and entered active public life. His party’s strong performance in the Tamil Nadu Assembly elections surprised many political observers and significantly changed the political landscape of the state.<br><br>

For decades, Tamil Nadu politics was largely dominated by the DMK and AIADMK. However, Vijay’s victory and oath-taking are now being viewed by many as the beginning of a new political era in the state.<br><br>

During his speech after taking oath, Vijay reportedly spoke about social justice, welfare, transparency, and development, while promising to focus on governance that directly benefits ordinary people.<br><br>

Supporters across Tamil Nadu celebrated the moment through rallies, fireworks, posters, and social media campaigns. Videos from the ceremony quickly went viral online, with many calling it a historic turning point in Tamil Nadu politics.<br><br>

Several national political leaders, celebrities, and public figures also reacted to Vijay becoming Chief Minister, making the event one of the most discussed topics across news channels and social media platforms.<br><br>

Political analysts believe Vijay’s massive popularity among young voters and first-time voters played a major role in TVK’s rise during the elections. His entry into politics had already generated huge attention over the past few years, but the oath ceremony officially confirmed his arrival as a major political figure.<br><br>

As Vijay begins his tenure as Chief Minister, public attention is now shifting towards the policies, welfare programs, and administrative decisions his government may introduce in the coming months.<br><br>

The historic swearing-in ceremony has now become one of the most talked-about political events in Tamil Nadu, with supporters describing it as the beginning of a completely new chapter in the state’s political journey.`,

  url: "#",

  image: "vijay.jpeg",

  category: "politics",
  date: "May 12, 2026"
},


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

  category: "trending",
  date: "May 11, 2026"
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

  category: "trending",
  date: "May 11, 2026"
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

  category: "film",
  date: "May 11, 2026"
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

  category: "trending",
  date: "May 10, 2026"
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

  category: "politics",
  date: "May 10, 2026"
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
    category: "sports",
    date: "May 10, 2026"
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
    category: "politics",
    date: "May 9, 2026"
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
    category: "viral",
    date: "May 9, 2026"
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
    category: "politics",
    date: "May 9, 2026"
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
    category: "trending",
    date: "May 9, 2026"
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
    category: "film",
    date: "May 9, 2026"
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

  if (typeof gtag === "function") {

  gtag("event", "dark_mode_used");

}

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

  if (value.length >= 3) {

  if (typeof gtag === "function") {

    gtag("event", "news_search", {
      search_term: value
    });

  }

}

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