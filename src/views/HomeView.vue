<template>
  <div>
    <GraphOptions/>
    <NetworkGraph/>
    <div class="node-details">
      <NodeDetails v-for="id in selectedNodes" :key="id" :id="id"/>
    </div>
    <NodeDetails/>
    <EdgeDetails/>
  </div>
</template>

<script>
// @ is an alias to /src
import NetworkGraph from '@/components/NetworkGraph.vue'
import GraphOptions from "@/components/GraphOptions"
import NodeDetails from "@/components/NodeDetails"
import EdgeDetails from "@/components/EdgeDetails"
import {useStore} from "vuex"
import {computed, onMounted} from "vue"

export default {
  name: 'HomeView',
  components: {
    EdgeDetails,
    GraphOptions,
    NetworkGraph,
    NodeDetails
  },
  setup() {
    const store = useStore()

    onMounted(() => {
      document.addEventListener('keydown', event => {
        const key = event.key
        if (key === 'Delete') {
          if (store.state.selectedEdges) {
            store.commit('removeEdge')
          }

          if (store.state.selectedNodes) {
            store.commit('removeNode')
          }
        }
      })
    })

    const selectedNodes = computed({
      get() {
        return store.state.selectedNodes
      },

      set(newValue) {
        store.state.selectedNodes = newValue
      }
    })

    return {
      store,
      selectedNodes
    }
  }

}
</script>

<style lang="scss" scoped>
.node-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  top: 0;
  right: 0;
  padding: 16px;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  > div {
    width: 360px;
    padding: 0 8px;
    border-radius: 8px;
    box-shadow: 0px 0px 7px -2px rgba(66, 68, 90, 1);
    background-color: white;
  }
}
</style>
