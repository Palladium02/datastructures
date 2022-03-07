"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashMap = void 0;
const LinkedList_1 = require("./LinkedList");
class HashMap {
    constructor(size = 256) {
        this._entries = new Array(size);
        this._size = size;
    }
    add(key, value) {
        let index = this._createHash(key);
        if (!this._entries[index]) {
            this._entries[index] = new LinkedList_1.LinkedList();
            this._entries[index].insert([key, value]);
            return this;
        }
        let current = this._entries[index].head;
        for (let i = 0; i < this._entries[index].size; i++) {
            if (current.value[0] === key) {
                current.value[1] = value;
                return this;
            }
            current = current.next;
        }
        this._entries[index].insert([key, value]);
        return this;
    }
    get(key) {
        let index = this._createHash(key);
        if (!this._entries[index])
            return undefined;
        let current = this._entries[index].head;
        for (let i = 0; i < this._entries[index].size; i++) {
            if (current.value[0] === key)
                return current.value[1];
            current = current.next;
        }
        return undefined;
    }
    remove(key) {
        let index = this._createHash(key);
        if (!this._entries[index])
            return this;
        let current = this._entries[index].head;
        for (let i = 0; i < this._entries[index].size; i++) {
            if (current.value[0] === key) {
                this._entries[index].deleteAt(i);
                return this;
            }
            current = current.next;
        }
        return this;
    }
    _createHash(key) {
        let characters = ((typeof key === 'string') ? key : JSON.stringify(key)).split("");
        let sum = 0;
        for (let i = 0; i < characters.length; i++) {
            sum += characters[i].charCodeAt(0);
        }
        return sum % this._size;
    }
}
exports.HashMap = HashMap;
