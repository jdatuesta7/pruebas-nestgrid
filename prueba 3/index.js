var numeros = [1,3,1,4,5,6,3,2];
var numerosRepetidos = 0;

function main() {
    countDuplicate(numeros);
}

function countDuplicate(numeros){
    let ConjuntoRepetidos = [];
    for (let i = 0; i < numeros.length; i++) {
        if (!ConjuntoRepetidos.includes(numeros[i])) {
            for (let z = 0; z < numeros.length; z++) {
                if (numeros[i] == numeros[z] && i != z) {
                    ConjuntoRepetidos.push(numeros[i]);
                    numerosRepetidos += 1;
                }
            }
        }
    }

    console.log(numerosRepetidos);
}

main();