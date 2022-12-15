URL = "https://github.com/yannisban/wikispeedia-link-position/blob/main/graph/graph.json"

const myGraph = ForceGraph3D();
myGraph(/*<myDOMElement*//*document.getElementById("graph-vis-id")*/"graph-vis-id")
  //.graphData(URL);
  .jsonUrl(URL)