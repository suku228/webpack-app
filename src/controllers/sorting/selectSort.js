const selectArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const swapSelect = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
const onSelectSortTriggered = () => {
  for (let i = 0; i < selectArr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < selectArr.length; j++) {
      if (selectArr[j] < selectArr[min]) {
        min = j;
      }
    }
    console.log(i, selectArr[min])
    if (i != min) {
      swapSelect(selectArr, i, min);
    }
  }

  loadSelectData(document.getElementById("select-list"));
};

const loadSelectData = (targetList) => {
  selectArr.forEach((number) => {
    const item = document.createElement("span");
    item.innerText = `${number}, `;
    targetList.appendChild(item);
  });
};
document.addEventListener("DOMContentLoaded", () => {
  loadSelectData(document.getElementById("select-list-unsorted"));
});
