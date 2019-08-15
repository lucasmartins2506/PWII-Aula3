{
    var comprimento_1 = 30;
    var largura_1 = 15;
    var altura_1 = 25;
    var volume = function (comp, larg, alt) {
        if (alt === void 0) { alt = 7; }
        return (comprimento_1 * largura_1 * altura_1);
    };
    console.log("O volume \u00E9 " + volume(comprimento_1, largura_1, altura_1));
}
