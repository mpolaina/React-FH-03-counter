import { getImage } from "../../base/11-async-await"

describe('Pruebas con async-await y fetch', () => {
    
    test('Debe retornar el url de la imagen', async () => {
        
        const url = await getImage()
        console.log( url )
        expect( typeof url ).toBe( 'string' )
    })
    
})