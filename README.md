### Front-end test repository

error
### TO DO
1. 메인에 소개 텍스트, 이미지 넣기
2. 메인에 게임 선택으로 가기 링크 넣기
3. 헤더에 구분해주는 디자인 넣기
4. select page에 hover animation 넣기
5. select page에서 home으로 가는 btn만들기


### skew 계산해주는 사이트
https://codepen.io/minaalfy/pen/exgvjb


### 나눠서 움직이는 코드
.selec-body{
}

@keyframes cutting2{
    0% {background-position:0% 100%}
    33% {background-position:0% 100%}
    100% {background-position:0% 0%}
}

.selec-body{
    height: 100vh;
}
.select-main{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, var(--main-white) 0%,var(--main-white) 50%, var(--main-dark) 50%, var(--main-dark) 100%);
    background-size: 100% 200%;
    background-position: 0% 100%;
    animation: cutting2 1.5s ease-out forwards;
    animation-delay: 0.5s;
}

@keyframes painting2_extend{
    0% {background-position:0% 100%; width: 33%}
    50% {background-position:0% 0%; width: 33%}
    75% {background-position:0% 0%; width: 33%}
    100% {background-position:0% 0%; width: 50%}
}

.game__section{
    width: 33%;
    height: 100%;
    background: linear-gradient(to bottom, var(--main-white) 0%,var(--main-white) 50%, var(--main-dark) 50%, var(--main-dark) 100%);
    background-size: 100% 200%;
    background-position: 0% 100%;
    animation: painting2_extend 2s ease-in-out forwards;
    animation-delay: 2s;
}

@keyframes painting3_reduce{
    0% {background-position:0% 0%; width: calc(67% - 1px)}
    50% {background-position:0% 0%;}
    66% {width: calc(50% - 1px)}
    100% {background-position:0% 100%; width: calc(50% - 1px)}
}

.create__section{
    width: calc(67% - 1px);
    height: 100%;
    background: linear-gradient(to bottom, var(--main-dark) 0%,var(--main-dark) 50%, var(--main-gray) 50%, var(--main-gray) 100%);
    background-size: 100% 200%;
    background-position: 0% 0%;
    animation: painting3_reduce 1.5s ease-in-out forwards;
    animation-delay: 3s;
}

index페이지 아래부분
select페이지 버튼 애니메이션
select페이지 선택 애니메이션

일단, 가상선택자(pseudo selector)에는 가상 클래스(pseudo class)와 가상 엘리먼트(pseudo element)가 있습니다.

엄밀히 따지면 가상 선택자는 없습니다만, 편의상 많이 사용되는 말입니다.

가상클래스에는 :link, :visited, :hover, :active, :first-child, :nth-child 등이 있고,
가상엘리먼트에는 ::first-letter, ::first-line, ::before, ::after 등이 있습니다.

CSS 2.1에서는 가상클래스, 가상엘리먼트 모두 싱글 콜론을 사용합니다.

하지만 CSS3 부터는 좀 더 명확히 분류하기 위해서, 가상 클래스에는 싱글콜론을, 가상 엘리먼트에는 더블콜론을 사용합니다.

브라우저 개발사들은 CSS2.1을 먼저 지원하고, CSS3도 지원을 계속 추가하고 있습니다.
CSS3에 대한 지원을 추가하더라도 이전 스펙에 있던 속성들도 함께 계속 지원합니다.

그래야 하위 호환성이 보장되기 때문입니다.
브라우저를 새버전으로 업데이트 했더니 예전에 잘 보이던 페이지가 안보이면 곤란하니까요.
표현에 치우친 네이밍이라는 이유로 HTML5에선 사라진(deprecated) font, center, strike와 같은 태그들을 여전히 브라우저에서 지원하는 것도 같은 이유에서 입니다.

이런 이유로 모던 브라우저들에서는 싱글콜론을 사용한 가상엘리먼트와 더블콜론을 사용한 경우를 모두 지원하고 있습니다.