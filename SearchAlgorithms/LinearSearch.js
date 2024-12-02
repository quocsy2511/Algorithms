// đề cho 1 mảng gồm n phần tử hãy tìm ví trí index của phần tử t trong mảng đó trả về -1 nếu ko tìm thấy

const LinearSearch = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }

  return -1;
};
const arrayParams = [-1, 2, 4, 12, 5];
const number = 2;

console.log(
  "🚀 ~ LinearSearch ~ LinearSearch:",
  LinearSearch(arrayParams, number)
);
//Big-0 = O(n) độ phức tạp của hàm này
