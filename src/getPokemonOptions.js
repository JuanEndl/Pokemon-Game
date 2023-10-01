import pokemonApi from '../src/api/pokemonApi'



const getPokemons = () => {
    const pokemonsArr = Array.from( Array(151) )
  

    return pokemonsArr.map ( ( _ , index ) => index + 1  )

}

const getPokemonOptions = async() => {
   

    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )
    
    const pokemons = await getPokemonsNames( mixedPokemons.slice(0,4) )

    // console.table(pokemons);
    // console.log(mixedPokemons);
    // console.log(getPokemons());

    return pokemons

}

//trae los nombres + el ID
const getPokemonsNames = async ( [a,b,c,d] = [] ) =>{

    const resp = await pokemonApi.get(`/5`)
    // console.log(resp.data.name, resp.data.id);
    // console.log(a,b,c,d);

    // el array
    const promiseArr = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`)
    ]

    // dispara todo (arreglo de promesas)
    const [p1 ,p2, p3, p4] = await Promise.all( promiseArr )


    // devuelve los nombres con el Id
    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id}
    ]


}

export default getPokemonOptions