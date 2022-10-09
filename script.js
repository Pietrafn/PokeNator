import {pokemons} from './pokemons.js';
console.log(pokemons.length);
var lendario;
var geracao;
var tipo;
var estagio;
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
    <option value="4">Geração 4</option>
    <option value="5">Geração 5</option>
    <option value="6">Geração 6</option>
    <option value="7">Geração 7</option>
    <option value="8">Geração 8</option>
  </select><br><button onclick="pergunta3()">Próxima pergunta</button>`;
}
function pergunta3() {
  geracao = document.getElementById("geracao").value;
  console.log(geracao);
  var quais = document.getElementById("pokemons");
  quais.innerHTML = "";
  var pergunta = document.getElementById("pergunta");
  pergunta.innerHTML = `  <label for="resposta3">Qual é o tipo do pokémon que você está pensando?</0label><select id="tipo">
    <option value="agua">Água</option>
    <option value="gelo">Gelo</option>
    <option value="planta">Planta</option>
    <option value="normal">Normal</option>
    <option value="psiquico">Psíquico</option>
    <option value="voador">Voador</option>
    <option value="pedra">Pedra</option>
    <option value="fada">Fada</option>
    <option value="fogo">Fogo</option>  
    <option value="eletrico">Elétrico</option>
    <option value="sombrio">Sombrio</option>
    <option value="lutador">Lutador</option>
    <option value="venenoso">Venenoso</option>
    <option value="inseto">Inseto</option>
    <option value="fantasma">Fantasma</option>
    <option value="metal">Metal</option>
    <option value="dragao">Dragão</option>
    <option value="terrestre">Terrestre</option>
  </select><br><button onclick="pergunta4()">Próxima pergunta</button>`;
}
function pergunta4() {
  tipo = document.getElementById("tipo").value;
  console.log(tipo);
  var quais = document.getElementById("pokemons");
  quais.innerHTML = "";
  var pergunta = document.getElementById("pergunta");
  pergunta.innerHTML = `  <label for="resposta3">Qual é o estágio do pokémon que você está pensando?</0label><select id="estagio">
    <option value="basico">Básico</option>
    <option value="1">Estágio 1</option>
    <option value="2">Estágio 2</option>
    <option value="3">Estágio 3</option>
  </select><br><button onclick="resultado()">O pokémon que você está pensando é...</button>`;
}
function resultado() {
  estagio = document.getElementById("estagio").value;
  console.log(estagio);
  var pokemon = verificar();
  if (pokemon == undefined) {
    pergunta.innerHTML = `<p> Infelizmente não conheço esse pokémon ainda, se quiser que eu conheça ele, clique no ícone do discord e mande as informações do pokémon pra mim<br>    
    <div id="btn-iniciar">
      <br>
      <button onclick="iniciar()"> Reiniciar jogo</button>
      <br>
    </div>`;
  } else {
    if (pokemon.tipo2 == undefined) {
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
        `<br>Estágio:` +
        pokemon.estagio +
        `    <div id="btn-iniciar">
      <br>
      <button onclick="iniciar()"> Reiniciar </button>
      <br>
    </div>`;
    } else {
      pergunta.innerHTML =
        `<h2>` +
        pokemon.nome +
        `</h2> <img src="` +
        pokemon.img +
        `"><p>Tipos:` +
        pokemon.tipo +
        ` e ` +
        pokemon.tipo2 +
        `<br> Geração:` +
        pokemon.geracao +
        `<br> É lendário?<br>` +
        pokemon.lendario +
        `<br>Estágio:` +
        pokemon.estagio +
        `    <div id="btn-iniciar">
      <br>
      <button onclick="iniciar()"> Reiniciar </button>
      <br>
    </div>`;
    }
  }
}

function quais() {
  var quais = document.getElementById("pokemons");
  quais.innerHTML =
    `<br> Conheço ` +
    (pokemons.length - 1) +
    ` pokémons até agora (<b>todos</b> os lendários incluídos) , mas minha desenvolvedora está trabalhando em atualizações com mais pokémons :)<br><br>`;
  for (var i2 = 0; i2 < pokemons.length; i2++) {
    if (pokemons[i2].tipo2 == undefined) {
      quais.innerHTML +=
        `<h2>` +
        pokemons[i2].nome +
        `</h2> <img src="` +
        pokemons[i2].img +
        `"><p>Tipo: ` +
        pokemons[i2].tipo +
        `<br> Geração: ` +
        pokemons[i2].geracao +
        `<br> É lendário?<br>` +
        pokemons[i2].lendario +
        `<br>Estágio: ` +
        pokemons[i2].estagio;
    } else {
      quais.innerHTML +=
        `<h2>` +
        pokemons[i2].nome +
        `</h2> <img src="` +
        pokemons[i2].img +
        `"><p>Tipos: ` +
        pokemons[i2].tipo +
        ` e ` +
        pokemons[i2].tipo2 +
        `<br> Geração: ` +
        pokemons[i2].geracao +
        `<br> É lendário?<br>` +
        pokemons[i2].lendario +
        `<br>Estágio: ` +
        pokemons[i2].estagio;
    }
  }
  quais.innerHTML += `<br>`;
}
function verificar() {
  for (var i3 = 0; i3 < pokemons.length; i3++) {
    if (
      (pokemons[i3].lendario == lendario &&
        pokemons[i3].tipo == tipo &&
        pokemons[i3].geracao == geracao &&
        pokemons[i3].estagio == estagio) ||
      (pokemons[i3].lendario == lendario &&
        pokemons[i3].tipo2 == tipo &&
        pokemons[i3].geracao == geracao &&
        pokemons[i3].estagio == estagio)
    ) {
      var pokemon = pokemons[i3];
    }
  }
  return pokemon;
}
