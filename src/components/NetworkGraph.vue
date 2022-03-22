<template>
  <div class="graph">
    <v-network-graph :nodes="store.state.nodes" :edges="store.state.edges" :configs="config"
                     v-model:selected-nodes="selectedNodes" v-model:selected-edges="selectedEdges"
                     v-model:zoom-level="zoom">
    </v-network-graph>
  </div>
</template>

<script>
import {defineConfigs} from "v-network-graph"
import {useStore} from "vuex"
import {computed, reactive} from "vue";

export default {
  setup() {
    const store = useStore()

    const state = reactive({
      // selectedNodes: []
    })

    const selectedNodes = computed({
      get() {
        return store.state.selectedNodes
      },

      set(newValue) {
        store.state.selectedNodes = newValue
      }
    })

    const selectedEdges = computed({
      get() {
        return store.state.selectedEdges
      },

      set(newValue) {
        store.state.selectedEdges = newValue
      }
    })

    const zoom = computed({
      get() {
        return store.state.zoom
      },

      set(newValue) {
        store.state.zoom = newValue
      }
    })

    const config = defineConfigs({
      node: {
        selectable: true,
        normal: {
          radius: 30
        }
      },
      edge: {
        selectable: true
      },
      view: {
        // scrollingObjects: true,
        minZoomLevel: 1,
        mouseWheelZoomEnabled: false
      }
    })

    return {config, store, state, selectedNodes, selectedEdges, zoom}
  }
}
</script>

<style scoped lang="scss">
.graph {
  height: 600px;
}
</style>
