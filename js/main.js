const signInContent = `
<div class="sign-in-content">

<div class="header">
  <h1>Cadastro Completo</h1>
  <div class="line"></div>
  <h2>Preencha o formulário de cadastro completo e verifique a pré-aprovação para cada paciente em todas nossas opções.</h2>
</div>

<div class="main">
  <div class="field">
    <label for="desired-value">Valor desejado:</label>
    <input type="text" name="desired-value" id="desired-value" placeholder="Insira o valor aqui...">
  </div>
  
  <div class="field">
    <label for="desired-value">Valor desejado:</label>
    <input type="text" name="desired-value" id="desired-value" placeholder="Insira o valor aqui...">
  </div>

  <div class="field">
    <label for="desired-value">Valor desejado:</label>
    <input type="text" name="desired-value" id="desired-value" placeholder="Insira o valor aqui...">
  </div>

  <div class="field">
    <label for="desired-value">Valor desejado:</label>
    <input type="text" name="desired-value" id="desired-value" placeholder="Insira o valor aqui...">
  </div>

  <a href="#" class="send-data">Dados incorretos</a>
  <ul class="step-indicator">
    <li class="step-indicator__item selected"></li>
    <li class="step-indicator__item"></li>
  </ul>
</div>
</div>
`;
const requestsContent = `
<div class="requests-content">
<div class="user-status flex flex--jc-sbetween">
  <div class="user-status__item flex">
    <img src="img/folder-fill.svg" alt="">
    <div class="text-container flex flex--d-column flex--jc-center">
      <span id="status-item-value">R$75.000,00</span>
      <span id="status-item-title">Total solicitado</span>
    </div>
  </div>
  <div class="user-status__item flex">
    <img src="img/person-rolodex.svg" alt="">
    <div class="text-container flex flex--d-column flex--jc-center">
      <span id="status-item-value">9</span>
      <span id="status-item-title">Total solicitado</span>
    </div>
  </div>
  <div class="user-status__item flex">
    <img src="img/currency-dollar.svg" alt="">
    <div class="text-container flex flex--d-column flex--jc-center">
      <span id="status-item-value">R$0,00</span>
      <span id="status-item-title">Total solicitado</span>
    </div>
  </div>
  <div class="user-status__item flex">
    <img src="img/check-circle-fill.svg" alt="">
    <div class="text-container flex flex--d-column flex--jc-center">
      <span id="status-item-value">0</span>
      <span id="status-item-title">Total solicitado</span>
    </div>
  </div>
</div>
<h1>Solicitações</h1>
<div class="main">
<div class="filter-selection">
                <div class="filter-header flex flex--ai-center">
                  <img src="img/filter-left.svg" alt="Filtros" onclick="showFiltersList">
  
                  <fieldset>
                    <legend>Nome</legend>
                    <select name="name-filter" id="name-filter">
                      <option value="nome1">Nome 1</option>
                      <option value="nome2">Nome 2</option>
                      <option value="nome3">Nome 3</option>
                      <option value="nome4">Nome 4</option>
                      <option value="nome5">Nome 5</option>
                    </select>
                  </fieldset>
  
                  <fieldset>
                    <legend>CPF</legend>
                    <select name="cpf-filter" id="cpf-filter">
                      <option value="cpf1">000.000.000-00</option>
                      <option value="cpf2">000.000.000-00</option>
                      <option value="cpf3">000.000.000-00</option>
                      <option value="cpf4">000.000.000-00</option>
                      <option value="cpf5">000.000.000-00</option>
                    </select>
                  </fieldset>
  
                  <fieldset>
                    <legend>Período</legend>
                    <select name="period-filter" id="cpf-filter">
                      <option value="period1">Último ano</option>
                      <option value="period2">Último mês</option>
                      <option value="period3">Última semana</option>
                    </select>
                  </fieldset>
  
                </div>
                <ul class="filter-list">
                  <li class="filter-list__item">Filtro</li>
                  <li class="filter-list__item">Filtro</li>
                  <li class="filter-list__item">Filtro</li>
                  <li class="filter-list__item">Filtro</li>
                  <li class="filter-list__item">Filtro</li>
                </ul>
              </div>
              <table class="requests-table desktop">
                <tr id="table-header">
                  <th>Nome do paciente</th>
                  <th>Valor solicitado</th>
                  <th>Máximo aprovado</th>
                  <th>Status</th>
                  <th></th>
                </tr>
                <tr>
                  <td>MARIA CAPISTRANO DE MORAIS</td>
                  <td>R$8.000,00</td>
                  <td>R$0,00</td>
                  <td>Negado</td>
                  <td class="ta-right">
                    <button class="request-btn">Solicitar</button>
                  </td>
                </tr>
              </table>

              <table class="requests-table mobile">
                <tr>
                  <th>Nome do paciente</th>
                  <td>MARIA CAPISTRANO DE MORAIS</td>
                <tr>
                  <th>Valor solicitado</th>
                  <td>R$8.000,00</td>
                </tr>
                <tr>
                  <th>Máximo aprovado</th>
                  <td>R$0,00</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>Negado</td>
                </tr>
                <tr>
                  <th></th>
                  <td class="ta-right">
                    <button class="request-btn">Solicitar</button>
                  </td>
                </tr>
              </table>
</div>
</div>
`;
const requestsContent12 = `
<div class="requests-content">
<div class="user-status flex flex--jc-sbetween">
  <div class="user-status__item flex">
    <img src="img/folder-fill.svg" alt="">
    <div class="text-container flex flex--d-column flex--jc-center">
      <span id="status-item-value">R$75.000,00</span>
      <span id="status-item-title">Total solicitado</span>
    </div>
  </div>
  <div class="user-status__item flex">
    <img src="img/person-rolodex.svg" alt="">
    <div class="text-container flex flex--d-column flex--jc-center">
      <span id="status-item-value">9</span>
      <span id="status-item-title">Total solicitado</span>
    </div>
  </div>
  <div class="user-status__item flex">
    <img src="img/currency-dollar.svg" alt="">
    <div class="text-container flex flex--d-column flex--jc-center">
      <span id="status-item-value">R$0,00</span>
      <span id="status-item-title">Total solicitado</span>
    </div>
  </div>
  <div class="user-status__item flex">
    <img src="img/check-circle-fill.svg" alt="">
    <div class="text-container flex flex--d-column flex--jc-center">
      <span id="status-item-value">0</span>
      <span id="status-item-title">Total solicitado</span>
    </div>
  </div>
</div>
<h1>Controle de pagamentos</h1>
<div class="main">
  <div class="payments-control">
    <span>Esta lista está vazia.</span>
  </div>
</div>
`
const simulatorContent = `
<div class="simulator-content">
<div class="header">
  <h1>Simulador de Parcelas</h1>
  <h2>Valores para uma taxa base de 3,20% a.m. Crédito mediante aprovação.<br> 
    <b>ATENÇÃO</b>: Os valores do simulador não representam o valor final do financiamento, verificar após preenchimento da proposta.
  </h2>
</div>
<div class="main">
  <div class="ta-center">
    <h1>Valor do Procedimento (R$)</h1>
  <input type="text" name="surgery-value" id="surgery-value" placeholder="Ex.: R$ 5.000,00">
  </div>
  <p id="trick-txt">Caso o paciente deseja dar um valor de entrada, o pagamento é feito diretamente à clínica/hospital. Basta criar uma solicitação com o restante à ser financiado.</p>
</div>
<div class="simulator-grid">

  <div class="flex flex--jc-sbetween flex--ai-center">
    <div class="flex-column">
      <span class="simulation-result">12x de <b>R$1000</b></span>
    </div>
    <div class="flex-column">
      <button id="select-btn">Selecionar</button>
    </div>
  </div>

  <div class="flex flex--jc-sbetween flex--ai-center">
    <div class="flex-column">
      <span class="simulation-result">12x de <b>R$1000</b></span>
    </div>
    <div class="flex-column">
      <button id="select-btn">Selecionar</button>
    </div>
  </div>

  <div class="flex flex--jc-sbetween flex--ai-center">
    <div class="flex-column">
      <span class="simulation-result">12x de <b>R$1000</b></span>
    </div>
    <div class="flex-column">
      <button id="select-btn">Selecionar</button>
    </div>
  </div>

  <div class="flex flex--jc-sbetween flex--ai-center">
    <div class="flex-column">
      <span class="simulation-result">12x de <b>R$1000</b></span>
    </div>
    <div class="flex-column">
      <button id="select-btn">Selecionar</button>
    </div>
  </div>

  <div class="flex flex--jc-sbetween flex--ai-center">
    <div class="flex-column">
      <span class="simulation-result">12x de <b>R$1000</b></span>
    </div>
    <div class="flex-column">
      <button id="select-btn">Selecionar</button>
    </div>
  </div>

  <div class="flex flex--jc-sbetween flex--ai-center">
    <div class="flex-column">
      <span class="simulation-result">12x de <b>R$1000</b></span>
    </div>
    <div class="flex-column">
      <button id="select-btn">Selecionar</button>
    </div>
  </div>
</div>
<div class="save-area flex flex--d-column flex--ai-center">
  <button id="whatsapp-method">
  <i class="bi bi-whatsapp"></i>
  Enviar simulação via whatsapp
  </button>
  <button id="pdf-method">
  <i class="bi bi-file-pdf"></i>
  Exportar PDF da simulação
  </button>
</div>
</div>
`;
const linksContent = `
<div class="links-content">
<div class="header">
  <h1>Link para Pacientes</h1>
  <h2>Envie o seu link parametrizado para seus pacientes e permita que eles verifiquem a aprovação de crédito por conta própria. </h2>
</div>
<div class="main">
  <h1>Link parametrizado</h1>
  <input type="text" name="link" id="link" placeholder="link.projeto.com/clinicacerta">
  <br/>
  <a class="send-link-btn">
  <i class="bi bi-whatsapp"></i>
  Enviar link
  </a>
  <div class="requested-links">
    Por enquanto nenhum paciente solicitou com o link.
  </div>
</div>
</div>
`;
const questionsContent = `
<div class="questions-content">
            <div class="header">
              <h1>Dúvidas Frequentes</h1>
              <h2>Ficou com alguma dúvida? Não deixe de conferir nosso FAQ!<br>Se sua dúvida ainda não for resolvida, não tenha medo de nos escrever uma mensagem através do botão SUPORTE.</h2>
            </div>
            <div class="main">
              <details>
                <summary>Dúvida</summary>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos ratione at aliquam neque quidem dolore maxime blanditiis. Amet accusamus sed libero itaque magnam, dolor quasi adipisci molestiae numquam expedita?</p>
              </details>
              <details>
                <summary>Dúvida</summary>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos ratione at aliquam neque quidem dolore maxime blanditiis. Amet accusamus sed libero itaque magnam, dolor quasi adipisci molestiae numquam expedita?</p>
              </details>
              <details>
                <summary>Dúvida</summary>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos ratione at aliquam neque quidem dolore maxime blanditiis. Amet accusamus sed libero itaque magnam, dolor quasi adipisci molestiae numquam expedita?</p>
              </details>
              <details>
                <summary>Dúvida</summary>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos ratione at aliquam neque quidem dolore maxime blanditiis. Amet accusamus sed libero itaque magnam, dolor quasi adipisci molestiae numquam expedita?</p>
              </details>
              <details>
                <summary>Dúvida</summary>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos ratione at aliquam neque quidem dolore maxime blanditiis. Amet accusamus sed libero itaque magnam, dolor quasi adipisci molestiae numquam expedita?</p>
              </details>
            </div>
          </div>
`;

const inforSelItem = document.querySelectorAll(".infor-selection__item");
const inforContainer = document.querySelector(".infor-container");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownMenuItem = document.querySelectorAll(".dropdown-menu__item");
const asideMenu = document.querySelector("aside");

for (let i = 0; i < inforSelItem.length; i++) {
  inforSelItem[i].addEventListener("click", () => changeInfor(i));
}

function showDropdownMenu() {
  dropdownMenu.classList.toggle("show-dropdown-menu");
}

changeInfor(0);

function changeInfor(id) {
  switch (id) {
    case 0:
      inforContainer.innerHTML = signInContent;
      dropdownMenu.classList.remove("show-dropdown-menu");
      inforSelItem[0].classList.add("selected");
      inforSelItem[1].classList.remove("selected");
      inforSelItem[2].classList.remove("selected");
      inforSelItem[3].classList.remove("selected");
      inforSelItem[4].classList.remove("selected");
      break;
    case 1:
      inforContainer.innerHTML = requestsContent;
      inforSelItem[0].classList.remove("selected");
      dropdownMenuItem[0].classList.add("selected");
      dropdownMenuItem[1].classList.remove("selected");
      inforSelItem[1].classList.add("selected");
      inforSelItem[2].classList.remove("selected");
      inforSelItem[3].classList.remove("selected");
      inforSelItem[4].classList.remove("selected");
      let filterList = document.querySelector(".filter-list");
      let filtersBtn = document.querySelector(".filter-header img");
      filtersBtn.addEventListener("click", () => showFiltersList(filterList));

      break;
    case 1.2:
      inforContainer.innerHTML = requestsContent12;
      dropdownMenuItem[0].classList.remove("selected");
      dropdownMenuItem[1].classList.add("selected");
      break;
    case 2:
      inforContainer.innerHTML = simulatorContent;
      dropdownMenu.classList.remove("show-dropdown-menu");
      inforSelItem[0].classList.remove("selected");
      inforSelItem[1].classList.remove("selected");
      inforSelItem[2].classList.add("selected");
      inforSelItem[3].classList.remove("selected");
      inforSelItem[4].classList.remove("selected");
      break;
    case 3:
      inforContainer.innerHTML = linksContent;
      dropdownMenu.classList.remove("show-dropdown-menu");
      inforSelItem[0].classList.remove("selected");
      inforSelItem[1].classList.remove("selected");
      inforSelItem[2].classList.remove("selected");
      inforSelItem[3].classList.add("selected");
      inforSelItem[4].classList.remove("selected");
      break;
    case 4:
      dropdownMenu.classList.remove("show-dropdown-menu");
      inforContainer.innerHTML = questionsContent;
      inforSelItem[0].classList.remove("selected");
      inforSelItem[1].classList.remove("selected");
      inforSelItem[2].classList.remove("selected");
      inforSelItem[3].classList.remove("selected");
      inforSelItem[4].classList.add("selected");
      break;
  }
}

function showAsideMenu() {
  asideMenu.classList.toggle("show-aside-menu");
}

function showFiltersList(t) {
  t.classList.toggle("show-filter-list");
}
