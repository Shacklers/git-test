import fetch from "node-fetch";

/*
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => response.json())
    .then(data => {
        console.log(data);

    })
    .catch(error => {
        console.log(error);
    });

 */





function printArray(...array){
    for(let elem of array) {
        console.log(elem);
    }
}

let array = ['a','b','c'];

let array1 = ['1','2','3'];

printArray(array, array1);