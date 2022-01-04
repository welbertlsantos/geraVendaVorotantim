const vendaService = require('./services/vendaService');
const {vendaDTO} = require('./dto/vendaDTO');
const totalVenda = 2
let qtdVendaRealizada = 0;
const fs = require('fs');

const processa = async () => {
  try {
    let retorno = [];
      const intervaloVenda = setInterval(async () => {
        vendaService.vendaTituloBV(vendaDTO())
        .then((result) => {
          qtdVendaRealizada++;
          console.log(`Total de Vendas... ${qtdVendaRealizada}`);
          console.log(`Titulo Gerado..... ${result.data.idTitulo}`);
          console.log(`Data de Débito.... ${result.data.dataDebito}`);
          console.log(`NumeroContrato.... ${result.data.numContratoFinanciamento}`);
          retorno.push({
            idTitulo: result.data.idTitulo,
            NumeroContratoFinanciamento: result.data.numContratoFinanciamento,
            dataDebito: result.data.dataDebito,
            cpfCnpj: result.data.cpfCnpjTitular
          });
          if (qtdVendaRealizada >= totalVenda){
            console.log("Interrompendo a execução...");
            clearInterval(intervaloVenda);
            fs.writeFileSync('Vendas.json',JSON.stringify(retorno));
          } 
        })
        .catch(()=> {
          console.log('Erro do processo de venda...');
          });
      }, 7000);
  } catch (error) {
    console.log('Error', error);
  }
};

processa();