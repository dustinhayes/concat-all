'use strict';

var test = require('tape');
var concatAll = require('../src/');

test('Should concat into one dimensional array', function (t) {
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
  var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  t.plan(1);
  t.deepEqual(onedem, expected);
});
