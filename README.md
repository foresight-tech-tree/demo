# foresight-tech-tree

This is a template for [Foresight Institute's Tech Tree Project](https://foresight.org/tech-tree/).

The example tree in this demo is hosted at this [Github page](https://foresight-tech-tree.github.io/demo/).

## Node
Each node can be defined in a `.js` file as an object with the following fields:

```js
const myNode = {
    "data": {
        "id": "",              // The unique identifier for this node.
        "parent": "",          // Delete if this node does not belong to a compound node.
        "description": "Description of this node",
        "history": [           // Comma-separated list of strings.
            "1970 - The beginning of time",
            "2022 - Present day"
        ],
        "companies": [         // Comma-separated list of objects.
            {
                "name": "Example",
                "url": "https://example.com"
            },
            {
                "name": "Example",
                "url": "https://example.com"
            }
        ],
        "labs": [],           // Comma-separated list of objects.
        "people": [],         // Comma-separated list of objects.
        "involvement": [],    // Comma-separated list of objects.
        "resources": [],      // Comma-separated list of objects.
    }
};
```

The `parent` field specifies the `id` of the **compound node** this node belongs to. If this node does not belong to a compound node, delete the `parent` field.

The fields below `parent` are optional, and are displayed as metadata on double-clicking the node. You can define your own fields here; however, make sure to update the corresponding rendering in `script.js`.

## Edge
Each edge can be defined in a `.js` file as an object with the following fields:

```js
const myEdge = {
    "data": {
        "source": "",        // The `id` of the source node. 
        "target": "",        // The `id` of the target node.
        "id": ""             // The unique identifier for this edge.
        "description": ""    // Description of this edge, displays when clicked
    }
};
```

## File structure guidelines
Each file represents a single node, e.g. `nodeA.js`, `nodeB.js`.

Each node file contain a single node, and the edges with that node as their source.

`myNode.js`
```js
const myNode = {
    "data": {
        ...
    }
};

const myEdge1 = {
    "data": {
        "source": myNode.data.id,
        ...
    }
};

const myEdge2 = {
    "data": {
        "source": myNode.data.id,
        ...
    }
};
```

At the end of the file, export a list containing the node and all its edges:
```js
export default [
    myNode,
    myEdge1,
    myEdge2
]
```

A compound node is represented by both its own file, as well as a folder containing the files of its sub-nodes. e.g.

```
nodeCompound.js
nodeCompound
    |
    ------- myNode.js
    |
    ------- myNode2.js
```

In a compound node file, subnodes must be imported and re-exported:
`myCompoundNode.js`
```js
import myNode from './compoundNode/myNode.js'
import myNode2 from './compoundNode/myNode2.js'

const myCompoundNode = {
    "data": {
        ...
    }
};

const myEdge1 = {
    "data": {
        "source": myCompoundNode.data.id,
        ...
    }
};

export default [
    myCompoundNode,
    myEdge1,
    myNode,
    myNode2
]

```

A compound node may contain other compound nodes, e.g.

```
myCompoundNode.js
myCompoundNode
    |
    ------- nodeA.js
    |
    ------- nodeB.js
    |
    ------- myCompoundNode2.js
    |
    ------- myCompoundNode2
                   |
                   ------------ nodeC.js
```

In the top-level directory, our `nodes.js` file imports all the top-level compound nodes, flattens them, and re-exports them.
