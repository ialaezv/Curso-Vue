<template>
  <h1>Counter View</h1>
  <h2>{{ counter }}</h2>

  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>

</template>

<script>
import useCounter from '@/composables/useCounter'

export default {
    // Nombre del Componente
    name: 'Counter',
    // Propiedades que recibe
    props: {},
    // Emisiones del componente
    emits: [],

    setup() {
        // Llamamos al Composable
        const { counter, increase, decrease } = useCounter(100)
        // Return del que queremos utilizar en el template
        return {
            counter, increase, decrease
        }
    }
}
</script>

<style>

</style>