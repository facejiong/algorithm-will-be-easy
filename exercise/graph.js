function Vertex(label) {
  this.label = label;
}

function Graph(v) {
  this.vertices = v;
  this.vertexList = [];
  this.edges = 0;
  this.adj = [];
  this.marked = [];
  this.edgeTo = [];
  for (var i = 0; i < this.vertices; ++i) {
  	this.adj[i] = [];
  	// this.adj[i].push('');
    this.marked[i] = false;
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.bfs = bfs;
  this.pathTo = pathTo;
  this.hasPathTo = hasPathTo;
  this.topSortHelper = topSortHelper;
  this.topSort = topSort;
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges ++;
}

function showGraph() {
  for (var i = 0; i < this.vertices; ++i) {
    console.log(i + '->');
    for (var j = 0; j < this.vertices; ++j) {
      if (this.adj[i][j] != undefined) {
        console.log(this.adj[i][j])
      }
    }
  }
}
// 深度优先遍历
function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
    console.log('visited vertex:' + v)
    this.adj[v].map((w) => {
      if (!this.marked[w]) {
        this.dfs(w);
      }
    })
  }
}
// 广度优先遍历
function bfs(s) {
  var queue = [];
  this.marked[s] = true;
  queue.push(s);
  while (queue.length > 0) {
    var v = queue.shift();
    // console.log(v)
    if (v !== undefined) {
      console.log('visited vertex:' + v);
    }
    this.adj[v].map((w) => {
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.marked[w] = true;
        queue.push(w);
      }
    })
  }
}
// 广度优先搜索对应最短路径
function pathTo(v) {
  var source = 0;
  if (!this.hasPathTo(v)) {
    return undefined;
  }
  var path = [];
  for (var i = v; i != source; i = this.edgeTo[i]) {
    path.push(i)
  }
  path.push(source);
  return path;
}

function hasPathTo(v) {
  return this.marked[v]
}

// 拓扑排序
function topSort() {
  var stack = [];
  var visited = [];
  for (var i = 0; i < this.vertices; i++) {
    visited[i] = false;
  }
  for (var i = 0; i < this.vertices; i++) {
    if (visited[i] == false) {
      this.topSortHelper(i, visited, stack);
    }
  }
  for (var i = 0; i < stack.length; i++) {
    if (stack[i] != undefined && stack[i] != false) {
      console.log(this.vertexList[stack[i]]);
    }
  }
}
function topSortHelper(v, visited, stack) {
  visited[v] = true;
  console.log()
  this.adj[v].map((w) => {
    if (!visited[w]) {
      this.topSortHelper(visited[w], visited, stack);
    }
  })
  stack.push(v);
}
var g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(0, 1);
// g.showGraph()
console.log(g)
// console.log('dfs:')
// g.dfs(0);
// console.log('bfs:')
// g.bfs(0);
// var paths = g.pathTo(4)
// console.log(paths)
// while (paths.length > 0) {
//   if (paths.length > 1) {
//     console.log(paths.pop() + '-')
//   } else {
//     console.log(paths.pop());
//   }
// }
g.vertexList = ["CS1", "CS2", "Data Structures",
"Assembly Language", "Operating Systems",
"Algorithms"];
// g.showGraph();
g.topSort();
