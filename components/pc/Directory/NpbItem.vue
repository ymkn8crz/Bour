<template>
  <div class="directory">
    <div class="directory__head">
      <div class="directory__title">{{ teamItem.teamName }}</div>
    </div>
    <div class="directory__body">
      <div class="directory__info">
        <div class="directory__image">this is image.</div>
        <div class="directory__profile">
          <ol>
            <li>{{ teamItem.birth }}年</li>
            <li>{{ teamItem.home.stadium }} / {{ teamItem.home.area }}</li>
            <li>{{ teamItem.leagueChampion }}回</li>
            <li>
              <span v-for="item in teamItem.player.retired" :key="item.name"
                >{{ item.name }}&nbsp;</span
              >
            </li>
            <li>{{ teamItem.coach }}</li>
            <li>
              <span v-for="item in teamItem.player.active" :key="item.name"
                >{{ item.name }}&nbsp;</span
              >
            </li>
          </ol>
        </div>
      </div>
      <div class="directory__memo">
        <p v-text="test"></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.directory {
  &__head {
    height: 70px;
    border: solid;
  }
  &__title {
    height: 70px;
    font-size: 30px;
    display: flex;
    align-items: center;
    margin-left: 5%;
  }
  &__body {
    margin-bottom: 15px;  // 名鑑の間
    border-style: none solid solid;
  }
  &__info {
    height: 200px;  // 画像とプロフィールの高さ
  }
  &__info &__image {
    height: 100%;
    width: 35%;
    float: left;
    background-color: palegoldenrod;
  }
  &__info &__profile {
    height: 100%;
    width: 65%;
    float: right;
    // background-color // チームカラーにする？
  }
  &__memo {
    // height: auto;なので文字が全部入る
    border-top: dotted;
    p {
      margin: 0 5%;
      padding: 10px 0;
      white-space: pre-wrap;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    teamItem: {
      type: Object,
      required: true,
    }
  },
  setup() {
    // 200文字
    const test = 'べるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをならべるここにメモをなら'
    return {
      test,
    }
  }
})
</script>