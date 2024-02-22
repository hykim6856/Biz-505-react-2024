const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//nums 배열의 개수만큼 반복하면서 각각의 item 을
// num 매개 변수에 담아 내부로 전달
// num 매개변수에 전달된 값을 console에 출력
nums.forEach((num) => console.log(num));

/**
 * 전달받은 매개 변수에 100d을 곱하여 return
 * return이 된다는 것은 다른 변수에 결과를 저장할 수 잇다
 *
 * map: 기존의 배열의 각요소를 가공,연산하여 새로운 배열 만들기
 */
nums.map((num) => {
  return num * 100;
});
const result = nums.map((num) => num * 100);
console.log(result);

const even = nums.filter((num) => num % 2 == 0);
console.log(even);
