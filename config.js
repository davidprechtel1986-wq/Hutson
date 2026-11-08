/* =====================================================================
   HUTSON LIVE – WEBSEITEN-EINSTELLUNGEN
   ---------------------------------------------------------------------
   Hier änderst du ALLE Inhalte der Webseite. Du musst NUR diese Datei
   bearbeiten (z. B. mit Notepad / Editor), speichern und die Seite neu
   laden.

   Regeln:
   • Texte immer in Anführungszeichen "..." lassen.
   • Nach jedem Eintrag kommt ein Komma.
   • Ist ein Wert leer (""), wird der passende Button / Bereich auf der
     Seite AUTOMATISCH ausgeblendet. Praktisch: Facebook leer = kein
     Facebook-Button.
   ===================================================================== */

window.SITE = {

  /* ---------- Name & Kopfbereich ---------- */
  name: "HUTSON LIVE",                       // Name (auch Alt-Text fürs Logo)

  /* ---------- Logo ----------
     full   = großes Logo im Hero (transparent)
     shield = kleines Wappen in Navigation & Footer
     Leer lassen ("") = statt Bild wird der Name als Text-Logo gezeigt.
     Favicon / Vorschaubild für Links (og:image) stehen im <head> von index.html. */
  logo: {
    full:   "logo-hutson-logo-720.png",
    shield: "logo-hutson-shield-128.png"
  },
  slogan: "Mit Hutsi live • Twitch, TikTok & YouTube • Offen für Sponsoren",   // Zeile unter dem Logo
  heroText: "Hutsi ist das Maskottchen von HUTSON LIVE – Headset auf, Hoodie an, bei jedem Stream dabei. Fortnite, Minecraft und viele weitere Games, live auf Twitch, Clips auf TikTok und Videos auf YouTube. Die Marke wächst: Sponsoren und Partner sind willkommen.",

  /* Hutsi, das Maskottchen. Bild liegt neben index.html.
     Leer lassen ("") = im Hero bleibt dein Foto (photo). */
  mascot: "hutsi-mascot.jpg",
  mascotAlt: "Hutsi, das Maskottchen von HUTSON LIVE",
  mascotBadge: "HUTSI",
  mascotTag: "MASKOTTCHEN",

  /* Dein Foto für „Über mich“. Einfach Datei austauschen
     oder hier einen anderen Dateinamen eintragen. Leer = kein Foto. */
  photo: "david.jpg",
  photoAlt: "David – HUTSON LIVE",

  /* Abschnitt „Trefft Hutsi“. image leer = Abschnitt wird ausgeblendet. */
  hutsi: {
    kicker: "Maskottchen",
    title: "Trefft Hutsi",
    lead: "Das Gesicht von HUTSON LIVE – auf Twitch, TikTok und YouTube.",
    image: "hutsi-mascot-original.jpg",
    alt: "Hutsi im lila HUTSON-LIVE-Hoodie mit leuchtendem H",
    text: [
      "Hutsi ist das Maskottchen von HUTSON LIVE: ein kleiner Bär mit Kopfhörern und lila Hoodie, das leuchtende H auf der Brust. Wo der Stream läuft, ist Hutsi mit dabei.",
      "Für Zuschauer ein festes Gesicht, für Sponsoren ein Zeichen, das man wiedererkennt – im Overlay, in Clips und hier auf der Seite."
    ],
    chips: ["Maskottchen", "Twitch", "TikTok", "YouTube", "Sponsoring"]
  },

  /* ---------- Über mich ----------
     Jeder Eintrag in der Liste = ein eigener Absatz. */
  about: [
    "Hey, ich bin David! Unter dem Namen HUTSON LIVE streame ich nicht nur Fortnite, sondern viele verschiedene Games – mal entspannt, mal voll im Sweat-Modus, aber immer mit guter Laune und mit euch im Chat.",
    "Gaming ist für mich mehr als nur zocken: Ich liebe es, gemeinsam mit der Community Siege zu feiern, über Fails zu lachen und neue Season-Inhalte als Erster auszuprobieren.",
    "Neben den Streams betreibe ich auch den Minecraft-Server „Silberstadt“ – ein Ort zum Bauen, Erkunden und Abhängen mit der Community.",
    "Beruflich baue ich mit meinem KI Web Studio Websites & Web-Apps – schau gerne vorbei!"
  ],

  /* ---------- Deine Webseite (KI Web Studio) ---------- */
  website: "https://www.ki-web-studio.de",
  websiteLabel: "KI Web Studio – Websites & Web-Apps",

  /* ---------- Social-Media-Links ----------
     Komplette Adresse eintragen. Leer lassen = Button wird versteckt. */
  socials: {
    twitch:    "https://twitch.tv/hudson2000",
    tiktok:    "https://www.tiktok.com/@videospiel.tv",
    youtube:   "https://www.youtube.com/channel/UCEpRciz1yHu58SWeerFHAKw",   // feste Kanal-Adresse (funktioniert auch nach Handle-Änderung)
    facebook:  "",   // z. B. "https://www.facebook.com/DEIN-NAME"
    instagram: "",   // optional, z. B. "https://www.instagram.com/DEIN-NAME"
    discord:   "https://discord.gg/erUT47vMTK"
  },
  /* Anzeigenamen unter den Logos (nur Text) */
  socialNames: {
    twitch: "hudson2000",
    tiktok: "@videospiel.tv",
    youtube: "David Hutson2000",
    facebook: "",
    instagram: "",
    discord: "Community-Server"
  },

  /* Leere Plattformen in der großen Logo-Übersicht als „bald verfügbar“
     anzeigen (true) oder komplett ausblenden (false). */
  showComingSoon: true,

  /* Twitch-Kanalname für den Live-Player (nur der Name, kein Link) */
  twitchChannel: "hudson2000",

  /* ---------- Kontakt ----------
     Deine E-Mail-Adresse (für Kontakt-, Sponsoring- und Projekt-Buttons).
     ACHTUNG: Platzhalter – bitte deine echte Hotmail-Adresse eintragen! */
  email: "david.prechtel1986@hotmail.de",

  /* ---------- Spenden ----------
     Die IBAN ist eingetragen. PayPal, Kontoinhaber und Bank sind noch
     PLATZHALTER: Solange dort ein Platzhalter (z. B. "DEIN-NAME",
     "VORNAME NACHNAME", "NAME DEINER BANK") oder nichts steht, wird die
     jeweilige Zeile / der PayPal-Button AUTOMATISCH ausgeblendet. */
  donate: {
    paypal: "https://www.paypal.com/myaccount/transfer/homepage/pay",   // PayPal-Senden-Seite
    paypalEmail: "david.prechtel1986@gmail.com",  // PayPal-Adresse
    iban: "DE08 2022 0800 0055 3577 32",          // deine IBAN (Prüfsumme geprüft ✔)
    holder: "VORNAME NACHNAME",                   // Kontoinhaber
    bank: "NAME DEINER BANK",                     // Name der Bank
    bic: "",                                      // optional
    reference: "Spende HUTSON LIVE"               // Verwendungszweck-Vorschlag
  },

  /* ---------- Stream-Zeiten ----------
     Tage und Uhrzeiten frei anpassbar. Einträge löschen oder hinzufügen. */
  schedule: [
    { day: "Montag, 9.11.",      time: "19:00 – 22:00", game: "Fortnite & mehr" },
    { day: "Dienstag, 10.11.",   time: "19:00 – 22:00", game: "Fortnite & mehr" },
    { day: "Mittwoch, 11.11.",   time: "19:00 – 22:00", game: "Fortnite & mehr" },
    { day: "Donnerstag, 12.11.", time: "19:00 – 22:00", game: "Fortnite & mehr" },
    { day: "Freitag, 13.11.",    time: "19:00 – 22:00", game: "Fortnite & mehr" },
    { day: "Samstag, 14.11.",    time: "19:00 – 22:00", game: "Fortnite & mehr" },
    { day: "Sonntag, 15.11.",    time: "19:00 – 22:00", game: "Fortnite & mehr" }
  ],
  scheduleNote: "Alle Zeiten in deutscher Zeit (Europe/Berlin).",

  /* ---------- Werbung & Media Kit ----------
     Reichweite: NUR echte Zahlen eintragen (z. B. "1.250").
     Leer lassen ("") = es steht automatisch „auf Anfrage“ da. */
  stats: [
    { label: "TikTok Follower",       value: "12.6K" },
    { label: "Twitch Follower",       value: "166" },
    { label: "YouTube Abonnenten",    value: "48" },
    { label: "Ø Zuschauer im Stream", value: "" },
    { label: "Stream-Stunden / Monat", value: "" }
  ],
  /* Link zu deinem Media Kit als PDF (optional, z. B. "mediakit.pdf"). Leer = Button versteckt. */
  mediaKitPdf: "HUTSON-LIVE-Media-Kit.pdf",
  /* Werbeformate, die du anbietest (Titel + kurze Beschreibung). */
  adFormats: [
    { icon: "🎮", title: "Stream-Sponsoring",        text: "Deine Marke als Partner eines Streams oder einer ganzen Stream-Reihe – mit Erwähnung, Overlay und Chat-Befehl." },
    { icon: "📦", title: "Produktplatzierung",       text: "Dein Produkt live im Einsatz: Gaming-Gear, Snacks, Drinks oder Apps – ehrlich vorgestellt." },
    { icon: "📱", title: "TikTok- & YouTube-Integration", text: "Eigene Clips oder Integrationen in Videos – kurz, unterhaltsam und auf die Zielgruppe zugeschnitten." },
    { icon: "🎁", title: "Giveaways",                text: "Gewinnspiele im Stream und auf Social Media – bringt Aufmerksamkeit und neue Follower für deine Marke." },
    { icon: "🖼️", title: "Overlay-Branding",         text: "Dein Logo dauerhaft im Stream-Overlay, in Alerts oder auf der Pause-Szene." },
    { icon: "🌐", title: "Website-Banner",           text: "Platzierung deines Logos und Links hier auf der Webseite – im Sponsoren-Bereich." }
  ],

  /* ---------- Sponsoren ----------
     Für jeden Sponsor einen Eintrag:
       { name: "Firma", logo: "images/sponsoren/firma.png", url: "https://..." }
     Leere Plätze zeigen „Dein Logo hier“. Einfach so lassen, bis du Sponsoren hast. */
  sponsors: [
    { name: "", logo: "", url: "" },
    { name: "", logo: "", url: "" },
    { name: "", logo: "", url: "" }
  ],

  /* ---------- Bildergalerie ----------
     So fügst du eigene Fotos hinzu:
       1. Bild (JPG/PNG/WebP) in denselben Ordner wie diese Datei kopieren.
       2. Unten eine Zeile ergänzen:  { src: "meinbild.jpg", title: "Mein Victory Royale" },
       3. Speichern – fertig. Der Titel steht unter dem Bild und in der Großansicht.
     Tipp: Bilder vorher auf ca. 1600 Pixel Breite verkleinern, dann lädt die Seite schneller. */
  gallery: [
    { src: "hutsi-mascot.jpg", title: "Hutsi – das Maskottchen von HUTSON LIVE", featured: true, focus: "center 42%" },
    { src: "hutsi-mascot-original.jpg", title: "Hutsi im HUTSON-LIVE-Hoodie", featured: true, focus: "center 18%" },
    { src: "galerie-01.jpg", title: "Abendstimmung an der Stadtstraße – Minecraft" },
    { src: "galerie-02.jpg", title: "Regen auf dem Stadtplatz – Minecraft" },
    { src: "galerie-03.jpg", title: "Am Stadtrand von Silberstadt – Minecraft" },
    { src: "galerie-04.jpg", title: "Gemütliche Holzhütte – Minecraft" },
    { src: "galerie-05.jpg", title: "Hütte zwischen Birken – Minecraft" },
    { src: "galerie-06.jpg", title: "Unterwegs im Wald – Minecraft" }
  ],

  /* ---------- Projekte ----------
     Jedes Projekt = ein Eintrag. Felder:
       title, tag (kleine Zeile), logo (Bild), text (Beschreibung),
       facts (kurze Stichpunkte), servers (Adressen mit Kopieren-Button),
       buttons (label, url, style: "gold" | "discord" | "ghost" | "mail", icon: "web" | "discord" | "mail"),
       images (Bildergalerie, Klick = großes Bild).
     Bilder vorher auf max. 1600 Pixel Breite verkleinern. Leere Felder werden ausgeblendet. */
  projects: [
    {
      title: "Silberstadt",
      tag: "Minecraft-Server · Java & Bedrock · Stadt-Rollenspiel",
      logo: "projekt-silberstadt-logo.jpg",
      text: "Mein eigener Minecraft-Server: eine lebendige, moderne Stadt mit Rollenspiel. 17 Berufe, Polizei, Rettungsdienst, Post, Kirmes, eigene Bahn, Haustiere zum Hochleveln, über 480 Möbel und eine große Story mit einem Geheimnis unter der Stadt. Ich bin dort Bürgermeister (Hutson2000). Einfach mit der IP rein – ohne Anmeldung, für Java & Bedrock.",
      facts: ["17+ Berufe & Dienste", "484+ 3D-Möbel", "200 Spieler-Plätze", "Live-Karte in 3D", "Wöchentliche Events"],
      servers: [
        { label: "Java Edition (26.3)", value: "silberstadt.com", note: "Mehrspieler → Direkte Verbindung" },
        { label: "Bedrock / Handy / Konsole", value: "188.102.103.129", note: "Port 19132" }
      ],
      buttons: [
        { label: "Zur Silberstadt-Webseite", url: "https://silberstadt.com", style: "gold", icon: "web" },
        { label: "Silberstadt-Discord", url: "https://discord.gg/ehbEKg9E5P", style: "discord", icon: "discord" },
        { label: "Live-Karte", url: "https://karte.silberstadt.com", style: "ghost", icon: "web" }
      ],
      images: [
        { src: "projekt-silberstadt-1.jpg", title: "Silberstadt im Winter (Artwork)" },
        { src: "projekt-silberstadt-3.jpg", title: "Marktplatz bei Nacht" },
        { src: "projekt-silberstadt-4.jpg", title: "Altstadt von Silberstadt" },
        { src: "projekt-silberstadt-2.jpg", title: "Willkommen am Stadttor (Artwork)" },
        { src: "projekt-silberstadt-5.jpg", title: "Stadtbrunnen – Join-Grafik" }
      ]
    },
    {
      title: "Agentur videospiel.tv",
      tag: "Gaming-Agentur · Mitspieler & Creator gesucht",
      logo: "projekt-agentur-logo.jpg",
      text: "Mit meiner Gaming-Agentur videospiel.tv bringe ich Gamer, Streamer und Creator zusammen – für gemeinsame Streams, Events, Turniere und Projekte. Du willst mitzocken oder selbst durchstarten? Komm auf den Discord und bewirb dich im Kanal #bewerbungen.",
      facts: ["Mitspieler gesucht", "Streamer & Creator", "Events & Turniere"],
      servers: [],
      buttons: [
        { label: "Im Discord bewerben", url: "https://discord.gg/erUT47vMTK", style: "discord", icon: "discord" },
        { label: "Per E-Mail bewerben", mail: "Bewerbung Agentur videospiel.tv", style: "mail", icon: "mail" }
      ],
      images: []
    },
    {
      title: "Schrottkönig Tycoon",
      tag: "Eigene Fortnite-Insel (UEFN) · In Arbeit",
      logo: "",
      text: "Meine eigene Fortnite-Insel, gebaut im Unreal Editor for Fortnite: ein Tycoon auf einem Neon-Schrottplatz. Hof claimen, Kasse leeren, nach und nach sechs Maschinen kaufen und mit Rebirth neu durchstarten. Die Insel ist noch in Arbeit und noch nicht veröffentlicht.",
      facts: ["In Arbeit", "4 Höfe", "6 Maschinen", "Rebirth-System"],
      servers: [],
      buttons: [],
      images: []
    },
    {
      title: "Eigene Stream-Tools",
      tag: "Selbst gebaut für meine Streams",
      logo: "",
      text: "Für meine Streams baue ich mir eigene Helfer: Minecraft Stream FX bringt Effekte wie Creeper-Explosion, Totem, Feuerwerk oder Diamanten-Regen per Hotkey ins Bild – auf Wunsch ausgelöst durch TikTok-Geschenke. Dazu kommen ein Countdown-Timer im Minecraft-Look und eine Highlight-Cam, die automatisch Hochformat-Clips für TikTok speichert.",
      facts: ["Minecraft Stream FX", "TikTok-Geschenke → Effekte", "Minecraft-Timer", "Highlight-Cam für TikTok"],
      servers: [],
      buttons: [],
      images: []
    }
  ],

  /* Impressum: steht direkt in der Datei impressum.html (bitte dort ändern). */

  /* Hosting-Anbieter (für die Datenschutzerklärung). Erst eintragen,
     wenn die Seite online ist, z. B. "IONOS SE, Elgendorfer Str. 57, 56410 Montabaur". */
  hosting: ""
};
