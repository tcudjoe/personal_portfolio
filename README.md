# TAO Portfolio

Een persoonlijke portfolio voor Tyra Afoley Okai Cudjoe. De site brengt software-engineering, projecten en technisch schrijfwerk samen met een aparte plek voor muziek en creatief werk.

De tech-kant is functioneel klaar voor v1. De lancering wacht op een geslaagde productiebuild en een controle op de productiehosting.

## Technologie

- **Angular 18** met TypeScript en Angular Router.
- **SCSS** voor componentstijlen en gedeelde design tokens.
- **Bootstrap 5.3.8 CSS** via jsDelivr voor de responsive navbar en algemene utility classes. De mobiele navbar-toggle wordt door Angular aangestuurd.
- **Google Fonts:** Montserrat voor koppen, Inter voor lopende tekst en JetBrains Mono voor technische labels.
- **RxJS** voor asynchrone data en wijzigingen in routes.
- **Directus** als zelfgehoste headless CMS voor projecten, artikelen en werkervaring.

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

### Gereed voor tech v1

- [x] Home met portret, fotogalerij, muziekpreview en project- en blogpreviews uit Directus.
- [x] About met foto's en werkervaring uit Directus, gesorteerd op aanmaakdatum en met opgemaakte beschrijvingen.
- [x] Work met gepubliceerde projecten en categorieën uit Directus, inclusief de categorie van het uitgelichte project.
- [x] Work Detail met projectinhoud, klikbare metadata, sticky metadata op desktop, mediacarousel en navigatie naar het volgende project.
- [x] Writing met gepubliceerde artikelen, covers en categoriefilters.
- [x] Writing Detail met tekst-, beeld- en codeblokken, inhoudsopgave en auteursinformatie.
- [x] Responsive navigatie en configureerbare footer met gedeelde sociale links.
- [x] Aparte Angular-module en tijdelijke pagina voor `/music`.

### Voor lancering

- [ ] Productiebuild laten slagen. De check van 23 november 2026 stopt op het CSS-budget van 4 kB per component. Home, About, Work Detail, Writing en Writing Detail overschrijden dit. Verklein de stijlen of kies een onderbouwd budget. Controleer ook de templatewaarschuwing over `sections ?? []` in Work Detail.
- [ ] Laat de app `environment.ts` importeren en controleer het Directus-adres voor productie. De huidige imports verwijzen rechtstreeks naar `environment.development.ts`, waardoor de ingestelde file replacement niet wordt gebruikt. De environmentbestanden staan buiten Git en moeten in de buildomgeving beschikbaar zijn.
- [ ] Configureer de SPA-fallback op de productiehosting. `src/_redirects` bevat de fallback, maar staat niet in de lijst met bestanden die Angular kopieert.
- [ ] Controleer op de productiehosting op mobiel en desktop. Open en ververs `/work/:slug` en `/writing/:slug` rechtstreeks en controleer Directus-content, foto's, video's, navigatie en de contactlinks. Deze check kon nog niet volgen op de mislukte build.

### Na tech v1

- [ ] Music-ontwerp, muziekpagina's, eigen navigatie en favicon per sitegedeelte.
- [ ] Handmatig uitgelichte projecten en artikelen kiezen in Directus.
- [ ] Tags, gerelateerde artikelen en SEO verder uitwerken.
- [ ] Blogweergaven bijhouden met een teller in Directus.
- [ ] Skeletons en subtiele paginaovergangen toevoegen met ondersteuning voor minder beweging.

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
