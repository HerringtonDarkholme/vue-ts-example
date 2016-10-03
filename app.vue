<template>
<h1 @click="hello">
  hello {{name}} for {{i}} times
  <button @click="add">+</button>
  <button @click="sub">-</button>
</h1>

</template>

<script>
import { Vue, Component } from 'av-ts'
import { create, getHelper, Vuex } from 'kilimanjaro'

var store = create({count: 0})
  .getter('count', s => s.count)
  .mutation('increment', s => () => s.count++)
  .mutation('decrement', s => () => s.count--)
  .done()

var { getters, commit } = getHelper(store)

@Component
export default class App extends Vue {
  name = 'Rem'
  @Vuex i = getters('count')
  @Vuex add = commit('increment')
  @Vuex sub = commit('decrement')

  hello() {
    alert('hello ' + this.name)
  }
}
</script>
