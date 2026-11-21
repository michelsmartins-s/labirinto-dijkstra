function desenharLabirinto(ctx, canvas, grade, LINHAS, COLUNAS, LADO, caminho) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black";
    for (let celula = 0; celula < LINHAS*COLUNAS; celula++) {
        let x = celula%COLUNAS;
        let y = Math.floor(celula/COLUNAS);
        if (grade[celula].paredes[0]) {
            desenharLinha(x*LADO, y*LADO, (x*LADO)+LADO, y*LADO);
        }
        if (grade[celula].paredes[1]) {
            desenharLinha((x*LADO)+LADO, y*LADO, (x*LADO)+LADO, (y*LADO)+LADO);
        }
        if (grade[celula].paredes[2]) {
            desenharLinha((x*LADO)+LADO, (y*LADO)+LADO, x*LADO, (y*LADO)+LADO);
        }
        if (grade[celula].paredes[3]) {
            desenharLinha(x*LADO, (y*LADO)+LADO, x*LADO, y*LADO);
        }
    }
}

function desenharLinha(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1+1, y1+1);
	ctx.lineTo(x2+1, y2+1);
	ctx.stroke();
}