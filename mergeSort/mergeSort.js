export default function mergeSort(arr){
    if (arr.length == 1) return arr


        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        const leftSort = mergeSort(left);
        const rightSort = mergeSort(right)

        return merge(leftSort, rightSort)

    }

    function merge(leftArr, rightArr){
        let arr = []
        while (leftArr.length != 0 && 0 != rightArr.length){
            if (leftArr[0] < rightArr[0]){
                arr.push(leftArr.shift())
            } else arr.push(rightArr.shift())
        }
        return arr.concat(leftArr).concat(rightArr)
    }
