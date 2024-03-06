// BookSearch 컴포넌트를 csr 의 client Component 로 사용하겠다.
"use client";
const BookSearch = ({ search, setSearch }) => {
  const debounce = (callback, delay = 200) => {
    let debounceTimer;
    return (...args) => {
      // debounce 함수가 호출되면 무조건 timer 를 reset 하라
      clearTimeout(debounceTimer);
      setTimeout(() => callback.apply(this, args), delay);
    };
  };
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  //debounce 객체를 사용하여 handler 제어
  //키보드에서 문자를 입력한 수  100ms 동안 기다리면 그때 onChange 핸들러실행
  // 그때 온체인지 핸들ㄹ러를 실행하라
  const onDebounceHandler = debounce(onChangeHandler, 100);
  return (
    <div className="book search">
      <input
        placeholder="검색"
        value={search}
        onChange={onDebounceHandler}
      />
    </div>
  );
};

export default BookSearch;
