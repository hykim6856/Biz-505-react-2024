/**
 * <Comps>값</Comps> 처럼 전달한 값은
 * 자식 컴포넌트에서 {children} 매개변수를 통해서 받는다.
 * dlfqkswjrdls gkatndptjsms swhcjfghkrk ehd
 *
 * 일반적인 함수에서는 호출한 곡에서 불
 * 자식 컴포넌트에서 {children} 매개변수를 통해서 받는다
 *
 * const f = (a,b)=>{
 * console.log(a+b)}
 * f(3,4)
 *
 * console.log(a+b)
 * a=100;
 * b=200;
 * console.log(a+b)
 * }
 * f(3,4)
 *
 * const Copms = ({a,b})=>{
 * console.log(a+b)
 * a=100;//오류발생
 * b=200;//오류발생
 * }
 * 할때는 이름 = 값 형식으로 전달해야한다.
 *  Comps(a=3,b=4)
 *
 * Re
 */

const Box = ({ children }) => {
  return (
    <div>
      <h3>Hello{children}</h3>
      <h3>{`Hello${children}`}</h3>
    </div>
  );
};
export default Box;

/**
 * const res = await fetch("/book/1/get")
 * const res = await res.json()
 *
 * fetch('/book/1/get)
 * .then(res=>res.json())
 * .then(result=>console.log(result))
 *
 * fetch('/book/1/get)
 * .then( (res)=>{ return res.json() })
 * .then(  (result)=>{ return console.log(result)  })
 */
