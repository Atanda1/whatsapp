<template>
  <div id="app">
    <chatroom/>
    
  </div>
</template>

<script>
import Chatroom from './views/chatroom.vue'

export default {
  name: 'App',
  components: {
    Chatroom
  }
}
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: #090E11;
  height: 100vh; 
}
</style>
