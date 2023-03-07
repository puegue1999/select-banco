const { Pool } = require('pg');

const conexao = new Pool({
    user: 'aluno',
    host: 'database-1.clyjg1fcfqnn.us-east-1.rds.amazonaws.com',
    database: 'bd_aula',
    password: 'aluno',
    port: 5432,
});

module.exports = { conexao };