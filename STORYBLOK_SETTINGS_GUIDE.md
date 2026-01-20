# ⚙️ Storyblok Settings - Header & Footer Beheer
## Voor Website-beheerders

Dit document beschrijft hoe u de **globale instellingen** van uw website kunt beheren, inclusief navigatiemenu's en contactgegevens.

---

## 📋 Wat zijn Settings?

**Settings** is een speciale pagina in Storyblok die globale configuratie bevat die op **alle pagina's** van uw website wordt gebruikt:

- **Header-menu**: Navigatiekoppelingen bovenaan elke pagina
- **Footer-menu**: Navigatiekoppelingen onderaan elke pagina
- **Contactgegevens**: Telefoon, e-mail, adres (verschijnt in footer)
- **Footer-tekst**: Korte beschrijving van uw organisatie

Deze instellingen hoeven maar één keer te worden ingesteld en verschijnen automatisch overal op de website.

---

## 🎯 Hoe Settings Werken

### De Structuur

```
Settings (speciale pagina)
├── Header Menu (navigatie bovenaan)
│   ├── Menu Item 1 → Link naar pagina
│   ├── Menu Item 2 → Link naar pagina
│   └── Menu Item 3 → Link naar pagina
├── Footer Menu (navigatie onderaan)
│   ├── Menu Item 1 → Link naar pagina
│   ├── Menu Item 2 → Link naar pagina
│   └── Menu Item 3 → Link naar pagina
└── Contactgegevens
    ├── Telefoon
    ├── E-mail
    ├── Straatnaam
    ├── Huisnummer
    └── Plaats
```

### Hoe Deze Verschijnen op de Website

**Header** (bovenaan elke pagina):
```
[Logo]  Home    Over Ons    Agenda    Contact    Media
```

**Footer** (onderaan elke pagina):
```
Gospelkoor Candela          | Navigatie              | Contact
Korte beschrijving...       | • Home                 | 📱 06-12345678
                           | • Over Ons              | ✉️ info@candela.nl
                           | • Agenda                | 📍 Straat 42, Amsterdam
                           | • Contact               |
                           | • Media                 | 🌐 Instagram Facebook
```

---

## 🛠️ Settings Bewerken

### Stap 1: Settings Pagina Openen

1. Log in bij Storyblok
2. Zoek naar **"Settings"** in de paginalijst (meestal bovenaan)
3. Klik erop om te openen

### Stap 2: Klik "Bewerken"

Klik op de blauwe **"Bewerken"** knop in de rechterbovenhoek.

---

## 📝 Header Menu Beheren

### Menu Items Toevoegen

1. Scroll naar **"Header Menu"** sectie
2. Klik op de **"+"** knop om een nieuw menu-item toe te voegen
3. Vul in:
   - **Label**: De tekst die in het menu verschijnt (bijv. "Over Ons")
   - **Link**: Selecteer de pagina waarnaartoe dit koppelingspunt
4. Klik opslaan

### Voorbeeld Menustructuur

| Label | Link |
|-------|------|
| Home | home |
| Over Ons | about |
| Agenda | agenda |
| Contact | contact |
| Media | media |

### Menu Item Verplaatsen

- Sleep menu-items naar boven/beneden om volgorde te wijzigen
- De volgorde bepaalt hoe ze in het menu verschijnen

### Menu Item Verwijderen

- Klik het **prullenbak-pictogram** naast het menu-item
- Bevestig verwijdering

---

## 📝 Footer Menu Beheren

### Menu Items Toevoegen

1. Scroll naar **"Footer Menu"** sectie
2. Klik op de **"+"** knop om een nieuw menu-item toe te voegen
3. Vul in:
   - **Label**: De tekst in de voettekst (bijv. "Privacybeleid")
   - **Link**: Selecteer de pagina of voer URL in
4. Klik opslaan

### Footer Menu Inhoud

De footer menu wordt onderaan de website weergegeven in de kolom "Navigatie":

```
Navigatie
• Home
• Over Ons
• Agenda
• Rehearsals
• Contact
• Media
```

### Beste Praktijken

✅ **DOE:**
- Houd voettekst-items beperkt (5-8 items maximum)
- Gebruik dezelfde items als header menu
- Voeg aanvullende items toe als: "Privacybeleid", "Voorwaarden"

❌ **NIET DOEN:**
- Voeg te veel items toe (makes footer romelig)
- Gebruik verschillende links voor dezelfde pagina
- Verwijder alle menu-items

---

## 📞 Contactgegevens Beheren

### Contactinformatie Locaties

De contactgegevens verschijnen op deze plekken:

1. **Footer** (rechterkant):
   - Telefoonnummer (met belkoppeling)
   - E-mailadres (met mailkoppeling)
   - Straat, huisnummer, plaats

2. **Contact Pagina** (kan gebruikt worden in formulieren)

### Contact Velden Bijwerken

1. Scroll naar **Contact** sectie in Settings
2. Werk volgende velden bij:

#### **Telefoon**
- Veld: `phoneNumber`
- Format: `06-12345678` of `+31612345678`
- Dit wordt klikbaar in de footer

#### **E-mailadres**
- Veld: `e` (kan onhandig namen zijn, kan zijn `email`)
- Format: `info@candela.nl`
- Dit wordt klikbaar in de footer

#### **Straat**
- Veld: `street`
- Voorbeeld: "Hoofdstraat"

#### **Huisnummer**
- Veld: `houseNumber`
- Voorbeeld: "42" of "42A"

#### **Plaats**
- Veld: `city`
- Voorbeeld: "Amsterdam"

#### **Footer Tekst**
- Veld: `footerText`
- Dit is de korte beschrijving van uw organisatie
- Wordt weergegeven in footer
- Voorbeeld: "Gospelkoor Candela brengt inspirerende kerkmuziek voor iedereen"

### Contact Voorbeeld

**In Footer:**
```
📱 06-87654321
✉️ info@gospelkoor-candela.nl
📍 Concertplein 42, Amsterdam
```

---

## 🌐 Links Toevoegen/Wijzigen

### Interne Links (naar pagina's op website)

1. Klik op het linksveld
2. Het opent een pagina-kiezer
3. Zoek en selecteer de pagina
4. De link wordt automatisch ingesteld

### Externe Links (naar buiten de website)

1. Klik op het linksveld
2. Selecteer "External Link" (als beschikbaar)
3. Plak de volledige URL (inclusief `https://`)
4. Voorbeeld: `https://www.instagram.com/gospelkoor_candela/`

---

## 💾 Wijzigingen Publiceren

1. Alle wijzigingen worden **automatisch opgeslagen**
2. Wijzigingen worden direct op de website zichtbaar
3. Kan tot **enkele seconden** duren voordat de website bijwerkt

### Wijzigingen Verifiëren

1. Sla alle wijzigingen op
2. Ga naar uw website
3. Vernieuw de pagina (F5 of Cmd+R)
4. Controleer dat menu's en contactgegevens zijn bijgewerkt

---

## 🎨 Menu Stijl & Uiterlijk

### Hoe Ziet Het Menu Eruit?

**Op Desktop:**
```
Logo     Home  |  Over Ons  |  Agenda  |  Contact  |  Media
```
- Horizontaal menu
- Boven op elke pagina

**Op Mobiel:**
```
Logo              ☰
        Home
        Over Ons
        Agenda
        Contact
        Media
```
- Hamburger menu (☰)
- Klikken om uit te klappen
- Verticaal menu

### Uiterlijk Menu Items

- **Normale staat**: Donkergrijs tekst
- **Bij hoveren**: Blauw tekst met underline
- **Actieve pagina**: Kan anders opgemaakt worden (afhankelijk van implementatie)

---

## ⚠️ Belangrijke Tips

### Voor Menu's

✅ **Houd menu's logisch**
- Groepeer gerelateerde items
- Zet meest bezochte items vooraan
- Gebruik duidelijke benamingen

✅ **Zorg voor consistentie**
- Header en Footer hebben meestal dezelfde items
- Voeg extra Footer-items toe als nodig (bijv. juridische koppelingen)

❌ **Vermijden**
- Lege menu-items
- Broken links (verwijderde pagina's)
- Te veel menu-items (meer dan 8-10)
- Spellingsfouten in labels

### Voor Contactgegevens

✅ **Zorg dat info actueel is**
- Update telefoonnummer bij wijziging
- Werk adres bij bij verhuizing
- Controleer e-mailadres regelmatig

✅ **Format Correct**
- Telefoon: Inclusief landcode of normale notatie
- E-mail: Geldige e-mailadres met @
- Adres: Straat, huisnummer, plaats

❌ **Vermijden**
- Onjuiste contactgegevens
- Verlopen e-mailadressen
- Onvolledig adres

---

## 🔍 Wat Verandert op de Website?

### Direct Effect Zichtbaar

| Wijziging | Waar Zichtbaar | Effect |
|-----------|----------------|--------|
| Header Menu Label | Bovenaan alle pagina's | Menu-tekst bijgewerkt |
| Header Menu Link | Bovenaan alle pagina's | Koppeling naar pagina |
| Footer Menu Items | Voettekst | Menu-items bijgewerkt |
| Telefoonnummer | Voettekst | Nummer bijgewerkt |
| E-mailadres | Voettekst | Adres bijgewerkt |
| Adres | Voettekst | Adres bijgewerkt |
| Footer Tekst | Voettekst | Beschrijving bijgewerkt |

### Timing

- **Opslaan**: Direct opgeslagen in Storyblok
- **Website Update**: Meestal 1-5 seconden
- **Cache**: Soms moet browser-cache gewist worden (Ctrl+Shift+Del)

---

## 🆘 Problemen Oplossen

### Menu Verschijnt Niet

1. Controleer of menu-items correct zijn gekoppeld aan pagina's
2. Verifieer dat pagina's gepubliceerd zijn
3. Vernieuw website (Ctrl+F5)
4. Wis browser-cache

### Telefoon/E-mail niet Klikbaar

1. Controleer het format:
   - Telefoon moet `tel:` format hebben
   - E-mail moet geldig e-mailadres zijn
2. Zorg dat het veld correct is gevuld
3. Vernieuw website

### Menu Items in Verkeerde Volgorde

1. Ga terug naar Settings
2. Sleep menu-items in juiste volgorde
3. Opslaan
4. Vernieuw website

### Link Werkt Niet

1. Controleer of gekoppelde pagina bestaat
2. Controleer of pagina gepubliceerd is
3. Voor externe links: Zorg dat URL `https://` bevat
4. Test het linkje handmatig

---

## 📚 Geavanceerde Tips

### Wanneer Settings Wijzigen?

- **Maandelijks**: Controleer contact-info op juistheid
- **Bij rebranding**: Update footer-tekst
- **Bij menu-herstructurering**: Wijzig menu-items
- **Bij verhuizing**: Update adres

### Best Practices

1. **Plan Wijzigingen**: Update niet tijdens spitsuren
2. **Test Alles**: Na wijziging pagina vernieuwen en controleren
3. **Backup Namen**: Noteer oude waarden voordat u verandert
4. **Consistentie**: Menu-items moeten consistent zijn

### Ondersteuning

- Fout in Settings? Neem contact op met beheerder
- Wilt u menu-items toevoegen/verwijderen? Beheerder kan helpen
- Vragen over layout? Alleen beheerder kan dit wijzigen

---

## 📋 Checklist voor Settings-beheer

Maandelijkse controle:

- [ ] Telefoonnummer is actueel
- [ ] E-mailadres is actueel
- [ ] Adres is correct
- [ ] Menu-items zijn correct en werkend
- [ ] Alle koppelingen werken
- [ ] Footer-tekst is actueel

Bij pagina-wijzigingen:

- [ ] Nieuwe pagina in header menu?
- [ ] Nieuwe pagina in footer menu?
- [ ] Verwijderde pagina uit menu's?
- [ ] Links naar pagina bijgewerkt?

---

## 💡 Samenvatting

**Settings is waar u definieert:**
- ✅ Navigatie (Header & Footer menu)
- ✅ Contactgegevens (tel, email, adres)
- ✅ Footer-tekst (organisatiebeschrijving)

**Dit beïnvloedt:**
- ✅ Alle pagina's op uw website
- ✅ Hoe bezoekers navigeren
- ✅ Hoe bezoekers u bereiken

**Wijzigingen zijn onmiddellijk live** zodra u opslaat!

---

*Deze handleiding helpt u Settings in Storyblok te beheren. Voor technische vragen contacteer uw beheerder.*

*Laatst bijgewerkt: januari 2026*
