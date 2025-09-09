const usuarios = ['mateus', 'marcos', 'lucas', 'joão'];

function retornaUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(nome) {
    usuarios.push(nome);
}

module.exports = {
    retornaUsuarios,
    adicionarNovoUsuario
}