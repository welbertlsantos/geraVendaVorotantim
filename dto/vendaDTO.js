let numContratoFinanciamento = 2309000017626;

exports.vendaDTO = () => {
  numContratoFinanciamento++;
  return {
    reaplicacao: false,
    idItemComercializacao : 4,
    infoExtraVenda : {
      dataDebito : '23/12/2021',
      valor: 230.00,
      dataPrevisaoLiquidacao: null,
      infoVenda: 'Informações Adicionais da Venda',
      ufVenda: 'RJ',
      cpfCnpj: '79186169874',
      tipoPessoa: 'PF',
      nome: 'UBIRATAN BEZERRA SATTO',
      endereco : {
          logradouro: 'Rua Senador Dantas',
          complemento: null,
          cidade: 'Rio de Janeiro',
          bairro: 'Centro',
          uf: 'RJ',
          CEP: '22444477'
      },
      dataNascimento: '01/01/1988',
      sexo: 'M',
      ddd: '21',
      telefone: '22224444',
      tpTelefone: null,
      descTpTelefone: null,
      enderecoResidencial: {
          logradouro: 'Rua Senador Dantas',
          complemento: null,
          cidade: 'Rio de Janeiro',
          bairro: 'Centro',
          uf: 'RJ',
          CEP: '22444477'
      },
      idPontoVenda: null,
      dtContrato: '13/08/2020',
      nomeFilial: 'Teste filial',
      cdSeguradora: '123456',
      cdProdutoSeguro: '555',
      nomeParceiroLojista: 'Lojista DEV - teste comissao',
      cnpjParceiroLojista : '51790370000100',
      tipoParceiroLojista : 'Loja',
      nomeVendedor : 'Teste BV DEV',
      cpfVendedor : '52106707088',
      numSerie: 'DA',
      numeroTitulo: '12345',
      numContratoFinanciamento: numContratoFinanciamento.toString(),
      numPrazoFinanciamento: '48',
   }
  }
};
