const { queryString, parse } = require('./querString')

describe('Object to query string', () => {
  it(' should be create a valid query string when an object is a provided ', () => {
    const obj = {
      name: 'Fabio',
      profession: 'developer',
      status: 'enabled',
    }
    expect(queryString(obj)).toBe(
      'name=Fabio&profession=developer&status=enabled',
    )
  })
  it('should create a valid query string even when a array is passed as value', () => {
    const obj = {
      name: 'Fabio',
      profession: 'developer',
      abilities: ['JS', 'GO', 'TDD'],
    }
    expect(queryString(obj)).toBe(
      'name=Fabio&profession=developer&abilities=JS,GO,TDD',
    )
  })
  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Fabio',
      profession: 'developer',
      abilities: {
        first: 'JS ',
        second: 'TDD',
      },
    }
    expect(() => {
      queryString(obj)
    }).toThrowError()
  })
})

describe('Query String to parse', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Fabio&profession=developer&status=enabled'

    expect(parse(qs)).toEqual({
      name: 'Fabio',
      profession: 'developer',
      status: 'enabled',
    })
  })
})

describe('Query String to parse', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Fabio&profession=developer&status=enabled'

    expect(parse(qs)).toEqual({
      name: 'Fabio',
      profession: 'developer',
      status: 'enabled',
    })
  })

  it('should convert a query string of a single key-value', () => {
    const qs = 'name=Fabio'

    expect(parse(qs)).toEqual({
      name: 'Fabio',
    })
  })

  it('should convert  a query string to an object taking care of comma separeted', () => {
    const obj = {
      name: 'Fabio',
      profession: 'developer',
      abilities: ['JS', 'GO', 'TDD'],
    }

    const qs = 'name=Fabio&profession=developer&abilities=JS,GO,TDD'

    expect(parse(qs)).toEqual(obj)
  })
})
