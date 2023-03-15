/*
🌱 Sobre o Desafio
Após vocês promoverem diversas atividades a favor da natureza, a liderança e a diretoria da Oil Corp convidaram vocês para os ajudarem a preservar a natureza e a serem uma empresa sustentável. Para isso, eles precisam de ajuda para criar o algoritmo que direciona os resíduos da água para a estação de tratamento correta antes de ser descartada no rio Jacará-Mirim.

Via de regra, as moléculas que possuem até 5 caracteres passam pelo Filtro Normal, as que possuem até 10 caracteres passam pelo Filtro Específico e as que possuem mais que 10 caracteres passam pelo Filtro Duplo Especifico. Essas moléculas estão misturadas nos resíduos, se houver ao menos uma que tenha o número específico de caracteres esse resíduo já deve passar pelo filtro correto.

Crie um código que implemente essas regras e imprima o filtro adequado para cada molécula:

<= 5 - Imprimir "Filtro Normal";
> 5 e <= 10 - Imprimir "Filtro Específico";
> 10 - Imprimir "Filtro Duplo Específico";
🏭 Entradas e Saídas 
As entradas serão listas contendo as moléculas contidas na água analisada. A saída deverá ser se o filtro utilizado deve ser o "Filtro Normal", o "Filtro Específico" ou o "Filtro Duplo Específico".

🌳 Exemplo 
Entrada         	  Saída 
HNO, H3ON, HN3FO	 O filtro deve ser: Filtro Normal


HNO3FOH, H3O, FOH3	  O filtro deve ser: Filtro Específico


*/ 


var a = ['HNO', 'H3ON', 'HN3FO']



 var b = 0
for(var i = 0; i < a.length; i++){
    if(a[i].match){
     
    }     
          
  }

  if(b <= 5){
    console.log(` Filtro Normal`)
   
 }
 else if(b<= 10){
     console.log(` Filtro Específico`)
 }
 
 else{
     console.log(` Filtro Duplo Específico`)
 }  
  
/*var l = ['HNO', 'H3ON', 'HN3FO']
var a = 0
var K = `O filtro deve ser:`

for(var i = 0; i < l.length; i++){
    if(i == 0){
        a = l[i].length
    }
    else{
        if(l[i].length > a){
            a = l[i].length
        }
    }
}


if(a <= 5){
     console.log(`${k} Filtro Normal`)
    
  }
  else if(a<= 10){
      console.log(`${K} Filtro Específico`)
  }
  
  else{
      console.log(`${k} Filtro Duplo Específico`)
  } 

*/