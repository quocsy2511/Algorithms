//Đệ quy chia nhỏ 1  vấn đề lớn thành các vấn đề nhỏ để giải quyết

//cho 1 số n  tìm giá trị của thứ n đó trong  trong chuỗi fibonacci
const RecursionFibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return RecursionFibonacci(n - 1) + RecursionFibonacci(n - 2);
};
// console.log(
//   "🚀 ~ RecursionFibonacci ~ RecursionFibonacci:",
//   RecursionFibonacci(6)
// );
// console.log(
//   "🚀 ~ RecursionFibonacci ~ RecursionFibonacci:",
//   RecursionFibonacci(3)
// );
// console.log(
//   "🚀 ~ RecursionFibonacci ~ RecursionFibonacci:",
//   RecursionFibonacci(1)
// );

//Big-0 = O(2^n) độ phức tạp của hàm này
//đệ quy chia nhỏ ra để giải thì như ví dụ khi ta tryền vô 6 thì sẽ là 2^6

// cho 1 số nguyên n tìm giai thừa (factorial) của số nguyên đó dùng đệ quy recursion
// giai thừa tích của số nguyên bé hơn nó là giai thừa của 5 là  1*2*3*4*5 =120 (giai thừa của 0  là 1 )

// công thức là : n! = n * (n-1)!
const RecursionFindFactorial = (n) => {
  if (n < 2) return n;
  return n * RecursionFindFactorial(n - 1);
};
console.log(
  "🚀 ~ RecursionFindFactorial ~ RecursionFindFactorial:",
  RecursionFindFactorial(3) //6
);
console.log(
  "🚀 ~ RecursionFindFactorial ~ RecursionFindFactorial:",
  RecursionFindFactorial(5) //120
);  
//Big-0 = O(n) độ phức tạp của hàm này
