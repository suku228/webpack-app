const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const find = 77;

const getIndex = (arr, find) => {
  let index = -1;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === find) {
      index = i;
      break;
    }
  }

  if (index >= 0) {
    return index;
  } else {
    return "nothing found";
  }
};

const onLinearSearchTriggered = () => {
  const input = document.getElementById("linear-search-input");
  console.log(input.value);
  const targetElement = document.createElement("span");
  targetElement.innerText = `index - ${getIndex(arr, input.value)}`;
  document.getElementById("linear-search-result").appendChild(targetElement);
};

const onLoadLinear = () => {
  arr.forEach((number) => {
    const element = document.createElement("span");
    element.innerText = `${number}, `;
    document.getElementById("linear-list-unsorted").appendChild(element);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  onLoadLinear();
});
