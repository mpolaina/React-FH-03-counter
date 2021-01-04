
// Desestructuración
const persona = {
    nombre: 'Manuel',
    edad: 39,
    apellido: 'Polaina'
}
// eslint-disable-next-line
const { nombre, apellido, edad } = persona

//console.log( nombre, apellido, edad )

const usaContext = ({ nombre, edad, ciudad = 'Córdoba' }) => {
    
    // console.log( nombre, edad, ciudad )
    return {
        nombreClave: nombre,
        age: edad,
        latLng: {
            lat: 14.3,
            lng: 3.81
        }
        
    }
}

// const { nombreClave, age, latLng } = usaContext( persona )
const { nombreClave, age, latLng: { lat, lng } } = usaContext( persona )
// para extraer las propiedades de un objeto dentro de otro
// { propiedad: { propiedad1, propiedad2} }

console.log( nombreClave, age)
console.log( lat, lng )