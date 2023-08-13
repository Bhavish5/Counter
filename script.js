count = 0;
function reset(){
    count = 0;
    document.getElementById("count").innerHTML = count;
    document.getElementById("count").style.color = "black";
}
function increase(){
    count = count + 1;
    document.getElementById("count").innerHTML = count;
    if(count>0)
    document.getElementById("count").style.color = "green";
}
function decrease(){
    count = count - 1;
    document.getElementById("count").innerHTML = count;
    if(count<0)
    document.getElementById("count").style.color = "red";
}