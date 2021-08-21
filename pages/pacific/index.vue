<template>
  <main class="pacific">
    <div>
      <div class="pacific__title">Pacific League</div>

      <section id="test" class="annotation">
        <div @click="showAnnotation = !showAnnotation" class="annotation__head">
          <h2>↓↓注釈はこちら↓↓</h2>
        </div>
        <SlideUpDown :active="showAnnotation" :duration="3000">
          <div class="annotation__body">
            <ol>
              <li v-for="item in annotations" :key="item.name">{{ item.name }}</li>
            </ol>
            <a
              href="#"
              class="closeBtn"
              @click.prevent="
                showAnnotation = false
                closeBtn()
              "
            >閉じる</a>
          </div>
        </SlideUpDown>
      </section>

      <div class="directory">
        <div class="directory__head">
          <div class="directory__title">オリックス・バファローズ</div>
        </div>
        <div class="directory__body">
          <div class="directory__info">
            <div class="directory__image">
              <img src="" alt="No Image.">
            </div>
            <div class="directory__profile">
              <ol>
                <li>1936年</li>
                <li>京セラドーム大阪 / 大阪府大阪市西区</li>
                <li>12回</li>
                <li><span>谷佳知&nbsp;</span><span>北川博敏&nbsp;</span><span>平野恵一&nbsp;</span></li>
                <li>中嶋聡</li>
                <li><span>山本由伸&nbsp;</span><span>吉田正尚&nbsp;</span><span>宮城大弥&nbsp;</span></li>
              </ol>
            </div>
          </div>
          <div class="directory__memo">
            <p>今季ついに優勝候補に名乗りを挙げたパリーグ球団。2004年に大阪近鉄バファローズと合併してから一度も優勝していない。試合に勝利するとSNS上でバファローズポンタが「おりほー」と叫び盛り上げている。</p>
          </div>
        </div>
      </div>
      <div class="directory">
        <div class="directory__head">
          <div class="directory__title">東北楽天ゴールデンイーグルス</div>
        </div>
        <div class="directory__body">
          <div class="directory__info">
            <div class="directory__image">
              <img src="" alt="No Image.">
            </div>
            <div class="directory__profile">
              <ol>
                <li>2005年</li>
                <li>楽天生命パーク宮城 / 宮城県仙台市宮城野区</li>
                <li>1回</li>
                <li><span>山崎武司&nbsp;</span><span>岩隈久志&nbsp;</span><span>星野仙一&nbsp;</span></li>
                <li>石井一久</li>
                <li><span>田中将大&nbsp;</span><span>浅村栄斗&nbsp;</span><span>松井裕樹&nbsp;</span></li>
              </ol>
            </div>
          </div>
          <div class="directory__memo">
            <p>2005年に新規参入したパリーグ球団。近年は親会社の豊富な資金力を生かした選手補強が絶えない。2013年は創設9年目で日本一を果たし、東日本大震災で被災した東北県民に大きな希望を与えた。</p>
          </div>
        </div>
      </div>
      <div class="directory">
        <div class="directory__head">
          <div class="directory__title">福岡ソフトバンクホークス</div>
        </div>
        <div class="directory__body">
          <div class="directory__info">
            <div class="directory__image">
              <img src="" alt="No Image.">
            </div>
            <div class="directory__profile">
              <ol>
                <li>1938年</li>
                <li>福岡PayPayドーム / 福岡県福岡市中央区</li>
                <li>19回</li>
                <li><span>斉藤和巳&nbsp;</span><span>城島健司&nbsp;</span><span>松中信彦&nbsp;</span></li>
                <li>工藤公康</li>
                <li><span>柳田悠岐&nbsp;</span><span>甲斐拓也&nbsp;</span><span>千賀滉大&nbsp;</span></li>
              </ol>
            </div>
          </div>
          <div class="directory__memo">
            <p>直近10年で7度の日本一を果たし、圧倒的な成績をあげているパリーグ球団。巨大な資金力と徹底した育成力による選手層の厚さが武器。孫正義オーナーはカネは出すけど口は出さない、オーナーのあるべき姿である。</p>
          </div>
        </div>
      </div>
      <div class="directory">
        <div class="directory__head">
          <div class="directory__title">千葉ロッテマリーンズ</div>
        </div>
        <div class="directory__body">
          <div class="directory__info">
            <div class="directory__image">
              <img src="" alt="No Image.">
            </div>
            <div class="directory__profile">
              <ol>
                <li>1950年</li>
                <li>ZOZOマリンスタジアム / 千葉県千葉市美浜区</li>
                <li>6回</li>
                <li><span>福浦和也&nbsp;</span><span>今江敏晃&nbsp;</span><span>西岡剛&nbsp;</span></li>
                <li>井口資仁</li>
                <li><span>荻野貴司&nbsp;</span><span>中村奨吾&nbsp;</span><span>益田直也&nbsp;</span></li>
              </ol>
            </div>
          </div>
          <div class="directory__memo">
            <p>熱狂的な応援スタイルでプロ野球を盛り上げるパリーグ球団。ポストシーズンでは無類の強さを発揮する。2005年日本一を果たし、インターネットスラング「334」を生み出した。</p>
          </div>
        </div>
      </div>
      <div class="directory">
        <div class="directory__head">
          <div class="directory__title">埼玉西武ライオンズ</div>
        </div>
        <div class="directory__body">
          <div class="directory__info">
            <div class="directory__image">
              <img src="" alt="No Image.">
            </div>
            <div class="directory__profile">
              <ol>
                <li>1950年</li>
                <li>メットライフドーム / 埼玉県所沢市</li>
                <li>23回</li>
                <li><span>松井稼頭央&nbsp;</span><span>和田一浩&nbsp;</span><span>秋山翔吾&nbsp;</span></li>
                <li>辻発彦</li>
                <li><span>源田壮亮&nbsp;</span><span>平良海馬&nbsp;</span><span>中村剛也&nbsp;</span></li>
              </ol>
            </div>
          </div>
          <div class="directory__memo">
            <p>リーグ最多の優勝回数を誇るパリーグ球団。常に長打力の高い選手を揃えている。メットライフドームは壁面が無いため、日本で唯一「場外ホームランの出るドーム球場」である。</p>
          </div>
        </div>
      </div>
      <div class="directory">
        <div class="directory__head">
          <div class="directory__title">北海道日本ハムファイターズ</div>
        </div>
        <div class="directory__body">
          <div class="directory__info">
            <div class="directory__image">
              <img src="" alt="No Image.">
            </div>
            <div class="directory__profile">
              <ol>
                <li>1946年</li>
                <li>札幌ドーム / 北海道札幌市豊平区</li>
                <li>7回</li>
                <li><span>小笠原道大&nbsp;</span><span>ダルビッシュ有&nbsp;</span><span>大谷翔平&nbsp;</span></li>
                <li>栗山英樹</li>
                <li><span>近藤健介&nbsp;</span><span>伊藤大海&nbsp;</span><span>西川遥輝&nbsp;</span></li>
              </ol>
            </div>
          </div>
          <div class="directory__memo">
            <p>若手選手の育成力に定評のあるパリーグ球団。高校野球で有名になった若手選手が入団するケースが多い。札幌ドームは外野が広くフェンスも高いため、守備力の高さが求められる。</p>
          </div>
        </div>
      </div>

      <section id="test" class="annotation">
        <div @click="showAnnotation = !showAnnotation" class="annotation__head">
          <h2>注釈はこちら</h2>
        </div>
        <SlideUpDown :active="showAnnotation" :duration="3000">
          <div class="annotation__body">
            <ol>
              <li v-for="item in annotations" :key="item.name">{{ item.name }}</li>
            </ol>
            <a
              href="#"
              class="closeBtn"
              @click.prevent="
                showAnnotation = false
                closeBtn()
              "
            >閉じる</a>
          </div>
        </SlideUpDown>
      </section>

      <div class="pacific__end">
        <div class="endHeader">
          <h3>引用</h3>
          <ul>
            <li><a href="https://ja.wikipedia.org/wiki/%E3%83%91%E3%82%B7%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF%E3%83%BB%E3%83%AA%E3%83%BC%E3%82%B0">wikipedia</a>&nbsp;パシフィック・リーグ</li>
            <li><a href="https://pitcher-room.com/rule/professional-baseball-mascot/">野球のコツと理論</a>&nbsp;プロ野球全12球団のマスコットキャラクター簡単早見総まとめ</li>
          </ul>
        </div>
        <div class="endMain">
          <h3>名鑑について</h3>
          <p v-text="message" class="endMain__text"></p>
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
  easing: 'ease',
}

export default defineComponent({
  head: {
    title: 'ぱしふぃっくりーぐ' 
  },
  components:{
    SlideUpDown,
    NpbItem,
  },
  setup() {
    const showAnnotation = ref<Boolean>(false)

    const closeBtn = () => {
      scrollTo('#test', scrollOptions)
    }

    const message = 'この名鑑は個人の主観が含まれています。<br>もっと詳しいことは<a href="https://www.google.com/?hl=ja">Google</a>で検索して調べてください。<br>また、この名鑑は予告なく終了する可能性があります。ご了承ください。'

    const today = new Date()
    const updateDate = `${today.getFullYear()}年${today.getMonth()+1}月${today.getDate()}日`

    return {
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