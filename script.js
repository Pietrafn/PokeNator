const pokemons = [
  {
    nome: "Pikachu",
    img:
      "https://media.discordapp.net/attachments/1027542297669279785/1027542319668404294/unknown.png?width=590&height=580",
    lendario: "nao",
    geracao: "1",
    tipo: "eletrico"
  },
  {
    nome: "Squirtle",
    img:
      "https://th.bing.com/th/id/OIP.TpgN14P2bJmwOClbAYM3jQHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    lendario: "nao",
    geracao: "1",
    tipo: "agua"
  },
  {
    nome: "Charmander",
    img:
      "https://th.bing.com/th/id/OIP.wa6BN00xpxBiKtEsnbHW8wHaIW?w=174&h=196&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    lendario: "nao",
    geracao: "1",
    tipo: "fogo"
  },
  {
    nome: "Zapdos",
    img:
      "https://th.bing.com/th/id/OIP.bllsmQbnKVkSUoMGvkmoxAHaGJ?w=215&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    lendario: "sim",
    geracao: "1",
    tipo: "eletrico"
  },
  {
    nome: "Cyndaquil",
    img:
      "https://th.bing.com/th/id/OIP.0NpF9b3ItDhzG9zflQhUXwHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    lendario: "nao",
    geracao: "2",
    tipo: "fogo"
  },
  {
    nome: "Fennekin",
    img:
      "https://th.bing.com/th/id/OIP.BOvrbut7428w3lONbVpSqQHaJb?w=153&h=195&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    lendario: "nao",
    geracao: "3",
    tipo: "fogo"
  },
  {
    nome: "Moltres",
    img:
      "https://th.bing.com/th/id/OIP.V3Sed8ZjGy5UnE2LFWsclAHaFr?w=248&h=191&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    lendario: "sim",
    geracao: "1",
    tipo: "fogo"
  },
  {
    nome: "Entei",
    img:
      "https://th.bing.com/th/id/OIP.T9Vg7ARTVvvzP_0bGu9EpgHaHE?w=222&h=212&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    lendario: "sim",
    geracao: "3",
    tipo: "fogo"
  },
  {
    nome: "Totodile",
    img:
      "https://th.bing.com/th/id/OIP.QAbE0Id542kuhtLJQwzcoAHaLu?w=127&h=202&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    lendario: "nao",
    geracao: "2",
    tipo: "agua/gelo"
  },
  {
    nome: "Froakie",
    img:
      "https://th.bing.com/th/id/OIP.UUOYBFcn9_yfqlKwpGAvUADzEA?w=171&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    lendario: "nao",
    geracao: "3",
    tipo: "agua/gelo"
  },
  {
    nome: "Articuno",
    img:
      "https://th.bing.com/th/id/OIP.CKPFRXqlmKXkYLb5bxSrQwHaJf?w=151&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    lendario: "sim",
    geracao: "1",
    tipo: "agua/gelo"
  },
  {
    nome: "Suicune",
    img:
      "https://th.bing.com/th/id/OIP.Biv-_-qB1f3V1DUaIB-2kQHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    lendario: "sim",
    geracao: "2",
    tipo: "agua/gelo"
  },
  {
    nome: "Regice",
    img:
      "https://th.bing.com/th/id/OIP.4FW2zdTij2A4JZULiJfQrwHaHI?w=197&h=190&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    lendario: "sim",
    geracao: "3",
    tipo: "agua/gelo"
  }
];
var lendario;
var geracao;
var tipo;
function iniciar() {
  var divIniciar = document.getElementById("btn-iniciar");
  divIniciar.innerHTML = "";
  var quais = document.getElementById("pokemons");
  quais.innerHTML = "";
  var pergunta = document.getElementById("pergunta");
  pergunta.innerHTML = `<label for="resposta1">O pokémon que você está pensando é lendário?</label><select id="lendario">
    <option value="sim">Sim</option>
    <option value="nao">Não</option>
  </select><br><button onclick="pergunta2()">Próxima pergunta</button>`;
}
function pergunta2() {
  lendario = document.getElementById("lendario").value;
  console.log(lendario);
  var quais = document.getElementById("pokemons");
  quais.innerHTML = "";
  var pergunta = document.getElementById("pergunta");
  pergunta.innerHTML = ` <label for="resposta2">O pokémon que você está pensando é de qual geração?</label><select id="geracao">
    <option value="1">Geração 1</option>
    <option value="2">Geração 2</option>
        <option value="3">Geração 3</option>
  </select><br><button onclick="pergunta3()">Próxima pergunta</button>`;
}
function pergunta3() {
  geracao = document.getElementById("geracao").value;
  console.log(geracao);
  var quais = document.getElementById("pokemons");
  quais.innerHTML = "";
  var pergunta = document.getElementById("pergunta");
  pergunta.innerHTML = `  <label for="resposta3">Qual é o tipo do pokémon que você está pensando?</0label><select id="tipo">

    <option value="agua/gelo">agua/gelo</option>

    <option value="fogo">fogo</option>   <option value="eletrico">elétrico</option>

  </select><br><button onclick="resultado()">O pokémon que você está pensando é...</button>`;
}
function resultado() {
  tipo = document.getElementById("tipo").value;
  console.log("tipo");
  var pokemon = verificar(pokemons, tipo, geracao, lendario);
  if (pokemon == undefined) {
    pergunta.innerHTML = `<p> Infelizmente não conheço esse pokémon ainda, se quiser que eu conheça ele, clique no ícone do discord e mande as informações do pokémon para a programadora do jogo. <br>    <div id="btn-iniciar">
      <br>
      <button onclick="iniciar()"> Reiniciar jogo</button>
      <br>
    </div>`
  }
  else{
  pergunta.innerHTML =
    `<h2>` +
    pokemon.nome +
    `</h2> <img src="` +
    pokemon.img +
    `"><p>Tipo:` +
    pokemon.tipo +
    `<br> Geração:` +
    pokemon.geracao +
    `<br> É lendário?<br>` +
    pokemon.lendario +
    `<br>    <div id="btn-iniciar">
      <br>
      <button onclick="iniciar()"> Reiniciar jogo</button>
      <br>
    </div>`;
  }
}
function quais() {
  var quais = document.getElementById("pokemons");
  quais.innerHTML = `<br>`;
  for (var i2 = 0; i2 < pokemons.length; i2++) {
    quais.innerHTML +=
      `<h2>` +
      pokemons[i2].nome +
      `</h2> <img src="` +
      pokemons[i2].img +
      `"><p>Tipo: ` +
      pokemons[i2].tipo +
      `<br> Geração ` +
      pokemons[i2].geracao +
      `<br> É lendário?<br> ` +
      pokemons[i2].lendario +
      `</p>`;
  }
  quais.innerHTML += `<br>`;
}
function verificar(pokemons, tipo, geracao, lendario) {
  for (var i3 = 0; i3 < pokemons.length; i3++) {
    if (pokemons[i3].lendario == lendario) {
      if (pokemons[i3].tipo == tipo) {
        if (pokemons[i3].geracao == geracao) {
          var pokemon = pokemons[i3];
        }
      }
    }
  }
  return pokemon;
}
