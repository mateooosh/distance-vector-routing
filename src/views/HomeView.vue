<template>
  <div>
    <GraphOptions/>
    <NetworkGraph msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NetworkGraph from '@/components/NetworkGraph.vue'
import GraphOptions from "@/components/GraphOptions";

export default {
  name: 'HomeView',
  components: {
    GraphOptions,
    NetworkGraph
  }
}
</script>
