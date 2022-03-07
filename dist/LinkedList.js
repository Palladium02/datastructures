"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.LinkedNode = void 0;
class LinkedNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
exports.LinkedNode = LinkedNode;
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    setHead(value) {
        this.head = new LinkedNode(value, this.head);
        this.size++;
        return;
    }
    insert(value) {
        let node = new LinkedNode(value);
        let current;
        if (!this.head) {
            this.head = node;
            this.size++;
            return;
        }
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        this.size++;
        return;
    }
    insertAt(value, index) {
        if (index > 0 && index > this.size)
            return;
        if (index === 0) {
            this.setHead(value);
            return;
        }
        let node = new LinkedNode(value);
        let current, previous;
        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }
        node.next = current;
        previous.next = node;
        this.size++;
        return;
    }
    getAt(index) {
        if (index > this.size)
            return undefined;
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) {
                return current.value;
            }
            count++;
            current = current.next;
        }
        return undefined;
    }
    deleteAt(index) {
        if (index < 0 || index > this.size)
            return;
        let current = this.head;
        let previous;
        let count = 0;
        if (index === 0) {
            this.head = current.next;
        }
        else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }
}
exports.LinkedList = LinkedList;
