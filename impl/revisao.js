{
    var n1 = 30;
    var n2 = 15;
    //let n3: number = 25;//
    var fmedia = function (nota1, nota2, nota3) {
        if (nota3 === void 0) { nota3 = 7; }
        return (nota1 + nota2 + nota3) / 3;
    };
    console.log("A m\u00E9dia \u00E9 " + fmedia(n1, n2));
}
