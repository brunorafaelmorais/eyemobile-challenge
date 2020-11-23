export default function calculateTotal(arrayOfObjects = [], property) {
  return arrayOfObjects.reduce((acc, curr) => acc + curr[property], 0)
}
