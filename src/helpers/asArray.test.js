import asArray from './asArray'

describe('asArray', () => {
  it('should return empty list when parameter is falsy', () => {
    expect(asArray()).toEqual([])
    expect(asArray(false)).toEqual([])
    expect(asArray(null)).toEqual([])
  })

  it('generates list from keys of given object', () => {
    expect(asArray({
      useMe: 1,
      useMeToo: 2,
    })).toEqual([
      {
        id: 'useMe',
      },
      {
        id: 'useMeToo',
      }
    ])
  })

  it('copies children object to list of objects', () => {
    expect(asArray({
      first: {
        firstsAttribute: 1,
      },
      second: {
        secondsAttribute: 2,
        secondsSecondAttribute: 3,
      }
    })).toEqual([
      {
        id: 'first',
        firstsAttribute: 1,
      },
      {
        id: 'second',
        secondsAttribute: 2,
        secondsSecondAttribute: 3,
      },
    ])

  })
})
