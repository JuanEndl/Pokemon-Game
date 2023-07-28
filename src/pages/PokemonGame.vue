<template>
    <div>
        <h1>¿Quien es este Pokemon?</h1>

        <pokemonPicture/>

        <pokemonOptions/>

    </div>
</template>

<script>
    
    import pokemonPicture from '@/components/pokemonPicture';
    import pokemonOptions from '@/components/pokemonOptions';

export default{
    components: {
    pokemonPicture,
    pokemonOptions

  }
}

</script>

