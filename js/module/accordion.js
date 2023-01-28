// --------------------------------------------------------------------
//  Manipulação na sessão de perguntas frequentes da página de seguros
// --------------------------------------------------------------------

export default class AccordionList {
  constructor(list) {
    this.botoesPerguntas = document.querySelectorAll(list);
  }

  toggleAccordion(item) {
    // Botão que está sendo clicado
    const btnPergunta = item;

    // Busca o valor do atributo aria-controls do botão
    const ariaControls = btnPergunta.getAttribute('aria-controls');

    // Busca o elemento DD pelo aria-controls do Botão, tendo em vista que o ID do DD é = aria-controls do botão qeu ele está relacionado
    const ddResposta = document.getElementById(ariaControls);

    // Adiciona e Retira a classe "Ativa" no DD a cada click no botão
    ddResposta.classList.toggle('ativa');

    // Retorna True ou False se existe ou não a classe "ativa" no DD Resposta
    const verificaClasseAtiva = ddResposta.classList.contains('ativa');
    // Seta True ou False no
    btnPergunta.setAttribute('aria-expanded', verificaClasseAtiva);
  }

  addAccordionEvent() {
    this.botoesPerguntas.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.botoesPerguntas.length) {
      this.addAccordionEvent();
    }
  }
}
