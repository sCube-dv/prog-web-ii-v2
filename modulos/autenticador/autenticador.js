// Módulo de autenticação
const Autenticador = (function() {
    let usuarios = [
        { id: 1, username: 'admin', password: 'admin123' },
        { id: 2, username: 'usuario', password: 'senha123' }
    ];
    
    let usuariosLogados = [];
    let proximoId = 3;
    
    // Função interna para gerar token
    function gerarToken() {
        return Math.random().toString(36).substring(2) + Date.now().toString(36);
    }
    
    // Função interna para encontrar usuário
    function encontrarUsuario(username) {
        return usuarios.find(user => user.username === username);
    }
    
    // Função interna para verificar se usuário está logado
    function usuarioEstaLogado(token) {
        return usuariosLogados.some(user => user.token === token);
    }
    
    // Funções expostas
    return {
        login: function(username, password) {
            const usuario = encontrarUsuario(username);
            
            if (!usuario) {
                throw new Error('Usuário não encontrado');
            }
            
            if (usuario.password !== password) {
                throw new Error('Senha incorreta');
            }
            
            // Verificar se usuário já está logado
            if (usuariosLogados.some(user => user.id === usuario.id)) {
                throw new Error('Usuário já está logado');
            }
            
            const token = gerarToken();
            usuariosLogados.push({
                id: usuario.id,
                username: usuario.username,
                token: token
            });
            
            return token;
        },
        
        logout: function(token) {
            if (!usuarioEstaLogado(token)) {
                throw new Error('Token inválido ou usuário não está logado');
            }
            
            usuariosLogados = usuariosLogados.filter(user => user.token !== token);
            return true;
        },
        
        registrar: function(username, password) {
            if (encontrarUsuario(username)) {
                throw new Error('Usuário já existe');
            }
            
            const novoUsuario = {
                id: proximoId++,
                username: username,
                password: password
            };
            
            usuarios.push(novoUsuario);
            return novoUsuario.id;
        },
        
        verificarToken: function(token) {
            return usuarioEstaLogado(token);
        },
        
        // Funções para teste (não seriam expostas em produção)
        getUsuariosLogados: function() {
            return [...usuariosLogados];
        },
        
        getTodosUsuarios: function() {
            return [...usuarios];
        }
    };
})();

// Exportar para uso em Node.js (se aplicável)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Autenticador;
}