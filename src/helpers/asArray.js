export default function asArray(obj) {
  return Object.keys(obj).map(key => ({
    ...obj[key],
    id: key,
  }))
}
