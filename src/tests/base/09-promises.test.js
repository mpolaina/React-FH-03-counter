import { getHeroeByIdAsync } from "../../base/09-promises"
import heroes from "../../data/heroes"

/*
    Cuando es una tarea ASÍNCRONA, debemos mandar el parametro "done" en el callback de la función test. Para indicarle a JEST que ya no se espera más resultados de la tarea asíncrona.
*/

describe('Pruebas Promesas', () => {
    
    test('getHeroeByIdAsync debe retornar un heroe async', ( done ) => {
        
        const id = 1
        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toBe( heroes[0] )
                done()
            })
    })
    
    test('Debe obtenerse error si no existe heroe por id', ( done ) => {
        
        const id = 10
        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe( 'No se encontró el heroe' )
                done()
            })
    })
    
    
})