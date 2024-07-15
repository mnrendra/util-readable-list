# @mnrendra/util-readable-list
A utility to convert an array into readable text.

## Install
```bash
npm i @mnrendra/util-readable-list
```

## Usage
```javascript
import { readableList } from '@mnrendra/util-readable-list'

console.log(readableList(['a'])) // Will print: a
console.log(readableList(['a'], { quote: '"' })) // Will print: "a"
console.log(readableList(['a', 'b'])) // Will print: a and b
console.log(readableList(['a', 'b'], { conj: 'or' })) // Will print: a or b
console.log(readableList(['a', 'b'], { quote: '`' })) // Will print: `a` and `b`
console.log(readableList(['a', 'b'], { quote: '\'', conj: 'or' })) // Will print: 'a' or 'b'
console.log(readableList(['a', 'b', 'c'], { quote: '"', conj: 'or' })) // Will print: "a", "b", or "c"
console.log(readableList(['a', 'b', 'c'], { quote: '"', conj: 'or', comma: ';' })) // Will print: "a"; "b"; or "c"
console.log(readableList(['a', 'b', 'c']. { comma: ';' })) // Will print: a; b; and c
```

## Types
```typescript
import type {
  Options
} from '@mnrendra/util-readable-list'
```

## License
[MIT](https://github.com/mnrendra/util-readable-list/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
