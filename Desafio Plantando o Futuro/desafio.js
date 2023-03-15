/*
🌱 Sobre o Desafio 
Pela manhã, com todos descansados, sua primeira missão será aumentar a plantação de jacarandás, árvore fundamental para a magia do vale. Para isso, é necessário plantá-los a uma certa distância um pé do outro para que nenhuma muda roube o nutriente da outra, fazendo com que algumas não se desenvolvam. Nesse sentido, é necessário que cada pé esteja a exatos 10 metros de distancia um do outro, assim conseguiremos plantar todas as mudas e evitar que algumas não se desenvolvam.

Crie um código que, com as entradas de distancias dos buracos avaliadas pelo drone, verifique se o espaço entre um buraco e outro é igual a 10 metros. Se for, imprima no console "Plantar!". Se não for, imprima no console a distância que o buraco deve retroceder ou avançar para chegar ao número ideal.

Para esse desafio os métodos Math do Javascript podem ser muito úteis.

⛺ Entradas e Saídas
As entradas serão quantos metros o drone verificou entre um buraco e outro. A saída deverá ser, dependendo da distância dos buracos analisados pelo drone, se os CleanCoders podem plantar ou se o buraco deve avançar ou retroceder uma quantia X de metros.

🌳 Exemplo
Entrada 	  Saída 

10      	  Plantar!      
15   	      O buraco deve retroceder 5 metros     
2             O buraco deve avançar 8 metros



*/
function get(valor){
    return valor
}

const distanciaPlantio = 10;

let distanciaDrone = parseInt(get(2))

var x =Math.abs(distanciaDrone - distanciaPlantio);



if(distanciaDrone === distanciaPlantio){

    console.log(`Plantar!`)
}
else if(distanciaDrone > distanciaPlantio){
    console.log(`O buraco deve retroceder ${x} metros`)
}
else{
    console.log(`O buraco deve avançar ${x} metros`)
}