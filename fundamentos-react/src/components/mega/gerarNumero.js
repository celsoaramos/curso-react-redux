
// gerar numero entre 1 e 60 e não pode repetir
function gerarNumeroNaoContido(min, max, array) {
    
    // max + 1 para considerar o número máximo, no caso da mega sena é o 60
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    
    return array.includes(aleatorio) ? 
    gerarNumeroNaoContido(min, max, array) : 
    aleatorio
}

function gerarNumeros(quantidade) {
    const numeros = Array(quantidade)
                    .fill(0)
                    .reduce((nums) => {
                        const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                        console.log([ ...nums, novoNumero])
                        return [ ...nums, novoNumero]
                    }, [])
                    .sort((n1, n2) => n1 - n2)



    return numeros   
}

// OUUU

function sortear(qtde){
    let numerosMega = new Set()
    while(numerosMega.size < qtde){
        numerosMega.add(parseInt(Math.random() * 60))
    }
    return [...numerosMega]
}
console.log(sortear(6).sort((a, b) => a-b))


//console.log(gerarNumeros(7))