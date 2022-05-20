const node1 = {
    "data": {
        "id": "node1",
        "parent": "compound1",
        "description": "Node belonging in compound1",
        "history": [
            "1970 - The beginning of time",
            "2022 - Present day"
        ],
        "companies": [
            {
                "name": "Company 1",
                "url": "https://example.com"
            },
            {
                "name": "Company 1a",
                "url": "https://example.com"
            }
        ],
        "labs": [
            {
                "name": "Lab 1",
                "url": "https://example.com"
            },
            {
                "name": "Lab 1a",
                "url": "https://example.com"
            }
        ],       
        "people": [
            {
                "name": "Person 1",
                "url": "https://example.com"
            },
            {
                "name": "Person 1a",
                "url": "https://example.com"
            }
        ],     
        "involvement": [
            {
                "name": "Meetup 1",
                "url": "https://example.com"
            },
            {
                "name": "Meetup 1a",
                "url": "https://example.com"
            }
        ],
        "resources": [
            {
                "name": "Resource 1",
                "url": "https://example.com"
            },
            {
                "name": "Resource 1a",
                "url": "https://example.com"
            }
        ],  
    }
};

const edge_1_compound = {
    "data": {
        "source": node1.data.id,
        "target": "compound1_1",
        "id": "edge_1_compound",
        "description": "from node1 to compound1_1"
    }
};

export default [
    node1,
    edge_1_compound
];