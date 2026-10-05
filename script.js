// ==========================================
// MINEMARKET
// ==========================================


// ==========================================
// MARCA D'ÁGUA TAVARES
// ==========================================

function criarTavares() {
  const marca = document.createElement("span");

  marca.className = "tavares-watermark";
  marca.textContent = "TAVARES";

  marca.style.left = Math.random() * 95 + "vw";

  marca.style.animationDuration =
    (12 + Math.random() * 10) + "s";

  marca.style.opacity =
    0.08 + Math.random() * 0.08;

  document.body.appendChild(marca);

  setTimeout(() => {
    marca.remove();
  }, 23000);
}

setInterval(criarTavares, 2500);


// ==========================================
// FOLHAS CAINDO DAS ÁRVORES
// ==========================================

function criarFolha() {

  // Folhas aparecem somente na página inicial
  const inicio = document.getElementById("aba-inicio");

  if (!inicio || inicio.style.display === "none") {
    return;
  }

  const folha = document.createElement("span");

  folha.className = "leaf";
  folha.textContent = "🍃";


  // 50% árvore esquerda / 50% árvore direita
  const ladoEsquerdo = Math.random() < 0.5;


  if (ladoEsquerdo) {

    // Região das árvores do lado esquerdo
    folha.style.left =
      (2 + Math.random() * 25) + "vw";

  } else {

    // Região das árvores do lado direito
    folha.style.left =
      (73 + Math.random() * 25) + "vw";

  }


  // Altura onde a folha começa
  folha.style.top =
    (75 + Math.random() * 100) + "px";


  // Tamanhos diferentes
  folha.style.fontSize =
    (10 + Math.random() * 13) + "px";


  // Velocidades diferentes
  folha.style.animationDuration =
    (7 + Math.random() * 6) + "s";


  // Movimento horizontal
  folha.style.setProperty(
    "--vento",
    ((Math.random() * 140) - 70) + "px"
  );


  // Rotação diferente
  folha.style.setProperty(
    "--rotacao",
    (250 + Math.random() * 400) + "deg"
  );


  // Transparência
  folha.style.opacity =
    0.45 + Math.random() * 0.4;


  document.body.appendChild(folha);


  // Remove a folha depois da animação
  setTimeout(() => {
    folha.remove();
  }, 14000);
}


// Cria uma folha a cada 550ms
setInterval(criarFolha, 550);


// ==========================================
// CONTAS MINECRAFT
// ==========================================

const p = [

  {
    name: "MINECRAFT FULL ACESSO + PAN CAPE",
    desc: "☯ MINECRAFT FULL ACESSO + PAN CAPE",
    price: "R$ 47,96",
    old: "R$ 57,55"
  },

  {
    name: "MINECRAFT FULL ACESSO NOVO 0 NICKS",
    desc: "☯ MINECRAFT FULL ACESSO NOVO 0 NICKS",
    price: "R$ 65,88",
    old: "R$ 79,06"
  },

  {
    name: "MINECRAFT FULL ACESSO UNCACHED",
    desc: "☯ MINECRAFT FULL ACESSO UNCACHED",
    price: "R$ 56,28",
    old: "R$ 67,54"
  },

  {
    name: "MINECRAFT FULL ACESSO + CAPA MIGRATOR",
    desc: "☯ MINECRAFT FULL ACESSO + CAPA MIGRATOR",
    price: "R$ 53,99",
    old: "R$ 64,79"
  },

  {
    name: "MINECRAFT FULL ACESSO + 15 YEARS CAPE",
    desc: "☯ MINECRAFT FULL ACESSO + 15 YEARS CAPE",
    price: "R$ 66,00",
    old: "R$ 79,20"
  },

  {
    name: "MINECRAFT FULL ACESSO + VANILLA CAPE",
    desc: "☯ MINECRAFT FULL ACESSO + VANILLA CAPE",
    price: "R$ 66,00",
    old: "R$ 79,20"
  },

  {
    name: "MINECRAFT FULL ACESSO + BLOSSOM CAPE",
    desc: "☯ MINECRAFT FULL ACESSO + BLOSSOM CAPE",
    price: "R$ 74,39",
    old: "R$ 89,27"
  },

  {
    name: "MINECRAFT FULL ACESSO + PURPLE HEART CAPE",
    desc: "☯ MINECRAFT FULL ACESSO + PURPLE HEART CAPE",
    price: "R$ 68,40",
    old: "R$ 82,08"
  },

  {
    name: "MINECRAFT FULL ACESSO + TIKTOK CAPE",
    desc: "☯ MINECRAFT FULL ACESSO + TIKTOK CAPE",
    price: "R$ 71,99",
    old: "R$ 86,39"
  },

  {
    name: "MINECRAFT FULL ACESSO + MENACE CAPE",
    desc: "☯ MINECRAFT FULL ACESSO + MENACE CAPE",
    price: "R$ 62,40",
    old: "R$ 74,88"
  }

];


// ==========================================
// MOSTRAR CONTAS
// ==========================================

const gridContas = document.querySelector("#grid");
const pesquisaContas = document.querySelector("#q");


function mostrarContas() {

  if (!gridContas) {
    return;
  }


  let pesquisa = "";

  if (pesquisaContas) {
    pesquisa = pesquisaContas.value.toLowerCase();
  }


  const produtosFiltrados = p.filter(produto =>
    produto.name.toLowerCase().includes(pesquisa)
  );


  gridContas.innerHTML = produtosFiltrados.map(produto => `

    <article class="card">

      <div class="visual">
        <div class="yin">☯</div>
      </div>

      <div class="body">

        <h3>
          ${produto.name}
        </h3>

        <p class="desc">
          ${produto.desc}
        </p>

        <div class="old">
          ${produto.old}
        </div>

        <div class="price">
          ${produto.price}
        </div>

        <small>
          à vista no PIX
        </small>

        <button class="buy">
          Comprar agora
        </button>

      </div>

    </article>

  `).join("");

}


if (pesquisaContas) {

  pesquisaContas.addEventListener(
    "input",
    mostrarContas
  );

}


mostrarContas();


// ==========================================
// NAVEGAÇÃO
// INÍCIO / CAPAS / CONTAS
// ==========================================

function abrirAba(aba) {

  const inicio =
    document.getElementById("aba-inicio");

  const capas =
    document.getElementById("aba-capas");

  const contas =
    document.getElementById("aba-contas");


  // Esconde todas
  if (inicio) {
    inicio.style.display = "none";
  }

  if (capas) {
    capas.style.display = "none";
  }

  if (contas) {
    contas.style.display = "none";
  }


  // Mostra a selecionada
  if (aba === "inicio" && inicio) {
    inicio.style.display = "block";
  }


  if (aba === "capas" && capas) {
    capas.style.display = "block";
  }


  if (aba === "contas" && contas) {
    contas.style.display = "block";
  }


  // Volta ao topo
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ==========================================
// INICIAR SITE
// ==========================================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    abrirAba("inicio");

  }
);
