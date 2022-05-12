import {createStore} from 'vuex'
import {convertToNumberingScheme} from "@/utils/utils";

export default createStore({
  state: {
    nodes: {
      "router1": {
        "name": "R1",
        "color": "#4466cc",
        "active": true,
        "direction": "south"
      },
      "router2": {
        "name": "R2",
        "color": "#4466cc",
        "active": true,
        "direction": "south"
      },
      "router3": {
        "name": "R3",
        "color": "#4466cc",
        "active": true,
        "direction": "south"
      },
      "router4": {
        "name": "R4",
        "color": "#4466cc",
        "active": true,
        "direction": "south"
      }
    },
    nextNodeIndex: 4,
    edges: {
      "edge1": {
        "source": "router1",
        "target": "router2",
        "label": "A",
        "color": "#4466cc"
      },
      "edge2": {
        "source": "router2",
        "target": "router3",
        "label": "B",
        "color": "#4466cc"
      },
      "edge3": {
        "source": "router3",
        "target": "router4",
        "label": "C",
        "color": "#4466cc"
      },
      "edge4": {
        "source": "router2",
        "target": "router4",
        "label": "D",
        "color": "#4466cc"
      },
      "edge5": {
        "source": "router1",
        "target": "router4",
        "label": "E",
        "color": "#4466cc"
      }
    },
    nextEdgeIndex: 5,
    selectedNodes: [],
    selectedEdges: [],
    zoom: 1,
    step: 0,
    routingTables: [],
    explanation: [],
    routerToMark: null,
    routerToMarkInPrevStep: null
  },
  getters: {},
  mutations: {
    addNode(state) {
      state.nextNodeIndex++
      let nodeId = `router${state.nextNodeIndex}`
      let name = `R${state.nextNodeIndex}`

      while (Object.keys(state.nodes).includes(nodeId)) {
        state.nextNodeIndex++
        nodeId = `router${state.nextNodeIndex}`
        name = `R${state.nextNodeIndex}`
      }

      state.nodes[nodeId] = {name, color: '#4466cc', active: true, direction: 'south'}
      this.commit('initialize')
    },

    removeNode(state) {
      for (const nodeId of state.selectedNodes) {
        delete state.nodes[nodeId]
      }
      this.commit('initialize')
    },

    addEdge(state) {
      state.nextEdgeIndex++
      let edgeId = `edge${state.nextEdgeIndex}`
      let label = convertToNumberingScheme(state.nextEdgeIndex)

      while (Object.keys(state.edges).includes(edgeId)) {
        state.nextEdgeIndex++
        edgeId = `edge${state.nextEdgeIndex}`
        label = convertToNumberingScheme(state.nextEdgeIndex)
      }

      state.edges[edgeId] = {
        source: state.selectedNodes[0],
        target: state.selectedNodes[1],
        label,
        color: '#4466cc'
      }
      this.commit('initialize')
    },

    removeEdge(state) {
      for (const edgeId of state.selectedEdges) {
        delete state.edges[edgeId]
      }
      this.commit('initialize')
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
    },

    markRouter(state, nodeId) {
      state.routerToMark = nodeId
    },

    markRouterPrevStep(state, nodeId) {
      state.routerToMarkInPrevStep = nodeId
    },

    initialize(state) {
      state.routingTables = []
      state.routingTables.push({})
      state.explanation = []
      state.explanation.push({})
      state.step = 0
      Object.keys(state.nodes).map(nodeKey => {
        let arr = []

        Object.keys(state.nodes).map(destination => {
          let distance = Infinity
          let nextHop = '-'

          const edge = Object.entries(state.edges).find(item => item[1].source === nodeKey && item[1].target === destination || item[1].target === nodeKey && item[1].source === destination)

          if (destination === nodeKey) {
            distance = 0
          } else if (edge) {
            distance = 1
          }

          if (destination === nodeKey) {
            nextHop = state.nodes[nodeKey].name
          } else if (edge) {
            nextHop = edge[1].target === destination ? edge[1].source : edge[1].target
            nextHop = state.nodes[destination].name
          }

          const obj = {
            nodeName: state.nodes[nodeKey].name,
            nodeKey,
            destination,
            nextHop,
            distance
          }

          arr.push(obj)
        })

        state.routingTables[0][nodeKey] = arr

      })
    },

    nextStep(state) {
      state.step++
      if(state.routingTables[state.step])
        return

      state.routingTables.push({})
      state.routingTables[state.step] = JSON.parse(JSON.stringify(state.routingTables[state.step - 1]))

      state.explanation.push({})

      const turnedOnNodes = Object.fromEntries(Object.entries(state.nodes).filter(node => node[1].active))

      Object.keys(turnedOnNodes).map(nodeKey => {
        const routingTable = state.routingTables[state.step - 1][nodeKey]
        let explanation = {}

        const connectedEdges = Object.entries(state.edges).filter(edge => {
          return edge[1].source === nodeKey || edge[1].target === nodeKey
        })

        const neighbours = connectedEdges
          .map(edge => edge[1].target === nodeKey ? edge[1].source : edge[1].target)
          .filter(nodeId => state.nodes[nodeId].active)

        explanation.neighbours = neighbours

        const receivedTables = neighbours.map(neighbour => {
          return state.routingTables[state.step - 1][neighbour]
        })
        explanation.receivedTables = receivedTables

        const groupedReceivedTables = {}
        receivedTables.map(table => {
          table.map(row => {
            if(!groupedReceivedTables[row.destination])
              groupedReceivedTables[row.destination] = []
            groupedReceivedTables[row.destination].push(row)
          })
        })
        explanation.groupedReceivedTables = groupedReceivedTables

        const calculating = {}

        Object.entries(groupedReceivedTables).map(tables => {
          if (nodeKey !== tables[1][0].destination) {

            calculating[tables[1][0].destination] = {}
            const sums = []
            const distances = []
            tables[1].map(table => {
              const distance1 = routingTable.find(item => item.destination === table.nodeKey).distance
              const distance2 = table.distance
              let sum = distance1 + distance2
              sum = Number.isInteger(sum) ? sum : Number.POSITIVE_INFINITY
              sums.push(sum)

              distances.push([distance1, distance2])
            })

            const min = Math.min(...sums)
            const indexOfSum = sums.indexOf(min)
            const distance = sums[indexOfSum]
            const nextHop = min === Number.POSITIVE_INFINITY ? '-' : tables[1][indexOfSum].nodeName

            const indexOfTable = state.routingTables[state.step][nodeKey].findIndex(table => table.destination === tables[0])

            calculating[tables[1][0].destination].sums = sums
            calculating[tables[1][0].destination].distances = distances
            calculating[tables[1][0].destination].min = min
            calculating[tables[1][0].destination].nextHop = nextHop
            calculating[tables[1][0].destination].nextHopKey = tables[1][indexOfSum].nodeKey
            explanation.calculating = calculating

            state.routingTables[state.step][nodeKey][indexOfTable].distance = distance
            state.routingTables[state.step][nodeKey][indexOfTable].nextHop = nextHop
          }
        })
        state.explanation[state.step][nodeKey] = explanation
        console.log(explanation)
      })
    },

    prevStep(state) {
      if (state.step > 0)
        state.step--
    }
  },
  actions: {},
  modules: {}
})
