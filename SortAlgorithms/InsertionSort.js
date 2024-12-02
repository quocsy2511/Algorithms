//cho 1 mang hãy sắp xếp chúng theo sự tăng dần dùng InsertionSort sort
//InsertionSort là có nghĩa chia mảng đó thành 2 phần 1 phần trái đã sắp xếp và 1 phần phải chưa sắp xếp rồi lấy từng phần tử bên tay phải đi so sánh với từng phần tử bên tay trái
//nếu nó lớn hơn thì sẽ để bên tay phải còn ko thì nó sẽ để bên tay trái của phần tử đã đc sắp xếp (thường thì index = 0 sẽ phần tử đã được sắp xếp)

const InsertionSort = (arr) => {
  //vì chia là 2 mảng mà mảng đã sort đã bắt đầu từ index = 0 nên mảng còn lại sẽ bắt đầu từ index =1
  for (let i = 1; i < arr.length; i++) {
    let numberSort = arr[i]; //số được mang ra so sánh

    let j = i - 1; //vị trí index của số vừa đc gán qua mảng đã sort

    // j = 0 và nó kiểm tra với số đc lấy ra bên mảng kia ở đây là 10 với
    while (j >= 0 && arr[j] > numberSort) {
      //do 10 nó > 1 nên là mảng j bây giờ sẽ là [10,10]
      arr[j + 1] = arr[j];

      //lúc này ta trừ j đi 0-1 =-1 thoát khỏi while nhảy ra for
      j = j - 1;
    }

    // vi ở trên j đang là -1 nên dưới đây j đã chuyển thành về 0  và có trị bằng với ố ta so sánh là 1  có nghĩa là j0= 1
    //mảng j bây giờ đã thành [1-10] và tiếp tục lại lặp lại vòng for ở trên
    arr[j + 1] = numberSort;
  }
};

const arrayParams = [10, 1, 4, 5, 2];
InsertionSort(arrayParams);
console.log("🚀 ~ InsertionSort ~ InsertionSort:", arrayParams);
//Big-0 = O((n^2)) độ phức tạp của hàm này
