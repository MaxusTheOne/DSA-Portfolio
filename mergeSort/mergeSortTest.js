window.addEventListener("load", init)
import mergeSort from "./mergeSort.js"
function init(){
    const list = [5, 8, 2, 1, 10, 4, 3, 9, 7, 6];
    const sort = mergeSort(list)
    console.log(sort);
    
}