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