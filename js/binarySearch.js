function binarySearch(array, x) {
    array.sort(function (a, b) { return a - b });
    let left = 0
    let right = array.length - 1
    // console.log(left)
    // console.log(right)
    let mid
    while (right >= left) {
        mid = left + Math.floor((right - left) / 2);
        // mid = (left + right) / 2
        if (array[mid] == x) {
            return mid
        }
        if (array[mid] > x) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}
// console.log(binarySearch([1, 2, 3, 4, 5], 0))
module.exports = binarySearch 