let modalBg = document.querySelector(".modal__bg");
let modalClose = document.querySelector(".close__modal");
let button = document.getElementById("button");

const showResult = (address) => {
  let add = address.logradouro;
  let district = address.bairro;
  let city = address.localidade;
  let state = address.uf;
  let cep = address.cep;

  let result = `${add}, ${district}, ${city}, ${state}, ${cep}`;
  document.getElementById("result").innerHTML = result;
};

  const searchCep = async () => {
  const cep = document.getElementById("input").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;

            const data = await fetch(url);
            const address = await data.json();

        if (address.hasOwnProperty("erro")) {
            modalBg.classList.add("bg__active");
        } else {
            showResult(address);
        }

    
};

button.addEventListener("click", searchCep);

modalClose.addEventListener("click", () => {
  modalBg.classList.remove("bg__active");
});
