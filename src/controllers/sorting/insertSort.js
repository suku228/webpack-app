const insertArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const onInsertSortTriggered = () => {
  for (let i = 1; i < insertArr.length; i++) {
    let j = i - 1;
    const temp = insertArr[i];
    while (j >= 0 && insertArr[j] > temp) {
      insertArr[j + 1] = insertArr[j];
      j--;
    }

    insertArr[j + 1] = temp;
  }
  loadInsertData(document.getElementById("insert-list"));
};

const loadInsertData = (targetList) => {
  insertArr.forEach((number) => {
    const item = document.createElement("span");
    item.innerText = `${number}, `;
    targetList.appendChild(item);
  });
};
document.addEventListener("DOMContentLoaded", () => {
  loadInsertData(document.getElementById("insert-list-unsorted"));
});
