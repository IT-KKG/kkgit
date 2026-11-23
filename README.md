# KKG-IT

Offisiell nettside for IT-avdelingen ved Kristiansand katedralskole Gimle – [kkgit.no](https://kkgit.no).
Samler snarveier for elever: bytte passord, Visma InSchool, itslearning og utlånsregler for PC og lader.

## Struktur

| Fil / mappe | Innhold |
|---|---|
| `index.html` | Forsiden med snarveiene |
| `utlan.html` | Utlånsregler, viser PDF-en |
| `style/styles.css` | All styling |
| `dokumenter/` | Utlånsreglene (`.docx` og `.pdf`) |
| `img/` | Logo |

Ren HTML og CSS – ingen byggesteg. Åpne `index.html` i nettleseren for å teste lokalt.

## Vanlige endringer

- **Ny snarvei:** kopier en `<a class="tile ...">` i `index.html` og endre tekst og lenke.
- **Nye utlånsregler:** erstatt `dokumenter/utlansregler.pdf` (filnavnet må være likt).
- **Endret CSS:** øk tallet i `styles.css?v=2` i begge HTML-filene, så nettleserne henter ny fil.

## Publisering

- `beta` → forhåndsvisning på [it-kkg.github.io/kkgit](https://it-kkg.github.io/kkgit/)
- `main` → lastes automatisk opp til kkgit.no via FTP (`.github/workflows/deploy.yml`)

Test på `beta` først, og slå sammen til `main` når alt ser riktig ut.
