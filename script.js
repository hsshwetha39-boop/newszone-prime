/* NewsZone Prime - shared script (menu, dark mode, search, filters).
   Article data lives in articles-index.js (home page only). No API keys here. */

const ROOT_PATH = document.body.dataset.root || "";
const state = { category: "all", query: "", shown: typeof PAGE_SIZE !== "undefined" ? PAGE_SIZE : 12 };

function escHTML(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------- Menu ---------- */
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  if (nav) nav.classList.toggle("show");
}
function closeMenu() {
  const nav = document.querySelector(".nav-links");
  if (nav) nav.classList.remove("show");
}

/* ---------- Dark mode ---------- */
function applyThemeIcon() {
  const btn = document.getElementById("darkBtn");
  if (btn) btn.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  try { localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light"); } catch (e) {}
  applyThemeIcon();
  if (typeof gtag === "function") gtag("event", "dark_mode_used");
}

function goHome() { window.location.href = ROOT_PATH + "index.html"; }

/* ---------- Home page: cards, filters, search, load more ---------- */
function cardHTML(a, i) {
  const load = i === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"';
  return `<a class="card-link" href="articles/${a.slug}.html" data-title="${escHTML(a.title)}">` +
    `<div class="news-card"><img src="${a.image}" alt="${escHTML(a.title)}" width="400" height="300" ${load}>` +
    `<h3>${escHTML(a.title)}</h3><p>${escHTML(a.description)}</p>` +
    `<span class="read-btn">Read More</span></div></a>`;
}

function currentList() {
  const q = state.query.trim().toLowerCase();
  return manualNews.filter(a =>
    (state.category === "all" || a.category === state.category) &&
    (!q || a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)));
}

function render() {
  const container = document.getElementById("newsContainer");
  if (!container) return;
  const list = currentList();
  const moreBtn = document.getElementById("loadMoreBtn");
  if (list.length === 0) {
    container.innerHTML = '<h2 class="empty-state">😕 No results found</h2>';
    if (moreBtn) moreBtn.style.display = "none";
    return;
  }
  container.innerHTML = list.slice(0, state.shown).map(cardHTML).join("");
  if (moreBtn) moreBtn.style.display = list.length > state.shown ? "block" : "none";
}

function loadMore() {
  state.shown += PAGE_SIZE;
  render();
}

function setActiveCategory(category) {
  document.querySelectorAll(".category-btn").forEach(btn => {
    const m = (btn.getAttribute("onclick") || "").match(/filterNews\('([^']+)'/);
    btn.classList.toggle("active", !!m && m[1] === category);
  });
}

function filterNews(category) {
  state.category = category;
  state.shown = PAGE_SIZE;
  setActiveCategory(category);
  render();
}

function initHome() {
  const container = document.getElementById("newsContainer");
  if (!container || typeof manualNews === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const q = params.get("q"), cat = params.get("cat");
  const input = document.getElementById("searchInput");
  if (cat && (cat === "all" || manualNews.some(a => a.category === cat))) {
    state.category = cat;
    setActiveCategory(cat);
  }
  if (q) {
    state.query = q;
    if (input) input.value = q;
  }
  // The first page of cards is already in the HTML; only re-render if needed.
  if (q || (cat && cat !== "all")) render();

  const moreBtn = document.getElementById("loadMoreBtn");
  if (moreBtn && !q && state.category === "all") moreBtn.style.display = manualNews.length > state.shown ? "block" : "none";

  container.addEventListener("click", ev => {
    const link = ev.target.closest("a.card-link");
    if (link && typeof gtag === "function") gtag("event", "article_open", { article_title: link.dataset.title });
  });
}

/* ---------- Search (works on every page) ---------- */
function initSearch() {
  const input = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearBtn");
  if (!input) return;
  const onHome = !!document.getElementById("newsContainer");
  let timer;

  input.addEventListener("input", () => {
    if (clearBtn) clearBtn.style.display = input.value ? "block" : "none";
    if (!onHome) return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      state.query = input.value;
      state.shown = PAGE_SIZE;
      render();
      if (input.value.trim().length >= 3 && typeof gtag === "function")
        gtag("event", "news_search", { search_term: input.value.trim().toLowerCase() });
    }, 200);
  });

  input.addEventListener("keydown", ev => {
    if (ev.key === "Enter" && !onHome && input.value.trim()) {
      window.location.href = ROOT_PATH + "index.html?q=" + encodeURIComponent(input.value.trim());
    }
  });

  if (clearBtn) clearBtn.addEventListener("click", () => {
    input.value = "";
    clearBtn.style.display = "none";
    if (onHome) { state.query = ""; state.shown = PAGE_SIZE; render(); }
  });
}

/* ---------- Contact form success message ---------- */
function initContact() {
  const box = document.getElementById("formSuccess");
  if (box && new URLSearchParams(window.location.search).get("sent") === "1") box.style.display = "block";
}

/* ---------- Start ---------- */
document.addEventListener("DOMContentLoaded", () => {
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved === "dark") document.body.classList.add("dark-mode");
  applyThemeIcon();

  initHome();
  initSearch();
  initContact();

  document.querySelectorAll(".nav-links a").forEach(l => l.addEventListener("click", closeMenu));
  document.addEventListener("keydown", ev => { if (ev.key === "Escape") closeMenu(); });
});

// When the browser restores a page from its back/forward cache, make sure
// there is no leftover sideways scroll offset.
window.addEventListener("pageshow", () => {
  document.documentElement.scrollLeft = 0;
  document.body.scrollLeft = 0;
});