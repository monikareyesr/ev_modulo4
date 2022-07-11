// Para empezar, seleccionará los elementos del "input" principal. Luego, continuará
// con el "boton-agregar" y el "container". Para eso, usará querySelector() y
// guardará esas referencias en tres Variables distintas.

const inputP = document.querySelector('.input')
const btnAgregar = document.querySelector('.boton-agregar')
const container = document.querySelector('.container')

// crear clase item
class Item {
    constructor(tarea_agregar) {
        this.crearDiv(tarea_agregar)
        // this.Item = Item
    }
    crearDiv(tarea_agregar) {//metodo crear div 
        const inputItem = document.createElement('input') //crear un input
        inputItem.setAttribute('type', 'text'); //de tipo text 
        inputItem.setAttribute('disable', true);
        inputItem.classList.add('item-input') //agregar la clase
        inputItem.value = tarea_agregar //tome el parametro del constructor para asignarle un valor a la variable inputItem

        const nuevoDiv = document.createElement('div')  // crear un nuevo div, guardar en variable
        // referencia a este elemento en una Variable y agregue la Clase Item.
        nuevoDiv.classList.add('item')
        nuevoDiv.appendChild(inputItem)

        container.appendChild(nuevoDiv)


        const botonEditar = document.createElement('button');
        botonEditar.innerHTML = '<i class="fa fa-lock"></i>'
        botonEditar.classList.add('boton-editar')

        const botonRemover = document.createElement('button');
        botonRemover.classList.add('boton-remover');
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>"

        //         Ahora, agregará el div, input y botones a la lista.
        // ● Primero, para agregar el input y los botones al div, deberá usar
        // appendChild.
        // 2
        // ● Luego, con la misma Función, deberá agregar el div (que ya contiene los
        // otros elementos) a la Variable container.
        nuevoDiv.appendChild(botonEditar)
        nuevoDiv.appendChild(botonRemover)
        // clase 05
        // Para eso, defina el comportamiento del botonEditar para que el usuario pueda
        // hacer click y modificar el input de la tarea agregada.
        // Además, al presionar el botón, el ícono debe cambiar a un candado abierto
        // ("🔓"): "<i class='fas fa-lock-open'></i>". Al volver a presionar, debe
        // cerrarse otra vez y deshabilitar la edición.
        // Podemos generar este comportamiento negando (!) el valor boolean de
        // input.disabled. De esta manera, cada vez que el usuario haga click en el
        // candado, se usará ese valor para generar un comportamiento o el otro (🔒 = !🔒).


        botonEditar.addEventListener('click', function () {
            console.log('funcionando')
            if (!inputItem.disabled) {
                botonEditar.innerHTML = '<i class="fa fa-lock"></i>'
                inputItem.disabled = true
                return
            }
            botonEditar.innerHTML = '<i class="fas fa-lock-open"></i> '
            inputItem.disabled = false
        })
        botonRemover.addEventListener('click', function () {
            nuevoDiv.remove()
            console.log('lo borraste')
        })
    }

}//chequear input que no ingrese vacio
btnAgregar.addEventListener('click', function chequearInput() {
    console.log('hiciste click')
    if (inputP.value.trim() == ('')) {
        alert('no agregaste nada')
    } else {
        const agregar_html = new Item(inputP.value.trim())
    }
})






