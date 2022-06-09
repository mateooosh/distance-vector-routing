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

      <GraphOption>
        <template #title>
          Import/Export
        </template>
        <div class="options__buttons">
          <div class="options__button options__button--active" @click="importGraph">
            Import
            <input @change="onFileChange" type="file" id="import-graph" style="display: none;"/>
          </div>
          <div class="options__button options__button--active" @click="exportGraph">
            Export
          </div>
        </div>
      </GraphOption>

      <GraphOption>
        <template #title>
          Step: {{ store.state.step }}
        </template>
        <div class="options__buttons">
          <div class="options__button" :class="{'options__button--active' : canPrevStep}" @click="prevStep">
            Previous
          </div>
          <div class="options__button options__button--active" @click="nextStep">
            Next
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

    const canAddEdge = computed(() => {
      const index = Object.entries(store.state.edges).findIndex(edge => {
        return edge[1].target === store.state.selectedNodes[0]
            && edge[1].source === store.state.selectedNodes[1]
            || edge[1].source === store.state.selectedNodes[0]
            && edge[1].target === store.state.selectedNodes[1]
      })

      return store.state.selectedNodes.length === 2 && index === -1
    })

    const canRemoveEdge = computed(() => !!store.state.selectedEdges.length)

    const canZoomOut = computed(() => store.state.zoom > 1)

    const canPrevStep = computed(() => store.state.step > 0)

    const addNode = () => {
      store.commit('addNode')
    }

    const removeNode = () => {
      store.commit('removeNode')
    }

    const addEdge = () => {
      if (canAddEdge.value)
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

    const nextStep = () => {
      store.commit('nextStep')
    }

    const prevStep = () => {
      store.commit('prevStep')
    }

    const onFileChange = (event) => {
      const file = event.target.files[0]
      event.target.value = null

      const fr = new FileReader()

      fr.onload = e => {
        const result = JSON.parse(e.target.result)
        store.state.nodes = result.nodes
        store.state.edges = result.edges
        store.commit('initialize')
      }

      fr.readAsText(file)
    }

    const importGraph = () => {
      document.getElementById('import-graph').click()
    }

    const exportGraph = () => {
      const result = {
        edges: store.state.edges,
        nodes: store.state.nodes
      }

      exportToJSON(result)
    }

    const exportToJSON = json => {
      const dataStr = JSON.stringify(json)
      const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr)
      const exportFileDefaultName = 'graph.json'
      const linkElement = document.createElement('a')

      linkElement.setAttribute('href', dataUri)
      linkElement.setAttribute('download', exportFileDefaultName)
      linkElement.click()
    }

    return {
      store,
      addNode,
      removeNode,
      addEdge,
      removeEdge,
      zoomIn,
      zoomOut,
      nextStep,
      prevStep,
      importGraph,
      exportGraph,
      onFileChange,
      canRemoveNode,
      canAddEdge,
      canRemoveEdge,
      canZoomOut,
      canPrevStep
    }
  }
}
</script>

<style scoped lang="scss">
.options {
  margin: 16px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  &__sidebar {
    display: flex;
    flex-direction: column;
    gap: 16px;
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
