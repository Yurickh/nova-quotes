export default function asArray(obj) {
  if (!obj) return []

  return Object.keys(obj).map(key => ({
    ...obj[key],
    id: key,
  }))
}
