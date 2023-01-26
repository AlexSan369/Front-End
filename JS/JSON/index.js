const obj = [
  {
    nome: "Alex",
    sobrenome: "Sander",
    idade: 29,
    estaTrabalhando: true,
    hobbies: ["Skate", "Programação", "Trips", "Praia"],
    detalhesProfissao: {
      profissao: "Professor",
      area: "Tecnologia",
      empresa: "Instituto da Oportunidade Social",
      acronimo: "IOS",
    }
  },
  {
  nome: "Jokas",
    sobrenome: "Jones",
    idade: 39,
    estaTrabalhando: false,
    hobbies: ["Skate", "Programação", "Trips", "Praia"],
    detalhesProfissao: {
      profissao: "Professor",
      area: "Tecnologia",
      empresa: "Instituto da Oportunidade Social",
      acronimo: "IOS",
    }
  },
];

//JSON
// CONVERTER OBJETOS PARA JSON

const jsonData = JSON.stringify(obj)

console.log(typeof jsonData)

// CONVERTER JSON PARA OBJETO VÁLIDO

const objsJson = JSON.parse(jsonData)
console.log(typeof objsJson)

// IMPRIMINDO OBJ JASON CONVERTIDO

const tela = document.body;

tela.style.backgroundColor = '#333';
tela.style.display = 'flex'; tela.style.height = '100vh';
tela.style.justifyContent = 'center'; tela.style.alignItems = 'center';


const nomes = objsJson.map((pessoa) => {
    document.write(pessoa.nome + '<br />')

});
