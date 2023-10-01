<template>

    |<!-- intenta verificar si pokemon tiene un valor -->
    <h1 v-if="!pokemon"> Espere por favor...... </h1> 

    
    <div v-else="pokemon">
        <h1>¿que pokemon es ?</h1>

        <pokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
        <pokemonOptions :pokemons="pokemonArr"/>




    </div>
</template>

<script>
    // al usar el @ va desde la raiz
    import pokemonPicture from '@/components/pokemonPicture';
    import pokemonOptions from '@/components/pokemonOptions';

    import getPokemonOptions from '@/getPokemonOptions';

    // console.log( getPokemonOptions() );

export default{
    components: { pokemonPicture,pokemonOptions },
    data(){
        return{
            pokemonArr:[],
            pokemon: null,
            showPokemon:false
        }
    },
    methods: {
        async mixpokemonArray() {
            this.pokemonArr = await getPokemonOptions()

            const randomInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[randomInt]
            console.log(randomInt);
            // console.log(this.pokemonArr);
        }
    },
    mounted() {
        this.mixpokemonArray()
    }
}

</script>