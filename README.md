# concat-all
Convert a multidimensional array into a one dimensional array

# Example
```javascript
var concatAll = require('concat-all');

var onedem = concatAll(
  [
    1, 2, 3,
    [
      4, 5,
      [
        6
      ],
      7, 8
    ],
    9, 10
  ]
);

console.log(onedem);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

# License
MIT
