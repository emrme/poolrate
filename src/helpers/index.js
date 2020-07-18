export const findKeyByValuesInMap = (map, query) => {
  let keys = [],
    values = [],
    result

  for (let key of Object.keys(query)) {
    keys.push(key)
  }
  for (let value of Object.values(query)) {
    values.push(value)
  }

  for (let entry of map) {
    const key = entry[0]

    const value = entry[1]

    for (let i = 0; i < keys.length; i++) {
      if (value[keys[i]] !== values[i]) return
    }
    result = key
  }
  return result
}

export const findKeyByValueInMap = (map, query) => {
  let keys = [],
    values = [],
    result

  for (let key of Object.keys(query)) {
    keys.push(key)
  }
  for (let value of Object.values(query)) {
    values.push(value)
  }

  for (let entry of map) {
    const key = entry[0]

    const value = entry[1]

    for (let i = 0; i < keys.length; i++) {
      if (value[keys[i]] === values[i]) result = key
    }
  }
  return result
}
