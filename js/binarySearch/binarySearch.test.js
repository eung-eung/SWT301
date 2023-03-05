const binarySearch = require('./binarySearch')



test.each([
    [[1, 2, 3, 4, 5, 6], 3, 2],
    [[1, 2, 3, 4, 5, 6], 2, 1]

])('%j find %i position %i', (arr, x, expected) => {
    expect(binarySearch(arr, x)).toBe(expected)
})
