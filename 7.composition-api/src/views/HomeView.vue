<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>

    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIronman">Cambiar Iroman</button>
    <button @click="changeHulk">Cambiar Hulk</button>

    <h3>Hulk: {{hulkIsAlive}}</h3>
    <button @click="changeStatus">Change Status</button>

  </div>
</template>

<script>
import { ref, reactive } from 'vue'
 
export default {
  name: 'HomeView',

  setup() {

    const ironman = ref({ name: 'Tony', age: 50 })
    const hulk = reactive({ name: 'Bruce', age: 100 })

    // const ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value
    }

    return {
      // Const
      ironman,
      hulk,
      hulkIsAlive,

      // Methods
      changeIronman : () => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 35
      },
    
      changeHulk : () => {
        hulk.name = 'Bruce Banner'
        hulk.age = 250
      },

      changeStatus,
    }
  }
}
</script>
