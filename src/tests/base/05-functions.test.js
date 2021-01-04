import { getUser, getUsuarioActivo } from "../../base/05-functions"

describe('Pruebas en 05-functions.js', () => {
    
    test('getUser debe retornar un objeto', () => {
        
        const user = getUser()
        const userTest = {
            uid: 'abc1234',
            username: 'polainer'
        }
        console.log(user)
        
        expect( user ).toEqual( userTest )
    })
    
    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const nombre = 'Manuel'
        const user = getUsuarioActivo( nombre )
        const userTest = { uid: 'abc456', username: nombre }
        
        expect( user ).toEqual( userTest )
    })
    
    
})