//cho 1 mang hãy sắp xếp chúng theo sự tăng dần dùng QuickSort sort
//QuickSort là lấy phần tử cuối ra để chia các phần tử còn lại thành 2 mảng 1 mảng bé hơn và 1 mảng thì lớn
// cứ như thế đối với các mảng đã đc chia  cứ lấy phần tử cuối để chia ra tới khi length của mảng là 1

const QuickSort = (arr) => {
  if (arr.length < 2) return arr;
  let temp = arr[arr.length - 1]; // thang cuối cùng của mảng ban đầu
  let lessTemp = [];
  let greatTemp = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < temp) {
      lessTemp.push(arr[i]);
    } else {
      greatTemp.push(arr[i]);
    }
  }
  return [...QuickSort(lessTemp), temp, ...QuickSort(greatTemp)];
};

const arrayParams = [10, 1, 4, 5, 2];
QuickSort(arrayParams);
console.log("🚀 ~ QuickSort ~ QuickSort:", QuickSort(arrayParams));
// Big-0 = O((n^2)) độ phức tạp của hàm này
// Avg  Big-0 = O(nlog(n))
