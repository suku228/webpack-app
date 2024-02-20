const sortedArray = [11, 12, 13, 14, 15, 16, 17, 18, 110, 111];

const getElementIndex = (arr, size, find) => {
  let l = 0;
  let r = size;

  while (l < r) {
    let mid = Math.floor(l + r / 2);
    console.log(l, r, mid);
    if (arr[mid] === find) {
      return mid;
    } else if (find < arr[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};

const onBinarySearchTriggered = () => {
  const targetElement = document.createElement("span");
  targetElement.innerText = `${getElementIndex(
    sortedArray,
    sortedArray.length - 1,
    111
  )}`;
  document.getElementById("binary-search-result").appendChild(targetElement);
};

const onLoadBinary = () => {
  sortedArray.forEach((number) => {
    const element = document.createElement("span");
    element.innerText = `${number}, `;
    document.getElementById("binary-list-sorted").appendChild(element);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  onLoadBinary();
});
