<template>
    <div id="app">
        <div id="nav">
            <router-link
                v-for="(page, index) in pages"
                :key="index"
                :to="page.where">
                {{ page.info }}
            </router-link>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: "App",
    data() {
        return {
            pages: [
                {
                    where: '/',
                    info: 'Home',
                },
                {
                    where: '/score',
                    info: 'Score',
                },
                {
                    where: '/settings',
                    info: 'Settings',
                },
                {
                    where: '/vote',
                    info: 'Vote',
                },
            ]
        }
    },
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
</style>
