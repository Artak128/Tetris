class Lodash {
  compact(array) {
    return array.filter((i) => !!i);
  }

  groupBy(array, prop) {
    return array.reduce((prev, curr) => {
      const key = typeof prop === "function" ? prop(curr) : curr[prop];
      if (!prev[key]) {
        prev[key] = [];
      }
      prev[key].push(curr);
      return prev;
    }, {});
  }
}

module.exports = Lodash;

//1:00:00
