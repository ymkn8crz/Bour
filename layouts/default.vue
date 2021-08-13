<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
main {
  max-width: 940px;
  margin: 0 auto;
}
</style>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '~/components/pc/Header.vue'
import Footer from '~/components/pc/Footer.vue'

export default defineComponent({
  components: {
    Header,
    Footer,
  },
  setup(){}
})
</script>