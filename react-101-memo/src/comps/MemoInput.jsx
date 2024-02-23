const MemoList = ({ memo, setMemo, memoInsert }) => {
  const onChangeHandler = (e) => {
    const target = e.target;
    const text = target.value;
    /**
     * 기존의 memo 객체를 새롭게 복제하고
     * m_subject 를 index tag입력된 문자열로 대체하여 포함시켜라
     */
    setMemo({ ...memo, m_subject: text });
  };

  const onClickInsert = () => {
    memoInsert();
  };
  return (
    <>
      <input type="text" placeholder="메모제목" value={memo.m_subject} onChange={onChangeHandler} />
      <input type="text" placeholder="메모를 입력하세요" />
      <input type="file" />
      <input type="button" value="메모추가" onClick={onClickInsert} />
      <input type="hidden" value="삭제" />
    </>
  );
};

export default MemoList;
