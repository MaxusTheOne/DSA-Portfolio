export default function insertionSortSwap(arr) {
    let iterations = 0;
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            swap(j, j - 1);
            j--;
            iterations++;
        }
        iterations++
    }
    return [arr, iterations];

    function swap(i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
