// đề cho 1 mảng đã được săp xếp tìm vị trí của phần tử t trong mảng đó trả về là 1 nếu ko tìm thấy

const RecursionSearch = (arr, n) => {
  return Search(arr, n, 0, arr.length - 1);
};

const Search = (arr, n, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) return -1;

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (n === arr[middleIndex]) return middleIndex;

  if (n > arr[middleIndex]) {
    return Search(arr, n, middleIndex + 1, rightIndex);
  } else {
    return Search(arr, n, leftIndex, middleIndex - 1);
  }
};

const arrayParams = [-1, 2, 4, 5, 9];
const number = 9;
console.log(
  "🚀 ~ RecursionSearch ~ RecursionSearch:",
  RecursionSearch(arrayParams, number)
);
//Big-0 = O(logn) độ phức tạp của hàm này
