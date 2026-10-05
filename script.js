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

  const inicio = document.getElementById("aba-inicio");

  if (!inicio || inicio.style.display === "none") {
    return;
  }

  const folha = document.createElement("span");

  folha.className = "leaf";
  folha.textContent = "🍃";

  const ladoEsquerdo = Math.random() < 0.5;

  if (ladoEsquerdo) {

    folha.style.left =
      (2 + Math.random() * 25) + "vw";

  } else {

    folha.style.left =
      (73 + Math.random() * 25) + "vw";

  }

  folha.style.top =
    (75 + Math.random() * 100) + "px";

  folha.style.fontSize =
    (10 + Math.random() * 13) + "px";

  folha.style.animationDuration =
    (7 + Math.random() * 6) + "s";

  folha.style.setProperty(
    "--vento",
    ((Math.random() * 140) - 70) + "px"
  );

  folha.style.setProperty(
    "--rotacao",
    (250 + Math.random() * 400) + "deg"
  );

  folha.style.opacity =
    0.45 + Math.random() * 0.4;

  document.body.appendChild(folha);

  setTimeout(() => {
    folha.remove();
  }, 14000);
}

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
// CAPAS MINECRAFT
// ==========================================

const capas = [

  {
    name: "TWITCH",
    desc: "☯ CAPA TWITCH",
    price: "R$ 34,99",
    image: "capa twitch.png"
  },

  {
    name: "TWISTED",
    desc: "☯ CAPA TWISTED",
    price: "R$ 44,99",
    image: "capa twisted.png"
  },

  {
    name: "HERO",
    desc: "☯ CAPA HERO",
    price: "R$ 44,99",
    image: "capa hero.png"
  },

  {
    name: "BUILDER",
    desc: "☯ CAPA BUILDER",
    price: "R$ 8,99",
    image: "capa builder.png"
  },

  {
    name: "HOME",
    desc: "☯ CAPA HOME",
    price: "R$ 8,99",
    image: "capa home.png"
  },

  {
    name: "MCE",
    desc: "☯ CAPA MCE",
    price: "R$ 359,99",
    image: "capa mce.png"
  },

  {
    name: "MOONLIGHT TRIAL",
    desc: "☯ CAPA MOONLIGHT TRIAL",
    price: "R$ 599,99",
    image: "capa moonlight.png"
  },

  {
    name: "COOPER",
    desc: "☯ CAPA COOPER",
    price: "R$ 12,99",
    image: "capa cooper.png"
  },

  {
    name: "TIKTOK",
    desc: "☯ CAPA TIKTOK",
    price: "R$ 34,99",
    image: "capa tiktok.png"
  },

  {
    name: "MENACE",
    desc: "☯ CAPA MENACE",
    price: "R$ 14,99",
    image: "capa menace.png"
  },

  {
    name: "OF",
    desc: "☯ CAPA OF",
    price: "R$ 7,99",
    image: "capa of.png"
  }

];


// ==========================================
// MOSTRAR CAPAS
// ==========================================

const gridCapas =
  document.querySelector("#grid-capas");

const pesquisaCapas =
  document.querySelector("#q-capas");


function mostrarCapas() {

  if (!gridCapas) {
    return;
  }

  let pesquisa = "";

  if (pesquisaCapas) {
    pesquisa =
      pesquisaCapas.value.toLowerCase();
  }

  const capasFiltradas =
    capas.filter(capa =>
      capa.name
        .toLowerCase()
        .includes(pesquisa)
    );


  gridCapas.innerHTML =
    capasFiltradas.map(capa => `

      <article class="card capa-card">

        <div class="visual capa-visual">

          <img
            src="${encodeURI(capa.image)}"
            alt="${capa.name}"
            loading="lazy"
          >

        </div>


        <div class="body">

          <h3>
            ${capa.name}
          </h3>

          <p class="desc">
            ${capa.desc}
          </p>

          <div class="price">
            ${capa.price}
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


if (pesquisaCapas) {

  pesquisaCapas.addEventListener(
    "input",
    mostrarCapas
  );

}


mostrarCapas();


// ==========================================
// NAVEGAÇÃO
// INÍCIO / CAPAS / CONTAS
// ==========================================

function abrirAba(aba) {

  const inicio =
    document.getElementById("aba-inicio");

  const abaCapas =
    document.getElementById("aba-capas");

  const contas =
    document.getElementById("aba-contas");


  if (inicio) {
    inicio.style.display = "none";
  }

  if (abaCapas) {
    abaCapas.style.display = "none";
  }

  if (contas) {
    contas.style.display = "none";
  }


  if (aba === "inicio" && inicio) {
    inicio.style.display = "block";
  }

  if (aba === "capas" && abaCapas) {
    abaCapas.style.display = "block";
  }

  if (aba === "contas" && contas) {
    contas.style.display = "block";
  }


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
    mostrarContas();
    mostrarCapas();

  }
);
