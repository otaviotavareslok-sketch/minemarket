// Marca d'água TAVARES caindo
function criarTavares() {
  const marca = document.createElement("span");
  marca.className = "tavares-watermark";
  marca.textContent = "TAVARES";

  marca.style.left = Math.random() * 95 + "vw";
  marca.style.animationDuration = (12 + Math.random() * 10) + "s";
  marca.style.opacity = 0.08 + Math.random() * 0.08;

  document.body.appendChild(marca);

  setTimeout(() => {
    marca.remove();
  }, 23000);
}

setInterval(criarTavares, 2500);
const p=[{"name": "MINECRAFT FULL ACESSO + PAN CAPE", "desc": "☯ MINECRAFT FULL ACESSO + PAN CAPE", "price": "R$ 47,96", "old": "R$ 57,55"}, {"name": "MINECRAFT FULL ACESSO NOVO 0 NICKS", "desc": "☯ MINECRAFT FULL ACESSO NOVO 0 NICKS", "price": "R$ 65,88", "old": "R$ 79,06"}, {"name": "MINECRAFT FULL ACESSO UNCACHED", "desc": "☯ MINECRAFT FULL ACESSO UNCACHED", "price": "R$ 56,28", "old": "R$ 67,54"}, {"name": "MINECRAFT FULL ACESSO + CAPA MIGRATOR", "desc": "☯ MINECRAFT FULL ACESSO + CAPA MIGRATOR", "price": "R$ 53,99", "old": "R$ 64,79"}, {"name": "MINECRAFT FULL ACESSO + 15 YEARS CAPE", "desc": "☯ MINECRAFT FULL ACESSO + 15 YEARS CAPE", "price": "R$ 66,00", "old": "R$ 79,20"}, {"name": "MINECRAFT FULL ACESSO + VANILLA CAPE", "desc": "☯ MINECRAFT FULL ACESSO + VANILLA CAPE", "price": "R$ 66,00", "old": "R$ 79,20"}, {"name": "MINECRAFT FULL ACESSO + BLOSSOM CAPE", "desc": "☯ MINECRAFT FULL ACESSO + BLOSSOM CAPE", "price": "R$ 74,39", "old": "R$ 89,27"}, {"name": "MINECRAFT FULL ACESSO + PURPLE HEART CAPE", "desc": "☯ MINECRAFT FULL ACESSO + PURPLE HEART CAPE", "price": "R$ 68,40", "old": "R$ 82,08"}, {"name": "MINECRAFT FULL ACESSO + TIKTOK CAPE", "desc": "☯ MINECRAFT FULL ACESSO + TIKTOK CAPE", "price": "R$ 71,99", "old": "R$ 86,39"}, {"name": "MINECRAFT FULL ACESSO + MENACE CAPE", "desc": "☯ MINECRAFT FULL ACESSO + MENACE CAPE", "price": "R$ 62,40", "old": "R$ 74,88"}];const g=document.querySelector('#grid'),q=document.querySelector('#q');function r(){let s=q.value.toLowerCase();g.innerHTML=p.filter(x=>x.name.toLowerCase().includes(s)).map(x=>`<article class=card><div class=visual><div class=yin>☯</div></div><div class=body><h3>${x.name}</h3><p class=desc>${x.desc}</p><div class=old>${x.old}</div><div class=price>${x.price}</div><small>à vista no PIX</small><button class=buy>Comprar agora</button></div></article>`).join('')}q.oninput=r;for(let i=0;i<24;i++){let f=document.createElement('span');f.className='flower';f.textContent=i%3?'🌸':'✿';f.style.left=Math.random()*100+'vw';f.style.fontSize=12+Math.random()*17+'px';f.style.animationDuration=14+Math.random()*14+'s';f.style.animationDelay=-Math.random()*25+'s';document.body.appendChild(f)}r();
// ===== POP-UPS MINEMARKET =====

function abrirPopup(tipo) {
  const popup = document.getElementById("popup-" + tipo);

  if (popup) {
    popup.classList.add("ativo");
    document.body.style.overflow = "hidden";
  }
}

function fecharPopup(tipo) {
  const popup = document.getElementById("popup-" + tipo);

  if (popup) {
    popup.classList.remove("ativo");
    document.body.style.overflow = "";
  }
}


// Fechar clicando fora da caixa
document.querySelectorAll(".popup").forEach((popup) => {

  popup.addEventListener("click", function(event) {

    if (event.target === popup) {
      popup.classList.remove("ativo");
      document.body.style.overflow = "";
    }

  });

});


// Fechar apertando ESC
document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {

    document.querySelectorAll(".popup.ativo").forEach((popup) => {
      popup.classList.remove("ativo");
    });

    document.body.style.overflow = "";
  }

});



// ===== NAVEGAÇÃO ENTRE INÍCIO, CAPAS E CONTAS =====

function abrirAba(aba) {
  const inicio = document.getElementById("aba-inicio");
  const capas = document.getElementById("aba-capas");
  const contas = document.getElementById("aba-contas");

  // Esconde todas
  inicio.style.display = "none";
  capas.style.display = "none";
  contas.style.display = "none";

  // Mostra apenas a escolhida
  if (aba === "inicio") {
    inicio.style.display = "block";
  }

  if (aba === "capas") {
    capas.style.display = "block";
  }

  if (aba === "contas") {
    contas.style.display = "block";
  }

  // Volta para o topo
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// Ao abrir o site, começa no INÍCIO
document.addEventListener("DOMContentLoaded", function () {
  abrirAba("inicio");
});
