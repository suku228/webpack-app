import { swap } from "./controllers/helpers/swap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as bubble from "./controllers/sorting/quicksort";
import * as quick from "./controllers/sorting/bubblesort";
import * as select from "./controllers/sorting/selectSort";
import * as insertSort from "./controllers/sorting/insertSort";

// src/index.js
const arr = [1, 2, 3, 4, 5];
console.log("before swap", arr);
console.log("Hello, webpacket!");
swap(arr, 0, 1);
console.log("after swap", arr);

const onBubleSortTriggered = () => {
  console.log("bubble sort triggered..");
};
