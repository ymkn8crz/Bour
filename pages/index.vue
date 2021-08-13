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
    <div class="topPage__slider">this is slider</div>
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
    border: solid;
  }
}
</style>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  head: {
    title: 'Hello Favorite Directory!!' 
  }
})
</script>
