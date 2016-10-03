<template>
<h1 @click="hello">hello world</h1>
</template>

<script>
export default {
  methods: {
    hello(): void {
      alert('hello world')
    }
  }
}
</script>
