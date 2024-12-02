//cho 1 mang hãy sắp xếp chúng theo sự tăng dần dùng bubble sort
//bubbleSort là so sánh 2 thằng liền kề rồi hoán đổi vị trí cho nhau

const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

const arrayParams = [10, 1, 4, 5, 2];
bubbleSort(arrayParams);
console.log("🚀 ~ bubbleSort ~ bubbleSort:", arrayParams);
//Big-0 = O((n^2)) độ phức tạp của hàm này
