
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let itog = [];
  for (let i = 0; i < matrix.length; i++)
  {
    if (i % 2 == 0) {
      itog.push(matrix[i])
    } else {
      itog.push(matrix[i].reverse())
    }
  } return itog.flat();
}
