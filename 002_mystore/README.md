
```txt
block
div p br dl dt dd ul li ol

inline
가로로 쌓인다
가로크기가 자식의 크기
padding, margin 좌우만
width, height 제공안됨

인라인요소 자식으로 블럭이 못온다
- 예외 : a요소는 블럭요소로 자식으로 포함할 수 있음
인라인요소 자식으로 인라인 요소가 올수있다
float, position을 주면 block 으로 변함

ex : span i em a strong ins u b after before

inline-block
inline요소처럼 가로로 쌓인다
width, height, padding, margin 이 들어간다
코드상에 줄내림 쓰기하면 &nbsp; 생긴다
ex : input select textarea button
```