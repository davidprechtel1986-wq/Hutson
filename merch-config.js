/* HUTSON LIVE – Merch-Produkte.
   HIER die echten Shop-Links eintragen, sobald die Shops stehen:
   - kofi:       Ko-fi-Artikel-Link, z. B. https://ko-fi.com/s/abc123 (führt direkt zum Bezahlen)
   - spreadshop: Spreadshop-Artikel-Link, z. B. https://hutsonlive.myspreadshop.de/a-A123456789
   - fourthwall: Fourthwall-Produkt-Link (Phase 2)
   Leer ("") = der Button führt zur Shop-Startseite (shops.*). soon:true = „Bald verfügbar“, ohne Kauf-Link. */
window.MERCH = {
  shops: {
    kofi: "",        // Ko-fi-Shop-Startseite, z. B. https://ko-fi.com/hutsonlive/shop
    spreadshop: "https://hutsonlive.myspreadshop.de/",  // Shop-Startseite: Fallback für Produkte ohne eigenen Artikel-Link
    fourthwall: ""   // Phase 2
  },
  products: [
    /* ---------- Digital (Ko-fi, sofort per Download) ---------- */
    { id:"story-heft", cat:"digital", shop:"kofi", name:"Story-Heft „Hutsi & Freunde“", sub:"PDF · Erstausgabe Weihnachten 2026", price:"4,99", img:"merch/merch-story-heft.jpg", badge:"NEU", soon:true, link:"" },
    { id:"wallpaper", cat:"digital", shop:"kofi", name:"Hutsi Handy-Wallpaper-Pack", sub:"5 Hintergründe · Gaming & Winter", price:"1,99", img:"merch/merch-wallpaper.jpg", soon:true, link:"" },

    /* ---------- Kleidung (Spreadshop) ---------- */
    { id:"tshirt", cat:"kleidung", shop:"spreadshop", name:"T-Shirt „Hutsi“", sub:"Unisex & Frauen · S–3XL", price:"22,99", img:"merch/merch-tshirt.jpg", badge:"TOP", link:"" },
    { id:"hoodie", cat:"kleidung", shop:"spreadshop", name:"Hoodie „Hutsi“", sub:"Unisex · kuschelig warm", price:"34,99", img:"merch/merch-hoodie.jpg", link:"" },
    { id:"polo", cat:"kleidung", shop:"spreadshop", name:"Polo-Shirt", sub:"Kleines Hutsi-Logo auf der Brust", price:"27,99", img:"merch/merch-polo.jpg", link:"" },
    { id:"kinder-shirt", cat:"kleidung", shop:"spreadshop", name:"Kinder-T-Shirt", sub:"Für die kleinen Fans", price:"17,99", img:"merch/merch-kinder-shirt.jpg", soon:true, link:"" },
    { id:"kinder-hoodie", cat:"kleidung", shop:"spreadshop", name:"Kinder-Hoodie", sub:"Für die kleinen Fans", price:"31,99", img:"merch/merch-kinder-hoodie.jpg", soon:true, link:"" },
    { id:"cap", cat:"kleidung", shop:"spreadshop", name:"Cap", sub:"Baseballkappe, verstellbar", price:"22,99", img:"merch/merch-cap.jpg", link:"" },
    { id:"muetze", cat:"kleidung", shop:"spreadshop", name:"Bommelmütze", sub:"Für den Winter", price:"21,99", img:"merch/merch-muetze.jpg", soon:true, link:"" },
    { id:"socken", cat:"kleidung", shop:"spreadshop", name:"Socken", sub:"Tennissocken mit Hutsi", price:"21,99", img:"merch/merch-socken.jpg", soon:true, link:"" },

    /* ---------- Zuhause & Gaming (Spreadshop) ---------- */
    { id:"tasse", cat:"zuhause", shop:"spreadshop", name:"Tasse „Hutsi“", sub:"Keramik · 330 ml", price:"16,99", img:"merch/merch-tasse.jpg", badge:"TOP", link:"" },
    { id:"mousepad", cat:"zuhause", shop:"spreadshop", name:"Gaming-Mousepad groß", sub:"Für dein Setup", price:"17,99", img:"merch/merch-mousepad.jpg", link:"" },
    { id:"poster", cat:"zuhause", shop:"spreadshop", name:"Poster", sub:"40 × 60 cm", price:"12,99", img:"merch/merch-poster.jpg", soon:true, link:"" },
    { id:"kissen", cat:"zuhause", shop:"spreadshop", name:"Sofakissen mit Füllung", sub:"45 × 45 cm", price:"22,99", img:"merch/merch-kissen.jpg", link:"" },
    { id:"trinkflasche", cat:"zuhause", shop:"spreadshop", name:"Trinkflasche", sub:"750 ml mit Karabiner", price:"21,99", img:"merch/merch-trinkflasche.jpg", soon:true, link:"" },
    { id:"puzzle", cat:"zuhause", shop:"spreadshop", name:"Puzzle", sub:"19 × 28 cm", price:"14,99", img:"merch/merch-puzzle.jpg", soon:true, link:"" },
    { id:"stoffbeutel", cat:"zuhause", shop:"spreadshop", name:"Stoffbeutel", sub:"Baumwolle", price:"16,99", img:"merch/merch-stoffbeutel.jpg", link:"" },
    { id:"sticker", cat:"zuhause", shop:"spreadshop", name:"Sticker", sub:"10 × 10 cm", price:"4,99", img:"merch/merch-sticker.jpg", link:"" },
    { id:"buttons", cat:"zuhause", shop:"spreadshop", name:"Buttons (5er-Set)", sub:"Zum Anstecken", price:"9,99", img:"merch/merch-buttons.jpg", soon:true, link:"" },
    { id:"schluesselanhaenger", cat:"zuhause", shop:"spreadshop", name:"Schlüsselanhänger", sub:"Aluminium", price:"9,99", img:"merch/merch-schluesselanhaenger.jpg", soon:true, link:"" },


    /* ---------- Neue Weihnachtsmotive 2026, direkt im Spreadshop ---------- */
    { id:"xmas-shirt-schrift", cat:"weihnachten", shop:"spreadshop", name:"T-Shirt „Frohe Weihnachten“", sub:"Unisex & Frauen · S–3XL", price:"22,99", img:"merch/xmas-motiv-schriftzug.jpg", badge:"XMAS", soon:false, link:"https://hutsonlive.myspreadshop.de/frohe+weihnachten+von+hutson+live-A3289b4fd09903219?sellable=ro11wzmr8c2h-6" },
    { id:"xmas-tasse-schrift", cat:"weihnachten", shop:"spreadshop", name:"Tasse „Frohe Weihnachten“", sub:"Keramik · Schriftzug-Motiv", price:"16,99", img:"merch/xmas-motiv-schriftzug.jpg", badge:"XMAS", soon:false, link:"https://hutsonlive.myspreadshop.de/frohe+weihnachten+von+hutson+live-A3289b4fd09903219?sellable=ro11wzmr8c2h-31" },
    { id:"xmas-hoodie-schrift", cat:"weihnachten", shop:"spreadshop", name:"Hoodie „Frohe Weihnachten“", sub:"Unisex · kuschelig warm", price:"34,99", img:"merch/xmas-motiv-schriftzug.jpg", badge:"XMAS", soon:false, link:"https://hutsonlive.myspreadshop.de/frohe+weihnachten+von+hutson+live-A3289b4fd09903219?sellable=ro11wzmr8c2h-1047" },
    { id:"xmas-beanie-schrift", cat:"weihnachten", shop:"spreadshop", name:"Bommelmütze „Frohe Weihnachten“", sub:"Für den Winter", price:"21,99", img:"merch/xmas-motiv-schriftzug.jpg", badge:"XMAS", soon:false, link:"https://hutsonlive.myspreadshop.de/frohe+weihnachten+von+hutson+live-A3289b4fd09903219?sellable=ro11wzmr8c2h-5053" },
    { id:"xmas-sweater", cat:"weihnachten", shop:"spreadshop", name:"Ugly-Christmas-Sweater", sub:"Unisex Bio-Weihnachtspullover", price:"36,99", img:"merch/xmas-motiv-sweater.jpg", badge:"XMAS", soon:false, link:"https://hutsonlive.myspreadshop.de/hutson+live+ugly+christmas+sweater-A3289b50de2252021?sellable=ro11xwvcepep-4914" },
    { id:"xmas-shirt-geschenke", cat:"weihnachten", shop:"spreadshop", name:"T-Shirt „Geschenke“", sub:"Unisex & Frauen · S–3XL", price:"22,99", img:"merch/xmas-motiv-geschenke.jpg", badge:"XMAS", soon:false, link:"https://hutsonlive.myspreadshop.de/hutsi+mit+geschenken-A3289b4fcc3399f73?sellable=ro11wz38n5gz-6" },
    { id:"xmas-tasse-geschenke", cat:"weihnachten", shop:"spreadshop", name:"Tasse „Geschenke“", sub:"Keramik · 330 ml", price:"16,99", img:"merch/xmas-motiv-geschenke.jpg", badge:"XMAS", soon:false, link:"https://hutsonlive.myspreadshop.de/hutsi+mit+geschenken-A3289b4fcc3399f73?sellable=ro11wz38n5gz-31" },
    { id:"xmas-hoodie-geschenke", cat:"weihnachten", shop:"spreadshop", name:"Hoodie „Geschenke“", sub:"Unisex · kuschelig warm", price:"34,99", img:"merch/xmas-motiv-geschenke.jpg", badge:"XMAS", soon:false, link:"https://hutsonlive.myspreadshop.de/hutsi+mit+geschenken-A3289b4fcc3399f73?sellable=ro11wz38n5gz-1047" },
    { id:"xmas-tasse-kamin", cat:"weihnachten", shop:"spreadshop", name:"Tasse „Hutsi am Kamin“", sub:"Keramik · 330 ml", price:"16,99", img:"merch/xmas-motiv-kamin.jpg", badge:"XMAS", soon:false, link:"https://hutsonlive.myspreadshop.de/hutsi+am+kamin-A3289b4fb8a5bfb06?sellable=ro11wwofii2u-31" },
    { id:"xmas-shirt-schnee", cat:"weihnachten", shop:"spreadshop", name:"T-Shirt „Hutsi im Schnee“", sub:"Unisex & Frauen · S–3XL", price:"22,99", img:"merch/xmas-motiv-schnee.jpg", badge:"XMAS", soon:false, link:"https://hutsonlive.myspreadshop.de/hutsi+im+schnee-A3289b4fc67ea719f?sellable=ro11wydwkvq7-6" },
    { id:"xmas-tasse-schnee", cat:"weihnachten", shop:"spreadshop", name:"Tasse „Hutsi im Schnee“", sub:"Keramik · einfarbig schwarz", price:"16,99", img:"merch/xmas-motiv-schnee.jpg", badge:"XMAS", soon:false, link:"https://hutsonlive.myspreadshop.de/hutsi+im+schnee-A3289b4fc67ea719f?sellable=ro11wydwkvq7-949" },
    { id:"xmas-hoodie-schnee", cat:"weihnachten", shop:"spreadshop", name:"Hoodie „Hutsi im Schnee“", sub:"Unisex · kuschelig warm", price:"34,99", img:"merch/xmas-motiv-schnee.jpg", badge:"XMAS", soon:false, link:"https://hutsonlive.myspreadshop.de/hutsi+im+schnee-A3289b4fc67ea719f?sellable=ro11wydwkvq7-1047" },
    { id:"xmas-shirt-muetze", cat:"weihnachten", shop:"spreadshop", name:"T-Shirt „Weihnachtsmütze“", sub:"Unisex & Frauen · S–3XL", price:"22,99", img:"merch/xmas-motiv-muetze.jpg", badge:"XMAS", soon:false, link:"https://hutsonlive.myspreadshop.de/hutsi+mit+weihnachtsmuetze-A3289b4fba535fc0c?sellable=ro11wwvvq618-6" },
    { id:"xmas-tasse-muetze", cat:"weihnachten", shop:"spreadshop", name:"Tasse „Weihnachtsmütze“", sub:"Keramik · 330 ml", price:"16,99", img:"merch/xmas-motiv-muetze.jpg", badge:"XMAS", soon:false, link:"https://hutsonlive.myspreadshop.de/hutsi+mit+weihnachtsmuetze-A3289b4fba535fc0c?sellable=ro11wwvvq618-31" },
    { id:"xmas-hoodie-muetze", cat:"weihnachten", shop:"spreadshop", name:"Hoodie „Weihnachtsmütze“", sub:"Unisex · kuschelig warm", price:"34,99", img:"merch/xmas-motiv-muetze.jpg", badge:"XMAS", soon:false, link:"https://hutsonlive.myspreadshop.de/hutsi+mit+weihnachtsmuetze-A3289b4fba535fc0c?sellable=ro11wwvvq618-1047" },
    { id:"xmas-beanie", cat:"weihnachten", shop:"spreadshop", name:"Bommelmütze „Weihnachtsmütze“", sub:"Für den Winter", price:"21,99", img:"merch/xmas-motiv-muetze.jpg", badge:"XMAS", soon:false, link:"https://hutsonlive.myspreadshop.de/hutsi+mit+weihnachtsmuetze-A3289b4fba535fc0c?sellable=ro11wwvvq618-5053" },

    /* ---------- Weihnachten (Spreadshop) ---------- */
    { id:"baumanhaenger", cat:"weihnachten", shop:"spreadshop", name:"Christbaum-Anhänger „Stern“", sub:"Keramik", price:"9,99", img:"merch/merch-baumanhaenger.jpg", badge:"XMAS", soon:true, link:"" },
    { id:"weihnachtsmuetze", cat:"weihnachten", shop:"spreadshop", name:"Weihnachtsmütze", sub:"Mit Hutsi-Druck", price:"14,99", img:"merch/merch-weihnachtsmuetze.jpg", badge:"XMAS", soon:true, link:"" },

    /* ---------- Bald verfügbar (Phase 2) ---------- */
    { id:"handyhuelle", cat:"bald", shop:"fourthwall", name:"Handyhülle", sub:"iPhone & Samsung", price:"19,99", img:"merch/merch-handyhuelle.jpg", soon:true, link:"" },
    { id:"decke", cat:"bald", shop:"fourthwall", name:"Kuscheldecke", sub:"Fleece", price:"49,99", img:"merch/merch-decke.jpg", soon:true, link:"" },
    { id:"leinwand", cat:"bald", shop:"fourthwall", name:"Leinwand", sub:"30 × 40 cm", price:"34,99", img:"merch/merch-leinwand.jpg", soon:true, link:"" },
    { id:"kalender", cat:"bald", shop:"fourthwall", name:"Hutsi-Kalender 2027", sub:"Wandkalender", price:"26,99", img:"merch/merch-kalender.jpg", soon:true, link:"" },
    { id:"notizbuch", cat:"bald", shop:"fourthwall", name:"Notizbuch", sub:"A5, Hardcover", price:"21,99", img:"merch/merch-notizbuch.jpg", soon:true, link:"" },
    { id:"kuli", cat:"bald", shop:"", name:"Kugelschreiber", sub:"Mit Hutsi-Logo", price:"", img:"merch/merch-kuli.jpg", soon:true, link:"" }
  ]
};
