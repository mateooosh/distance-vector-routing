<template>
  <div class="options">
    <div class="options__sidebar">
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
          <div class="options__button" :class="{'options__button--active' : canAddEdge}" @click="addEdge">
            Add
          </div>
          <div class="options__button" :class="{'options__button--active' : canRemoveEdge}" @click="removeEdge">
            Remove
          </div>
        </div>
      </GraphOption>

      <GraphOption>
        <template #title>
          Zoom
        </template>
        <div class="options__buttons">
          <div class="options__button" :class="{'options__button--active' : true}" @click="zoomIn">
            +
          </div>
          <div class="options__button" :class="{'options__button--active' : canZoomOut}" @click="zoomOut">
            -
          </div>
        </div>
      </GraphOption>
    </div>
  </div>
</template>

<script>

import GraphOption from "@/components/GraphOption"
import {useStore} from "vuex"
import {computed} from "vue"

export default {
  components: {GraphOption},
  setup() {
    const store = useStore()

    const canRemoveNode = computed(() => !!store.state.selectedNodes.length)

    const canAddEdge = computed(() => store.state.selectedNodes.length === 2)

    const canRemoveEdge = computed(() => !!store.state.selectedEdges.length)

    const canZoomOut = computed(() => store.state.zoom > 1)

    const addNode = () => {
      store.commit('addNode')
    }

    const removeNode = () => {
      store.commit('removeNode')
    }

    const addEdge = () => {
      store.commit('addEdge')
    }

    const removeEdge = () => {
      store.commit('removeEdge')
    }

    const zoomIn = () => {
      store.commit('zoomIn')
    }

    const zoomOut = () => {
      store.commit('zoomOut')
    }

    return {
      store,
      addNode,
      removeNode,
      addEdge,
      removeEdge,
      zoomIn,
      zoomOut,
      canRemoveNode,
      canAddEdge,
      canRemoveEdge,
      canZoomOut
    }
  }
}
</script>

<style scoped lang="scss">
.options {
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  &__sidebar {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__buttons {
    display: flex;
    gap: 16px;
  }

  &__button {
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #d5d5d5;
    color: #adadad;
    cursor: not-allowed;

    &--active {
      background-color: #0079d0;
      color: white;
      cursor: pointer;
    }
  }
}
</style>
