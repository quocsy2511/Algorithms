//cho 1 số nguyên n tìm giai thừa của số nguyên đó
// giai thừa tích của số nguyên bé hơn nó là giai thừa của 5 là  1*2*3*4*5 =120 (giai thừa của 0  là 1 )

const FactorialOfNumber = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
};
console.log("🚀 ~ FactorialOfNumber :", FactorialOfNumber(1)); //1
console.log("🚀 ~ FactorialOfNumber :", FactorialOfNumber(3)); //6
console.log("🚀 ~ FactorialOfNumber :", FactorialOfNumber(5)); //120
//Big-0 = O(n) độ phức tạp của hàm này
