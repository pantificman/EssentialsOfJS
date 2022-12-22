/* document.getElementById("demo").innerHTML ="Hello Java Script";
onclick = document.getElementById(demobtn).innerHTML = "Hi"; */
function changeImage(){
    var image = document.getElementById("myImage");
        if(image.src.match("bulbon")){
            image.src ="img/bulboff.png";
        } else{
            image.src ="img/bulbon.png";
        }
}

function Changes(){
    let x = document.getElementById("changeStyles");
    x.style.fontSize = "25px";
    x.style.color = "brown";
    x.innerHTML = "New Text Only";
}
document.write(5*6);