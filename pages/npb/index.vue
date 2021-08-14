<template>
  <main class="npbPage">
    <div>
      <div class="npbPage__title">page title</div>
      <section class="annotation">
        <div @click="showAnnotation = !showAnnotation" class="annotation__head">
          <h2>注釈はこちら</h2>
        </div>
        <SlideUpDown :active="showAnnotation" :duration="200">
          <div class="annotation__body">
            <ol>
              <li v-for="item in annotations" :key="item.name">{{ item.name }}</li>
            </ol>
          </div>
        </SlideUpDown>
      </section>

      <NpbItem
        v-for="item in teams"
        :key="item.id"
        :team-item="item"
      />

      <section class="annotation">
        <div @click="showAnnotation = !showAnnotation" class="annotation__head">
          <h2>注釈はこちら</h2>
        </div>
        <SlideUpDown :active="showAnnotation" :duration="200">
          <div class="annotation__body">
            <ol>
              <li v-for="item in annotations" :key="item.name">{{ item.name }}</li>
            </ol>
          </div>
        </SlideUpDown>
      </section>

      <div class="npbPage__slider">
        <a href="/">topへ</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.npbPage {
  &__title {
    border: solid;  // DL
    height: 150px;
  }
  &__slider {
    background-color: chartreuse;
    height: 300px;
  }
}
.annotation {
  width: 60%;
  display: block;
  margin: 30px auto;
  border: dotted;
  &__head {
    height: 50px;
    display: flex;  // 文字の中央揃え
    align-items: center;  // 文字の中央揃え
    justify-content: center;  // 文字の中央揃え
  }
  &__body {
    padding-left: 5%;
    border-top: dotted;
  }
}
</style>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import SlideUpDown from 'vue-slide-up-down'
import NpbItem from '~/components/pc/Directory/NpbItem.vue'
import MockDirectoryData from '~/apis/MockDirectoryData'

export default defineComponent({
  head: {
    title: 'NPB' 
  },
  components:{
    SlideUpDown,
    NpbItem,
  },
  setup() {
    const showAnnotation = ref<Boolean>(false)

    return {
      showAnnotation,
      annotations: MockDirectoryData.annotations,
      teams: MockDirectoryData.teams,
    }
  }
})
</script>