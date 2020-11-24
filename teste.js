const tipoVeiculoSimuladorFandi = {
    Novos : 1	,
    Seminovos : 2	,
    PosVenda : 3	,
    VendaDireta : 4	,
    CentralDeVenda : 5	
}

const parametrosSimuladorFandi = {
  cidade: 'Aracaju-SE',
  chave: "67fedb9f-c6cb-4885-8954-510db5b5f730",   
  molicar: '',
  fipe: '',
  cnpjLead: '',
  tipoVeiculo: tipoVeiculoSimuladorFandi.Seminovos,
  modeloId: 0,
  anoModelo : 0,
  anoFabricacao: 0,
  valorVeiculo: 0
};

const parametrosClienteSimuladorFandi = {
    cpf : '',
    dataNascimento: '',
    nome: '',
    email: '',
    telefone: ''
}

const stylesSimuladorFandi = {
  logo_url : 'https://popupfandi.connectleadserver.club/assets/img/detalhes-logo.png',
  logo_background: 'https://popupfandi.connectleadserver.club/assets/img/detalhes-bg.png',
  box_info_background_color: '#0C2543',
  box_info_text_color:'white',
  button_color:'#4A90E2',
  button_hover_color:'#27558c'
};

const finalizarEnvioProposta = () => {
  // Função chamada ao salvar a proposta com sucesso
};

const parametrosEnvioSimulador = {
    FinalizarEnvioProposta : finalizarEnvioProposta,
    NomeBotaoEnviarProposta : ""
};

(function(d){
  let script = document.createElement("script")
  script.type = "text/javascript"
  script.async = true

  script.src = "https://core.fandi.com.br/_script/all.min.js"; 

  let head = document.getElementsByTagName("head")[0]
  head.appendChild(script);


    

})(document);

simuladorViewModel.Regras.PrimeiraCargaDadosModal()      