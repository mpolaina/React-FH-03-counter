
describe('Pruebas en demo.test.js', () => {
    
    test('deben ser iguales los string', () => {
        
        // 1. inicialización
        const mensaje = 'Hola Mundo'
        
        // 2. estímulo
        const mensaje2 = "Hola Mundo"
        
        // 3. observar comportamiento
        expect( mensaje ).toBe( mensaje2 )
        
    })
    
})

