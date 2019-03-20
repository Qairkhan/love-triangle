/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let result = 0;
  const arr = [];
  for(let i=0; i < preferences.length; i++)
  {
    const personX = preferences[i];
    const personY = preferences[personX - 1];
    const personZ = preferences[personY - 1];
    if (personZ - 1 === i && !arr.includes(personX) && personX !=personZ) {
      result++;
      arr.push(personX, personY, personZ);
    }
  }
  return result;
};
