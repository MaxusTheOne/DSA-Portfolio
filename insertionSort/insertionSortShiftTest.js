import insertionSortShift from "./insertionSortShift.js";
import insertionSortSwap from "./insertionSortSwap.js";

window.addEventListener('load', init());

function init() {
  const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
  const shiftSort = insertionSortShift([...list])
  const swapSort = insertionSortSwap([...list])
  console.log("shift", shiftSort);
  console.log("swap", swapSort);
  
}