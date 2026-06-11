# Tractor Date Website

A static website cataloging farm, lawn & garden, and industrial tractors — inspired by
[TractorData.com](https://www.tractordata.com), the internet's largest tractor resource
with data on 18,258 tractors.

## Pages

- **index.html** — home page with site stats and category tiles
- **farm-tractors.html** — all 243 farm tractor brands with searchable cards
- **lawn-tractors.html** — all 87 lawn & garden tractor brands with searchable cards
- **equipment.html** — farm equipment gallery (combines, balers, plows, sprayers, and more)

Each brand card shows a real photo (brand-specific for major brands, a neutral field or
lawn photo otherwise), the brand's tractor count, production years, and horsepower range,
plus a link to the manufacturer's official website (heritage brands link to
TractorData.com). All photos are freely licensed images served from Wikimedia Commons;
each photo links to its Commons file page for author and license attribution.

## Running locally

No build step required — it's plain HTML/CSS/JS. Open `index.html` in a browser, or serve
the folder:

```sh
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Structure

```
index.html             Home page
farm-tractors.html     Farm tractor brand directory
lawn-tractors.html     Lawn & garden brand directory
equipment.html         Equipment gallery
css/styles.css         Site styles
js/data.js             Brand database and photo mappings
js/app.js              Card rendering and search
vercel.json            Image proxy rewrite for Wikimedia Commons photos
```
