/* HUTSON LIVE – Seitenlogik. Normalerweise musst du hier NICHTS ändern.
   Alle Inhalte stehen in config.js. */
(function(){
  var S = window.SITE || {}, $ = function(id){return document.getElementById(id)};
  var has = function(v){return typeof v === "string" && v.trim() !== ""};
  /* echte Werte = nicht leer und kein Platzhalter */
  var PH = /DEIN-NAME|DEINE-ADRESSE|XXXX|VORNAME NACHNAME|NAME DEINER BANK/i;
  var real = function(v){return has(v) && !PH.test(v)};
  var esc = function(t){var d=document.createElement("div");d.textContent=t==null?"":t;return d.innerHTML};
  var hide = function(el){if(el) el.style.display="none"};
  var KEY = "hutson_consent"; // "yes" | "no"

  /* ---------- Name / Logo ---------- */
  var parts = (S.name||"HUTSON LIVE").split(" ");
  var first = parts.shift(), rest = parts.join(" ");
  var LG = S.logo || {};
  var shieldImg = has(LG.shield) ? '<img class="shield" src="'+esc(LG.shield)+'" alt="" width="40" height="43">' : '';
  if ($("navBrand")) $("navBrand").innerHTML = shieldImg+esc(first)+(rest?" <span>"+esc(rest)+"</span>":"");
  if ($("logo") && has(LG.full)) { $("logo").className = "logo has-img"; $("logo").innerHTML = '<img src="'+esc(LG.full)+'" alt="'+esc(S.name||"HUTSON LIVE")+'" width="713" height="720" fetchpriority="high">'; }
  else if ($("logo")) { $("logo").setAttribute("data-t", S.name||""); $("logo").innerHTML = '<span class="l1">'+esc(first)+'</span>'+(rest?'<span class="l2">'+esc(rest)+'</span>':''); }
  if ($("slogan")) $("slogan").innerHTML = esc(S.slogan||"").replace("Offen für Sponsoren","<b>Offen für Sponsoren</b>");
  if ($("heroText")) $("heroText").textContent = S.heroText||"";

  var soc = S.socials||{}, names = S.socialNames||{};
  var twUrl = soc.twitch || (has(S.twitchChannel)?"https://twitch.tv/"+S.twitchChannel:"");
  if ($("heroTwitch")) { if (has(twUrl)) $("heroTwitch").href = twUrl; else hide($("heroTwitch")); }
  if ($("hutsiTwitch")) { if (has(twUrl)) $("hutsiTwitch").href = twUrl; else hide($("hutsiTwitch")); }

  /* ---------- Fotos: Hero = Hutsi, Über mich = David ---------- */
  var heroSrc = has(S.mascot) ? S.mascot : S.photo;
  var heroAlt = has(S.mascot) ? (S.mascotAlt||"Hutsi, das Maskottchen von HUTSON LIVE") : (S.photoAlt||"");
  if ($("photoImg")) {
    if (has(heroSrc)) { $("photoImg").src = heroSrc; $("photoImg").alt = heroAlt; }
    else hide($("heroPhoto"));
  }
  if ($("heroPhoto")) {
    if (has(S.mascot)) $("heroPhoto").classList.add("is-mascot");
    else $("heroPhoto").classList.remove("is-mascot");
  }
  if ($("heroBadge")) $("heroBadge").textContent = has(S.mascot) ? (S.mascotBadge||"HUTSI") : "PLAYER 1";
  if ($("heroTag")) $("heroTag").textContent = has(S.mascot) ? (S.mascotTag||"MASKOTTCHEN") : "GAMING";
  if ($("aboutImg")) {
    if (has(S.photo)) { $("aboutImg").src = S.photo; $("aboutImg").alt = S.photoAlt||""; }
    else hide($("aboutPhoto"));
  }

  /* ---------- Trefft Hutsi ---------- */
  var H = S.hutsi||{};
  if ($("hutsi")) {
    var hutsiParas = (H.text||[]).filter(function(p){return has(p)});
    if (!has(H.image) && !hutsiParas.length) hide($("hutsi"));
    else {
      if ($("hutsiKicker") && has(H.kicker)) $("hutsiKicker").textContent = H.kicker;
      if ($("hutsiTitle") && has(H.title)) $("hutsiTitle").textContent = H.title;
      if ($("hutsiLead")) { if (has(H.lead)) $("hutsiLead").textContent = H.lead; else hide($("hutsiLead")); }
      if ($("hutsiImg")) {
        if (has(H.image)) { $("hutsiImg").src = H.image; $("hutsiImg").alt = H.alt||"Hutsi"; }
        else hide($("hutsiPhoto"));
      }
      if ($("hutsiText")) $("hutsiText").innerHTML = hutsiParas.map(function(p){return "<p>"+esc(p)+"</p>"}).join("");
      if ($("hutsiChips")) {
        var chips = (H.chips||[]).filter(function(c){return has(c)});
        if (chips.length) $("hutsiChips").innerHTML = chips.map(function(c){return '<span class="chip">'+esc(c)+'</span>'}).join("");
        else hide($("hutsiChips"));
      }
    }
  }

  /* ---------- Plattform-Karten ---------- */
  var P = [
    ["twitch","Twitch","Live-Streams"],["tiktok","TikTok","Clips"],["youtube","YouTube","Videos"],
    ["instagram","Instagram","Fotos & Reels"],["facebook","Facebook","Community"],["discord","Discord","Community-Server"]
  ];
  var d = S.donate||{};
  if ($("plats")) {
    var h = "";
    P.forEach(function(p){
      var url = soc[p[0]], nm = names[p[0]]||p[2];
      if (has(url)) h += '<a class="plat p-'+p[0]+'" href="'+esc(url)+'" target="_blank" rel="noopener"><svg><use href="#i-'+p[0]+'"/></svg><b>'+p[1]+'</b><small>'+esc(nm||p[2])+'</small></a>';
      else if (S.showComingSoon !== false) h += '<div class="plat soon p-'+p[0]+'" aria-hidden="true"><svg><use href="#i-'+p[0]+'"/></svg><b>'+p[1]+'</b><small>bald verfügbar</small></div>';
    });
    if (real(d.paypal)) h += '<a class="plat p-paypal" href="'+esc(d.paypal)+'" target="_blank" rel="noopener"><svg><use href="#i-paypal"/></svg><b>PayPal</b><small>Stream unterstützen</small></a>';
    if (real(d.iban)) h += '<button type="button" class="plat p-bank openBank"><svg><use href="#i-bank"/></svg><b>Überweisung</b><small>Spenden per IBAN</small></button>';
    if (has(S.website)) h += '<a class="plat p-web" href="'+esc(S.website)+'" target="_blank" rel="noopener"><svg><use href="#i-web"/></svg><b>Website</b><small>KI Web Studio</small></a>';
    $("plats").innerHTML = h;
  }

  /* ---------- Über mich ---------- */
  if ($("aboutText")) $("aboutText").innerHTML = (S.about||[]).map(function(p){return "<p>"+esc(p)+"</p>"}).join("");
  if ($("aboutWeb")) { if (has(S.website)) { $("aboutWeb").href = S.website; $("aboutWeb").querySelector("span").textContent = S.websiteLabel||"Meine Website"; } else hide($("aboutWeb")); }
  if ($("projWeb") && has(S.website)) $("projWeb").href = S.website;

  /* ---------- Stream-Zeiten ---------- */
  if ($("sched")) {
    $("sched").innerHTML = (S.schedule||[]).map(function(s){return '<li><span class="d">'+esc(s.day)+'</span><span class="t">'+esc(s.time)+'</span><span class="g">'+esc(s.game||"")+'</span></li>'}).join("");
    $("schedNote").textContent = S.scheduleNote||"";
  }

  /* ---------- Twitch-Player (erst nach Einwilligung) ---------- */
  function renderEmbed(){
    var box = $("embed"); if (!box) return;
    var ch = S.twitchChannel, host = location.hostname;
    if (!has(ch)) { hide(box.parentNode); return; }
    if (localStorage.getItem(KEY) === "yes" && host) {
      box.innerHTML = '<iframe title="Twitch-Livestream" allowfullscreen loading="lazy" src="https://player.twitch.tv/?channel='+encodeURIComponent(ch)+'&parent='+encodeURIComponent(host)+'&muted=true&autoplay=false"></iframe>';
    } else {
      box.innerHTML = '<div class="ph"><svg class="big"><use href="#i-twitch"/></svg>'+
        '<b class="anton" style="font-size:22px;text-transform:uppercase">Live-Player von Twitch</b>'+
        '<p>Zum Schutz deiner Daten wird der Player erst nach deiner Zustimmung geladen. Dabei werden Daten (z. B. deine IP-Adresse) an Twitch übertragen.</p>'+
        '<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">'+
        (host?'<button class="btn small" type="button" id="loadTw">Player laden</button>':'')+
        '<a class="btn small twitch" href="'+esc(twUrl)+'" target="_blank" rel="noopener">Auf Twitch öffnen</a></div></div>';
      var b = $("loadTw"); if (b) b.onclick = function(){ setConsent("yes"); };
    }
  }

  /* ---------- Galerie + Lightbox ---------- */
  var G = (S.gallery||[]).filter(function(g){return has(g.src)}), cur = 0, LBL = G;
  var lb = $("lb");
  var show = function(i, list){ if (list) LBL = list; if (!lb || !LBL.length) return; cur = (i+LBL.length)%LBL.length; $("lbImg").src = LBL[cur].src; $("lbImg").alt = LBL[cur].title||""; $("lbCap").textContent = LBL[cur].title||""; lb.classList.add("on"); };
  if (lb) {
    lb.querySelector(".x").onclick = function(){ lb.classList.remove("on"); };
    lb.querySelector(".prev").onclick = function(){ show(cur-1); };
    lb.querySelector(".next").onclick = function(){ show(cur+1); };
    lb.onclick = function(e){ if (e.target === lb) lb.classList.remove("on"); };
    document.addEventListener("keydown", function(e){ if (!lb.classList.contains("on")) return;
      if (e.key==="Escape") lb.classList.remove("on"); if (e.key==="ArrowLeft") show(cur-1); if (e.key==="ArrowRight") show(cur+1); });
  }
  if ($("gal")) {
    if (!G.length) hide($("galerie"));
    $("gal").innerHTML = G.map(function(g,i){
      var focus = (has(g.focus) && /^[0-9.%a-z\s]+$/i.test(g.focus)) ? ' style="object-position:'+g.focus+'"' : '';
      return '<button type="button" class="'+(g.featured?'featured':'')+'" data-i="'+i+'" aria-label="Bild öffnen: '+esc(g.title||"")+'"><img src="'+esc(g.src)+'" alt="'+esc(g.title||"")+'" loading="lazy" width="800" height="600"'+focus+'>'+(has(g.title)?'<span class="gal-cap">'+esc(g.title)+'</span>':'')+'</button>';
    }).join("");
    $("gal").onclick = function(e){ var b = e.target.closest("button"); if (b) show(+b.dataset.i, G); };
  }

  /* ---------- Media Kit ---------- */
  if ($("stats")) {
    var st = S.stats||[];
    if (!st.length) hide($("stats"));
    $("stats").innerHTML = st.map(function(s){ return '<div class="hud stat">'+(has(s.value)?'<div class="v">'+esc(s.value)+'</div>':'<div class="v req">auf Anfrage</div>')+'<div class="k">'+esc(s.label)+'</div></div>'}).join("");
    $("formats").innerHTML = (S.adFormats||[]).map(function(f){return '<div class="hud card"><div class="em">'+esc(f.icon||"")+'</div><h3>'+esc(f.title)+'</h3><p>'+esc(f.text)+'</p></div>'}).join("");
    if (has(S.mediaKitPdf)) $("mkPdf").href = S.mediaKitPdf; else hide($("mkPdf"));
  }

  /* ---------- Sponsoren-Slots ---------- */
  if ($("slots")) {
    var sp = S.sponsors||[], sh = sp.map(function(s){
      if (has(s.logo)) return '<a class="slot filled" '+(has(s.url)?'href="'+esc(s.url)+'" target="_blank" rel="noopener sponsored"':'')+'><img src="'+esc(s.logo)+'" alt="'+esc(s.name||"Sponsor")+'" loading="lazy"></a>';
      if (has(s.name)) return '<a class="slot filled" style="color:#1a0640" '+(has(s.url)?'href="'+esc(s.url)+'" target="_blank" rel="noopener sponsored"':'')+'>'+esc(s.name)+'</a>';
      return '<a class="slot mailto" data-subject="Sponsoring-Anfrage HUTSON LIVE">Dein Logo hier</a>';
    }).join("");
    sh += '<a class="slot mailto" data-subject="Sponsoring-Anfrage HUTSON LIVE">+ Dein Logo hier</a>';
    $("slots").innerHTML = sh;
  }

  /* ---------- Spenden ---------- */
  function toast(msg){ var t=$("toast"); if(!t) return; t.textContent=msg; t.classList.add("on"); clearTimeout(toast._t); toast._t=setTimeout(function(){t.classList.remove("on")},2200); }
  function copyText(t){
    var ok=function(){ toast("✔ kopiert!") };
    var fb=function(){ var a=document.createElement("textarea"); a.value=t; a.setAttribute("readonly",""); a.style.position="fixed"; a.style.opacity="0"; document.body.appendChild(a); a.select(); try{document.execCommand("copy"); ok();}catch(e){ toast("Bitte manuell kopieren"); } a.remove(); };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(t).then(ok, fb); else fb();
  }
  if ($("ppBox")) {
    if (real(d.paypal)) $("ppBtn").href = d.paypal; else hide($("ppBox"));
    var bm = $("bankModal");
    if (real(d.iban)) {
      $("iban").textContent = d.iban; $("mIban").textContent = d.iban;
      [["holder","rHolder","mHolder","mHolderRow"],["bank","rBank","mBank","mBankRow"],["bic","rBic","mBic","mBicRow"],["reference","rRef","mRef","mRefRow"]].forEach(function(x){
        var el = x[0]==="reference"?"ref":x[0];
        if (real(d[x[0]])) { $(el).textContent = d[x[0]]; $(x[2]).textContent = d[x[0]]; } else { hide($(x[1])); hide($(x[3])); } });
      document.querySelectorAll(".copy").forEach(function(b){ b.onclick = function(){
        copyText(b.dataset.copy==="iban" ? d.iban.replace(/\s+/g,"") : (d.reference||"")); }; });
      var last = null;
      var openM = function(){ last=document.activeElement; bm.classList.add("on"); document.body.style.overflow="hidden"; bm.querySelector(".mx").focus(); };
      var closeM = function(){ bm.classList.remove("on"); document.body.style.overflow=""; if(last) last.focus(); };
      document.addEventListener("click", function(e){ if (e.target.closest(".openBank")) openM(); });
      bm.querySelector(".mx").onclick = closeM;
      bm.onclick = function(e){ if (e.target === bm) closeM(); };
      document.addEventListener("keydown", function(e){ if (e.key==="Escape" && bm.classList.contains("on")) closeM(); });
    } else { hide($("ibanBox")); document.querySelectorAll(".openBank").forEach(hide); }
    if (!real(d.paypal) && !real(d.iban)) hide($("spenden"));
    if (!real(d.paypal) && $("ibanBox")) $("ibanBox").parentNode.style.gridTemplateColumns = "1fr";
  }

  /* ---------- Folgen-Buttons ---------- */
  if ($("follow")) {
    var fh = "";
    P.forEach(function(p){ if (has(soc[p[0]])) fh += '<a class="sbtn p-'+p[0]+'" style="--b:'+({twitch:"#9146ff",youtube:"#ff0033",tiktok:"#111",facebook:"#1877f2",instagram:"#e1306c",discord:"#5865f2"})[p[0]]+'" href="'+esc(soc[p[0]])+'" target="_blank" rel="noopener"><svg><use href="#i-'+p[0]+'"/></svg>'+p[1]+'</a>'; });
    if (has(S.website)) fh += '<a class="sbtn p-web" href="'+esc(S.website)+'" target="_blank" rel="noopener"><svg><use href="#i-web"/></svg>KI Web Studio</a>';
    $("follow").innerHTML = fh;
  }

  /* ---------- Footer ---------- */
  if ($("footer")) {
    var y = new Date().getFullYear();
    $("footer").innerHTML = '<a class="brand" href="index.html">'+shieldImg.replace('width="40" height="43"','width="56" height="60"')+esc(first)+(rest?" <span>"+esc(rest)+"</span>":"")+'</a>'+
      '<div style="margin-top:14px"><a class="btn mail small mailto" data-subject="Kontakt über HUTSON LIVE Webseite"><svg><use href="#i-mail"/></svg>Kontakt / E-Mail</a></div>'+
      '<nav><a href="index.html#media-kit">Für Sponsoren</a><a href="merch.html">Merch</a>'+(has(S.website)?'<a href="'+esc(S.website)+'" target="_blank" rel="noopener">KI Web Studio – Websites & Web-Apps</a>':'')+
      '<a href="impressum.html">Impressum</a><a href="datenschutz.html">Datenschutz</a><button type="button" id="cookieSettings">Cookie-Einstellungen</button></nav>'+
      '<small>© '+y+' '+esc(S.name||"")+' · Fortnite ist eine Marke von Epic Games. Diese Seite steht in keiner Verbindung zu Epic Games.</small>';
    $("cookieSettings").onclick = function(){ showBanner(true); };
  }

  /* ---------- Projekte (aus config.js → projects) ---------- */
  if ($("projects")) {
    var PR = (S.projects||[]).filter(function(p){return has(p.title)});
    if (!PR.length) hide($("projects"));
    $("projects").innerHTML = PR.map(function(p,pi){
      var imgs = (p.images||[]).filter(function(g){return has(g.src)});
      var media = imgs.length ? '<div class="pj-media"><button type="button" class="pj-main" data-p="'+pi+'" data-i="0" aria-label="Bild öffnen: '+esc(imgs[0].title||p.title)+'"><img src="'+esc(imgs[0].src)+'" alt="'+esc(imgs[0].title||p.title)+'" loading="lazy" width="1280" height="720"><span class="pj-cap">'+esc(imgs[0].title||"")+'</span></button>'+
        (imgs.length>1?'<div class="pj-thumbs">'+imgs.slice(1).map(function(g,i){return '<button type="button" data-p="'+pi+'" data-i="'+(i+1)+'" aria-label="Bild öffnen: '+esc(g.title||"")+'"><img src="'+esc(g.src)+'" alt="'+esc(g.title||"")+'" loading="lazy" width="400" height="300"></button>'}).join("")+'</div>':'')+'</div>' : '';
      var head = '<div class="pj-head">'+(has(p.logo)?'<img class="pj-logo" src="'+esc(p.logo)+'" alt="" width="64" height="64" loading="lazy">':'')+'<div><h3>'+esc(p.title)+'</h3>'+(has(p.tag)?'<span class="pj-tag">'+esc(p.tag)+'</span>':'')+'</div></div>';
      var facts = (p.facts||[]).length ? '<ul class="pj-facts">'+p.facts.map(function(f){return '<li>'+esc(f)+'</li>'}).join("")+'</ul>' : '';
      var srv = (p.servers||[]).filter(function(x){return has(x.value)}).map(function(x){return '<div class="pj-srv"><div class="pj-srv-t"><small>'+esc(x.label||"")+'</small><code>'+esc(x.value)+'</code>'+(has(x.note)?'<span>'+esc(x.note)+'</span>':'')+'</div><button class="btn small ghost pj-copy" type="button" data-copy="'+esc(x.value)+'"><svg><use href="#i-copy"/></svg>Kopieren</button></div>'}).join("");
      var btns = (p.buttons||[]).map(function(b){
        var ic = has(b.icon)?'<svg><use href="#i-'+esc(b.icon)+'"/></svg>':'';
        if (has(b.mail)) return '<a class="btn small mail mailto" data-subject="'+esc(b.mail)+'">'+ic+esc(b.label)+'</a>';
        if (!has(b.url)) return '';
        return '<a class="btn small '+esc(b.style||"")+'" href="'+esc(b.url)+'" target="_blank" rel="noopener">'+ic+esc(b.label)+'</a>';
      }).join("");
      return '<article class="hud pj'+(imgs.length?' has-media':'')+'">'+media+'<div class="pj-body">'+head+(has(p.text)?'<p class="pj-text">'+esc(p.text)+'</p>':'')+facts+(srv?'<div class="pj-srvs">'+srv+'</div>':'')+(btns?'<div class="pj-btns">'+btns+'</div>':'')+'</div></article>';
    }).join("");
    $("projects").onclick = function(e){
      var c = e.target.closest(".pj-copy"); if (c) { copyText(c.dataset.copy); return; }
      var b = e.target.closest("button[data-p]"); if (!b) return;
      var p = PR[+b.dataset.p]; show(+b.dataset.i, (p.images||[]).filter(function(g){return has(g.src)}));
    };
  }

  /* ---------- Mailto-Buttons (alle mit config.email) ---------- */
  document.querySelectorAll(".mailto").forEach(function(a){
    if (!has(S.email)) { if (!a.classList.contains("slot")) hide(a); return; }
    a.href = "mailto:"+S.email+(a.dataset.subject?"?subject="+encodeURIComponent(a.dataset.subject):"");
  });

  /* ---------- Cookie-/Einwilligungs-Banner ---------- */
  function setConsent(v){ try{localStorage.setItem(KEY,v)}catch(e){} $("consent").classList.remove("on"); renderEmbed(); }
  function showBanner(force){
    var c = $("consent"); if (!c) return;
    var v = null; try{ v = localStorage.getItem(KEY) }catch(e){}
    if (v && !force) return;
    c.innerHTML = '<div class="hud"><span class="tick tl"></span><span class="tick br"></span><h4>🍪 Deine Privatsphäre</h4>'+
      '<p>Diese Seite nutzt keine Tracking-Cookies. Externe Inhalte wie der <b>Twitch-Live-Player</b> werden nur geladen, wenn du zustimmst – dabei werden Daten (z. B. IP-Adresse) an Twitch (Amazon) übertragen. Deine Auswahl wird lokal in deinem Browser gespeichert und kann jederzeit unter „Cookie-Einstellungen“ im Footer geändert werden. Mehr in der <a href="datenschutz.html">Datenschutzerklärung</a>.</p>'+
      '<div class="b"><button class="btn small" type="button" id="cYes">Akzeptieren</button><button class="btn small ghost" type="button" id="cNo">Ablehnen</button></div></div>';
    c.classList.add("on");
    $("cYes").onclick = function(){ setConsent("yes") };
    $("cNo").onclick = function(){ setConsent("no") };
  }
  renderEmbed(); showBanner(false);

  /* ---------- Einblend-Animation ---------- */
  var R = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !/[?&]static/.test(location.search)) {
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }); }, {rootMargin:"0px 0px -8% 0px"});
    R.forEach(function(r){ io.observe(r) });
  } else R.forEach(function(r){ r.classList.add("in") });
})();
