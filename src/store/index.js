import {createStore} from 'vuex'

export default createStore({
  state: {
    nodes: {
      router1: {
        name: "Router 1",
        color: '#4466cc',
        active: true
      },
      router2: {
        name: "Router 2",
        color: '#4466cc',
        active: true
      },
      router3: {
        name: "Router 3",
        color: '#4466cc',
        active: true
      },
      router4: {
        name: "Router 4",
        color: '#4466cc',
        active: false
      }
    },
    nextNodeIndex: 4,
    edges: {
      edge1: {source: "router1", target: "router2", label: 1},
      edge2: {source: "router2", target: "router3", label: 3},
      edge3: {source: "router3", target: "router4", label: 4}
    },
    nextEdgeIndex: 3,
    selectedNodes: [],
    selectedEdges: [],
    zoom: 1
  },
  getters: {},
  mutations: {
    addNode(state) {
      state.nextNodeIndex++
      const nodeId = `router${state.nextNodeIndex}`
      const name = `Router${state.nextNodeIndex}`
      state.nodes[nodeId] = {name, color: '#4466cc'}
    },

    removeNode(state) {
      for (const nodeId of state.selectedNodes) {
        delete state.nodes[nodeId]
      }
    },

    addEdge(state) {
      state.nextEdgeIndex++
      const edgeId = `edge${state.nextEdgeIndex}`
      state.edges[edgeId] = {
        source: state.selectedNodes[0],
        target: state.selectedNodes[1],
        label: 1
      }
    },

    removeEdge(state) {
      for (const edgeId of state.selectedEdges) {
        delete state.edges[edgeId]
      }
    },

    zoomIn(state) {
      state.zoom += .25
    },

    zoomOut(state) {
      const newValue = state.zoom - .25
      state.zoom = newValue > 1 ? newValue : 1
    },

    updateSelectedNodes(state, selectedNodes) {
      state.selectedNodes = selectedNodes
    }
  },
  actions: {},
  modules: {}
})
