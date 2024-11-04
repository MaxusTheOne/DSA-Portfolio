export default function insertionSortShift(arr) {
    let i = 0
    let iterations = 0
    while (i < arr.length - 1){
        iterations++
        if (arr[i] > arr[i +1]){
            swap(i, i +1)
            i--
        } else i++
    }
    return [arr, iterations]
    function swap(i, j){
        const value = arr[i]
        arr[i] = arr[j]
        arr[j] = value
    }
}