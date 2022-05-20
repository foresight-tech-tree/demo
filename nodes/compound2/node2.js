const node2 = {
    "data": {
        "id": "node2",
        "parent": "compound2",
        "description": "Node belonging in compound2",
        "history": [
            "1970 - The beginning of time",
            "2022 - Present day"
        ],
        "companies": [
            {
                "name": "Company 2",
                "url": "https://example.com"
            },
            {
                "name": "Company 2a",
                "url": "https://example.com"
            }
        ],
        "labs": [
            {
                "name": "Lab 2",
                "url": "https://example.com"
            },
            {
                "name": "Lab 2a",
                "url": "https://example.com"
            }
        ],       
        "people": [
            {
                "name": "Person 2",
                "url": "https://example.com"
            },
            {
                "name": "Person 2a",
                "url": "https://example.com"
            }
        ],     
        "involvement": [
            {
                "name": "Meetup 2",
                "url": "https://example.com"
            },
            {
                "name": "Meetup 2a",
                "url": "https://example.com"
            }
        ],
        "resources": [
            {
                "name": "Resource 2",
                "url": "https://example.com"
            },
            {
                "name": "Resource 2a",
                "url": "https://example.com"
            }
        ],  
    }
};

const edge_2_2 = {
    "data": {
        "source": node2.data.id,
        "target": "node1_2",
        "id": "edge_2_2",
        "description": "from node2 to node1_2"
    }
};

export default [
    node2,
    edge_2_2
];