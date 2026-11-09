# TAO Portfolio

Een persoonlijke portfolio voor Tyra Afoley Okai Cudjoe. De site brengt software-engineering, projecten en technisch schrijfwerk samen met een aparte plek voor muziek en creatief werk.

De huidige implementatie is statisch. De inhoud staat voorlopig in Angular-componenten; later willen we Directus als zelfgehoste headless CMS gebruiken.

## Technologie

- **Angular 18** met TypeScript en Angular Router.
- **SCSS** voor componentstijlen en gedeelde design tokens.
- **Bootstrap 5.3.8 CSS** via jsDelivr voor de responsive navbar en algemene utility classes. De mobiele navbar-toggle wordt door Angular aangestuurd.
- **Google Fonts:** Montserrat voor koppen, Inter voor lopende tekst en JetBrains Mono voor technische labels.
- **RxJS** als onderdeel van Angular; er is momenteel geen backend of CMS-koppeling.
- **Directus** is gepland, maar nog niet geïntegreerd.

## Designbasis

De engineering-pagina’s volgen de Figma-export in `src/assets/Figma designs/Portfolio design (Engineering.zip`. De kleuren en typografie komen uit `src/scss/variables/`.

Belangrijke kleurentokens zijn:

- Primary navy: `#06254A`
- Secondary blue: `#0B3765`
- Accent blue: `#478CFF`
- Soft Blue: `#93BCE7`
- Warm White: `#F7F6F3`

De design tokens worden globaal ingeladen via `src/styles.scss`. Gebruik de bestaande CSS custom properties, zoals `var(--color-primary)` en `var(--color-soft-blue)`, in nieuwe componentstijlen.

## Huidige status

### Gereed

- [x] Angular-app opgesplitst in een tech-gedeelte en een aparte, lazy-loaded music-module.
- [x] Engineering-design tokens voor kleuren en typografie globaal aangesloten.
- [x] Soft Blue (`#93BCE7`) toegevoegd aan de SCSS- en CSS-tokenlijst.
- [x] Tech-home route toont een statische hero met introductie, naam, technologie-tags en een tijdelijke portretplaceholder.
- [x] Tech-home bevat previews voor projecten, About, Writing en Music.
- [x] Responsive navbar voor de tech-pagina met routes naar Work, Writing, About en Music.
- [x] Footer met standaard CTA-copy en een `config`-input voor eyebrow, header, body, buttontekst en buttonicoon.
- [x] Footer toont vaste Twitch-, GitHub-, e-mail- en LinkedIn-iconen en gebruikt dezelfde social-URL’s op elke pagina.
- [x] Development-build slaagt met `npm run build -- --configuration development`.

### Nog te doen

#### Tech-portfolio — pagina voor pagina

- [ ] Home: tijdelijke beelden en voorbeeldinhoud vervangen door definitieve portfolio-content.
- [ ] About-pagina bouwen.
- [ ] Work-overzicht bouwen, inclusief statische categorie-filtering.
- [ ] Work-detailpagina bouwen.
- [ ] Writing-overzicht bouwen.
- [ ] Writing-detailpagina bouwen.
- [ ] Footer CTA koppelen aan de juiste contactactie.
- [ ] Navigatie- en pagina-layout handmatig nalopen op mobiel en desktop.

#### Music

- [x] `/music` route koppelen aan de bestaande tijdelijke muziek-home.
- [ ] Muziek-home en overige muziekpagina’s volgens het ontwerp bouwen.
- [ ] Muziekontwerp en eventuele afwijkende navigatie uitwerken.
- [ ] Music-favicon dynamisch activeren op `/music`; dit is bewust uitgesteld.

#### UX en polish

- [ ] Skeleton loading states toevoegen voor Directus-content die merkbaar vertraagd binnenkomt. Houd de skeletons passend bij de uiteindelijke inhoud; gebruik ze niet voor de huidige statische content.
- [ ] Subtiele overgangen tussen routes toevoegen, bij voorkeur voor de pagina-inhoud terwijl navbar en footer stabiel blijven.
- [ ] Beweging beperken of uitschakelen wanneer `prefers-reduced-motion` is ingesteld.

#### Directus en lancering

- [ ] Contentmodellen en TypeScript-modellen bepalen voor projecten, artikelen, werkervaring en site-instellingen.
- [ ] Statische content achter services of repositories zetten, zodat die later door Directus-data vervangen kan worden.
- [ ] Directus zelf hosten en de Angular-app eraan koppelen.
- [ ] Favicon-assets netjes ordenen en de tech- en music-favicon per route instellen.
- [ ] Productiebuild en deployment nalopen.

## Footer per pagina instellen

De footer behoudt standaardwaarden voor velden die niet worden overschreven. Een pagina kan alleen de gewenste waarden meegeven:

```ts
footerConfig = {
  eyebrowText: 'SAMENWERKEN',
  showEyebrow: true,
  headerText: 'Heb je een project in gedachten?',
  showBody: false,
  buttonText: 'Stuur me een bericht',
  buttonIcon: 'mail'
};
```

```html
<app-footer [config]="footerConfig"></app-footer>
```

Beschikbare buttoniconen: `mail-arrow`, `mail`, `arrow` en `none`.
De sociale iconen en bestemmingen zijn gedeeld en worden niet per pagina ingesteld.

## Lokaal ontwikkelen

Installeer dependencies en start de Angular development server:

```bash
npm install
npm start
```

De app is dan bereikbaar op `http://localhost:4200/`.

Een development-build uitvoeren:

```bash
npm run build -- --configuration development
```

Een productiebuild uitvoeren:

```bash
npm run build
```

Unit tests draaien:

```bash
npm test
```
