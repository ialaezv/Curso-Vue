<template>
    <div>  
        <!-- Manula LInk Vue Composition
        <router-link :to="{ name: 'home' }"> Pokemon List </router-link>
        <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }"> Pokemon por Id</router-link>
        <router-link :to="{ name: 'about' }"> Pokemon About </router-link> -->

        <!--  Custom & Especific Link Vue Composition  -->
        <CustomLink
            v-for="link in links"
            :key="link.to"
            :link="link"
        />

    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    data() {

        return {
            links: [
                { to: 'pokemon-home', name: 'Pokemons' },
                { to: 'pokemon-id', name: 'Por ID', id: 199 },
                { to: 'pokemon-about', name: 'About' },

                { to: 'dbz-characters', name: 'Personajes' },
                { to: 'dbz-about', name: 'DBZ-About' },

                { to: 'https://google.com', name: 'Google' },
            ]
        }
    },

    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }
}
</script>

<style scoped>

    div{
        padding: 0 30px;
    }

    div a {
        font-weight: bold;
        color: rgb(32, 21, 8);
        margin: 0 10px;
    }   

    /* a.router-link-exact-active {
        color: rgb(8, 141, 97);
    } */

</style>