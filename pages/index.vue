<template>
  <main class="topPage">
    <div class="topPage__title">
      <h1>Hello Favorite Directory!!</h1>
      <p>~Only With You~</p>
    </div>
    <div class="topPage__link">
      <h3>Directory Contents</h3>
      <table>
        <tr>
          <td><a href="/central/">Central League</a></td>
          <td><a>Pacific League</a></td>
        </tr>
        <tr>
          <td>???</td>
          <td>???</td>
        </tr>
        <tr>
          <td>???</td>
          <td>???</td>
        </tr>
        <tr>
          <td></td>
          <td>Coming Soon...</td>
        </tr>
      </table>
    </div>
    <h3>Thank you generating Technology!</h3>
    <client-only>
      <swiper :options="swiperOptions" ref="mySwiper" class="swiper topPage__slider">
        <swiper-slide class="sliderPage">Node.js</swiper-slide>
        <swiper-slide class="sliderPage">JavaScript</swiper-slide>
        <swiper-slide class="sliderPage">TypeScript</swiper-slide>
        <swiper-slide class="sliderPage">Vue.js</swiper-slide>
        <swiper-slide class="sliderPage">Nuxt.js</swiper-slide>
        <swiper-slide class="sliderPage">SCSS</swiper-slide>
        <!-- <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-black" slot="button-next"></div> -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </client-only>
  </main>
</template>

<style lang="scss">
.topPage {
  h3 {
    text-align: center;
  }
  &__title {
    height: 300px;
    background-color: palegoldenrod;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
  }
  &__link {
    margin-bottom: 100px;
    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
    }
    table td {
      padding: 10px 15%;
      text-align: center;
    }
    table td a {
      text-decoration: none;
      font-weight: bold;
      display: block;
    }
    table tr:nth-child(odd) {
      background-color: #FFCCFF;
    }
    table tr:nth-child(even) {
      background-color: #EAD9FF;
    }
  }
  &__slider {
    height: 300px;
    margin-bottom: 100px;
    .sliderPage {
      font-size: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .sliderPage:nth-of-type(odd) {
      background-color: palegreen;
    }
    .sliderPage:nth-of-type(even) {
      background-color: #A7F1FF;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import 'swiper/swiper-bundle.css'

// swiper, vue-awesome-swiperはVueで読み込む
const VueAwesomeSwiper = require('vue-awesome-swiper')
Vue.use(VueAwesomeSwiper)

export default defineComponent({
  head: {
    title: 'Hello Favorite Directory!!' 
  },
  setup(){
    const swiperOptions = reactive({
      // 最後に達したら先頭に戻る
      loop: true,

      // なぜか効かないオプション,CSSが関係？
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
    })

    return {
      swiperOptions,
    }
  }
})
</script>
