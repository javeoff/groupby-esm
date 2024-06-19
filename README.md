# groupby-esm

Utility to group array of objects by key.

To install package:

```bash
npm install groupby-esm
```

Usage

```javascript
import groupBy from 'groupby-esm';

const items = [
  { id: 1, name: 'John' },
  { id: 1, name: 'Kevin' },
  { id: 2, name: 'Jane' },
  { id: 2, name: 'Alex' },
]

groupBy(
  items,
  (item) => item.id
)

//  Result
// { 1: [{ id: 1, name: 'John' }, { id: 1, name: 'Kevin' }], 2: [{ id: 2, name: 'Jane' }, { id: 2, name: 'Alex' }] }
```

## Docs

- `arr` - list of objects to group
- `callback` - argument is one object of array, returns is a value to check equality

## Deploy

To install dependencies:

```bash
npm install
```

To build:

```bash
npm build
```

This project was created using `bun init` in bun v1.1.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
