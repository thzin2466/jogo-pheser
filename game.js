const configuracao = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    },
    scene: { preload: preCarregar, create: criar, update: atualizar }
};

let jogador;
let teclas;
let paredes;
let inimigos;
let moedas;
let textoPontuacao;
let textoFimDeJogo;
let pontuacao = 0;
let jogoTerminou = false;
let velocidade = 160;

// Layout simples: 1 = parede, 0 = vazio
const mapa = [
    '1111111111111111',
    '1000000001000001',
    '1011110101011101',
    '1010000101000001',
    '1010111101111011',
    '1000100000001001',
    '1110101111101011',
    '1000100000010111',
    '1011101011110111',
    '1000000100000001',
    '1111111111111111'
];

const tamanhoBloco = 40;

function preCarregar() {
    this.load.spritesheet('jogador', 'pacman_sheet.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('inimigo', 'ghost_sheet.png', { frameWidth: 32, frameHeight: 32 });

    // parede e moeda seguem gerados (sem asset externo)
    const grafico = this.add.graphics();

    grafico.fillStyle(0x2255cc, 1);
    grafico.fillRect(0, 0, tamanhoBloco, tamanhoBloco);
    grafico.generateTexture('parede', tamanhoBloco, tamanhoBloco);
    grafico.clear();

    grafico.fillStyle(0xffffff, 1);
    grafico.fillCircle(4, 4, 4);
    grafico.generateTexture('moeda', 8, 8);
    grafico.destroy();
}
