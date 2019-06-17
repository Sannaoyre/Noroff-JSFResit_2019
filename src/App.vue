<template>
  <div id="app">
 <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/grass">Grass</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #D4D4E2;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

html{
  background-color: #D4D4E2;
}

</style>
