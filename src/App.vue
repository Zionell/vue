<template>
  <div class="app" id="app">
    <nav class="nav">
      <router-link class="mainLink" to="/dashboard">Dashboard</router-link>
      <router-link class="mainLink" to="/calculator">Calculator</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 900px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.nav{
  margin-bottom: 30px;
}
.mainLink{
  padding-right: 30px;
  color: black;
  text-decoration: none;
  transition: 0.2s linear;
}
.mainLink:hover,
.router-link-active{
  color: #4989dcf2;
}
</style>
