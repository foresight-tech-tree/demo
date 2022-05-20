import compound1_1 from "./compound1/compound1_1.js";
import node1 from "./compound1/node1.js";

const compound1 = {
    "data": {
        "id": "compound1",
        "description": "Compound node 1",
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

export default [
    compound1,
].concat(compound1_1)
.concat(node1)
.flat();



