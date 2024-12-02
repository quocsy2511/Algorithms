// đề là kiểm tra xem số đó có phải là số nguyên hay không

// note -> số nguyên là số lớn hơn 1 là chỉ chia hết cho chính nó

const isPrimeNumber = (n) => {
  if (n < 2) return false;

  //   for (let i = 2; i < n; i++) {
  //     if (n % i === 0) return false;
  //   }

  // tuy nhiên có 1 định nghĩa là nếu 1 số n = a * b thì 1 trong 2 số sẽ bé hớn căn bậc 2 của n vd 24 =4*6 thì căn bậc 2 của 24 là 4.8 > 4
  // vậy lúc này ví dụ như ta n = 100 thì với vòng for mới  nó sẽ chạy 10 lần nhanh gấp 10 lần
  // sqrt là căn bậc 2

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};
console.log("🚀 ~ isPrimeNumber ~ isPrimeNumber:", isPrimeNumber(1)); //false
console.log("🚀 ~ isPrimeNumber ~ isPrimeNumber:", isPrimeNumber(10)); //false
console.log("🚀 ~ isPrimeNumber ~ isPrimeNumber:", isPrimeNumber(5)); //true

//Big-0 = O(sqrt(n) độ phức tạp của hàm này
