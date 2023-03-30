// --------------- PRÁTICA GUIADA ---------------

// Em uma escola, são aplicadas 4 provas por bimestre.
// Tendo como base o array de cada bimestre, crie um programa que mostre a média e a soma das notas de cada bimestre.
// Para esse programa, considere o seguinte formato:

// const bimestre1 = [ 3,7,8,9 ]
// const bimestre2 = [ 9,8,10,5]
// const bimestre3 = [ 7,4,2,6]
// const bimestre4 = [ 9,4,5,5 ]

// const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

// for (let i=0; i<notasDoAno.length; i++){
//   let soma = 0
//   for (let j=0; j< notasDoAno[i].length; j++){
//     soma = soma + notasDoAno[i][j]
    
//   }
//   console.log(`A soma das notas do bimestre ${i+1} é ${soma}`)
//   console.log(`A média do bimestre ${i+1} é ${soma/notasDoAno[i].length} `)
  
// }


// // --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻
// Utilizando o array de filmes que está no template, complete os exercícios abaixo:

// Crie um laço for para exibir o título, o ano e a pessoa diretora dos filmes como uma string:
// Exemplo de saída: “O Homem que copiava, de 2003, dirigido por Jorge Furtado”
// b. Crie um laço for dentro do primeiro, para concatenar o elenco numa string:
// 	Exemplo de saída:
// “O Homem que copiava, de 2003, dirigido por Jorge Furtado”
// “Ator/Atriz 1: Lázaro Ramos"
// "Ator/Atriz 2: Leandra Leal"
// "Ator/Atriz 3: Pedro Cardoso”

for(let i = 0; i < filmes.length; i++){

  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)

    for(let j = 0; j < filmes[i].elenco.length; j++){
    console.log(filmes[i].elenco[j])
    }
    console.log("- - - - - - - - - - - - - - - - - - -")
}

// Ou simplificando com o for of e for in
console.log("____________________________________")
  
for(let i in filmes){

  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)
    for(j in filmes[i].elenco){
    console.log(filmes[i].elenco[j])
    }
  console.log("- - - - - - - - - - - - - - - - - - -")
}