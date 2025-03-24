const article = document.querySelector("#RecentArticle");
const divArt = document.getElementById("recentDivArt")


const mostX = 7;
const mostY = 7;


article.addEventListener("mousemove", function(e) 
{

    let x = e.offsetX;
    let y = e.offsetY;

    let rect = divArt.getBoundingClientRect();

    let halfs = {width: rect.width*0.5, height: rect.height*0.5};


    let rotationX = ((x - halfs.width) / halfs.width) * mostX;
    let rotationY = ((y - halfs.height) / halfs.height) * mostY;

    
    divArt.style.transform = 'rotateY('+rotationY+'deg) rotateX('+rotationX+'deg)';
    // divArt = 'rotateY(40deg); rotateX(${rotationX}deg)';
    
});