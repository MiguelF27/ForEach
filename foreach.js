function contar(){ //Função contar
    let numero = 0; //Recebe valor inicial de 0
    let txtNumeroFinal = document.getElementById("txtNumeroFinal"); //Vamos coletar o elemento txt do html
    let divNumeros = document.getElementById("divNumeros"); //Vamos receber número da div do html

    divNumeros.innerHTML = "";

    for (let i = numero; i <= txtNumeroFinal.value; i++) { // i = i + 1
        divNumeros.innerHTML += i + "<br />"; //+= Recebe o valor da variavel mais o valor desejado
    }
}

document.getElementById("txtNumeroFinal").addEventListener('keyup', function(event) {
    if(event.keyCode == 13){
        contar();
    } else {
        if(
            isNaN(event.key) &&
            event.keyCode !=8 && //Quando a backspace é clicada
            event.keyCode !=46 && //Significa que a tecla delete é clicada
            event.keyCode !=37 &&//Significa que a tecla seta esquerda é clicada
            event.keyCode !=38 &&//Significa que a tecla seta para cima é clicada
            event.keyCode !=39 &&//Significa que a tecla seta para baixo é clicada
            event.keyCode !=40 &&//Significa que a tecla seta para direita é clicada
            event.keyCode !=35 &&//Significa que a tecla end é clicada
            event.keyCode !=36 //Significa que a tecla home é clicada
        ) {
        console.log("Não numérico");
        //Não é permitido digitar qualquer letra
        divNumeros.innerHTML = "Não é permitido teclar uma tecla não numérica!";
        }
        //if(document.getElementById("txtNumeroFinal").value) {

        //}
    }
});
document.getElementById("txtNumeroFinal").addEventListener('input', function(event) {
    
    if(this.value.length > 3) {
        console.log("Tem mais de 3 caracteres");
        if(this.value > 999) {
            this.value = 999;
            alert("Onúmero máximo permitido é 999!")
        } else {
            this.value = this.value.substring(0,3);
        }
    }
});