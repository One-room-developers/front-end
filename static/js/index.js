const indexHeader = document.querySelector(".index-header");
const indexMain = document.querySelector(".index-main");

const title1 = indexMain.querySelector(".play-game-title-container");
const text1 = indexMain.querySelector(".play-game-main-text");
const title2 = indexMain.querySelector(".make-game-title-container");
const text2 = indexMain.querySelector(".make-game-main-text");
const title3 = indexMain.querySelector(".block-chain-title-container");
const text3 = indexMain.querySelector(".block-chain-main-container");



function changeOpacity(){
    let opacity = window.scrollY / 400;
    indexHeader.style.backgroundColor = `rgba(34, 40, 49, ${opacity})`;
}

function main(){
    window.addEventListener('scroll', changeOpacity);

    //observe 객체 만들기
    let observer = new IntersectionObserver((e)=>{
        e.forEach((element)=>{
            if(element.isIntersecting){
                element.target.style.opacity = 1;
                element.target.style.transform = "translate(0,0)";
            }
        })
    })

    observer.observe(title1);
    observer.observe(text1);
    observer.observe(title2);
    observer.observe(text2);
    observer.observe(title3);
    observer.observe(text3);
}

main();