<template>

    <h1 v-if="!pokemon">Espere por favor....</h1>

    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        <pokemon-picture 
            :pokemonId="pokemon.id"
            :showPokemon="showPokemon"/>
        <pokemon-options 
            :pokemons="pokemonArray"
            @selection="checkAnswer"
        />
        <div v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">
                Nuevo Juego
            </button>
        </div>
    </div>
</template>
<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonsOptions from '@/helpers/getPokemonsOptions.js'


export default {
   components: { 
        PokemonPicture,
        PokemonOptions
   },
   data() {
       return {
           pokemonArray: [],
           pokemon: null,
           showPokemon: false,
           showAnswer: false,
           message: ''
       }
   },
   methods:{

    async mixPokemonArray() {

            this.pokemonArray = await getPokemonsOptions()

            const rndInt = Math.floor( Math.random() * 4 )

            this.pokemon = this.pokemonArray[ rndInt ]

     },

     checkAnswer( selectedId ) {
        
        this.showPokemon = true

        this.showAnswer = true

        if ( selectedId === this.pokemon.id ) {
            this.message = `Coretcto, ${this.pokemon.name}`
        } else {
            this.message = `Incorecto, era ${this.pokemon.name}`
        }
     },
     newGame(){
         this.showPokemon = false
         this.showAnswer = false
         this.pokemonArray = []
         this.pokemon = null
         this.mixPokemonArray()
     }  
   }, 

   mounted(){
       this.mixPokemonArray()
   }
}
</script>

