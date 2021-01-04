// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';
// import default, { otras } from...

export const getHeroeById = ( id ) =>  heroes.find( heroe => heroe.id === id )    

export const getHeroesByOwner = owner => heroes.filter( heroe => heroe.owner === owner )

