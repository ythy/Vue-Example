<template>
  <div>
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script lang="ts" src="./Counter.ts" >


// import { createNamespacedHelpers } from 'vuex'
// import Vue from "vue";
// //const { mapGetters, mapActions, mapState } = createNamespacedHelpers('counter') 
// import { mapGetters, mapActions, mapState } from 'vuex';

// export default {

//   computed: {
//     ...mapState('counter', [
//       'count'
//     ]),

//     ...mapGetters('counter', [
//       'evenOrOdd'
//     ]),
//   },

//   methods: mapActions('counter', [
//     'increment',
//     'decrement',
//     'incrementIfOdd',
//     'incrementAsync'
//   ])
// }
</script>

