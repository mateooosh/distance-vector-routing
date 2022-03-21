<template>
  <div class="options">
    <GraphOption>
      <template #title>
        Nodes
      </template>
      <div class="options__buttons">
        <div class="options__button options__button--active" @click="addNode">
          Add
        </div>
        <div class="options__button" :class="{'options__button--active' : canRemoveNode}" @click="removeNode">
          Remove
        </div>
      </div>
    </GraphOption>
    <GraphOption>
      <template #title>
        Edges
      </template>
      <div class="options__buttons">
        <div class="options__button" :class="{'options__button--active' : false}">
          Add
        </div>
        <div class="options__button" :class="{'options__button--active' : false}">
          Remove
        </div>
      </div>
    </GraphOption>

    <GraphOption>
      <template #title>
        Zoom
      </template>
      <div class="options__buttons">
        <div class="options__button" :class="{'options__button--active' : false}">
          +
        </div>
        <div class="options__button" :class="{'options__button--active' : false}">
          -
        </div>
      </div>
    </GraphOption>

  </div>
</template>

<script>

import GraphOption from "@/components/GraphOption";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  components: {GraphOption},
  setup() {
    const store = useStore()

    const canRemoveNode = computed(() => !!store.state.selectedNodes.length)

    const addNode = () => {
      store.commit('addNode')
    }

    const removeNode = () => {
      store.commit('removeNode')
    }

    return {store, addNode, removeNode, canRemoveNode}
  }
}
</script>

<style scoped lang="scss">
.options {
  width: 100%;
  display: flex;
  gap: 8px;
  margin: 8px;

  &__buttons {
    display: flex;
    gap: 16px;
  }

  &__button {
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #adadad;
    color: #adadad;

    &--active {
      background-color: #0079d0;
      color: white;
      cursor: pointer;
    }
  }
}
</style>
