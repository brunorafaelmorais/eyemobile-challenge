export default function filterByType(type) {
  return dataArray =>
    dataArray.filter(data => String(data.type).toLocaleLowerCase() === type)
}
