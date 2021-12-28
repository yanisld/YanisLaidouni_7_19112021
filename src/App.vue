<template>
  <Header />
  <main class="main">
    <router-view/>
  </main>
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
body {
  font-family: $text;
  font-size: 16px;
}
.main {
  background: $light-grey;
}
</style>
