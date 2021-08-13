<template>
  <main class="npbPage">
    <div>
      <div class="npbPage__title">page title</div>
      <div class="npbPage__annotation">
        <div class="annotation">
          <dl>
            <dt @click="isShow = !isShow" style="background-color: red;">大阪とは</dt>
            <!-- <dt>大阪とは</dt> -->
            <SlideUpDown :active="isShow" :duration="200">
              <dd style="background-color: yellow;">セレッソのこと</dd>
            </SlideUpDown>
          </dl>
        </div>
      </div>
      <div class="npbPage__slider">
        <a href="/">topへ</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.npbPage {
  &__title {
    border: solid;
    height: 150px;
  }
  &__annotation {
    height: 200px;
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    .annotation {
      height: 100px;
      margin-top: 20px;
      background-color: aqua;
    }
  }
  &__slider {
    background-color: chartreuse;
    height: 300px;
  }
}
</style>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import SlideUpDown from 'vue-slide-up-down'

export default defineComponent({
  head: {
    title: 'NPB' 
  },
  components:{
    SlideUpDown,
  },
  setup() {
    const isShow = ref<Boolean>(false)
    return {
      isShow,
    }
  }
})
</script>