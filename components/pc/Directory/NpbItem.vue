<template>
  <div class="directory">
    <div class="directory__head">
      <div class="directory__title">{{ teamItem.teamName }}</div>
    </div>
    <div class="directory__body">
      <div class="directory__info">
        <div class="directory__image">
          <img
            :src="teamItem.image"
            alt="No Image."
            height="100%"
            width="auto"
          >
        </div>
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
        <p v-if="isOmission">{{ filterdItem(teamItem.memo) }}<span class="excess"
          ><a @click="isOmission = false">[続きを読む]</a></span
          ></p>
        <p v-else>{{ teamItem.memo }}</p>
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
    margin-bottom: 15px;
    border-style: none solid solid;
  }
  &__info {
    height: 200px;
  }
  &__info &__image {
    height: 100%;
    width: 35%;
    float: left;
    background-color: #dcdcdc;
    text-align: center;
  }
  &__info &__profile {
    height: 100%;
    width: 65%;
    float: right;
  }
  &__memo {
    border-top: dotted;
    p {
      margin: 0 4%;
      padding: 10px 0;
      white-space: pre-wrap;
    }
    .excess {
      color: #db7093;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from '@nuxtjs/composition-api'

interface IProps {
  teamItem: ITeamItem
}

interface ITeamItem {
  memo: string
}

interface IState {
  showHiddenMemo: boolean
}

export default defineComponent({
  props: {
    teamItem: {
      type: Object,
      required: true,
    }
  },
  setup(props: IProps) {
    const isOmission = ref(false)

    if(props.teamItem.memo.length > 100){
      isOmission.value = true
    }

    const state = reactive<IState>({
      showHiddenMemo: true,
    })

    const filterdItem = (text:String):String => {
      return text.substring(0,100)
    }

    return {
      filterdItem,
      isOmission,
      ...toRefs(state),
    }
  }
})
</script>