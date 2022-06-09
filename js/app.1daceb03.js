(function(){"use strict";var e={8464:function(e,t,o){o(8778);var n=o(9224),s=(o(606),o(1643)),a=(o(2121),o(4202)),l=(o(7133),o(6070)),r=(o(3723),o(8387)),d=(o(1049),o(7355)),i=o(9242),c=o(3396);function u(e,t){const o=(0,c.up)("router-view");return(0,c.wg)(),(0,c.j4)(o)}var p=o(89);const m={},g=(0,p.Z)(m,[["render",u]]);var v=g,_=o(678);const b={class:"node-details"};function f(e,t,o,n,s,a){const l=(0,c.up)("GraphOptions"),r=(0,c.up)("NetworkGraph"),d=(0,c.up)("NodeDetails"),i=(0,c.up)("EdgeDetails");return(0,c.wg)(),(0,c.iD)("div",null,[(0,c.Wm)(l),(0,c.Wm)(r),(0,c._)("div",b,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(n.selectedNodes,(e=>((0,c.wg)(),(0,c.j4)(d,{key:e,id:e},null,8,["id"])))),128))]),(0,c.Wm)(d),(0,c.Wm)(i)])}const h={class:"graph"};function w(e,t,o,n,s,a){const l=(0,c.up)("v-edge-label"),r=(0,c.up)("v-network-graph");return(0,c.wg)(),(0,c.iD)("div",h,[(0,c.Wm)(r,{nodes:n.store.state.nodes,edges:n.store.state.edges,configs:n.config,"selected-nodes":n.selectedNodes,"onUpdate:selected-nodes":t[0]||(t[0]=e=>n.selectedNodes=e),"selected-edges":n.selectedEdges,"onUpdate:selected-edges":t[1]||(t[1]=e=>n.selectedEdges=e),"zoom-level":n.zoom,"onUpdate:zoom-level":t[2]||(t[2]=e=>n.zoom=e)},{"edge-label":(0,c.w5)((({edge:e,...t})=>[(0,c.Wm)(l,(0,c.dG)({text:e.label,align:"center","vertical-align":"above"},t,{config:{fontSize:14}}),null,16,["text"])])),_:1},8,["nodes","edges","configs","selected-nodes","selected-edges","zoom-level"])])}var x=o(1957),k=o(65),N={setup(){const e=(0,k.oR)();e.commit("initialize");const t="#01c501",o="#ff0000",n=(0,c.Fl)({get(){return e.state.selectedNodes},set(t){e.state.selectedNodes=t}}),s=(0,c.Fl)({get(){return e.state.selectedEdges},set(t){e.state.selectedEdges=t}}),a=(0,c.Fl)({get(){return e.state.zoom},set(t){e.state.zoom=t}}),l=(0,x.Kl)({node:{selectable:!0,normal:{color:e=>e.color,radius:30},hover:{color:e=>e.color},label:{fontSize:14,direction:e=>e.direction}},edge:{selectable:!0,normal:{color:e=>e.color},hover:{color:e=>e.color},marker:{source:{type:"circle",width:7,height:7,margin:1,color:([n])=>e.state.nodes[n.source]?.active?t:o},target:{type:"circle",width:7,height:7,margin:1,color:([n])=>e.state.nodes[n.target]?.active?t:o}}},view:{scrollingObjects:!0,minZoomLevel:1,mouseWheelZoomEnabled:!1}});return{config:l,store:e,selectedNodes:n,selectedEdges:s,zoom:a}}};const y=(0,p.Z)(N,[["render",w],["__scopeId","data-v-5780a920"]]);var S=y,I=o(7139);const T={class:"options"},E={class:"options__sidebar"},C=(0,c.Uk)(" Nodes "),O={class:"options__buttons"},z=(0,c.Uk)(" Edges "),D={class:"options__buttons"},R=(0,c.Uk)(" Zoom "),F={class:"options__buttons"},W=(0,c.Uk)(" Import/Export "),j={class:"options__buttons"},P=(0,c.Uk)(" Import "),K={class:"options__buttons"};function U(e,t,o,n,s,a){const l=(0,c.up)("GraphOption");return(0,c.wg)(),(0,c.iD)("div",T,[(0,c._)("div",E,[(0,c.Wm)(l,null,{title:(0,c.w5)((()=>[C])),default:(0,c.w5)((()=>[(0,c._)("div",O,[(0,c._)("div",{class:"options__button options__button--active",onClick:t[0]||(t[0]=(...e)=>n.addNode&&n.addNode(...e))}," Add "),(0,c._)("div",{class:(0,I.C_)(["options__button",{"options__button--active":n.canRemoveNode}]),onClick:t[1]||(t[1]=(...e)=>n.removeNode&&n.removeNode(...e))}," Remove ",2)])])),_:1}),(0,c.Wm)(l,null,{title:(0,c.w5)((()=>[z])),default:(0,c.w5)((()=>[(0,c._)("div",D,[(0,c._)("div",{class:(0,I.C_)(["options__button",{"options__button--active":n.canAddEdge}]),onClick:t[2]||(t[2]=(...e)=>n.addEdge&&n.addEdge(...e))}," Add ",2),(0,c._)("div",{class:(0,I.C_)(["options__button",{"options__button--active":n.canRemoveEdge}]),onClick:t[3]||(t[3]=(...e)=>n.removeEdge&&n.removeEdge(...e))}," Remove ",2)])])),_:1}),(0,c.Wm)(l,null,{title:(0,c.w5)((()=>[R])),default:(0,c.w5)((()=>[(0,c._)("div",F,[(0,c._)("div",{class:(0,I.C_)(["options__button",{"options__button--active":!0}]),onClick:t[4]||(t[4]=(...e)=>n.zoomIn&&n.zoomIn(...e))}," + "),(0,c._)("div",{class:(0,I.C_)(["options__button",{"options__button--active":n.canZoomOut}]),onClick:t[5]||(t[5]=(...e)=>n.zoomOut&&n.zoomOut(...e))}," - ",2)])])),_:1}),(0,c.Wm)(l,null,{title:(0,c.w5)((()=>[W])),default:(0,c.w5)((()=>[(0,c._)("div",j,[(0,c._)("div",{class:"options__button options__button--active",onClick:t[7]||(t[7]=(...e)=>n.importGraph&&n.importGraph(...e))},[P,(0,c._)("input",{onChange:t[6]||(t[6]=(...e)=>n.onFileChange&&n.onFileChange(...e)),type:"file",id:"import-graph",style:{display:"none"}},null,32)]),(0,c._)("div",{class:"options__button options__button--active",onClick:t[8]||(t[8]=(...e)=>n.exportGraph&&n.exportGraph(...e))}," Export ")])])),_:1}),(0,c.Wm)(l,null,{title:(0,c.w5)((()=>[(0,c.Uk)(" Step: "+(0,I.zw)(n.store.state.step),1)])),default:(0,c.w5)((()=>[(0,c._)("div",K,[(0,c._)("div",{class:(0,I.C_)(["options__button",{"options__button--active":n.canPrevStep}]),onClick:t[9]||(t[9]=(...e)=>n.prevStep&&n.prevStep(...e))}," Previous ",2),(0,c._)("div",{class:"options__button options__button--active",onClick:t[10]||(t[10]=(...e)=>n.nextStep&&n.nextStep(...e))}," Next ")])])),_:1})])])}const Z={class:"option"},M={class:"option__title"};function V(e,t,o,n,s,a){return(0,c.wg)(),(0,c.iD)("div",Z,[(0,c._)("div",M,[(0,c.WI)(e.$slots,"title",{},void 0,!0)]),(0,c.WI)(e.$slots,"default",{},void 0,!0)])}var H={setup(){const e=(0,k.oR)(),t=()=>{e.commit("addNode")},o=()=>{e.commit("removeNode")};return{store:e,addNode:t,removeNode:o}}};const G=(0,p.Z)(H,[["render",V],["__scopeId","data-v-bad403c6"]]);var Y=G,$={components:{GraphOption:Y},setup(){const e=(0,k.oR)(),t=(0,c.Fl)((()=>!!e.state.selectedNodes.length)),o=(0,c.Fl)((()=>{const t=Object.entries(e.state.edges).findIndex((t=>t[1].target===e.state.selectedNodes[0]&&t[1].source===e.state.selectedNodes[1]||t[1].source===e.state.selectedNodes[0]&&t[1].target===e.state.selectedNodes[1]));return 2===e.state.selectedNodes.length&&-1===t})),n=(0,c.Fl)((()=>!!e.state.selectedEdges.length)),s=(0,c.Fl)((()=>e.state.zoom>1)),a=(0,c.Fl)((()=>e.state.step>0)),l=()=>{e.commit("addNode")},r=()=>{e.commit("removeNode")},d=()=>{o.value&&e.commit("addEdge")},i=()=>{e.commit("removeEdge")},u=()=>{e.commit("zoomIn")},p=()=>{e.commit("zoomOut")},m=()=>{e.commit("nextStep")},g=()=>{e.commit("prevStep")},v=t=>{const o=t.target.files[0];t.target.value=null;const n=new FileReader;n.onload=t=>{const o=JSON.parse(t.target.result);e.state.nodes=o.nodes,e.state.edges=o.edges,e.commit("initialize")},n.readAsText(o)},_=()=>{document.getElementById("import-graph").click()},b=()=>{const t={edges:e.state.edges,nodes:e.state.nodes};f(t)},f=e=>{const t=JSON.stringify(e),o="data:application/json;charset=utf-8,"+encodeURIComponent(t),n="graph.json",s=document.createElement("a");s.setAttribute("href",o),s.setAttribute("download",n),s.click()};return{store:e,addNode:l,removeNode:r,addEdge:d,removeEdge:i,zoomIn:u,zoomOut:p,nextStep:m,prevStep:g,importGraph:_,exportGraph:b,onFileChange:v,canRemoveNode:t,canAddEdge:o,canRemoveEdge:n,canZoomOut:s,canPrevStep:a}}};const A=(0,p.Z)($,[["render",U],["__scopeId","data-v-29815510"]]);var q=A;const L=e=>((0,c.dD)("data-v-d7e71b8e"),e=e(),(0,c.Cn)(),e),B={class:"details"},J=["value"],Q=L((()=>(0,c._)("div",{class:"details__title"},"Routing table",-1)));function X(e,t,o,n,s,a){const l=(0,c.up)("van-field"),r=(0,c.up)("van-form"),d=(0,c.up)("RoutingTable"),u=(0,c.up)("RoutingTableExplanation"),p=(0,c.up)("FormCollapsePanel");return(0,c.wg)(),(0,c.iD)("div",B,[n.nodes[n.props.id]?.name?((0,c.wg)(),(0,c.j4)(p,{key:0,title:n.nodes[n.props.id]?.name},{explanation:(0,c.w5)((()=>[(0,c.Wm)(u,{nodeKey:n.props.id,node:n.nodes[n.props.id]},null,8,["nodeKey","node"])])),default:(0,c.w5)((()=>[(0,c.Wm)(r,null,{default:(0,c.w5)((()=>[(0,c.Wm)(l,{modelValue:n.nodes[n.props.id].name,"onUpdate:modelValue":t[0]||(t[0]=e=>n.nodes[n.props.id].name=e),name:"=name",label:"Name",placeholder:"Name","label-width":"120px",class:"details__field"},null,8,["modelValue"]),(0,c.Wm)(l,{name:"color",label:"Color","label-width":"120px",class:"details__field"},{input:(0,c.w5)((()=>[(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.nodes[n.props.id].color=e),type:"color"},null,512),[[i.nr,n.nodes[n.props.id].color]])])),_:1}),(0,c.Wm)(l,{name:"placement",label:"Label placement","label-width":"120px",class:"details__field"},{input:(0,c.w5)((()=>[(0,c.wy)((0,c._)("select",{class:"node-details__select","onUpdate:modelValue":t[2]||(t[2]=e=>n.nodes[n.props.id].direction=e)},[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(n.DIRECTIONS,(e=>((0,c.wg)(),(0,c.iD)("option",{key:e,value:e},(0,I.zw)(e),9,J)))),128))],512),[[i.bM,n.nodes[n.props.id].direction]])])),_:1})])),_:1}),Q,(0,c.Wm)(d,{id:n.props.id,node:n.nodes[n.props.id],"routing-table":n.routingTable},null,8,["id","node","routing-table"])])),_:1},8,["title"])):(0,c.kq)("",!0)])}const ee=e=>((0,c.dD)("data-v-3ae06ca2"),e=e(),(0,c.Cn)(),e),te={class:"title"},oe=ee((()=>(0,c._)("div",{class:"title"},"Explanation",-1)));function ne(e,t,o,n,s,a){const l=(0,c.up)("van-collapse-item"),r=(0,c.up)("van-collapse");return(0,c.wg)(),(0,c.j4)(r,{modelValue:n.state.activeNames,"onUpdate:modelValue":t[0]||(t[0]=e=>n.state.activeNames=e)},{default:(0,c.w5)((()=>[(0,c.Wm)(l,{name:"1"},{title:(0,c.w5)((()=>[(0,c._)("div",te,(0,I.zw)(n.props.title),1)])),default:(0,c.w5)((()=>[(0,c.WI)(e.$slots,"default",{},void 0,!0)])),_:3}),(0,c.Wm)(l,{name:"2"},{title:(0,c.w5)((()=>[oe])),default:(0,c.w5)((()=>[(0,c.WI)(e.$slots,"explanation",{},void 0,!0)])),_:3})])),_:3},8,["modelValue"])}var se=o(4870),ae={props:{title:String},setup(e){const t=(0,k.oR)(),o=(0,c.Fl)({get(){return t.state.nodes},set(e){t.state.nodes=e}}),n=(0,se.qj)({activeNames:["1"]});return{store:t,nodes:o,state:n,props:e}}};const le=(0,p.Z)(ae,[["render",ne],["__scopeId","data-v-3ae06ca2"]]);var re=le;const de=["center","north","north-east","east","south-east","south","south-west","west","north-west"],ie=e=>((0,c.dD)("data-v-2ca75a69"),e=e(),(0,c.Cn)(),e),ce={class:"table"},ue=ie((()=>(0,c._)("thead",null,[(0,c._)("tr",null,[(0,c._)("th",null,"Destination"),(0,c._)("th",null,"Distance"),(0,c._)("th",null,"Next hop")])],-1)));function pe(e,t,o,n,s,a){return(0,c.wg)(),(0,c.iD)("table",ce,[ue,(0,c._)("tbody",null,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(n.props.routingTable,(e=>((0,c.wg)(),(0,c.iD)("tr",{key:e,class:(0,I.C_)(n.marked(e.destination)?"marked":"")},[(0,c._)("td",null,(0,I.zw)(n.store.state.nodes[e.destination].name),1),(0,c._)("td",null,(0,I.zw)(e.distance===1/0?"∞":e.distance),1),(0,c._)("td",null,(0,I.zw)(e.nextHop),1)],2)))),128))])])}var me={props:{id:String,node:Object,routingTable:Object,mark:{type:Boolean,default:!1},prevStep:{type:Boolean,default:!1}},setup(e){const t=(0,k.oR)(),o=(0,c.Fl)({get(){return t.state.step},set(e){t.state.step=e}}),n=(0,c.Fl)((()=>t.state.routerToMark)),s=(0,c.Fl)((()=>t.state.routerToMarkInPrevStep)),a=t=>e.mark&&(e.prevStep&&n.value===t||!e.prevStep&&s.value===t);return{store:t,props:e,step:o,routerToMark:n,routerToMarkInPrevStep:s,marked:a}}};const ge=(0,p.Z)(me,[["render",pe],["__scopeId","data-v-2ca75a69"]]);var ve=ge;const _e={class:"explanation"},be={class:"explanation__block"},fe={key:0,class:"explanation__block"},he=(0,c.Uk)(" Routing table from previous step "),we={key:1,class:"explanation__block"},xe={key:2,class:"explanation__block"},ke=["onMouseover"],Ne={key:3,class:"explanation__block"},ye=(0,c.Uk)(" Updated routing table: "),Se={class:"explanation__block"},Ie={key:0,class:"explanation__block"},Te={class:"explanation__buttons"};function Ee(e,t,o,n,s,a){const l=(0,c.up)("RoutingTable");return(0,c.wg)(),(0,c.iD)("div",_e,[0!==n.store.state.step?((0,c.wg)(),(0,c.iD)(c.HY,{key:0},[(0,c._)("div",be,[(0,c._)("div",null,[(0,c.Uk)((0,I.zw)(n.props.node.name)+" receives routing tables from its neighbours: ",1),(0,c._)("ul",null,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(n.explanation.neighbours,(e=>((0,c.wg)(),(0,c.iD)("li",{key:e},(0,I.zw)(n.getNameOfNode(e)),1)))),128))])])]),n.state.microStep>0?((0,c.wg)(),(0,c.iD)("div",fe,[he,(0,c.Wm)(l,{id:n.props.nodeKey,node:n.props.node,"routing-table":n.store.state.routingTables[n.store.state.step-1][n.props.nodeKey],mark:""},null,8,["id","node","routing-table"])])):(0,c.kq)("",!0),n.state.microStep>1?((0,c.wg)(),(0,c.iD)("div",we,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(n.explanation.receivedTables,((e,t)=>((0,c.wg)(),(0,c.iD)("div",{key:t},[(0,c.Uk)(" Routing table received from: "+(0,I.zw)(n.store.state.nodes[n.explanation.neighbours[t]].name)+" ",1),(0,c.Wm)(l,{id:n.props.nodeKey,node:n.props.node,"routing-table":e,mark:"","prev-step":""},null,8,["id","node","routing-table"])])))),128))])):(0,c.kq)("",!0),n.state.microStep>2?((0,c.wg)(),(0,c.iD)("div",xe,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(n.tablesGroupedByDestination,((e,t)=>((0,c.wg)(),(0,c.iD)("div",{key:t},[(0,c._)("span",{onMouseover:t=>n.onMouseOver(e),class:(0,I.C_)(n.routerToMark===e[0]?"marked":"")}," Cost "+(0,I.zw)(n.props.node.name)+" -> "+(0,I.zw)(n.store.state.nodes[e[0]].name)+" = "+(0,I.zw)(n.getCostText(e[0])),43,ke)])))),128))])):(0,c.kq)("",!0),n.state.microStep>3?((0,c.wg)(),(0,c.iD)("div",Ne,[ye,(0,c.Wm)(l,{id:n.props.nodeKey,node:n.props.node,"routing-table":n.store.state.routingTables[n.store.state.step][n.props.nodeKey]},null,8,["id","node","routing-table"])])):(0,c.kq)("",!0)],64)):((0,c.wg)(),(0,c.iD)(c.HY,{key:1},[(0,c._)("div",Se,(0,I.zw)(n.props.node.name)+" prepares routing table using its local knowledge. ",1),n.state.microStep>0?((0,c.wg)(),(0,c.iD)("div",Ie,[(0,c.Wm)(l,{id:n.props.id,node:n.nodes[n.props.id],"routing-table":n.routingTable},null,8,["id","node","routing-table"])])):(0,c.kq)("",!0)],64)),(0,c._)("div",Te,[(0,c._)("div",{class:(0,I.C_)(["explanation__button",{"explanation__button--active":n.canPrevStep}]),onClick:t[0]||(t[0]=(...e)=>n.prevStep&&n.prevStep(...e))}," Previous ",2),(0,c._)("div",{class:(0,I.C_)(["explanation__button",{"explanation__button--active":n.canNextStep}]),onClick:t[1]||(t[1]=(...e)=>n.nextStep&&n.nextStep(...e))}," Next ",2)])])}var Ce={props:{nodeKey:String,node:Object},components:{RoutingTable:ve},setup(e){const t=(0,k.oR)(),o=(0,se.qj)({microStep:0}),n=(0,c.Fl)({get(){return t.state.explanation[t.state.step][e.nodeKey]},set(e){t.state.explanation=e}}),s=(0,c.Fl)((()=>t.state.nodes)),a=(0,c.Fl)((()=>t.state.routingTables[t.state.step][e.nodeKey])),l=e=>t.state.nodes[e].name,r=(0,c.Fl)((()=>Object.entries(n.value.groupedReceivedTables).filter((t=>t[0]!==e.nodeKey)))),d=e=>{let t="min {";const o=n.value.calculating[e];let s=[];return o.distances.map((e=>{s.push(`${i(e[0])}+${i(e[1])}`)})),t+=s.join(", "),t+=`} = ${i(o.min)} via ${u(o.nextHop)}`,t},i=e=>e===Number.POSITIVE_INFINITY?"∞":e,u=e=>e||"-",p=()=>{o.microStep<_.value&&(o.microStep=o.microStep+1)},m=()=>{o.microStep>0&&(o.microStep=o.microStep-1)};(0,c.YP)((()=>t.state.step),(()=>{o.microStep=0})),(0,c.YP)((()=>o.microStep),(()=>{t.commit("markRouter",null),t.commit("markRouterPrevStep",null)}));const g=e=>{t.commit("markRouter",e[0]),t.commit("markRouterPrevStep",n.value.calculating[e[0]].nextHopKey)},v=(0,c.Fl)((()=>t.state.routerToMark)),_=(0,c.Fl)((()=>0!==t.state.step?4:1)),b=(0,c.Fl)((()=>o.microStep>0)),f=(0,c.Fl)((()=>o.microStep<_.value));return{store:t,explanation:n,getNameOfNode:l,props:e,nodes:s,getCostText:d,tablesGroupedByDestination:r,state:o,nextStep:p,prevStep:m,canPrevStep:b,canNextStep:f,maxSteps:_,routingTable:a,onMouseOver:g,routerToMark:v}}};const Oe=(0,p.Z)(Ce,[["render",Ee],["__scopeId","data-v-dd56af28"]]);var ze=Oe,De={props:{id:String},components:{RoutingTableExplanation:ze,RoutingTable:ve,FormCollapsePanel:re},setup(e){const t=(0,k.oR)(),o=(0,c.Fl)((()=>!!t.state.selectedNodes.length)),n=(0,c.Fl)({get(){return t.state.nodes},set(e){t.state.nodes=e}}),s=(0,c.Fl)({get(){return t.state.step},set(e){t.state.step=e}}),a=(0,c.Fl)((()=>t.state.routingTables[s.value][e.id]));return{showNodeDetails:o,store:t,nodes:n,DIRECTIONS:de,routingTable:a,props:e}}};const Re=(0,p.Z)(De,[["render",X],["__scopeId","data-v-d7e71b8e"]]);var Fe=Re;const We={class:"edge-details"},je=["onUpdate:modelValue"];function Pe(e,t,o,n,s,a){const l=(0,c.up)("van-field"),r=(0,c.up)("van-form"),d=(0,c.up)("FormCollapsePanel");return(0,c.wg)(),(0,c.iD)("div",We,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(n.selectedEdges,(e=>((0,c.wg)(),(0,c.iD)("div",{key:e},[(0,c.Wm)(d,{title:n.getTitle(e)},{default:(0,c.w5)((()=>[(0,c.Wm)(r,null,{default:(0,c.w5)((()=>[(0,c.Wm)(l,{modelValue:n.state.labels[e],"onUpdate:modelValue":t=>n.state.labels[e]=t,name:"=label",label:"Label",placeholder:"Label:Weight",type:"text",class:"edge-details__field",onChange:t=>n.onLabelChange(t,e),rules:[{validator:n.validator}]},null,8,["modelValue","onUpdate:modelValue","onChange","rules"]),(0,c.Wm)(l,{name:"color",label:"Color",class:"edge-details__field"},{input:(0,c.w5)((()=>[(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":t=>n.edges[e].color=t,type:"color"},null,8,je),[[i.nr,n.edges[e].color]])])),_:2},1024)])),_:2},1024)])),_:2},1032,["title"])])))),128))])}var Ke={components:{FormCollapsePanel:re},setup(){const e=(0,k.oR)(),t=(0,c.Fl)({get(){return e.state.selectedEdges},set(t){e.state.selectedEdges=t}}),o=(0,c.Fl)({get(){return e.state.edges},set(t){e.state.edges=t}}),n=(0,c.Fl)((()=>!!e.state.selectedEdges.length)),s=t=>e.state.nodes[t].name,a=t=>"".concat(s(e.state.edges[t].source)," = ",s(e.state.edges[t].target)),l=(t,o)=>{d(t.target.value)&&(e.state.edges[o].label=t.target.value)},r=(0,se.qj)({labels:[]});(0,c.YP)(t,(()=>{Object.keys(e.state.edges).map((t=>{r.labels[t]=e.state.edges[t].label}))}));const d=e=>e.length>0;return{showEdgeDetails:n,selectedEdges:t,store:e,edges:o,getNodeName:s,getTitle:a,onLabelChange:l,validator:d,state:r}}};const Ue=(0,p.Z)(Ke,[["render",Pe],["__scopeId","data-v-3c582e7f"]]);var Ze=Ue,Me={name:"HomeView",components:{EdgeDetails:Ze,GraphOptions:q,NetworkGraph:S,NodeDetails:Fe},setup(){const e=(0,k.oR)();(0,c.bv)((()=>{document.addEventListener("keydown",(t=>{const o=t.key;"Delete"===o&&(e.state.selectedEdges&&e.commit("removeEdge"),e.state.selectedNodes&&e.commit("removeNode"))}))}));const t=(0,c.Fl)({get(){return e.state.selectedNodes},set(t){e.state.selectedNodes=t}});return{store:e,selectedNodes:t}}};const Ve=(0,p.Z)(Me,[["render",f],["__scopeId","data-v-723aadd1"]]);var He=Ve;const Ge=[{path:"/",name:"home",component:He}],Ye=(0,_.p7)({history:(0,_.r5)(),routes:Ge});var $e=Ye;const Ae=e=>{let t="A".charCodeAt(0),o="";do{e-=1,o=String.fromCharCode(t+e%26)+o,e=e/26>>0}while(e>0);return o};var qe=(0,k.MT)({state:{nodes:{router1:{name:"R1",color:"#4466cc",active:!0,direction:"south"},router2:{name:"R2",color:"#4466cc",active:!0,direction:"south"},router3:{name:"R3",color:"#4466cc",active:!0,direction:"south"},router4:{name:"R4",color:"#4466cc",active:!0,direction:"south"}},nextNodeIndex:4,edges:{edge1:{source:"router1",target:"router2",label:"A",color:"#4466cc"},edge2:{source:"router2",target:"router3",label:"B",color:"#4466cc"},edge3:{source:"router3",target:"router4",label:"C",color:"#4466cc"},edge4:{source:"router2",target:"router4",label:"D",color:"#4466cc"},edge5:{source:"router1",target:"router4",label:"E",color:"#4466cc"}},nextEdgeIndex:5,selectedNodes:[],selectedEdges:[],zoom:1,step:0,routingTables:[],explanation:[],routerToMark:null,routerToMarkInPrevStep:null},getters:{},mutations:{addNode(e){e.nextNodeIndex++;let t=`router${e.nextNodeIndex}`,o=`R${e.nextNodeIndex}`;while(Object.keys(e.nodes).includes(t))e.nextNodeIndex++,t=`router${e.nextNodeIndex}`,o=`R${e.nextNodeIndex}`;e.nodes[t]={name:o,color:"#4466cc",active:!0,direction:"south"},this.commit("initialize")},removeNode(e){for(const t of e.selectedNodes)delete e.nodes[t];this.commit("initialize")},addEdge(e){e.nextEdgeIndex++;let t=`edge${e.nextEdgeIndex}`,o=Ae(e.nextEdgeIndex);while(Object.keys(e.edges).includes(t))e.nextEdgeIndex++,t=`edge${e.nextEdgeIndex}`,o=Ae(e.nextEdgeIndex);e.edges[t]={source:e.selectedNodes[0],target:e.selectedNodes[1],label:o,color:"#4466cc"},this.commit("initialize")},removeEdge(e){for(const t of e.selectedEdges)delete e.edges[t];this.commit("initialize")},zoomIn(e){e.zoom+=.25},zoomOut(e){const t=e.zoom-.25;e.zoom=t>1?t:1},updateSelectedNodes(e,t){e.selectedNodes=t},clearNodes(e){e.nodes={}},clearEdges(e){e.edges={}},markRouter(e,t){e.routerToMark=t},markRouterPrevStep(e,t){e.routerToMarkInPrevStep=t},initialize(e){e.routingTables=[],e.routingTables.push({}),e.explanation=[],e.explanation.push({}),e.step=0,Object.keys(e.nodes).map((t=>{let o=[];Object.keys(e.nodes).map((n=>{let s=1/0,a="-";const l=Object.entries(e.edges).find((e=>e[1].source===t&&e[1].target===n||e[1].target===t&&e[1].source===n));n===t?s=0:l&&(s=1),n===t?a=e.nodes[t].name:l&&(a=l[1].target===n?l[1].source:l[1].target,a=e.nodes[n].name);const r={nodeName:e.nodes[t].name,nodeKey:t,destination:n,nextHop:a,distance:s};o.push(r)})),e.routingTables[0][t]=o}))},nextStep(e){e.step++,e.routingTables[e.step]||(e.routingTables.push({}),e.routingTables[e.step]=JSON.parse(JSON.stringify(e.routingTables[e.step-1])),e.explanation.push({}),Object.keys(e.nodes).map((t=>{const o=e.routingTables[e.step-1][t];let n={};const s=Object.entries(e.edges).filter((e=>e[1].source===t||e[1].target===t)),a=s.map((e=>e[1].target===t?e[1].source:e[1].target));n.neighbours=a;const l=a.map((t=>e.routingTables[e.step-1][t]));n.receivedTables=l;const r={};l.map((e=>{e.map((e=>{r[e.destination]||(r[e.destination]=[]),r[e.destination].push(e)}))})),n.groupedReceivedTables=r;const d={};Object.entries(r).map((s=>{if(t!==s[1][0].destination){d[s[1][0].destination]={};const a=[],l=[];s[1].map((e=>{const t=o.find((t=>t.destination===e.nodeKey)).distance,n=e.distance;let s=t+n;s=Number.isInteger(s)?s:Number.POSITIVE_INFINITY,a.push(s),l.push([t,n])}));const r=Math.min(...a),i=a.indexOf(r),c=a[i],u=r===Number.POSITIVE_INFINITY?"-":s[1][i].nodeName,p=e.routingTables[e.step][t].findIndex((e=>e.destination===s[0]));d[s[1][0].destination].sums=a,d[s[1][0].destination].distances=l,d[s[1][0].destination].min=r,d[s[1][0].destination].nextHop=u,d[s[1][0].destination].nextHopKey=s[1][i].nodeKey,n.calculating=d,e.routingTables[e.step][t][p].distance=c,e.routingTables[e.step][t][p].nextHop=u}})),e.explanation[e.step][t]=n})))},prevStep(e){e.step>0&&e.step--}},actions:{},modules:{}});(0,i.ri)(v).use(qe).use($e).use(x.ZP).use(n.Z).use(s.Z).use(a.Z).use(l.Z).use(r.Z).use(d.Z).mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,a){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],a=e[c][2];for(var r=!0,d=0;d<n.length;d++)(!1&a||l>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[d])}))?n.splice(d--,1):(r=!1,a<l&&(l=a));if(r){e.splice(c--,1);var i=s();void 0!==i&&(t=i)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,s,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,a,l=n[0],r=n[1],d=n[2],i=0;if(l.some((function(t){return 0!==e[t]}))){for(s in r)o.o(r,s)&&(o.m[s]=r[s]);if(d)var c=d(o)}for(t&&t(n);i<l.length;i++)a=l[i],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=self["webpackChunkdistance_vector_routing"]=self["webpackChunkdistance_vector_routing"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(8464)}));n=o.O(n)})();
//# sourceMappingURL=app.1daceb03.js.map