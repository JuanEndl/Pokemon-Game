<template>

    <!-- intenta verificar si pokemon tiene un valor -->
    <h1 v-if="!pokemon" class="#body"> Espere por favor...... </h1> 

    
    <div v-else="pokemon">
        <h1>¿que pokemon es ?</h1>

        <pokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
        <pokemonOptions :pokemons="pokemonArr" @selection="checkAnswer"/>

        <template v-if="showAnser">
            <h2  class="fade-in">{{ mensaje }}</h2>
            <button @click="newGame">
                Nuevo juego
            </button>
        </template>
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
            showPokemon:false,
            showAnser: false,
            mensaje: ''
        }
    },
    methods: {
        async mixpokemonArray() {
            this.pokemonArr = await getPokemonOptions()

            const randomInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[randomInt]
            // console.log(randomInt);
            // console.log(this.pokemonArr);
        },

        //accion de disparo que muestra pokemon
        checkAnswer(pokemonId) {

            this.showPokemon = true
            this.showAnser = true
            // console.log('pokemon page llamado', pokemonId);

            if( pokemonId === this.pokemon.id ) {
                this.mensaje = `Correcto, ${ this.pokemon.name }`
            } else {
                this.mensaje = `Incorrecto, es ${ this.pokemon.name }`
            }

        },
        newGame() {

            this.showPokemon = false
            this.showAnser = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixpokemonArray()

        }
    },
    mounted() {
        this.mixpokemonArray()
    }
}

</script>