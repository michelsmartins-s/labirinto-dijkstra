
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let LINHAS = parseInt(prompt("digite a quantidade de linhas"));
let COLUNAS = parseInt(prompt("digite a quantidade de colunas"));
let PERCENTUAL = (parseFloat(prompt("digite o percentual do labirinto")))/100;
let celulaDeInicio = parseInt(prompt("informe uma célula de inicio (entre " + 0 + " e " + (LINHAS*COLUNAS-1)));
let celulaDeFim = parseInt(prompt("informe uma célula de fim (entre " + 0 + " e " + (LINHAS*COLUNAS-1)));
const LADO = 30;

let grade = gerarLabirinto(LINHAS, COLUNAS, PERCENTUAL);
let caminho = algoritmoDjikstra(grade, LINHAS, COLUNAS, celulaDeInicio, celulaDeFim);
if (caminho.length === 0) {alert("nao existe caminho")};
desenharLabirinto(ctx, canvas, grade, LINHAS, COLUNAS, LADO, caminho);
