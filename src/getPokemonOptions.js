


const getPokemons = () => {
    const pokemonsArr = Array.from( Array(1000) )
  

    return pokemonsArr.map ( ( _ , index ) => index + 1  )

}

const getPokemonOptions = () => {
   

    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )
    
    getPokemonsNames( mixedPokemons.slice(0,4) )

    // console.log(mixedPokemons);
    // console.log(getPokemons());
}


const getPokemonsNames = ( [a,b,c,d] = [] ) =>{
    console.log(a,b,c,d);
}

export default getPokemonOptions