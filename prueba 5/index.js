var arr = [];

function InventoryList(){

    const n = prompt('Ingrese numero de elementos');
    for (let i = 0; i < n; i++) {
        add(prompt('Ingrese el nombre nuevo'));
    }

    if (confirm('Desea eliminar algun nombre ?')) {
        remove(prompt('Ingresa el nombre a eliminar'));
    }

    getList();

}

function add(name){
    let repeat = false;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == name) {
            repeat = true;
            console.log('nombre repetido');
            break;
        }
    }

    if (!repeat) {
        arr.push(name);
        console.log('nombre añadido');
    }
}

function remove(name){
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == name) {
            arr.splice(index, 1);
            console.log('nombre eliminado');
            break;
        }
    }
}

function getList(){
    let arrReversed = arr.reverse();
    for (let index = 0; index < arr.length; index++) {
        console.log(arrReversed[index]);
    }
}

InventoryList();