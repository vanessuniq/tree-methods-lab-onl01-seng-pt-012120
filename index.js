function inOrder(node) {
    if (node) {
        inOrder(node.left);
        console.log(node.data);
        inOrder(node.right);
    }
};

function findOrAdd(rootNode, newNode) {
    let currentNode = rootNode;
    if (currentNode.data < newNode.data) {
        return currentNode.right ? findOrAdd(currentNode.right, newNode) : currentNode.right = newNode;
    } else if (currentNode.data > newNode.data) {
        return currentNode.left ? findOrAdd(currentNode.left, newNode) : currentNode.left = newNode;
    } else {
        return true;
    };
};

function max(rootNode) {
    let maxNode = rootNode;
    while (maxNode.right) {
        maxNode = maxNode.right;
    };
    return maxNode;
};

function min(rootNode) {
    let minNode = rootNode;
    while (minNode.left) {
        minNode = minNode.left;
    };
    return minNode;
};