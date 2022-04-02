<template>
  <van-collapse v-model="state.activeNames">
    <van-collapse-item name="1">
      <template #title>
        <div class="title">{{props.title}}</div>
      </template>
      <slot></slot>
    </van-collapse-item>
  </van-collapse>
</template>

<script>


import {computed, reactive} from "vue"
import {useStore} from "vuex"

export default {
  props: {
    title: String
  },

  setup(props) {
    const store = useStore()

    const nodes = computed({
      get() {
        return store.state.nodes
      },

      set(newValue) {
        store.state.nodes = newValue
      }
    })

    const state = reactive({
      activeNames: ["1"]
    })

    return {
      store,
      nodes,
      state,
      props
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 17px;
  font-weight: 600;
}

</style>
