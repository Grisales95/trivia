function desorderPositionArray(array) {
  const random = array.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  return random;
}

module.exports = { desorderPositionArray };
