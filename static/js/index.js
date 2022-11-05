const indexHeader = document.querySelector(".index-header");

function changeOpacity(){
    let opacity = window.scrollY / 500;
    indexHeader.style.backgroundColor = `rgba(34, 40, 49, ${opacity})`;
}

function main(){
    window.addEventListener('scroll', changeOpacity)
}

main();