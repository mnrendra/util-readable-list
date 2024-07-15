import main from './main'

describe('Test `main` feature:', () => {
  it('Should return empty string when an empty array!', () => {
    const received = main([])
    const expected = ''

    expect(received).toBe(expected)
  })

  it('Should return an item when given only one item!', () => {
    const received = main(['a'])
    const expected = 'a'

    expect(received).toBe(expected)
  })

  it('Should return an item with the quotes when given only one item with the quotes option!', () => {
    const received = main(['a'], { quote: '"' })
    const expected = '"a"'

    expect(received).toBe(expected)
  })

  it('Should return two items with the conj when given two items with the conj option!', () => {
    const received = main(['a', 'b'], { conj: 'or' })
    const expected = 'a or b'

    expect(received).toBe(expected)
  })

  it('Should return three items with the conj when given three items with the conj option!', () => {
    const received = main(['a', 'b', 'c'], { conj: 'and' })
    const expected = 'a, b, and c'

    expect(received).toBe(expected)
  })

  it('Should return three items using the conj and modified separator when given three items with conj and comma options!', () => {
    const received = main(['a', 'b', 'c'], { conj: 'and', comma: ';' })
    const expected = 'a; b; and c'

    expect(received).toBe(expected)
  })

  it('Should return two items with the conj and quotes when given two items with the conj and quotes option!', () => {
    const received = main(['a', 'b'], { conj: 'or', quote: '`' })
    const expected = '`a` or `b`'

    expect(received).toBe(expected)
  })

  it('Should return three items with the conj and quotes when given three items with the conj and quites option!', () => {
    const received = main(['a', 'b', 'c'], { conj: 'and', quote: '"' })
    const expected = '"a", "b", and "c"'

    expect(received).toBe(expected)
  })

  it('Should return three items with the conj, quotes, and modified separator when given three items with the conjm quotes, and modified separator option!', () => {
    const received = main(['a', 'b', 'c'], { conj: 'and', quote: '"', comma: ';' })
    const expected = '"a"; "b"; and "c"'

    expect(received).toBe(expected)
  })
})
