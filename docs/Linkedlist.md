# Linkedlist

## Instantiate
```ts
import { LinkedList } from "datastructures";

let ll = new LinkedList<number>();
```
<br/>

## LinkedList.insert(value)

### Since
0.9.0b

### Arguments
<span style="color: #60a9ff;">**value (T)**</span>: The value to insert

### Returns
<span style="color: #60a9ff;">**(LinkedList)**</span>: The object itself

### Example
```ts
ll.insert(12);
```

<br/>

## LinkedList.insertAt(value, index)

### Since
0.9.0b

### Arguments
<span style="color: #60a9ff;">**value (T)**</span>: The value to insert
<span style="color: #60a9ff;">**index (number)**</span>: The index to insert at

### Returns
<span style="color: #60a9ff;">**(LinkedList)**</span>: The object itself

### Example
```ts
ll.insertAt(23, 1);
```

<br/>

## LinkedList.setHead(value)

### Since
0.9.0b

### Arguments
<span style="color: #60a9ff;">**value (T)**</span>: The value to insert

### Returns
<span style="color: #60a9ff;">**(LinkedList)**</span>: The object itself

### Example
```ts
ll.setHead(12);
```

<br/>

## LinkedList.getAt(index)

### Since
0.9.0b

### Arguments
<span style="color: #60a9ff;">**index (number)**</span>: The index to retrieve from

### Returns
<span style="color: #60a9ff;">**(T)**</span>: The the value at the given index

### Example
```ts
ll.getAt(1);
```

<br/>

## LinkedList.deleteAt(index)

## Since
0.9.0b

## Arguments
<span style="color: #60a9ff;">**index (number)**</span>: The index at which to delete

## Returns
<span style="color: #60a9ff;">**(LinkedList)**</span>: The object itself

## Example
```ts
ll.deleteAt(1);
```
