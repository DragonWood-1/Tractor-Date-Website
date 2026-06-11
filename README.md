# Tractor Date Website

A static website cataloging farm, lawn & garden, and industrial tractors — inspired by
[TractorData.com](https://www.tractordata.com), the internet's largest tractor resource
with data on 18,258 tractors.

## Pages

- **index.html** — home page with site stats and category tiles
- **farm-tractors.html** — all 243 farm tractor brands with searchable cards
- **lawn-tractors.html** — all 87 lawn & garden tractor brands with searchable cards
- **equipment.html** — farm equipment gallery (combines, balers, plows, sprayers, and more)

Each brand card shows an original tractor illustration tinted in the brand's signature
color, the brand's tractor count, production years, and horsepower range, plus a link to
the manufacturer's official website (heritage brands link to TractorData.com).

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
js/data.js             Brand database and brand colors
js/app.js              Card rendering and search
images/*.svg           Original equipment illustrations
```
