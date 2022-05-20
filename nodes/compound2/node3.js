const node3 = {
    "data": {
        "id": "node3",
        "parent": "compound2",
        "description": "Node belonging in compound2",
        "history": [
            "1970 - The beginning of time",
            "2022 - Present day"
        ],
        "companies": [
            {
                "name": "Company 3",
                "url": "https://example.com"
            },
            {
                "name": "Company 3a",
                "url": "https://example.com"
            }
        ],
        "labs": [
            {
                "name": "Lab 3",
                "url": "https://example.com"
            },
            {
                "name": "Lab 3a",
                "url": "https://example.com"
            }
        ],       
        "people": [
            {
                "name": "Person 3",
                "url": "https://example.com"
            },
            {
                "name": "Person 3a",
                "url": "https://example.com"
            }
        ],     
        "involvement": [
            {
                "name": "Meetup 3",
                "url": "https://example.com"
            },
            {
                "name": "Meetup 3a",
                "url": "https://example.com"
            }
        ],
        "resources": [
            {
                "name": "Resource 3",
                "url": "https://example.com"
            },
            {
                "name": "Resource 3a",
                "url": "https://example.com"
            }
        ],  
    }
};

const edge_3_2 = {
    "data": {
        "source": node3.data.id,
        "target": "node2",
        "id": "edge_3_2",
        "description": "from node3 to node2"
    }
};

export default [
    node3,
    edge_3_2
];