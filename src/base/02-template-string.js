
// Template Strings

const nombre = 'Manuel'
const apellido = 'Polaina'

const persona = `${ nombre } ${ apellido }`
// console.log( persona )

export function getSaludo( nombre = 'Miranda' ) {
    return 'Hola ' + nombre
}

// console.log(`Este es un texto: ${ getSaludo( nombre ) }`)