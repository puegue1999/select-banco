const { conexao } = require('./db');

async function selectData() {
    await conexao.connect();
    try {
      const res = await conexao.query(`SELECT * FROM universidade.usuario`);
      console.log(res.rows);
    } catch (error) {
      console.error(error);
    }
    await conexao.end();
  }
  
selectData()