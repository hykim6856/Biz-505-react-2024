# React, NextJs 프로젝트

- 프로젝트 개발환경 시작:`npm run dev`

## NextJs 를 이용한 페이지 Routing

- `React` 는 화면전체 페이지 중에서 `state` 가 적용되거나, `필요한 부분` 만 rendering 되는 구조이다.
- 페이지 전체 새로고침되지 않고, 필요한 부분만 rendering 이 되기 때문에 화면에 보이는 부분이 빠르게 변화를 줄 수 있다.
- `React` 에서 이러한 것을 구현하기 위하여 `가상DOM(Virtual DOM) 이라는 이분 구조의 DOM 을 사용한다
- `React` 는 어떤 요청(Request, Routing) 이 발생하면, 서버에 요청을 하고, 응답을 받은 후에 화면을 갱신한 `표준 HTML` 과는 다르다.
- 현재 보고 있는 화면을 최대한 유지하면서 변화되는 부분만 갱신하는 구조의 화면구현이다.
- `React` 에서 사용하는 이러한 구조를 `Client Side Rendering` 이라고 한다.

- `NextJS` 는 `React` 의 부분 렌더링을 지원하고, 여기에 `Server Side Rendering` 을 동시에 지원하는 `Framework`이다. 기본적인 부분은 `React`의 철학을 따르면서 좀 색다른 방법으로 서버와 연동되는 화면을 구현한다.
