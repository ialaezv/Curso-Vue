import PokemonApi from '../api/pokemonAPI'

const getPokemons = () => {
   
    const pokemonsArray = Array.from( Array(650))

    return pokemonsArray.map(( _ , index) => index + 1)

}

const getPokemonsOptions = async () => {
    
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )

    const pokemons = await getPokemonNames( mixedPokemons.splice(0,4))

    return pokemons

}

const getPokemonNames = async ( [a,b,c,d] = [] )  => {
    
    const arrayPromise = [
        PokemonApi.get(`/${ a }`),
        PokemonApi.get(`/${ b }`),
        PokemonApi.get(`/${ c }`),
        PokemonApi.get(`/${ d }`),

    ]

   const [ p1, p2 , p3 , p4 ] = await Promise.all( arrayPromise )
   
   return [
       {name: p1.data.name, id:p1.data.id},
       {name: p2.data.name, id:p2.data.id},
       {name: p3.data.name, id:p3.data.id},
       {name: p4.data.name, id:p4.data.id}

   ]

}


export default getPokemonsOptions