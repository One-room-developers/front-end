### Front-end test repository

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