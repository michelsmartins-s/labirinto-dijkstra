
function gerarLabirinto(LINHAS, COLUNAS, PERCENTUAL) {
    let grade = [];
    for (let quantidade = 0; quantidade < LINHAS*COLUNAS; quantidade++) {
        grade.push({
            visitada: false,
            paredes: [ true, true, true, true ] //norte, leste, sul, oeste
        });
    }

    let pilha = [];
    let celula = 0;
    grade[celula].visitada = true;
    for (let quantidade = 1; quantidade < LINHAS*COLUNAS; ) {
        let vizinhos = [];
        for (let direcao = 0; direcao < 4; direcao++) {
            let x = (celula%COLUNAS)+((direcao%2)*(2-direcao));
            let y = Math.floor(celula/COLUNAS)+(((direcao+1)%2)*(direcao-1));
            if (((x >= 0) && (x < COLUNAS)) && ((y >= 0) && (y < LINHAS))) {
                let vizinho = (y*COLUNAS)+x;
                if (!grade[vizinho].visitada) {
                    vizinhos.push(vizinho);
                }
            }
        }
        if (vizinhos.length > 0) {
            pilha.push(celula);
            let vizinho = vizinhos[Math.floor(Math.random()*vizinhos.length)];
            let diferenca = vizinho-celula;
            let direcao = 1+((diferenca-(diferenca%COLUNAS))/COLUNAS)+((diferenca%COLUNAS)**2)-(diferenca%COLUNAS);
            grade[celula].paredes[direcao] = grade[vizinho].paredes[(direcao+2)%4] = false;
            celula = vizinho;
            grade[celula].visitada = true;
            quantidade++;
        } else {
            if (pilha.length > 0) {
                celula = pilha.pop();
            }
        }
    }

    for (let quantidade = PERCENTUAL*LINHAS*COLUNAS; quantidade > 0; quantidade--) {
        let celula = Math.floor(Math.random()*LINHAS*COLUNAS);
        let direcao = Math.floor(Math.random()*4);
        let x = (celula%COLUNAS)+((direcao%2)*(2-direcao));
        let y = Math.floor(celula/COLUNAS)+(((direcao+1)%2)*(direcao-1));
        if (((x >= 0) && (x < COLUNAS)) && ((y >= 0) && (y < LINHAS))) {
            grade[celula].paredes[direcao] = grade[(y*COLUNAS)+x].paredes[(direcao+2)%4] = Math.floor(Math.random()*2);
        }
    }

    return grade;
}