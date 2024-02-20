const array = [7, 6, 10, 5, 9, 2, 1, 15, 7];

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
const partition = (arr, lower, upper) => {
  const pivot = arr[lower];
  let lb = lower;
  let ub = upper;

  while (lb < ub) {
    while (arr[lb] <= pivot) {
      console.log(arr[lb], pivot);
      lb++;
    }
    console.log("lb--------", lb, arr[lb], pivot);
    while (arr[ub] > pivot) {
      console.log(arr[lb], pivot);

      ub--;
    }
    console.log("ub-------",ub, arr[ub], pivot);
    if (lb < ub) {
      swap(arr, lb, ub);
    }
  }
  swap(arr, lower, ub);
  return ub;
};

const quickSort = (arr, lb, ub) => {
  console.log(lb, ub);
  if (lb < ub) {
    console.log('triggered',lb, ub);
    const pos = partition(arr, lb, ub);
    console.log("position", pos, arr, lb, ub);
    quickSort(arr, lb, pos - 1);
    quickSort(arr, pos + 1, ub);
  }
};

const onQuickSortTriggered = () => {
  quickSort(array, 0, array.length - 1);
  const quickSortList = document.getElementById("quick-list");
  array.forEach((number) => {
    const element = document.createElement("span");
    element.innerText = `${number} , `;
    quickSortList.appendChild(element);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const quickSort = document.getElementById("quick-list-unsorted");
  array.forEach((number) => {
    const element = document.createElement("span");
    element.innerText = `${number} , `;
    quickSort.appendChild(element);
  });
});
