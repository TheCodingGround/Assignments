const user = {
  name: "Theo",
  surname: "Bohnen",
  age: 13,
}

const tcgStudents = {
  '2017': ['Mercy', 'Mary'],
  '2019': ['Collen', 'Stretch'],
  '2019-June': ['John'],
  '2020': []
}

const keys = Object.keys(tcgStudents)
console.log('keys', keys)

//console.log(Object.keys(tcgStudents))

for (var i = 0; i < keys.length; i++){
  console.log('key', keys[i])
}


//year: 2017
//students: ['Mercy', 'Mary']

//year: 2019
//students: ['Collen', 'Stretch']
