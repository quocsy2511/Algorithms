// đề cho 1 mảng đã được săp xếp tìm vị trí của phần tử t trong mảng đó trả về là 1 nếu ko tìm thấy

const BinarySearch = (arr, n) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (n === arr[middleIndex]) return middleIndex;
    if (n > arr[middleIndex]) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
};
const arrayParams = [-1, 2, 4, 5, 9];
const number = 2;
console.log(
  "🚀 ~ BinarySearch ~ BinarySearch:",
  BinarySearch(arrayParams, number)
);
//Big-0 = O(logn) độ phức tạp của hàm này