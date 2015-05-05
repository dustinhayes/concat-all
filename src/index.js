'use strict';

module.exports = function concatAll(subj) {
  return subj.reduce(function (base, curr) {
    if (Array.isArray(curr)) {
      return base.concat(concatAll(curr));
    } else {
      return (base.push(curr), base);
    }
  }, []);
};
