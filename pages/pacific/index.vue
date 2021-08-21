<template>
  <main class="pacific">
    <div>
      <div class="pacific__title">Pacific League</div>

      <section id="top-annotation" class="annotation">
        <div @click="showAnnotation = !showAnnotation" class="annotation__head">
          <h2>↓↓注釈はこちら↓↓</h2>
        </div>
        <!-- exercise2 -->
        <SlideUpDown :active="showAnnotation" :duration="duration">
          <div class="annotation__body">
            <ol>
              <li v-for="item in annotations" :key="item.name">{{ item.name }}</li>
            </ol>
            <a
              href="#"
              class="closeBtn"
              @click.prevent="
                showAnnotation = false
                closeBtn('top')
              "
            >閉じる</a>
          </div>
        </SlideUpDown>
      </section>

      <NpbItem
        v-for="item in teams"
        :key="item.id"
        :team-item="item"
      />

      <section id="bottom-annotation" class="annotation">
        <div @click="showAnnotation = !showAnnotation" class="annotation__head">
          <h2>注釈はこちら</h2>
        </div>
        <SlideUpDown :active="showAnnotation" :duration="duration">
          <div class="annotation__body">
            <ol>
              <li v-for="item in annotations" :key="item.name">{{ item.name }}</li>
            </ol>
            <a
              href="#"
              class="closeBtn"
              @click.prevent="
                showAnnotation = false
                closeBtn('bottom')
              "
            >閉じる</a>
          </div>
        </SlideUpDown>
      </section>

      <div class="pacific__end">
        <div class="endHeader">
          <h3>引用</h3>
          <ul>
            <li><a href="https://npb.jp/teams/">日本野球機構</a>&nbsp;球団別インデックス</li>
            <li><a href="https://ja.wikipedia.org/wiki/%E3%83%91%E3%82%B7%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF%E3%83%BB%E3%83%AA%E3%83%BC%E3%82%B0">wikipedia</a>&nbsp;パシフィック・リーグ</li>
            <li><a href="https://pitcher-room.com/rule/professional-baseball-mascot/">野球のコツと理論</a>&nbsp;プロ野球全12球団のマスコットキャラクター簡単早見総まとめ</li>
          </ul>
        </div>
        <div class="endMain">
          <h3>名鑑について</h3>
          <v-html>
            <p v-html="message" class="endMain__text"></p>
          </v-html>
        </div>
        <div class="endFooter">
          <h3>最終更新日</h3>
          <p>{{ updateDate }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
$color_pacific: #3fb1e5;
.pacific {
  &__title {
    background-color: $color_pacific;
    color: #fff;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
  }
  &__end {
    background-color: #A7F1FF;
    padding-left: 5%;
    margin-bottom: 20px;
    div {
      height: 200px;
      padding-top: 20px;
    }
    .endMain {
      height: 200px;
      .__text {
        white-space: pre-wrap;
      }
    }
  }
}
.annotation {
  width: 60%;
  display: block;
  margin: 30px auto;
  border: dotted;
  &__head {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__body {
    padding-left: 5%;
    border-top: dotted;
    .closeBtn {
      display: flex;
      justify-content: center;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import SlideUpDown from 'vue-slide-up-down'
import NpbItem from '~/components/pc/Directory/NpbItem.vue'
import MockPacificLeague from '~/apis/MockPacificLeague'
import scrollTo from '~/plugins/vue-scrollto'

const scrollOptions = {
  container: 'body',
  duration: 500,
  offset: -60,
  easing: 'ease',
  loop: true
}

export default defineComponent({
  head: {
    title: 'Pacific League'  // exercise1
  },
  components:{
    SlideUpDown,
    NpbItem,
  },
  setup() {
    const showAnnotation = ref<Boolean>(false)

    const duration = 500

    const closeBtn = (value:string) => {
      scrollTo('#' + value +'annotation', scrollOptions)
    }

    const message = 'この名鑑は個人の主観が含まれています。<br>もっと詳しいことは<a href="https://www.google.com/?hl=ja">Google</a>で検索して調べてください。<br>また、この名鑑は予告なく終了する可能性があります。ご了承ください。'

    const today = new Date()
    const updateDate = `${today.getFullYear()}年${today.getMonth()+1}月${today.getDate()}日`

    return {
      duration,
      showAnnotation,
      closeBtn,
      annotations: MockPacificLeague.annotations,
      teams: MockPacificLeague.teams,
      message,
      updateDate,
    }
  }
})
</script>