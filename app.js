const fs = require('fs');
const path = require('path');
//JSON.Stringify() = objeto a json

// JSON.parse() = json a objeto



// __dirname -> ruta desde el disco local hasta el archivo que se busca.

const route = path.join(__dirname , '/data.json');

let json = fs.readFileSync(route,'UTF-8');


const objson = JSON.parse(json);

objson.push({nombre:'OZZY', id: 1312415},{nombre:'OSBOURNE', id: 1312415});

json = JSON.stringify(objson);

fs.writeFileSync(route,json);

console.log(route);