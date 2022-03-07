"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = exports.BinarySearchTreeNode = void 0;
class BinarySearchTreeNode {
    constructor(data) {
        this.data = data;
    }
}
exports.BinarySearchTreeNode = BinarySearchTreeNode;
class BinarySearchTree {
    constructor(comparator) {
        this.comparator = comparator;
    }
    insert(data) {
        if (!this.root) {
            this.root = new BinarySearchTreeNode(data);
            return this.root;
        }
        let current = this.root;
        while (true) {
            if (this.comparator(data, current.data) === 1) {
                if (current.rightNode) {
                    current = current.rightNode;
                }
                else {
                    current.rightNode = new BinarySearchTreeNode(data);
                    return current.rightNode;
                }
            }
            else {
                if (current.leftNode) {
                    current = current.leftNode;
                }
                else {
                    current.leftNode = new BinarySearchTreeNode(data);
                    return current.leftNode;
                }
            }
        }
    }
    search(data) {
        if (!this.root)
            return undefined;
        let current = this.root;
        while (this.comparator(data, current.data) !== 0) {
            if (this.comparator(data, current.data) === 1) {
                if (!current.rightNode)
                    return;
                current = current.rightNode;
            }
            else {
                if (!current.leftNode)
                    return;
                current = current.leftNode;
            }
        }
        return current;
    }
    inOrderTraversal(node, values) {
        if (node) {
            this.inOrderTraversal(node.leftNode, values);
            console.log(node.data);
            if (values)
                values.push(node.data);
            this.inOrderTraversal(node.rightNode, values);
        }
    }
    preOrderTraversal(node) {
        if (node) {
            console.log(node.data);
            this.preOrderTraversal(node.leftNode);
            this.preOrderTraversal(node.rightNode);
        }
    }
    postOrderTraversal(node) {
        if (node) {
            this.postOrderTraversal(node.leftNode);
            this.postOrderTraversal(node.rightNode);
            console.log(node.data);
        }
    }
}
exports.BinarySearchTree = BinarySearchTree;
