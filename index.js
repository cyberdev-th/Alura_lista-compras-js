const inputItem = document.getElementById("input-item");
const botaoAdicionar = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault();
  if (inputItem.value === "") {
    alert("Por favor, insira um item!");
    return;
  }

  const itemDaLista = document.createElement("li");
  const containerItemDaLista = document.createElement("div");
  containerItemDaLista.classList.add("lista-item-container");
  const inputCheckBox = document.createElement("input");
  inputCheckBox.type = "checkbox";
  inputCheckBox.id = `checkbox-${++contador}`;
  const nomeItem = document.createElement("p");
  nomeItem.innerText = inputItem.value;

  inputCheckBox.addEventListener("click", function () {
    if (inputCheckBox.checked) {
      nomeItem.style.textDecoration = "line-through";
    } else {
      nomeItem.style.textDecoration = "none";
    }
  });

  containerItemDaLista.appendChild(inputCheckBox);
  containerItemDaLista.appendChild(nomeItem);

  itemDaLista.appendChild(containerItemDaLista);
  const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
  });
  const data = new Date().toLocaleDateString("pt-BR");
  const horario = new Date().toLocaleTimeString("pt-BR", {
    hour: "numeric",
    minute: "numeric",
  });
  const dataCompleta = `${diaDaSemana} (${data}) às ${horario}`;
  const dataItem = document.createElement("p");
  dataItem.classList.add("texto-data");
  dataItem.innerText = dataCompleta;
  itemDaLista.appendChild(dataItem);

  listaDeCompras.append(itemDaLista);
});
