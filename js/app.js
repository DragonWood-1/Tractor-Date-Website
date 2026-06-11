// Renders brand directories and the equipment gallery.

function darken(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, (n >> 16) - amt);
  const g = Math.max(0, ((n >> 8) & 0xff) - amt);
  const b = Math.max(0, (n & 0xff) - amt);
  return `rgb(${r},${g},${b})`;
}

// Inline SVG tractor "photo" tinted with the brand's signature color.
function tractorSVG(color) {
  const dark = darken(color, 50);
  return `
  <svg viewBox="0 0 400 240" role="img" aria-label="Tractor illustration" preserveAspectRatio="xMidYMid slice">
    <rect width="400" height="240" fill="#dceefb"/>
    <rect y="180" width="400" height="60" fill="#8bc34a"/>
    <circle cx="345" cy="42" r="22" fill="#ffe082"/>
    <ellipse cx="80" cy="45" rx="34" ry="13" fill="#ffffff" opacity="0.8"/>
    <rect x="105" y="95" width="120" height="55" rx="7" fill="${color}"/>
    <rect x="212" y="72" width="74" height="78" rx="7" fill="${color}"/>
    <rect x="224" y="82" width="50" height="38" rx="4" fill="#b3e5fc"/>
    <rect x="96" y="122" width="18" height="28" rx="4" fill="${dark}"/>
    <rect x="112" y="74" width="13" height="26" rx="3" fill="#37474f"/>
    <rect x="105" y="104" width="110" height="9" fill="#ffd600"/>
    <circle cx="142" cy="178" r="30" fill="#212121"/>
    <circle cx="142" cy="178" r="15" fill="#fbc02d"/>
    <circle cx="262" cy="165" r="46" fill="#212121"/>
    <circle cx="262" cy="165" r="24" fill="#fbc02d"/>
    <circle cx="262" cy="165" r="7" fill="#212121"/>
    <path d="M214 130 a48 48 0 0 1 96 0 l-13 0 a35 35 0 0 0 -70 0 z" fill="${dark}"/>
  </svg>`;
}

function brandCard(brand) {
  const [name, count, years, hp, url] = brand;
  const site = url || REFERENCE_SITE;
  const linkLabel = url
    ? `Visit ${name} website`
    : "Heritage brand — specs at TractorData.com";
  return `
  <article class="card">
    <div class="card-img">${tractorSVG(brandColor(name))}</div>
    <div class="card-body">
      <h3>${name}</h3>
      <ul class="specs">
        <li><strong>${count}</strong> tractor${count === 1 ? "" : "s"}</li>
        ${years ? `<li>Built ${years}</li>` : ""}
        ${hp ? `<li>${hp}</li>` : ""}
      </ul>
      <a class="btn" href="${site}" target="_blank" rel="noopener noreferrer">${linkLabel} &rarr;</a>
    </div>
  </article>`;
}

function renderBrands(listId, brands, searchId, countId) {
  const grid = document.getElementById(listId);
  const search = document.getElementById(searchId);
  const counter = document.getElementById(countId);

  function draw(filter) {
    const q = (filter || "").trim().toLowerCase();
    const shown = brands.filter(b => b[0].toLowerCase().includes(q));
    grid.innerHTML = shown.map(brandCard).join("");
    counter.textContent = `${shown.length} of ${brands.length} brands`;
  }

  search.addEventListener("input", () => draw(search.value));
  draw("");
}

function renderEquipment(listId) {
  const grid = document.getElementById(listId);
  grid.innerHTML = FARM_EQUIPMENT.map(e => `
    <article class="card">
      <div class="card-img"><img src="${e.img}" alt="${e.name} illustration"></div>
      <div class="card-body">
        <h3>${e.name}</h3>
        <p>${e.desc}</p>
      </div>
    </article>`).join("");
}
