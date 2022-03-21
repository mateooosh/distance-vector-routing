import {createStore} from 'vuex'

export default createStore({
  state: {
    nodes: {
      router1: {name: "Router 1"},
      router2: {name: "Router 2"},
      router3: {name: "Router 3"},
      router4: {name: "Router 4"}
    },
    nextNodeIndex: 4,
    edges: {
      edge1: {source: "router1", target: "router2"},
      edge2: {source: "router2", target: "router3"},
      edge3: {source: "router3", target: "router4"}
    },
    selectedNodes: []
  },
  getters: {},
  mutations: {
    addNode(state) {
      state.nextNodeIndex++
      const nodeId = `router${state.nextNodeIndex}`
      const name = `Router${state.nextNodeIndex}`
      state.nodes[nodeId] = {name}
    },
    removeNode(state) {
      for (const nodeId of state.selectedNodes) {
        delete state.nodes[nodeId]
      }
    },
    updateSelectedNodes(state, selectedNodes) {
      state.selectedNodes = selectedNodes
    }
  },
  actions: {},
  modules: {}
})
