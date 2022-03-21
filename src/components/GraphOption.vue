<template>
  <div class="option">
    <div class="option__title">
      <slot name="title"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>

import {useStore} from "vuex"

export default {
  setup() {
    const store = useStore()

    const addNode = () => {
      store.commit('addNode')
    }

    const removeNode = () => {
      store.commit('removeNode')
    }

    return {store, addNode, removeNode}
  }
}
</script>

<style scoped lang="scss">
.option {
  padding: 16px 24px;
  border-radius: 8px;
  border: 1px solid #adadad;
  background-color: #f2f2f2;

  &__title {
    color: #999;
    font-weight: 700;
    margin-bottom: 8px;
  }
}
</style>
