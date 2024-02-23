const MemoList = ({ memoList, children }) => {
  const viewList = memoList.map((memo) => {
    return <children memo={memo} />;
  });
  return <ul>{viewList}</ul>;
};

export default MemoList;
