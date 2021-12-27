const axios = require('axios');

exports.vendaTituloBV = async (body) => {
  try {
    const resultPagamento = await axios({
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      url: 'https://apis-dev.brasilcap.info/vendas/bv',
      data: body
    });
    return resultPagamento;
  } catch (error) {
    console.log('@vendaTituloBV', error);
    throw new Error(error);
  }
};
