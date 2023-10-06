<template>
    <div class="options-container">
        <ul>
            <li class="buttonButton" v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit( 'selection', pokemon.id )" >
                {{ pokemon.name }}
            </li>
        </ul>

    </div>
</template>

<script>
    export default{
        props: {
            pokemons: {
                type: Array,
                required: true
            }
        },
        methods:{

        }
    }

</script>

<style scoped>

ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    margin: 70px 15px 0 15px
}

.buttonButton {
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
}

.buttonButton:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #00EEFF;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.buttonButton:hover {
  color: #ffffff;
  border: 1px solid #00FFFF;
}

.buttonButton:hover:before {
  top: -35%;
  background-color: #000000;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.buttonButton:hover:after {
  top: -45%;
  background-color: #000000;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}


li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}

</style>