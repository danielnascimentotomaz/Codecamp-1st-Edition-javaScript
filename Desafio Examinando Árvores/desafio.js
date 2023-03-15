/*

Chegando no Vale, ao lado do rio Jacará-Mirim, a natureza se mostra exuberante. Porém, é necessário verificar as árvores da região estão saudáveis ou necessitando de cuidados. Para isso, durante nossa jornada até o vale, utilizamos um dispositivo de ultrassom desenvolvido por uma das CleanTechs parceiras, a Cleanduino (especializada em projetos com Arduino e JavaScript, usando o Framework Johnny-Five). Através desse dispositivo coletamos uma lista de amostras, onde cada registro tem o percentual de saúde da árvore avaliada.

Crie um código que, para cada item dessa lista, verifique se a amostra está com um nível: Bom, Aceitável ou Inaceitável. Para cada nível, imprima a ação que deve ser realizada considerando as seguintes regras:

Bom (mais de 75% de saúde na amostra)
Imprima "Descartar da lista"
Aceitável (mais de 50% e menos de 75%)
Imprima "Manter sob observação"
Inaceitável (menos de 50%)
Imprima "Isolar e iniciar protocolo de cuidados"
Lembrando que todas as amostras são de exatamente 100g e as listas terão tamanhos variados.

🌅 Entradas e Saídas
As entradas será uma lista com as porcentagens de saúde das árvores. Para a saída esperamos que seja printado no console, dependendo da porcentagem, se a árvore deve: "Ser descartada da lista", "Manter sob observação" ou "Isolar e iniciar protocolos de cuidados". Essas frases devem ser printadas para cada item da lista.

🌳 Exemplo
Entrada 	           Saída 
10, 75, 98      	
                    Isolar e iniciar protocolo de cuidados
                    Descartar da lista
                    Descartar da lista                       
50, 65, 80   	
                    Manter sob observação           
                    Manter sob observação
                    Descartar da lista 
2, 10, 15                 	
                    Isolar e iniciar protocolo de cuidados
                    Isolar e iniciar protocolo de cuidados
                    Isolar e iniciar protocolo de cuidados 
















*/






var valores =[10,75,98,1000]

for(var i =0 ; i< valores.length;i++){
    
    if(valores[i] >= 75){
        console.log(`Descartar da lista`)
    }

    else if(valores[i] >= 50 && valores[0]< 75){
        console.log(`Manter sob observação`)
    }

    else{
        console.log(`Isolar e iniciar protocolo de cuidados`)
    }
    


}
