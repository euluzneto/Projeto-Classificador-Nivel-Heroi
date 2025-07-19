//variaveis de nome e experiência do Heroi
let nomeHeroi = "Superman"; 
let experienciaHeroi = 9000;
let nivelHeroi = "";

//estrutura de decisão para verificar se o herói é experiente
if (experienciaHeroi <= 1000) {
    nivelHeroi = "ferro";
}else if (experienciaHeroi >= 1001 && experienciaHeroi <= 2000)
    nivelHeroi = "bronze";
else if (experienciaHeroi >= 2001 && experienciaHeroi <= 5000)
    nivelHeroi = "prata";
else if (experienciaHeroi >= 5001 && experienciaHeroi <= 7000)
    nivelHeroi = "ouro";
else if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000)
    nivelHeroi = "platina";
else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000)
    nivelHeroi = "ascendente";
else if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000)
    nivelHeroi = "imortal";
else if (experienciaHeroi >= 10001)
    nivelHeroi = "radiante";       

//exibe o nome e o nível do herói
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi + ".");