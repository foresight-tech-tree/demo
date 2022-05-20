import node1_1 from './compound1_1/node1_1.js';
import node1_2 from './compound1_1/node1_2.js';

const compound1_1 = {
    "data": {
        "id": "compound1_1",
        "parent": "compound1",
        "description": "Node belonging in compound1",
        "history": [
            "1970 - The beginning of time",
            "2022 - Present day"
        ],
        "companies": [
            {
                "name": "Company 1_1",
                "url": "https://example.com"
            },
            {
                "name": "Company 1_1a",
                "url": "https://example.com"
            }
        ],
        "labs": [
            {
                "name": "Lab 1_1",
                "url": "https://example.com"
            },
            {
                "name": "Lab 1_1a",
                "url": "https://example.com"
            }
        ],       
        "people": [
            {
                "name": "Person 1_1",
                "url": "https://example.com"
            },
            {
                "name": "Person 1_1a",
                "url": "https://example.com"
            }
        ],     
        "involvement": [
            {
                "name": "Meetup 1_1",
                "url": "https://example.com"
            },
            {
                "name": "Meetup 1_1a",
                "url": "https://example.com"
            }
        ],
        "resources": [
            {
                "name": "Resource 1_1",
                "url": "https://example.com"
            },
            {
                "name": "Resource 1_1a",
                "url": "https://example.com"
            }
        ],  
    }
};

const edge_1_1 = {
    "data": {
        "source": compound1_1.data.id,
        "target": "node1",
        "id": "edge_1_1",
        "description": "from compound1_1 to node1"
    }
};

export default [
    compound1_1,
    edge_1_1
].concat(node1_1)
.concat(node1_2)
.flat();









