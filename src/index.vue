<template>
<div id="app">
  <h1>Vuejs Samples</h1>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/counter.html">Counter</router-link> |
    <router-link to="/todo.html">TODO</router-link>
    <hr>
  </div>
  <router-view/>
</div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
