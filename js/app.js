// Renders brand directories and the equipment gallery.
// All photos are freely licensed images served from Wikimedia Commons.

function photoFigure(file, alt) {
  return `
  <div class="card-img">
    <img src="${wmPhoto(file)}" alt="${alt}" loading="lazy">
  </div>`;
}

function brandCard(brand, isLawn) {
  const [name, count, years, hp, url] = brand;
  const link = url
    ? `<a class="btn" href="${url}" target="_blank" rel="noopener noreferrer">Visit ${name} website &rarr;</a>`
    : `<span class="badge">Heritage brand — no longer in production</span>`;
  const file = brandPhotoFile(name, isLawn);
  return `
  <article class="card">
    ${photoFigure(file, name + " tractor")}
    <div class="card-body">
      <h3>${name}</h3>
      <ul class="specs">
        <li><strong>${count}</strong> tractor${count === 1 ? "" : "s"}</li>
        ${years ? `<li>Built ${years}</li>` : ""}
        ${hp ? `<li>${hp}</li>` : ""}
      </ul>
      ${link}
    </div>
  </article>`;
}

function renderBrands(listId, brands, searchId, countId, isLawn) {
  const grid = document.getElementById(listId);
  const search = document.getElementById(searchId);
  const counter = document.getElementById(countId);

  function draw(filter) {
    const q = (filter || "").trim().toLowerCase();
    const shown = brands.filter(b => b[0].toLowerCase().includes(q));
    grid.innerHTML = shown.map(b => brandCard(b, isLawn)).join("");
    counter.textContent = `${shown.length} of ${brands.length} brands`;
  }

  search.addEventListener("input", () => draw(search.value));
  draw("");
}

function renderEquipment(listId) {
  const grid = document.getElementById(listId);
  grid.innerHTML = FARM_EQUIPMENT.map(e => `
    <article class="card">
      ${photoFigure(e.file, e.name + " photo")}
      <div class="card-body">
        <h3>${e.name}</h3>
        <p>${e.desc}</p>
      </div>
    </article>`).join("");
}
