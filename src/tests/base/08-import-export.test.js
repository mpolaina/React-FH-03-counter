import { getHeroeById, getHeroesByOwner } from "../../base/08-import-export"
import heroes from "../../data/heroes"

describe('Pruebas 08-import-export', () => {
    
    test('Debe retornar un heroe por id', () => {
        
        const id = 1
        const heroe = getHeroeById( id )
        const heroeData = heroes.find( h => h.id === id )
        expect( heroe ).toEqual( heroeData )
        
    })
    
    test('Debe retornar undefined si heroe no existe', () => {
        
        const id = 10
        const heroe = getHeroeById( id )  
        expect( heroe ).toBe( undefined )
        
    })
    
    test('Debe retornar array con heroes de DC', () => {
        
        const owner = 'DC'
        const heroes = getHeroesByOwner( owner ) 
        const heroesTest = heroes.filter( h => h.owner === owner) 
        expect( heroes ).toEqual( heroesTest )
        
    })
    
    test('Debe retornar array con heroes de Marvel', () => {
        
        const owner = 'Marvel'
        const heroesMarvel = getHeroesByOwner( owner ) 
        expect( heroesMarvel.length ).toBe( 2 )
        
    })
    
})