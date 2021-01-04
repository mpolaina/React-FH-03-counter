import { retornaArray } from "../../base/07-destructuring-arrays"

describe('Pruebas en 07-destructuring-array', () => {
    
    test('Debe retornar un string y un numero', () => {
        
        const [ letras, numeros ] = retornaArray()
        // const arr = retornaArray()
        // expect( arr ).toEqual( ['ABC', 123] )
        expect( letras ).toBe( 'ABC' )
        expect( typeof letras).toBe( 'string' )
        expect( numeros ).toBe( 123 )
        expect( typeof numeros).toBe( 'number' )
    })
    
})