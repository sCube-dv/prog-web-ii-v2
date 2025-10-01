// Módulo de conversão de unidades
const Conversor = (function() {
    // Funções internas (não expostas)
    function celsiusParaFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }
    
    function fahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }
    
    function metrosParaQuilometros(metros) {
        return metros / 1000;
    }
    
    function quilometrosParaMetros(quilometros) {
        return quilometros * 1000;
    }
    
    function reaisParaDolar(reais, taxa = 5.5) {
        return reais / taxa;
    }
    
    function dolarParaReais(dolar, taxa = 5.5) {
        return dolar * taxa;
    }
    
    // Funções expostas
    return {
        converterTemperatura: function(valor, direcao) {
            if (direcao === 'celsiusParaFahrenheit') {
                return celsiusParaFahrenheit(valor);
            } else if (direcao === 'fahrenheitParaCelsius') {
                return fahrenheitParaCelsius(valor);
            } else {
                throw new Error('Direção de conversão inválida');
            }
        },
        
        converterDistancia: function(valor, direcao) {
            if (direcao === 'metrosParaQuilometros') {
                return metrosParaQuilometros(valor);
            } else if (direcao === 'quilometrosParaMetros') {
                return quilometrosParaMetros(valor);
            } else {
                throw new Error('Direção de conversão inválida');
            }
        },
        
        converterMoeda: function(valor, direcao, taxa = 5.5) {
            if (direcao === 'reaisParaDolar') {
                return reaisParaDolar(valor, taxa);
            } else if (direcao === 'dolarParaReais') {
                return dolarParaReais(valor, taxa);
            } else {
                throw new Error('Direção de conversão inválida');
            }
        }
    };
})();

// Exportar para uso em Node.js (se aplicável)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Conversor;
}