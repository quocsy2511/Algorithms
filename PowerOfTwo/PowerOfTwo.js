//Kiếm tra xem 1 số có phải là luỹ thừa 2 không

const PowerOfTwo = (n) => {
  if (n < 1) return false; //phải lớn 1 vì luỹ thừa ko thể bằng 0
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
};
//Big-0 = O(logn) độ phức tạp của hàm này

// cách tối ưu hơn là đưa về mã nhị phân 001  để kiểm ra 1 công thức là bit của :  n & (n -1) === 0
const PowerOfTwoBitWise = (n) => {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
};

console.log("🚀 ~ PowerOfTwo ~ PowerOfTwo:", PowerOfTwoBitWise(1)); //true
console.log("🚀 ~ PowerOfTwo ~ PowerOfTwo:", PowerOfTwoBitWise(2)); //true
console.log("🚀 ~ PowerOfTwo ~ PowerOfTwo:", PowerOfTwoBitWise(5)); //false
console.log("🚀 ~ PowerOfTwo ~ PowerOfTwo:", PowerOfTwoBitWise(8)); //true
//Big-0 = O(1) độ phức tạp của hàm này
