const axios = require('axios');
async function buscarUsuario(id) {
    try {
        const resposta = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        console.log('Usuário encontrado:');
        console.log(resposta.data);
    } catch (erro) {
        console.error('Erro ao acessar a API:', erro.message);
    }
}
buscarUsuario(1);