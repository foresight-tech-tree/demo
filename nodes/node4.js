const node4 = {
    "data": {
        "id": "node4",
        "description": "Node 4",
        "history": [
            "1970 - The beginning of time",
            "2022 - Present day"
        ],
        "companies": [
            {
                "name": "Company 4",
                "url": "https://example.com"
            },
            {
                "name": "Company 4a",
                "url": "https://example.com"
            }
        ],
        "labs": [
            {
                "name": "Lab 4",
                "url": "https://example.com"
            },
            {
                "name": "Lab 4a",
                "url": "https://example.com"
            }
        ],       
        "people": [
            {
                "name": "Person 4",
                "url": "https://example.com"
            },
            {
                "name": "Person 4a",
                "url": "https://example.com"
            }
        ],     
        "involvement": [
            {
                "name": "Meetup 4",
                "url": "https://example.com"
            },
            {
                "name": "Meetup 4a",
                "url": "https://example.com"
            }
        ],
        "resources": [
            {
                "name": "Resource 4",
                "url": "https://example.com"
            },
            {
                "name": "Resource 4a",
                "url": "https://example.com"
            }
        ],  
    }
};

const edge_4_1 = {
    "data": {
        "source": node4.data.id,
        "target": "compound1",
        "id": "edge_4_1",
        "description": "from node4 to compound1"
    }
};

const edge_4_2 = {
    "data": {
        "source": node4.data.id,
        "target": "compound2",
        "id": "edge_4_2",
        "description": "from node4 to compound2"
    }
};

export default [
    node4,
    edge_4_1,
    edge_4_2
];