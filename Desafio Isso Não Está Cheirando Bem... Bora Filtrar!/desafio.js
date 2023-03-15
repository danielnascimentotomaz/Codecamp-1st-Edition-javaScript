/*
🌱 Sobre o Desafio
A Oil Corp abriu o jogo e entregou para vocês uma lista contendo vários gases que eles liberam durante a extração de óleo. Alguns desses gases são extremamente prejudiciais para a camada de ozônio e para a natureza local como: NO2, SO2, CO e FHO.

Durante a extração os gases saem misturados. Crie um código que, de acordo com a lista, verifique se há pelo menos UM desses gases. Se não houver, imprima que deverá passar por um Filtro Simples. Se houver, imprima no console que deverá passar por um Filtro Especial e especifique qual gás.

🏭 Entradas e Saídas 
A entrada será uma lista de listas com as moléculas que devem ser analisadas. A saída deve ser qual filtro deve ser utilizado para filtrar. Caso tenha uma dessas moléculas prejudiciais, a saída deve ser um filtro específico para a molécula X.

Nesse nosso desafio se houver a molécula prejudicial na entrada será apenas UMA.

🌳 Exemplo 
Entrada         	  Saída 
CO2, OH
Br2, NH3
HCl, HCN, O2	    Filtro Simples



CO2, CO
NH3, Cl2	Filtro Específico para a Molécula CO

*/ 

const l =[['CO2', 'OH'],['Br2', 'NH3'],['HCl', 'HCN','O2']]
let qualFiltro = false;

for(let i = 0 ; i < l.length; i++){
    
    for(let y = 0; y < l[i].length;y++){
        var x = l[i][y]
        if(x === "NO2"|| x === "SO2" || x === "CO" || x === "FHO"){
            console.log(`Filtro Específico para a Molécula ${x}`)
            qualFiltro = true
        
        }}    }



if(qualFiltro === false){
    console.log("Filtro Simples")
}









