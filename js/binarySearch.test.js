const binarySearch = require('./binarySearch')
test('properly index in binary search', () => {
    let array = [1, 2, 3, 4, 5, 6]
    expect(binarySearch(array, 1)).toBe(0)
})