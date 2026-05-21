---
version: v2
name: "Addeqt"
description: >
  Addeqt är oberoende förmögenhetsrådgivning i Stockholm. Designen talar med tyst
  lyx — editorial typografi, fullbleed-bilder, och generöst utrymme. Navy (#242748)
  är varumärkets puls. Layouten hämtar från editorial magazine-design och private
  banking: asymmetriska grids, stora rubriker som äger hela vyer, och visuell
  storytelling som aldrig behöver skrika. Varje sektion är sin egen scen med eget
  andetag. Elevation via glassmorphism och 1px hairlines — aldrig skuggor.

# ─── FEELING DIALS ───
# Volym:    7 (Editorial statement – clamp 48-80px, tar sin plats)
# Vikt:     300 / -0.03em (Whisper-thin, editorial)
# Andning:  9 (Generous – 128px+ section padding)
# Bredd:    1120px content, fullbleed editorial
# Rundning: 4px cards, 16-20px bentos, pill buttons
# Densitet: 16px/1.6 (Standard-readable)
# Djup:     Glassmorphism + hairlines (inga skuggor)

# ─── DESIGN LANGUAGE ───
# Den editorial riktningen definieras av tre sektioner som sätter tonen:
# 1. Hero — Fullbleed bild, stor tunn rubrik, editorial overlay
# 2. Manifesto — GSAP word-reveal, andas
# 3. ServicesScroll — Fullbleed tjänstebilder, stor typo, nyckeltal i sidled
#
# Alla övriga sektioner hämtar sin karaktär härifrån.
# Principen: om en sektion inte hade kunnat finnas i ett premium finansmagasin,
# hör den inte hemma.

colors:
  # ── Primary (Navy – loggan, allt primärt) ──
  primary: "#242748"
  primary-hover: "#1a1d36"
  primary-focus: "#32356a"
  on-primary: "#FFFFFF"

  # ── Companion: Sage (sekundär accent – editorial, natur, trygghet) ──
  sage: "#7A8C6E"
  sage-dim: "rgba(122, 140, 110, 0.08)"
  sage-border: "rgba(122, 140, 110, 0.25)"

  # ── Companion: Gold (tertiär accent – premium, stats) ──
  gold: "#C4A882"
  gold-dim: "rgba(196, 168, 130, 0.08)"
  gold-border: "rgba(196, 168, 130, 0.25)"

  # ── Ink (text hierarchy) ──
  ink: "#242748"
  ink-muted: "#5A5D7A"
  ink-subtle: "#86868b"

  # ── Surfaces ──
  canvas: "#FFFFFF"
  canvas-warm: "#FAFAF8"
  surface-1: "#F5F5F7"
  surface-2: "#EFEFEF"
  surface-3: "#E8E8ED"

  # ── Borders ──
  hairline: "rgba(36, 39, 72, 0.08)"
  hairline-strong: "rgba(36, 39, 72, 0.15)"

  # ── Navy section (editorial dark break) ──
  navy-bg: "#242748"
  navy-surface: "rgba(255, 255, 255, 0.06)"
  navy-ink: "#FFFFFF"
  navy-ink-muted: "rgba(255, 255, 255, 0.5)"
  navy-ink-subtle: "rgba(255, 255, 255, 0.3)"
  navy-hairline: "rgba(255, 255, 255, 0.1)"
  navy-hairline-gradient: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)"

  # ── Semantic ──
  semantic-success: "#34C759"
  semantic-error: "#FF3B30"

typography:
  display-xl:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(3rem, 5.5vw, 5rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.03em"
    note: "Hero, fullbleed tjänsterubriker (t.ex. 'Skatteoptimering')"
  display-lg:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3.5rem)"
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: "-0.03em"
    note: "Section statements, editorial headings, CTA-rubriker"
  headline:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
    note: "Sub-section headings, bento-titlar"
  subhead:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 2vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
    note: "Card titles, feature names"
  body-lg:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
    note: "Lead paragraphs, intro text"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "15-16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
    note: "Default body text, descriptions"
  body-sm:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
  caption:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
  button:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14-15px"
    fontWeight: 500-600
    lineHeight: 1.0
    letterSpacing: "0.01em"
  eyebrow:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: "0.1-0.15em"
    textTransform: "uppercase"
    note: "Section labels, meta-data"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
    note: "Data labels, trust elements, nyckeltal-labels"
  stat-value:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)"
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: "-0.03em"
    note: "Stora siffror — AUM, procent, nyckeltal"

spacing:
  section: "clamp(8rem, 12vw, 12rem)"
  section-inner: "clamp(4rem, 6vw, 6rem)"
  section-micro: "clamp(3rem, 4vw, 4rem)"

rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  xl: "20px"
  pill: "9999px"
---

# Addeqt – Design System v2

## Brand Essence

Addeqt är oberoende förmögenhetsrådgivning för segmentet 5–50 MSEK. FI-tillstånd sedan 2023, Nordnet som depå, fast avgift utan egna fonder. Allt signalerar: vi är på din sida.

Designen ska kännas som att bläddra i ett premium finansmagasin — varje uppslag har sitt eget andetag, sin egen berättelse. Inte en broschyr, inte en bank. En rådgivare som vet vad den gör och inte behöver bevisa det.

**Nyckelord:** Tyst lyx. Editorial. Private banking. Inbjudande.

## Design Language — De tre pelarna

Hela sidans visuella riktning definieras av tre sektioner som sätter tonen:

### 1. Hero — Fullbleed storytelling
Fullbleed bild som äger hela viewporten. Stor tunn rubrik (Manrope 300) överlagrad. Subtil gradient-overlay för läsbarhet. Bilden bär känslan, typografin bär budskapet.

### 2. Manifesto — Andningspaus
GSAP word-by-word opacity reveal. Stor tunn text mot vit bakgrund. Inget annat. Sektionen existerar för att besökaren ska stanna upp och läsa.

### 3. Services — Editorial spreads
Varje tjänst äger en hel vy. Fullbleed bild, stor rubrik, nyckeltal i sidled. Asymmetrisk layout som en tidningsspread. Navigering via vänstermeny.

**Regeln:** Om en sektion inte hade kunnat finnas i ett premium finansmagasin, hör den inte hemma.

## Color Philosophy

Navy (#242748) ÄR Addeqt. Det är loggan, rubrikerna, knapparna, identiteten. Den ska finnas överallt.

Sage (#7A8C6E) och Gold (#C4A882) är companion-accenter som **aldrig möts i samma sektion**. Sage = trygghet, editorial. Gold = premium, nyckeltal.

### Navy som sektionsbakgrund
Navy används för editorial pauser — statements, nyckeltal, CTA-block. På navy-bakgrund:
- Text: `#FFFFFF` med opacity-nivåer (0.85 primär, 0.5 sekundär, 0.3 subtil)
- Linjer: `rgba(255,255,255,0.15)` gradient som fades från kanterna
- Inga geometriska mönster eller SaaS-patterns — låt typografin och siffrorna bära

## Typography Philosophy

Manrope 300 på rubriker skapar den editorial, tunna känslan: "vi behöver inte skrika." Vikten 300 med negativ tracking (-0.03em) ger rubriker som känns eftertänksamma.

**Stor typografi tar plats.** Tjänsterubriker kan vara 5rem+. Statement-text kan spänna över 800px. Siffrorna i nyckeltal ska vara stora nog att vara en designelement i sig.

Brödtext i Manrope 400 vid 15-16px med generös radavstånd (1.6). Varje stycke: 2-3 rader max.

JetBrains Mono på eyebrows, data-labels och nyckeltal-labels ger tech-precision under editorial ytan.

## Layout Philosophy

### Editorial asymmetri
Undvik centrerade, symmetriska grids som standard. Föredra:
- Stor rubrik vänster + beskrivning höger
- Fullbleed bild + overlayad text
- Nyckeltal spridda i sidled (inte i en centrerad rad)
- Staggered/offset element som skapar rörelse

### Bento grids
Bento-sektioner använder asymmetriska CSS Grid-layouts med varierade storlekar. Varje kort har glassmorphism-effekt:
- `backdrop-filter: blur(20px)`
- `border: 1px solid rgba(255,255,255,0.08)` (ljus bakgrund) eller `rgba(255,255,255,0.1)` (navy)
- Rounded: 16-20px
- Generös inre padding

### Pacing
Varje sektion äger sin viewport. 128px+ mellan huvudsektioner. Alternera:
- Visuellt tung sektion (bild/bento)
- Andningspaus (statement/CTA)
- Visuellt tung sektion

Aldrig två tunga sektioner i rad utan paus.

## Elevation & Depth

### Glassmorphism (primär elevation)
Bentos och utvalda kort använder glassmorphism:
- `backdrop-filter: blur(12-20px)`
- Semi-transparent bakgrund
- 1px hairline border
- Subtil inre glow: `box-shadow: inset 0 1px 0 rgba(255,255,255,0.05)`

### Surface ladder (sekundär elevation)
- canvas (#FFFFFF) → surface-1 (#F5F5F7) → surface-2 (#EFEFEF)
- Elevation via bakgrundsskifte + hairline, aldrig box-shadow

### Borders
- `1px solid rgba(36,39,72,0.08)` default
- `1px solid rgba(36,39,72,0.15)` hover/strong
- Gradient-linjer (fades från kanterna) för horisontella delningslinjer

**Inga box-shadow.** Flat = confident.

## Components

### Buttons
**Primary pill** — Filled navy, pill-shape, Manrope 500-600
- On navy bg: outlined (1px rgba(255,255,255,0.2)), hover inverts till vit fill
- On light bg: filled navy (#242748), hover darkens

**Ghost pill** — Outlined, transparent bg
- Hover: subtil surface-1 fill

### Cards & Bentos
**Bento card** — Glassmorphism, 16-20px rounded, generous padding
- Kan innehålla: ikoner, stats, interaktiva element
- Hover: border-color intensifieras, subtle lift

**Feature card** — surface-1 bg, 4px rounded, 1px hairline
- Hover: border-color shifts till companion accent

### Navy CTA Section
Editorial dark break med:
- Eyebrow label (mono, uppercase, 0.35 opacity)
- Stort statement i display-lg, vit
- Gradient divider-linje
- Nyckeltal-grid (stat-value + mono label)
- Pill CTA-knapp med hover-inversion
- Generöst vertikalt space

### Navigation
- Sticky, backdrop-blur(12px), height 64px
- Logo vänster, links center, CTA höger
- Pill-style CTA i nav

### Trust Marquee
- Full-width, infinite horizontal scroll
- JetBrains Mono eyebrow-style
- Items separerade med em dash

## Section Pacing (Startsida)

| # | Sektion | Ton | Bakgrund |
|---|---------|-----|----------|
| 1 | Hero | Fullbleed bild + stor tunn rubrik | Bild |
| 2 | TrustMarquee | Löpande trust-band | Vit |
| 3 | LogoGrid | Partner-logotyper | Vit/warm |
| 4 | Manifesto | GSAP word-reveal, andningspaus | Vit |
| 5 | ServicesScroll | Fullbleed editorial tjänstebilder | Bild |
| 6 | EnterpriseBento | Glassmorphism bento-grid | Ljus |
| 7 | Navy CTA | Statement + nyckeltal + CTA | Navy |
| 8 | AppBento | App-showcase bento | Ljus |
| 9 | EditorialBreak | Editorial bildsektion | Vit |
| 10 | ValueCards | Värdekort | Ljus |
| 11 | ProcessSteps | Processsteg | Vit |
| 12 | CTAFooter | Avslutande CTA + footer | Navy/dark |

## Do's

1. Låt typografin ta plats — stora tunna rubriker (300) ÄR varumärket
2. Varje sektion äger sin viewport — 128px+ padding, ingen trängsel
3. Asymmetrisk > symmetrisk — editorial känsla framför SaaS-grid
4. Bilder bär känsla — fullbleed, editorial kvalitet, aldrig stock-look
5. Navy för editorial pauser — statements, CTA, nyckeltal
6. Glassmorphism för elevation — blur + hairline, aldrig skuggor
7. Sage ELLER Gold per sektion — aldrig båda
8. Nyckeltal som designelement — stora siffror, mono-labels, generous space
9. Tunn divider-linje med gradient fade — inte hård 100% linje

## Don'ts

1. Inga SaaS-patterns — geometriska linjer, hover-animerade bakgrundsmönster etc.
2. Ingen vikt över 300 på display-rubriker — editorial luft kollapsar
3. Inga box-shadows — flat = confident
4. Sage + Gold i samma sektion = förbjudet
5. Inga generiska feature-listor — varje tjänst förtjänar sin egen editorial moment
6. Ingen border-radius >8px på feature-cards (bentos undantagna)
7. Inga gradient-bakgrunder på sektioner — vit, warm, eller navy
8. Inte >7 ord per rubrik
9. Aldrig två visuellt tunga sektioner i rad utan andningspaus

## Responsive

| Breakpoint | Nyckeländringar |
|---|---|
| Desktop ≥1280px | Full layout, 1120px container, asymmetrisk grid |
| Tablet 768-1279px | 2-col, reduce section-padding, stack splits |
| Mobile <768px | 1-col, hero text bottom-aligned, hamburger nav |

## Known Gaps

- Animation timing tokens (GSAP durations, easing)
- Dark mode (utöver navy-sektioner)
- Form/kontakt-styling
- Mobile nav animation
- Testimonial card design
- Team card design
