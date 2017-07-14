function findIdenticalNode(dom1, dom2, elem) {
    "use strict";
    var d1 = dom1 && dom1.constructor === HTMLDocument ? dom1 : null,
        d2 = dom2 && dom2.constructor === HTMLDocument ? dom2 : null,
        node = elem && elem.constructor === HTMLElement ? elem : null,
        path = [],
        targetNode = d2 && d2.documentElement,
        parent, nodeIndex, children;

    if (!d1 || !d2 || !node) {
        return;
    } 
    
    while (node.parentElement !== null) {
        parent = node.parentElement;
        children = Array.prototype.slice.call(parent.childNodes);
        nodeIndex = children.indexOf(node);
        path.push(nodeIndex);
        node = node.parentElement;
    }

    while (path.length) {
        children = targetNode.childNodes;
        targetNode = children[path.pop()];
    }

    return targetNode;
}