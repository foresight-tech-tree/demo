import node4 from "./nodes/node4.js";
import compound1 from "./nodes/compound1.js";
import compound2 from "./nodes/compound2.js";

function makeList(strings) {
    return strings.reduce((result, str) => result + "• " + str + "<br/>", "");
}

function parseLink(obj) {
    return "<a target=_blank href=" + obj.url + ">" + obj.name + "</a>"
}

function parseNode(node) {
    if (!node.data) {
        console.log(node)
    }
    if (node.data.history) {
        return {
            "data": {
                "id": node.data.id,
                "parent": node.data.parent,
                "description": node.data.description,
                "history": makeList(node.data.history),
                "companies": makeList(node.data.companies.map(parseLink)),
                "labs": makeList(node.data.labs.map(parseLink)),
                "people": makeList(node.data.people.map(parseLink)),
                "involvement": makeList(node.data.involvement.map(parseLink)),
                "resources": makeList(node.data.resources.map(parseLink)),
            },
            "group": "nodes"
        };
    } else {
        return node;
    }
}


export default node4
    .concat(compound1)
    .concat(compound2)
    .flat()
    .map(parseNode);