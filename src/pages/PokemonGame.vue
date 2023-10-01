<template>
    <div>
        <h1>¿que pokemon es ?</h1>

        <pokemonPicture :pokemonId="6" :showPokemon="true"/>

        <pokemonOptions/>

    </div>
</template>

<script>
    // al usar el @ va desde la raiz
    import pokemonPicture from '@/components/pokemonPicture';
    import pokemonOptions from '@/components/pokemonOptions';

export default{
    components: {
    pokemonPicture,
    pokemonOptions

  }
}

</script>

