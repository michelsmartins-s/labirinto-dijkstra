let distancias = [];
let anteriores = [];
let visitados = [];

for(let i = 0; i < LINHAS*COLUNAS; i++) {
    distancias[i] = Infinity;
    anteriores[i] = null;
    visitados[i] = false;
}

distancias[celulaDeInicio] = 0;

for(let i = 0; i < LINHAS*COLUNAS; i++) {
    let celulaAtual = -1;
    let menorDistancia = Infinity;

    for(let j = 0; j < LINHAS*COLUNAS; j++) {
        if (!visitados[j] && distancias[j] < menorDistancia) {menorDistancia = distancias[j], celulaAtual = j};
    }

    if (celulaAtual == -1) break;
    if (celulaAtual == celulaDeFim) break;

    visitados[celulaAtual] = true;

    for (let direcao = 0; direcao < 4; direcao++) {
        if (!grade[celulaAtual].paredes[direcao]) {;
            let x = (celulaAtual%COLUNAS)+((direcao%2)*(2-direcao));
            let y = Math.floor(celulaAtual/COLUNAS)+(((direcao+1)%2)*(direcao-1));
            if (((x >= 0) && (x < COLUNAS)) && ((y >= 0) && (y < LINHAS))) {
                let vizinho = (y*COLUNAS)+x;
                let novaDistancia = distancias[celulaAtual]+1;
                if (novaDistancia < distancias[vizinho]) {distancias[vizinho] = novaDistancia, anteriores[vizinho] = celulaAtual};
            }
        }
    }
}

let caminho = [];
if (distancias[celulaDeFim] === Infinity) {
    alert("nao existe caminho")
}
else
{
    let atual = celulaDeFim;

    while (atual !== null) {
        caminho.push(atual);
        atual = anteriores[atual];
    }
}