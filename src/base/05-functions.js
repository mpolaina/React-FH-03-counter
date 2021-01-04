
// FUNCIONES

const saludar = function( nombre ) {
    return `Hola, ${ nombre }`
}

// ARROW FUNCTIONS

const saludando = nombre => `Hola, que tal ${ nombre }`

// para retonornar un objeto se usan los ()
// eslint-disable-next-line
export const getUser = () => (
    {
        uid: 'abc1234',
        username: 'polainer'
    }
)

export const getUsuarioActivo = nombre => (
    { uid: 'abc456', username: nombre }
)

const usuarioActivo = getUsuarioActivo( 'Manuel' )
