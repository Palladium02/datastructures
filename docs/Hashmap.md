# Hashmap

## Instantiate
```ts
import { HashMap } from "datastructures";

let hm = new HashMap<any>();
```
<br/>

## HashMap.add(key, value)

### Since
0.9.0b

### Arguments
<span style="color: #60a9ff;">**key (any)**</span>: The key to insert at
<span style="color: #60a9ff;">**value (T)**</span>: The value to insert at given key

### Returns
<span style="color: #60a9ff;">**(HashMap)**</span>: The object itself

### Example
```ts
hm.add("key", "some value");
```

<br/>

## HashMap.get(key)

### Since
0.9.0b

### Arguments
<span style="color: #60a9ff;">**key (any)**</span>: The key to insert at

### Returns
<span style="color: #60a9ff;">**(T)**</span>: The value at given key

### Example
```ts
hm.get("key");
```

## HashMap.delete(key)

### Since
0.9.0b

### Arguments
<span style="color: #60a9ff;">**key (any)**</span>: The key to delete

### Returns
<span style="color: #60a9ff;">**(HashMap)**</span>: The object itself

### Example
```ts
hm.delete("key");
```