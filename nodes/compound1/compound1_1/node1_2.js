const node1_2 = {
    "data": {
        "id": "node1_2",
        "parent": "compound1_1",
        "description": "Node belonging in compound1_1",
        "history": [
            "1970 - The beginning of time",
            "2022 - Present day"
        ],
        "companies": [
            {
                "name": "Company 1_2",
                "url": "https://example.com"
            },
            {
                "name": "Company 1_2a",
                "url": "https://example.com"
            }
        ],
        "labs": [
            {
                "name": "Lab 1_2",
                "url": "https://example.com"
            },
            {
                "name": "Lab 1_2a",
                "url": "https://example.com"
            }
        ],       
        "people": [
            {
                "name": "Person 1_2",
                "url": "https://example.com"
            },
            {
                "name": "Person 1_2a",
                "url": "https://example.com"
            }
        ],     
        "involvement": [
            {
                "name": "Meetup 1_2",
                "url": "https://example.com"
            },
            {
                "name": "Meetup 1_2a",
                "url": "https://example.com"
            }
        ],
        "resources": [
            {
                "name": "Resource 1_2",
                "url": "https://example.com"
            },
            {
                "name": "Resource 1_2a",
                "url": "https://example.com"
            }
        ],  
    }
};

const edge1_2 = {
    "data": {
        "source": node1_2.data.id,
        "target": "node1_1",
        "id": "edge1_2",
        "description": "from 1_2 to 1_1"
    }
};

export default [
    node1_2,
    edge1_2
];