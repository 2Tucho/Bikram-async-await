//DESARROLLA AQUI TUS SOLUCIONES
//Ejercicio 1
async function getRandomPokemon() {
    try {
        let randomNum = Math.floor(Math.random() * 1025);
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
        return ramndomPoke = await response.json()
    } catch {error => {
        console.error('Error:', error)}
    }
};

//Ejercicio 2
async function getImageAndName (pokemon){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
};

// Ejercicio3
async function printImageAndName(pokemon) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;

    return domPrint = `<section><img src="${img}" alt="${name}"><h1>${name}</h1></section>`
}

// Ejercicio4
// Ejercicio5
// Ejercicio6
// Ejercicio7
// Ejercicio8
// Ejercicio9
