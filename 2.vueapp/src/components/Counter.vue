<template>
  <h2>{{title || 'Counter'}}</h2>
  <p> {{ counter }} <sup>2</sup> = {{ getSquareValue() }} </p>
  <p> {{ counter }} <sup>2</sup> = {{ squareCounted }} </p>
  <p data-testid="p-tag"> {{ counter }} </p>

  <button @click="sumnumber()">+1</button>
  <button v-on:click="resnumber()">-1</button>

</template>

<script>
export default {
    props: {
      title: String,
      start: {
        type: Number,
        default: 100,
        required: true,
        validator( value ) {
          return value >= 0
        }
      }
    },
    name: 'Counter',
    data() {
      return {
        counter: this.start
      }
    },
    methods: {
      getSquareValue() {
        console.log('Get Square Method')
        return this.counter * this.counter
      },
      sumnumber() {
        return this.counter ++
      },
      resnumber() {
        return this.counter --
      }
    },
    computed: {
      squareCounted() {
        console.log('Computed square')
        return this.counter * this.counter
      },
      customTitle() {
          return this.title || 'Counter'
      } 
    }
}

</script>


<style>

  button{
    background-color: green;
    border-radius:5px;
    border: 1px solid white;
    color: aliceblue;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
  }

  button:hover {
    background-color: aqua;
    transition: 0.3s ease-in-out;
  }

</style>