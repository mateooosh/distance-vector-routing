<template>
  <div>
    <GraphOptions/>
    <NetworkGraph/>
    <NodeDetails/>
    <EdgeDetails/>
  </div>
</template>

<script>
// @ is an alias to /src
import NetworkGraph from '@/components/NetworkGraph.vue'
import GraphOptions from "@/components/GraphOptions"
import NodeDetails from "@/components/NodeDetails"
import EdgeDetails from "@/components/EdgeDetails";

export default {
  name: 'HomeView',
  components: {
    EdgeDetails,
    GraphOptions,
    NetworkGraph,
    NodeDetails
  }
}
</script>
