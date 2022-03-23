<template>
  <div>
    <GraphOptions/>
    <NetworkGraph/>
    <NodeDetails/>
  </div>
</template>

<script>
// @ is an alias to /src
import NetworkGraph from '@/components/NetworkGraph.vue'
import GraphOptions from "@/components/GraphOptions"
import NodeDetails from "@/components/NodeDetails"

export default {
  name: 'HomeView',
  components: {
    GraphOptions,
    NetworkGraph,
    NodeDetails
  }
}
</script>
