/* HUTSON LIVE – Merch-Seite. Produkte & Links stehen in merch-config.js */
(function(){
  var M = window.MERCH || {products:[]}, $ = function(id){return document.getElementById(id)};
  var esc = function(t){var d=document.createElement("div");d.textContent=t==null?"":t;return d.innerHTML};
  var has = function(v){return typeof v==="string" && v.trim()!==""};
  var SHOP = {kofi:"Ko-fi", spreadshop:"Spreadshop", fourthwall:"Fourthwall"};
  var byId = {}; M.products.forEach(function(p){ byId[p.id]=p; });
  var placeholders = 0;

  function linkFor(p){
    if (has(p.link)) return {href:p.link, ph:false};
    var shop = (M.shops||{})[p.shop];
    if (has(shop)) return {href:shop, ph:false};
    placeholders++;
    return {href:"#"+(p.shop||"shop")+"-link-"+p.id, ph:true};
  }
  function toast(msg){ var t=$("toast"); if(!t) return; t.textContent=msg; t.classList.add("on"); clearTimeout(toast._t); toast._t=setTimeout(function(){t.classList.remove("on")},2600); }

  function card(p){
    var l = p.soon ? null : linkFor(p);
    var price = has(p.price) ? '<span class="m-price">'+esc(p.price)+' <span class="eur">€</span></span>' : '<span class="m-price soon">bald</span>';
    var btn = p.soon
      ? '<span class="btn small ghost m-soon" aria-disabled="true">Bald verfügbar</span>'
      : '<a class="btn small'+(p.cat==="digital"?' gold':'')+' m-go" href="'+esc(l.href)+'"'+(l.ph?' data-placeholder="'+esc(p.shop)+'"':' target="_blank" rel="noopener"')+' data-shop="'+esc(p.shop)+'" data-id="'+esc(p.id)+'"><svg><use href="#i-bag"/></svg>'+(p.cat==="digital"?"Sofort kaufen":"Kaufen")+'</a>';
    return '<article class="hud m-card'+(p.soon?' is-soon':'')+'" data-cat="'+esc(p.cat)+'">'+
      '<div class="m-img"><img src="'+esc(p.img)+'" alt="'+esc(p.name)+' mit Hutsi" width="720" height="720" loading="lazy">'+
      (p.badge?'<span class="m-badge">'+esc(p.badge)+'</span>':'')+(p.soon?'<span class="m-badge soon">BALD</span>':'')+'</div>'+
      '<div class="m-body"><h3>'+esc(p.name)+'</h3><p>'+esc(p.sub||"")+'</p>'+
      '<div class="m-foot">'+price+btn+'</div>'+
      (p.shop && SHOP[p.shop] ? '<small class="m-via">'+(p.soon?'geplant über ':'über ')+SHOP[p.shop]+'</small>' : '')+
      '</div></article>';
  }

  if ($("mGrid")) {
    $("mGrid").innerHTML = M.products.map(card).join("");
    document.querySelectorAll(".m-tab").forEach(function(b){
      b.onclick = function(){
        document.querySelectorAll(".m-tab").forEach(function(x){x.classList.toggle("on", x===b)});
        var c = b.dataset.cat;
        document.querySelectorAll(".m-card").forEach(function(el){ el.style.display = (c==="alle"||el.dataset.cat===c) ? "" : "none"; });
      };
    });
  }

  /* Extra-Kaufbuttons (z. B. im Story-Block) */
  document.querySelectorAll(".m-buy").forEach(function(a){
    var p = byId[a.dataset.id]; if (!p) return;
    if (p.soon) { a.removeAttribute("href"); a.classList.add("m-soon"); a.setAttribute("aria-disabled","true"); a.innerHTML = esc(a.dataset.soon || "Bald verfügbar"); return; }
    var l = linkFor(p); a.href = l.href;
    if (l.ph) a.setAttribute("data-placeholder", p.shop); else { a.target="_blank"; a.rel="noopener"; }
  });

  /* Platzhalter-Links: kein Sprung, nur Hinweis */
  document.addEventListener("click", function(e){
    var a = e.target.closest("[data-placeholder]"); if (!a) return;
    e.preventDefault(); toast("Shop wird gerade eingerichtet – Link folgt bald!");
  });
})();
