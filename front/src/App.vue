<template>
  <Header :key="componentKey" />
  <main class="main">
    <router-view/>
  </main>
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
        ...mapState(['componentKey'])
  },
}
</script>

<style lang="scss">
body {
  font-family: $text;
  font-size: 16px;
  color:$text-color;
}
.main {
  background: $light-grey;
}
</style>
