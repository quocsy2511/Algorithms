//cho 1 mang hãy sắp xếp chúng theo sự tăng dần dùng QuickSort sort
//QuickSort

const MergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  return merge(MergeSort(leftArr), MergeSort(rightArr));
};
const merge = (leftArr, rightArr) => {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
};
const arrayParams = [10, 1, 4, 5, 2];

MergeSort(arrayParams);
console.log("🚀 ~ MergeSort ~ MergeSort:", MergeSort(arrayParams));

// Big-0 = O((n^2)) độ phức tạp của hàm này
// Avg  Big-0 = O(nlog(n))
