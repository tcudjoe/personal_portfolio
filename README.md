# TAO Portfolio

Een persoonlijke portfolio voor Tyra Afoley Okai Cudjoe. De site brengt software-engineering, projecten en technisch schrijfwerk samen met een aparte plek voor muziek en creatief werk.

De tech-kant is functioneel klaar voor v1. Voor lancering controleren we de eerste deploy op de productiehosting.

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

- [x] CSS-budget voor de productiebuild afgestemd op de huidige componentstijlen. Angular geeft een waarschuwing boven 8 kB en blokkeert boven 12 kB per component.
- [x] Angular gebruikt `environment.ts` voor productie en vervangt dit bestand door `environment.development.ts` voor development.
- [x] Angular kopieert `src/_redirects` naar de root van de build voor directe links op Netlify.
- [ ] Stel de GitHub-variabelen en het Netlify-token in en voer de eerste deploy uit.
- [ ] Controleer de gedeployde site op mobiel en desktop. Open en ververs `/work/:slug` en `/writing/:slug` rechtstreeks en controleer Directus-content, foto's, video's, navigatie en contactlinks.

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

## Deploy naar Netlify via GitHub Actions

Maak een Netlify-project aan via **Deploy manually**. Stel in GitHub onder **Settings → Secrets and variables → Actions** het volgende in.

| Naam | Type | Waarde |
| --- | --- | --- |
| `NETLIFY_AUTH_TOKEN` | Secret | Netlify Personal Access Token |
| `NETLIFY_SITE_ID` | Variable | Project ID uit Netlify |
| `DIRECTUS_API_URL` | Variable | Publieke HTTPS-basis-URL van Directus |

De Directus-URL komt in de browserbundel. Geef de Netlify-site toegang via de CORS-instellingen van Directus als de API cross-origin requests beperkt.

`ci.yml` draait een productiebuild voor pull requests naar en pushes op `develop`, met een testadres voor Directus. `deploy-netlify.yml` bouwt met de productie-URL en publiceert `dist/taoportfolio` na een push op `develop`. Je kunt de deploy ook handmatig starten vanaf die branch via **Actions**.

## GitHub-releases

Release Please maakt op `develop` een release-PR op basis van Conventional Commits. Gebruik bijvoorbeeld `feat:` voor een nieuwe functie en `fix:` voor een bugfix. De release-PR bevat de versiebump en changelog. Na het mergen maakt Release Please een Git-tag en GitHub-release aan. De Netlify-deploy blijft gekoppeld aan pushes op `develop`.

Voor het standaardtoken moet **Settings → Actions → General → Allow GitHub Actions to create and approve pull requests** aanstaan. Wil je CI automatisch laten draaien op de release-PR, stel dan het optionele secret `RELEASE_PLEASE_TOKEN` in met een token dat op de repository mag schrijven naar Contents, Issues en Pull requests. GitHub start de PR-workflow niet voor een PR die met het standaardtoken wordt geopend.

## Lokaal ontwikkelen

Maak lokaal `src/environments/environment.ts` en `src/environments/environment.development.ts` aan. Exporteer in beide bestanden een object `environment` met `api_url` voor de betreffende omgeving. Deze bestanden staan buiten Git.

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
