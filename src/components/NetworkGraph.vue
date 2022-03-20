<template>
  <div class="graph">
    <v-network-graph :nodes="nodes" :edges="edges">
    </v-network-graph>

  </div>
</template>

<script>
export default {
  name: 'NetworkGraph',
  data() {
    return {
      nodes: {
        router1: {name: "Router 1"},
        router2: {name: "Router 2"},
        router3: {name: "Router 3"},
        router4: {name: "Router 4"}
      },

      edges: {
        edge1: {source: "router1", target: "router2"},
        edge2: {source: "router2", target: "router3"},
        edge3: {source: "router3", target: "router4"}
      }
    }
  }
}
</script>
