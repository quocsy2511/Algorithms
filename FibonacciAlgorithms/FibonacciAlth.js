/// đề là tạo ra 1 mảng mà số sau sẽ là bằng tổng của 2 số phía trước n là số phần tử
const fibonacci = (n) => {
  const fibo = [0, 1];

  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo;
};
console.log("🚀 ~ fibonacci ~ fibonacci:", fibonacci(2)); //[ 0, 1 ]
console.log("🚀 ~ fibonacci ~ fibonacci:", fibonacci(3)); //[ 0, 1, 1 ]
console.log("🚀 ~ fibonacci ~ fibonacci:", fibonacci(5)); //[ 0, 1, 1, 2, 3 ]
console.log("🚀 ~ fibonacci ~ fibonacci:", fibonacci(7)); //[ 0, 1, 1, 2,  3, 5, 8]

//Big-0 = O(n) độ phức tạp của hàm này
