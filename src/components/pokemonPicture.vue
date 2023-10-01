<template>

    <div class="pokemon-container">
        <img type="image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Pokemon" class="hidden-pokemon">
        <!-- <img type="image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Pokemon" class="fade-in"> -->
    </div>

</template>

<script>
    export default{
        
    }

</script>

<style scouped>

.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    width: 100vw;
    margin-left: -50vw;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}

</style>
