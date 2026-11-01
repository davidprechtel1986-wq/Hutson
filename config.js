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
  slogan: "Gaming-Creator • Fortnite & viele weitere Games • Offen für Sponsoren",   // Zeile unter dem Logo
  heroText: "Gaming-Streams voller Action – Fortnite, Minecraft und viele weitere Games, Clips auf TikTok & YouTube und eine Community, die wächst. Ich starte im Gaming richtig durch – und suche Marken & Partner, die mit dabei sein wollen.",

  /* Dein Foto (liegt im Ordner images/). Einfach Datei austauschen
     oder hier einen anderen Dateinamen eintragen. Leer = kein Foto. */
  photo: "david.jpg",
  photoAlt: "David – HUTSON LIVE",

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
    youtube:   "",   // TODO: YouTube-Kanal-Link von „David Hutson2000“ eintragen, z. B. "https://www.youtube.com/@DEIN-HANDLE"
    facebook:  "",   // z. B. "https://www.facebook.com/DEIN-NAME"
    instagram: "",   // optional, z. B. "https://www.instagram.com/DEIN-NAME"
    discord:   ""    // optional, Einladungslink z. B. "https://discord.gg/XXXXXX"
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
    paypal: "https://paypal.me/DEIN-NAME",        // dein PayPal.me-Link
    iban: "DE08 2022 0800 0055 3577 32",          // deine IBAN (Prüfsumme geprüft ✔)
    holder: "VORNAME NACHNAME",                   // Kontoinhaber
    bank: "NAME DEINER BANK",                     // Name der Bank
    bic: "",                                      // optional
    reference: "Spende HUTSON LIVE"               // Verwendungszweck-Vorschlag
  },

  /* ---------- Stream-Zeiten ----------
     Tage und Uhrzeiten frei anpassbar. Einträge löschen oder hinzufügen. */
  schedule: [
    { day: "Sonntag, 1.11.",    time: "19:00 – 22:00", game: "Fortnite" },
    { day: "Montag, 2.11.",     time: "19:00 – 22:00", game: "Fortnite & mehr" },
    { day: "Dienstag, 3.11.",   time: "19:00 – 22:00", game: "Fortnite & mehr" },
    { day: "Mittwoch, 4.11.",   time: "19:00 – 22:00", game: "Fortnite & mehr" },
    { day: "Donnerstag, 5.11.", time: "19:00 – 22:00", game: "Fortnite & mehr" },
    { day: "Freitag, 6.11.",    time: "19:00 – 22:00", game: "Fortnite & mehr" },
    { day: "Samstag, 7.11.",    time: "19:00 – 22:00", game: "Fortnite & mehr" },
    { day: "Sonntag, 8.11.",    time: "19:00 – 22:00", game: "Fortnite & mehr" }
  ],
  scheduleNote: "Alle Zeiten in deutscher Zeit. Spontane Streams kündige ich auf TikTok an!",

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
       1. Bild (JPG/PNG/WebP) in den Ordner  images/galerie/  kopieren.
       2. Unten eine Zeile ergänzen:  { src: "images/galerie/meinbild.jpg", title: "Mein Victory Royale" },
       3. Speichern – fertig. Die Platzhalter-Bilder (bild1–bild6) kannst du
          einfach löschen oder durch eigene Bilder mit gleichem Namen ersetzen.
     Tipp: Bilder vorher auf ca. 1600 Pixel Breite verkleinern, dann lädt die Seite schneller. */
  gallery: [
    { src: "galerie-bild1.jpg", title: "Platzhalter 1" },
    { src: "galerie-bild2.jpg", title: "Platzhalter 2" },
    { src: "galerie-bild3.jpg", title: "Platzhalter 3" },
    { src: "galerie-bild4.jpg", title: "Platzhalter 4" },
    { src: "galerie-bild5.jpg", title: "Platzhalter 5" },
    { src: "galerie-bild6.jpg", title: "Platzhalter 6" }
  ],

  /* Impressum: steht direkt in der Datei impressum.html (bitte dort ändern). */

  /* Hosting-Anbieter (für die Datenschutzerklärung). Erst eintragen,
     wenn die Seite online ist, z. B. "IONOS SE, Elgendorfer Str. 57, 56410 Montabaur". */
  hosting: ""
};
