/*
🌱 Sobre o Desafio 
Buscando planejar as ações para conter a Oil Corp, um acampamento foi criado e muitos CleanCoders (inclusive novos adeptos da causa) estão chegando. Com isso, para faciliar a comunicação e interação, precisamos imprimir cartões de identificação para todas as pessoas.

Crie um código que com três entradas (NOME, SOBRENOME e ID) que imprima essas informações no seguinte padrão: "Nome: NOME SOBRENOME ID: ID"

Venilton, um CleanCoder experiente, compartilhou uma dica bem útil. Ele disse que é possível utilizar o conceito de interpolação de strings para facilitar a impressão de textos concatenados à variáveis. Para utilizar basta fazer assim:

print(`String e ${variavel}`);
⛺ Entradas e Saídas
As entradas serão: o nome, o sobrenome e o ID de cada CleanCoder. A saída deverá ser essas três variáveis concatenadas em uma única String.

🌳 Exemplo 01

Entrada 	     Saída 
Kawan
Anthony         Nome: Kawan Anthony ID: 22
22  

🌳 Exemplo 02 

Entrada 	     Saída 

Renan
Oliveira       Nome: Renan Oliveira ID: 98
98       


🌳 Exemplo 02 

Entrada 	     Saída 

Marjory
Santos          Nome: Marjory Santos ID: 204 
204                   

*/ 

function gets(x){
    return x
}

let nome = gets("Daniel")
let sobrenome = gets("Nascimento Tomaz");
let id = parseInt(gets(01));

console.log(`Nome: ${nome} ${sobrenome} ID: ${id}`)