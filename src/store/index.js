import {createStore} from 'vuex'

const LETTERS = Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 65))

export default createStore({
  state: {
    nodes: {
      router1: {
        name: "Router 1",
        color: '#4466cc',
        active: true,
        direction: 'south'
      },
      router2: {
        name: "Router 2",
        color: '#4466cc',
        active: true,
        direction: 'south'
      },
      router3: {
        name: "Router 3",
        color: '#4466cc',
        active: true,
        direction: 'south'
      },
      router4: {
        name: "Router 4",
        color: '#4466cc',
        active: false,
        direction: 'south'
      }
    },
    nextNodeIndex: 4,
    edges: {
      edge1: {source: "router1", target: "router2", label: "A:1", color: '#4466cc'},
      edge2: {source: "router2", target: "router3", label: "B:2", color: '#4466cc'},
      edge3: {source: "router3", target: "router4", label: "C:3", color: '#4466cc'}
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
      const name = `Router ${state.nextNodeIndex}`
      state.nodes[nodeId] = {name, color: '#4466cc', active: true, direction: 'south'}
    },

    removeNode(state) {
      for (const nodeId of state.selectedNodes) {
        delete state.nodes[nodeId]
      }
    },

    addEdge(state) {
      state.nextEdgeIndex++
      const edgeId = `edge${state.nextEdgeIndex}`

      const label = `${LETTERS[(state.nextEdgeIndex-1) % LETTERS.length]}:1`
      state.edges[edgeId] = {
        source: state.selectedNodes[0],
        target: state.selectedNodes[1],
        label,
        color: '#4466cc'
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
    },

    clearNodes(state) {
      state.nodes = {}
    },

    clearEdges(state) {
      state.edges = {}
    }
  },
  actions: {},
  modules: {}
})
