const unsortedData = [34, 2, 1, 55, 23, 19, 3, 45, 66, 20];
const size = unsortedData.length;

export const onBubleSortTriggered = () => {
  for (let i = 0; i <= size; i++) {
    for (let j = 0; j <= size; j++) {
      if (unsortedData[j] > unsortedData[j + 1]) {
        const temp = unsortedData[j];
        unsortedData[j] = unsortedData[j + 1];
        unsortedData[j + 1] = temp;
      }
    }
  }
  loadData("bubble-list");
};

const loadData = (id) => {
  unsortedData.forEach((number) => {
    const element = document.createElement("span");
    element.innerText = `${number} , `;
    document.getElementById(id).appendChild(element);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  loadData("bubble-list-unsorted");
});
