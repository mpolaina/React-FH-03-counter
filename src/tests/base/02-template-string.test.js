import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en 02-templates-string.js', () => {
    
    test('getSaludo debe retornar Hola Manuel', () => {
        
        const nombre = 'Manuel'
        const saludo = getSaludo( nombre )
        console.log(saludo)
        
        expect( saludo ).toBe( 'Hola ' + nombre )
    })
    
    // getSaludo debre retornar Hola Miranda, sin argumento
    test('getSaludo retorna Hola Miranda sin argumento', () => {
        
        const saludo = getSaludo()
        console.log( saludo )
        
        expect( saludo ).toBe( 'Hola Miranda')
    })
    
    
})