<template>
<h1 @click="hello">hello {{name}}</h1>
</template>

<script>
import {Vue, Component} from 'av-ts'
@Component
export default class App extends Vue {
  name = 'Rem'
  hello() {
    alert('hello ' + this.name)
  }
}
</script>
