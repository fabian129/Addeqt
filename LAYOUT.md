# Addeqt — LAYOUT.md

Page composition, sektionsrytm och layoutmönster.
Separerad från DESIGN.md (tokens) för att kunna tweaka struktur och luft oberoende av visuell stil.

**Ändra utseende** → `DESIGN.md`
**Ändra layout och luft** → `LAYOUT.md`

---

## Principer

### Alternering
Aldrig två visuella sektioner i rad. Aldrig två data-sektioner i rad.
Rytmen ska gå: bild → mikro → text → data → interaktiv → bild → interaktiv → steg → citat → personligt → CTA.
Hjärnan hinner landa mellan varje intryck.

### Andrum
Varje sektion äger sin viewport. Den delar inte uppmärksamhet med nästa.
CSS-token: `var(--section-gap)` = `clamp(8rem, 12vw, 12rem)` mellan alla huvudsektioner.
Det här är det som gör sidan dyr. Minska aldrig utan explicit beslut.

### Bredd
Content: 1120px centrerad. Hero och editorial-bilder bryter ut till fullbredd.
Inget content ska nå viewport-kanten förutom bilder och mörka sektioner.

### Bilder
86 foton i `zaitex-studio/public/addeqt/`. Kopieras till `website/public/images/`.
Väv in dem strategiskt: hero (fullbredd), editorial split (50/50), mellan sektioner (andningspauser).
Aldrig dekorativa — varje bild ska förmedla en känsla (natur, arkitektur, livsstil).

---

## Sektionsordning

### 1. HERO
**Typ:** Visuell (bild) · **Companion:** —
**Inspiration:** Xapo Bank

**Layout:**
- Fullbreddsbild, 90-92vh höjd, `object-fit: cover`
- Mörk gradient overlay nerifrån (0.55 opacity → transparent)
- Content: bottom-left aligned inom 1120px container
- Eyebrow-badge med glassmorphism (bakgrundsblur + vit border)
- Rubrik: `{typography.display-xl}` i vitt — max 5 ord
- En rad intro i vit/75% opacity
- En enda pill-CTA (Navy fill, vit text)

**Bilden gör 80% av jobbet. Texten är minimal.**

```
┌─────────────────────────────────────────────┐
│                                             │
│             fullbreddsbild                  │
│             (hamn, segling, natur)           │
│                                             │
│  ┌─ glassmorphism badge ──────┐             │
│  │ ● Oberoende — Stockholm    │             │
│  └────────────────────────────┘             │
│  Rätt rådgivning.                           │
│  På dina villkor.                           │
│                                             │
│  Oberoende förmögenhetsrådgivning...        │
│                                             │
│  [ Boka möte → ]                            │
│                                             │
└─────────────────────────────────────────────┘
```

---

### 2. TRUST MARQUEE
**Typ:** Mikro-element · **Companion:** Navy
**Inspiration:** Winden live-feed

**Layout:**
- Fullbredd, tunn rad, vit bakgrund
- Horisontell infinite scroll, slow (40s)
- Eyebrow-typografi: `{typography.eyebrow}` i `{colors.ink-subtle}`
- Items separerade med em dash (—)
- Items: FI-tillstånd feb 2023 — Nordnet som depå — Fast avgift — 100% oberoende — Inga egna fonder

**Inte en sektion — en andningspaus. Max 48px vertikal padding.**

```
─────────────────────────────────────────────
 FI-TILLSTÅND FEB 2023 — NORDNET SOM DEPÅ — FAST AVGIFT — 100% OBEROENDE →
─────────────────────────────────────────────
```

---

### 3. MANIFESTO
**Typ:** Ord · **Companion:** —
**Inspiration:** Fluid Glass ton

**Layout:**
- Vit bakgrund, 1120px container
- GSAP ScrollTrigger word-by-word reveal (opacity 0.15 → 1.0)
- En enda mening i `{typography.display-lg}` — Manrope 300
- Under: stats-rad med 4 siffror, separerade av hairline-border ovanför
- Stats: siffra i `{typography.stat-value}`, label i `{typography.eyebrow}`
- Inga kort, inga borders runt stats — bara siffror och luft

**Texten konstaterar, den försöker inte övertyga.**

```
┌─────────────────────────────────────────────┐
│                                             │
│  ADDEQT ser förmögenhetsförvaltning som     │
│  konsten att skapa trygghet. Varje beslut   │
│  formas för långsiktig effekt.              │
│                                             │
│  ─────────────────────────────────          │
│                                             │
│  3+        100%       FI        Nordnet     │
│  ÅR        OBEROENDE  TILLSTÅND DEPÅ        │
│                                             │
└─────────────────────────────────────────────┘
```

---

### 4. TJÄNSTER
**Typ:** Data/kort · **Companion:** Guld
**Inspiration:** Fluid Glass produkt-grid + editorial

**Layout:**
- Vit bakgrund, 1120px container
- Eyebrow: `{typography.eyebrow}` "TJÄNSTER"
- Rubrik: `{typography.display-lg}` — max 5 ord
- Kort intro: `{typography.body}` i `{colors.ink-muted}`, max 2 rader
- 4 kort i grid (4-col desktop → 2 tablet → 1 mobil)
- Varje kort: surface-1 bg, hairline border, 4px radius
- Kort-inre: nummer (mono) → ikon (navy bg) → titel (subhead) → beskrivning (body-sm)
- Hover: border skiftar till `{colors.gold-border}`
- Under grid: pill-CTA + mono "Kostnadsfritt första möte"

**Korten ska kännas som Fluid Glass' produkt-grid: rena, raka, utan skuggor.**
**Inte som SaaS-kort — som en produktkatalog i ett arkitektgalleri.**

```
┌─────────────────────────────────────────────┐
│  · TJÄNSTER                                 │
│                                             │
│  Heltäckande finansiella                    │
│  tjänster.                                  │
│                                             │
│  Fyra kärnområden — alla levererade med     │
│  samma oberoende perspektiv.                │
│                                             │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐   │
│  │ 01   │  │ 02   │  │ 03   │  │ 04   │   │
│  │ [ic] │  │ [ic] │  │ [ic] │  │ [ic] │   │
│  │      │  │      │  │      │  │      │   │
│  │ Kap. │  │ Förm.│  │ PB   │  │ Skat.│   │
│  │ ...  │  │ ...  │  │ ...  │  │ ...  │   │
│  └──────┘  └──────┘  └──────┘  └──────┘   │
│                                             │
│  [ Boka rådgivning → ]  KOSTNADSFRITT       │
└─────────────────────────────────────────────┘
```

---

### 5. APP-INTRODUKTION
**Typ:** Interaktiv/tech · **Companion:** Navy
**Inspiration:** Winden steg-för-steg

**Layout:**
- Warm bakgrund (`{colors.canvas-warm}`), 1120px container
- Eyebrow + rubrik + intro (samma mönster som tjänster)
- 3-stegs storytelling i horisontell layout (3-col)
- Varje steg: nummer (stor, tunn) + titel + kort text + ikon/illustration
- Under: bento-grid med 3-4 feature-kort som visar app-funktioner
- Bento-kort: surface-1, hairline, mixed spans (2+1 eller 1+2)

**Stegen berättar hur appen funkar utan att användaren behöver läsa.**

---

### 6. VARFÖR ADDEQT
**Typ:** Visuell (editorial) · **Companion:** Sage
**Inspiration:** Fluid Glass editorial + Xapo split

**Layout:**
- Vit bakgrund, bryter ut till fullbredd
- Split: 50% bild (vänster) + 50% text (höger)
- Bilden: landscape, rounded corners (12px), natur/arkitektur
- Text: eyebrow "VARFÖR VI" + rubrik `{typography.headline}` + 2-3 korta stycken + CTA-länk
- Sage-accent: citat-border eller accent-linje
- Texten berättar historien: "En bransch som behöver förändras."

**Det här är den mänskliga sektionen. Fluid Glass-ton: konstatera, inte sälja.**

```
┌─────────────────────────────────────────────┐
│                                             │
│  ┌──────────────┐  · VARFÖR VI              │
│  │              │                           │
│  │   editorial  │  En bransch som behöver   │
│  │   bild       │  förändras.               │
│  │              │                           │
│  │   (natur/    │  Vi startade Addeqt för   │
│  │    skärgård)  │  att...                   │
│  │              │                           │
│  └──────────────┘  Läs mer →                │
│                                             │
└─────────────────────────────────────────────┘
```

---

### 7. SPARKALKYLATOR
**Typ:** Interaktiv · **Companion:** Guld
**Inspiration:** Winden kalkylator + addeqt.com befintlig

**Layout:**
- Vit bakgrund, 1120px container
- Split: vänster = sliders/input, höger = resultat/graf
- Custom-styled range sliders (Navy track, Gold thumb)
- Resultat-siffra: `{typography.stat-value}` i `{colors.gold}`
- Mini-graf under resultatet (bars i Navy)
- Disclaimer i `{typography.caption}`

**Användaren gör något aktivt. "Se vad rätt förvaltning kan göra."**

---

### 8. PROCESS
**Typ:** Steg · **Companion:** Sage
**Inspiration:** Winden 3-stegs, Fluid Glass enumeration

**Layout:**
- Vit bakgrund, 1120px container
- 3 steg horisontellt (3-col desktop → vertikal mobil)
- Varje steg: stort nummer i `{colors.sage}` (display-lg, weight 300) + titel + kort text
- Tunn sage-linje som kopplar stegen horisontellt
- Stegen: Kartläggning → Strategi → Genomförande

---

### 9. TESTIMONIALS
**Typ:** Social proof · **Companion:** —
**Inspiration:** Fluid Glass numrerade citat

**Layout:**
- Warm bakgrund (`{colors.canvas-warm}`)
- Numrerade citat: "01 / 03"
- Stort citat i `{typography.headline}` (kursiv eller med sage citat-border)
- Porträtt (cirkulärt) + namn + roll under
- Horisontell karusell eller fade-transition
- Placeholder-content tills riktiga citat finns

---

### 10. TEAM
**Typ:** Personligt · **Companion:** Navy
**Inspiration:** Diskret, inte överdrivet (Mohammars direktiv)

**Layout:**
- Vit bakgrund, 1120px container
- Grid: 3-4 per rad
- Varje person: porträtt (portrait, rundade hörn) + namn + titel
- Inga bios i grid — eventuellt hover/expand
- Placeholder-content

---

### 11. CTA + FOOTER
**Typ:** Konvertering · **Companion:** Navy
**Inspiration:** Xapo CTA-block

**Layout:**
- Mörk bakgrund (`{colors.dark-bg}`), fullbredd
- Centrerad: rubrik (display-lg, vit) + kort text + pill CTA
- "Din framtid börjar med ett samtal."
- Under: minimal footer med kontaktinfo + sociala länkar

---

## Rytm-tabell

| # | Sektion | Typ | Bakgrund | Bredd | Companion |
|---|---------|-----|----------|-------|-----------|
| 1 | Hero | Visuell | Bild (fullbredd) | 100vw | — |
| 2 | Trust | Mikro | Vit | 100vw | Navy |
| 3 | Manifesto | Ord | Vit | 1120px | — |
| 4 | Tjänster | Data/kort | Vit | 1120px | Guld |
| 5 | App | Tech/bento | Warm | 1120px | Navy |
| 6 | Varför | Editorial (split) | Vit → fullbredd | 100vw | Sage |
| 7 | Kalkylator | Interaktiv | Vit | 1120px | Guld |
| 8 | Process | Steg | Vit | 1120px | Sage |
| 9 | Testimonials | Social proof | Warm | 1120px | — |
| 10 | Team | Personligt | Vit | 1120px | Navy |
| 11 | CTA | Konvertering | Mörk | 100vw | Navy |

### Bakgrundsalternering
Vit → vit → vit → vit → **warm** → vit → vit → vit → **warm** → vit → **mörk**

De flesta sektioner är vita. Warm-bakgrunden på App och Testimonials bryter monotonin utan att distrahera. Mörk bakgrund bara i CTA.

---

## Mellanrum-strategi

Mellan sektioner kan vi lägga mikro-element för att undvika att det känns som "block efter block":

| Mellan | Möjligt mikro-element |
|--------|----------------------|
| Hero → Trust | Inget — trust marquee ÄR mikro-elementet |
| Trust → Manifesto | Inget — andrum räcker |
| Manifesto → Tjänster | Hairline divider (gradient fade) |
| Tjänster → App | Inget — bakgrundsbyte (vit→warm) skapar visuell separation |
| App → Varför | Editorial bild, fullbredd, 60vh — visuell andningspaus |
| Varför → Kalkylator | Inget — andrum räcker |
| Kalkylator → Process | Inget — andrum räcker |
| Process → Testimonials | Inget — bakgrundsbyte (vit→warm) |
| Testimonials → Team | Inget — bakgrundsbyte (warm→vit) |
| Team → CTA | Inget — bakgrundsbyte (vit→mörk) |
