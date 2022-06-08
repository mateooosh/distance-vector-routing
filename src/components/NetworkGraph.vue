<template>
  <div class="graph">
    <v-network-graph :nodes="store.state.nodes" :edges="store.state.edges" :configs="config"
                     v-model:selected-nodes="selectedNodes" v-model:selected-edges="selectedEdges"
                     v-model:zoom-level="zoom">
      <template #edge-label="{ edge, ...slotProps }">
        <v-edge-label :text="edge.label" align="center" vertical-align="above" v-bind="slotProps"
                      :config="{fontSize: 14}"/>
      </template>
    </v-network-graph>
  </div>
</template>

<script>
import {defineConfigs} from "v-network-graph"
import {useStore} from "vuex"
import {computed} from "vue"

export default {
  setup() {
    const store = useStore()
    store.commit('initialize')

    const ACTIVE = "#01c501"
    const INACTIVE = "#ff0000"

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
          color: node => node.color,
          radius: 30,
        },
        hover: {
          color: node => node.color
        },
        label: {
          fontSize: 14,
          direction: node => node.direction
        }
      },
      edge: {
        selectable: true,
        normal: {
          color: edge => edge.color
        },
        hover: {
          color: edge => edge.color
        },
        marker: {
          source: {
            type: 'circle',
            width: 7,
            height: 7,
            margin: 1,
            color: ([edge]) => (store.state.nodes[edge.source]?.active ? ACTIVE : INACTIVE),
          },
          target: {
            type: "circle",
            width: 7,
            height: 7,
            margin: 1,
            color: ([edge]) => (store.state.nodes[edge.target]?.active ? ACTIVE : INACTIVE),
          },
        },
      },
      view: {
        scrollingObjects: true,
        minZoomLevel: 1,
        mouseWheelZoomEnabled: false
      }
    })

    return {config, store, selectedNodes, selectedEdges, zoom}
  }
}
</script>

<style scoped lang="scss">
.graph {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
