<template>
  <main class="topPage">
    <div class="topPage__title">
      <div>page title</div>
      <div>~Only With You~</div>
    </div>
    <div class="topPage__link">
      <p style="text-align:center;">Directory Contents</p>
      <ul>
        <li><a href="/npb/">NPB</a></li>
        <li><a>NPB TEAM</a></li>
        <li><a>NPB TEAM</a></li>
        <li><a>NPB TEAM</a></li>
        <li><a>NPB TEAM</a></li>
        <li><a>NPB TEAM</a></li>
        <li><a>NPB TEAM</a></li>
      </ul>
    </div>
    <client-only>
      <swiper :options="swiperOptions" ref="mySwiper" class="swiper topPage__slider">
        <swiper-slide class="sliderPage">Slide 1</swiper-slide>
        <swiper-slide class="sliderPage">Slide 2</swiper-slide>
        <swiper-slide class="sliderPage">Slide 3</swiper-slide>
        <swiper-slide class="sliderPage">Slide 4</swiper-slide>
        <swiper-slide class="sliderPage">Slide 5</swiper-slide>
        <swiper-slide class="sliderPage">Slide 6</swiper-slide>
        <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
      </swiper>
    </client-only>
  </main>
</template>

<style lang="scss">
.topPage {
  &__title {
    border: solid;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__link {
    height: 300px;
    ul li {
      display: inline-block;
      width: 25%;
    }
  }
  &__slider {
    height: 300px;
    margin-bottom: 50px;
    background-color: palegoldenrod;
    .sliderPage {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .sliderPage:nth-of-type(odd) {
      background-color: palegreen;
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
      // navigation: {
      //   nextEl: '.swiper-button-next',  
      //   prevEl: '.swiper-button-prev',
      // },
    })

    return {
      swiperOptions,
    }
  }
})
</script>
