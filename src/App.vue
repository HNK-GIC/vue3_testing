<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | -->
    <router-link to="/">List</router-link> |
    <router-link to="/dt">Datatable</router-link> |
    <router-link to="/photo">Photo</router-link> |
    <router-link to="/xlsx">XLSX Export</router-link> |
    <router-link to="/export">CSV Export</router-link> |
    <router-link to="/import">CSV Import</router-link> |
    <router-link to="/pdf">Download PDF</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
